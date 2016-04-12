var path = require('path');
var ftpd = require('ftpd');
var xmldoc = require("xmldoc").XmlDocument;;

require('./KalturaConfig');
require('./KalturaLogger');

var kaltura = {
	client: require('../node/KalturaClient'),
};

var serverHost = KalturaConfig.config.ftp.serverHost;
var formatTypes = KalturaConfig.config.ftp.formats;
var icalExtention = 'ics';

var parsedList = {};
var options = {
	host : '0.0.0.0',
	port : 21,
	tls : null,
};

function FtpSession(connection) {
	this.connection = connection;
}

FtpSession.prototype = {

	readdir : function(path, callback) {
		KalturaLogger.log('SESSION: readdir  ' + path );
		var currentClient = initClient();
		var contents = [];

		var currPath = path.replace(__dirname,"");
		currPath = stripTrailingSlash(currPath);
		if ( currPath == "/") {
			contents = ['format'];
			callback(null, contents);
		}else if ( currPath == "/format" ) {
			contents = formatTypes.split(",");
			callback(null, contents);
		} else if ( validateExactFormatPath(currPath))
		{
			for(service in currentClient) {
				if (currentClient[service].listAction && typeof currentClient[service].listAction === 'function') {
					contents.push(service);
				}
			}
			callback(null, contents);
		} else {
			if (validateStartsWithServicePath(currPath))
				{
					var __ret = this.handleValidFileDirectory(currPath, callback, contents, currentClient);
                    var service = __ret.service;
					currentClient = __ret.currentClient;
				}
				else {
					var err = null;
					callback(err, []);
				}
			}
	},

	getFileAndInsertToCache: function (callback, extension, file, service, id){
            var handler = null;

            handler = function (result, err) {
                if (err) {
                    callback(JSON.stringify(err), []);
                }
                else {
                    var res = null;
                    switch (extension) {
                        case 'xml':
                            var document = new xmldoc(result);
                            var object = document.childNamed("result");
                            parsedList[file] = object;
                            res = object.toString();
                            break;
                        case 'ical':
                            var eventsRegex = /BEGIN:VEVENT([\s\S]*?)END:VEVENT/g;
                            var events = result.match(eventsRegex);
                            if (events != null) {
                                res = events[0];
                                parsedList[file] = res;
                            }
                            break;
                        default:
                            res = JSON.stringify(result);
                            parsedList[file] = res;
                            break;
                    }
                }
                callback(null, res);
            };
            var formatNumber = converFormatToConstFormat(extension);
            var currentClient = initClient(formatNumber);
            currentClient.setKs(this.connection.ks);
            currentClient[service].get(handler, id);
        },


	readFile : function(path, callback) {// get the object in the expected format and return it
		KalturaLogger.log('SESSION: readFile ' + path);
		var currPath = path.replace(__dirname, "");
		currPath = stripTrailingSlash(currPath);
		if (validatePathLengthForDirectory(currPath))
		{
			callback('Invalid Path '+ currPath, []);
		}
		else {
			var parsedpath = currPath.split("/");
			var service = parsedpath[3];
			var extension = parsedpath[2];
			var size = parsedpath.length;
			var file = parsedpath[size - 1];

			var res = file.split("\.");
			var id = res[0];
			var fileExtension = res[1];

			if (!validateFormatMatchesToFileExtension(fileExtension, extension)) {
				var msg = 'Incorrect file directory format type and file extension : [ file extension is: ' + fileExtension + ' and format type is: ' + extension + ']'
				KalturaLogger.error(msg);
				callback(msg ,[]);
			}
			else {

				KalturaLogger.log('Handling file : ' + file + " extension is : " + extension);

				var itemInCache = parsedList[file];
				if (itemInCache != null) {
					switch (extension) {
						case 'xml':
							callback(null, itemInCache.toString());
						case 'ical':
							callback(null, itemInCache.toString());
							break;
						default:
							callback(null, JSON.stringify(itemInCache));
					}
				}
				else {

					this.getFileAndInsertToCache(callback, extension, file, service, id);
				}
			}
		}
	},

	handleXmlListResponse: function (listResponse, callback, This, service, currentList, map, pager, currentClient, handler, filter){
            var document = new xmldoc(listResponse);
            var error = document.childNamed("result").childNamed("error");
            if (error != null) {
                KalturaLogger.error(error.toString());
                callback(error.toString(), null);
            } else {
                var objects = document.childNamed("result").childNamed("objects");
                objects.eachChild(function (item) {
                    This.lists[service].push(item);
                    currentList.push(item.valueWithPath("id") + '.' + map['format']);
                    var itemId = item.valueWithPath("id") + '.' + map['format'];
                    KalturaLogger.log('Adding item to cache item key ' + itemId);
                    parsedList[itemId] = item;
                });
                if (objects.length == pager.pageSize) {
                    pager.pageIndex++;
                    currentClient[service].listAction(handler, filter, pager);
                }
                else {
                    callback(null, currentList);
                }
            }
        },
	handleICalListResponse: function (listResponse, callback, currentList, This, service, pager, currentClient, handler, filter) {
		var eventsRegex = /BEGIN:VEVENT([\s\S]*?)END:VEVENT/g;
		results = listResponse.match(eventsRegex);
		if (results == null){
                    callback(null, currentList);
                } else{
                            for (var i = 0; i < results.length; i++) {
                                var event = results[i];
                                var eventIdRegex = /(?:^|\n)x-kaltura-id:([^\s]+)/i;
                                var eventId = event.match(eventIdRegex).slice(1);

                                This.lists[service].push(event);
                                currentList.push(eventId + '.' + icalExtention);
                                var eventId = eventId + '.' + icalExtention;
                                parsedList[eventId] = event;
                            }
                            if (results.length == pager.pageSize) {
                                pager.pageIndex++;
                                currentClient[service].listAction(handler, filter, pager);
                            }
                            else {
                                callback(null, currentList);
                            }}
	},

	handleDefaultListResponse: function (listResponse, This, service, currentList, map, pager, currentClient, handler, filter, callback){
            for (var i = 0; i < listResponse.objects.length; i++) {
                This.lists[service].push(listResponse.objects[i]);
                currentList.push(listResponse.objects[i].id + '.' + map['format']);
                //var parsedItem = parseItem(listResponse.objects[i],  )
                var item = {};
                var itemId = listResponse.objects[i].id + '.' + map['format'];
                //item[itemId] = listResponse.objects[i];
                parsedList[itemId] = listResponse.objects[i];
            }
            if (listResponse.objects.length == pager.pageSize) {
                pager.pageIndex++;
                currentClient[service].listAction(handler, filter, pager);
            }
            else {
                callback(null, currentList);
            }
        },

	handleValidFileDirectory: function (currPath, callback, contents, currentClient){
		var parsedpath = currPath.split("/");
		parsedpath.shift(); // remove first empty item.

		var map = createMapFromArray(parsedpath);
		if (map == null){
			callback(null, contents );
		}

		var service = map['service'];
		var extension =  map['format'];

		var formatNumber = converFormatToConstFormat(extension);
		currentClient = initClient(formatNumber);
		currentClient.setKs(this.connection.ks);

		this.lists = [];
		this.lists[service] = [];

		var currentList = [];
		var filter = createFilter(map);

		var pager = createPager(map);

		var This = this;
		var handler = null;
		handler = function(listResponse, err){
			if(err) {
				KalturaLogger.error(JSON.stringify(err));
				callback(JSON.stringify(err), []);
			}

			if ( listResponse === null){
				KalturaLogger.log('list response returned null');
				callback(null, currentList);
			}
			else {
				switch(extension) {
					case 'xml':
						This.handleXmlListResponse(listResponse, callback, This, service, currentList, map, pager, currentClient, handler, filter);
						break;
					case 'ical':
						This.handleICalListResponse(listResponse, callback, currentList, This, service, pager, currentClient, handler, filter);
						break;
					default:
						This.handleDefaultListResponse(listResponse, This, service, currentList, map, pager, currentClient, handler, filter, callback);
						break;
				}
			}};
		currentClient[service].listAction(handler, filter, pager);
		return {service:service, currentClient:currentClient};
	},

	createReadStream : function() {
		KalturaLogger.log('SESSION: createReadStream');
	},

	unlink : function() {
	},

	mkdir : function() {
	},

	open : function() {
		KalturaLogger.log('SESSION: open');
	},

	close : function() {
		KalturaLogger.log('SESSION: close');
	},

	rmdir : function() {
	},

	rename : function() {
	},

	validateDirectory : function(path){
		return true;
	},

	stat : function(path, callback) {
		KalturaLogger.log('SESSION: stat [' + path + ']' );
		var err = null;
		var stat = {
			isDirectory: function() {
				var currPath = path.replace(__dirname, "");
				currPath = stripTrailingSlash(currPath);
				if (validatePathLengthForDirectory(currPath)) {
					if (currPath == "/" || currPath == "/format") {
						return true;
					}
					if (validateExactFormatPath(currPath)) {
						return true;

					}
					if (validateStartsWithServicePath(currPath)) {
						return true;
					}
					KalturaLogger.log('Path is in a directory length format but dosen\'t meet requirements of a valid directory [' + path + ']');
					return false;
				}
				else // we get here only if the path is to a direct file.
				{
					KalturaLogger.log('Path is for a specific file [' + path +']');

					var parsedpath = currPath.split("/");
					parsedpath.shift(); // remove first empty item.
					var map = createMapFromArray(parsedpath);

					var file = map['fileName'];
					var format = map['format'];
					var res = file.split("\.");
					var fileExtension = res[1];

					if (!validateFormatMatchesToFileExtension(fileExtension, format)){
						return false;
					}
					var fileItem = parsedList[file];
					if (fileItem != null) {
						var date = null;
						switch (format) {
							case 'xml':
								date = fileItem.valueWithPath("updatedAt");
								if (date != null) {
									this.mtime = new Date(date * 1000);
								}
								this.size = fileItem.toString().length;
								break;
							case 'ical':
								this.size = fileItem.length;
								var eventUpdatedDateRegex = /(?:^|\n)DTSTAMP:([^\s]+)/i;
								var date = fileItem.match(eventUpdatedDateRegex).slice(1);
								date = parseICalDate(date);
								if (date != null) {
									this.mtime = date;
								}
							default:
								date = fileItem['updatedAt'];
								this.size = (JSON.stringify(fileItem)).length;
								if (date != null) {
									this.mtime = new Date(date * 1000);
								}
								break;
						}
					}
					return false;
				}
			},
			mode: 33188,
			size: 0,
			// last modification time should be objects updated-at attribute
			mtime: new Date( )
		};
		callback(err, stat);
	},

	login : function(password, success, failure){
		var client = initClient();
		client.user.loginByLoginId(function(ks, err){
			if (ks){
				KalturaLogger.log('Successful login');
				KalturaLogger.log('KS IS: ' + ks);
				success(ks);
			}else{
				KalturaLogger.error('Error while trying to login to Kaltura server. ');
				KalturaLogger.error('Got no KS from login');
				KalturaLogger.error(JSON.stringify(err));
				failure();
			}
		}, this.connection.username, password);
	}
};

function parseICalDate(value) {
	KalturaLogger.log('Parsing iCal Date ' + JSON.stringify(a));
	var a = /^(\d{4})(\d{2})(\d{2})T(\d{2})(\d{2})(\d{2})Z{0,1}$/.exec(value);
	KalturaLogger.log('Parsing iCal Date result : ' + JSON.stringify(a));
	if (a) {
		return new Date(+a[1], +a[2] - 1, +a[3], +a[4], +a[5], +a[6]);
	}
	return null;
}

var server = new ftpd.FtpServer(options.host, {
	getInitialCwd : function() {
		return '/';
	},
	getRoot : function() {
		return process.cwd();
	},
	pasvPortRangeStart : 1030,
	pasvPortRangeEnd : 1050,
	tlsOptions : options.tls,
	allowUnauthorizedTls : true,
	useWriteFile : false,
	useReadFile : true,
	uploadMaxSlurpSize : 7000, // N/A unless 'useWriteFile' is true.
});

server.on('error', function(error) {
	KalturaLogger.error('FTP Server error:' + error);
});

server.on('client:connected', function(connection) {
	KalturaLogger.access('client connected: ' + connection.remoteAddress);
	// username should be built of partner-id and user-id -> 101/myId
	connection.on('command:user', function(user, success, failure) {
		//var res = user.split("\/");
		//if (res.length != 2) {
		//	failure();
		//} else {
		//	var isnum = /^[0-9]+$/.test(res[0]);
		//	if (!isnum || !res[1]) {
		//		KalturaLogger.access('User Name is not in the correct format. expecting [partner-id/user-id] but got ' + user);
		//		failure();
		//	} else {
				user = 'erez@gmail.com';
				if (user) {
					connection.username = user;
					success();
				} else {
					failure();
				}
			//}
		//}
	});

	connection.on('command:pass', function(pass, success, failure) {
		KalturaLogger.access('Trying to Login for ' + connection.username);
		var session = new FtpSession(connection);
		session.login(pass, function(ks){
			session.connection.ks = ks;
			KalturaLogger.access('Successful login for user ' + connection.username);
			success(connection.username, session);
		}, failure);
	});
});

server.debugging = 7;
server.listen(options.port);
KalturaLogger.access('Listening on port ' + options.port);

function initClient(format)
{
	KalturaLogger.log('Initializing client');
	var clientConfig = new kaltura.client.KalturaConfiguration();
	clientConfig.serviceUrl = 'http://' + serverHost;
	if (format !=null)
	{
		clientConfig.format = format;
	}
	clientConfig.setLogger(KalturaLogger);
	var client = new kaltura.client.KalturaClient(clientConfig);
	return client;
}

// case 1: '\format' -> true (directory)
// case 2: '\format\formatType' -> true (directory)
// case 3: '\format\formatType\ServiceName\fileName.ext' -> false (not a directory)
// case 4: '\format\formatType\ServiceName\filter\filtervalue\fileName.ext' -> false (not a directory)
// case 5: '\format\formatType\ServiceName\filter\filtervalue' -> true (directory)
function validatePathLengthForDirectory( path ){
	KalturaLogger.log("Validating path length is a directory format length for: " + path);
	var parsedpath = path.split("/");
	parsedpath.shift(); // remove first empty item.
	var length = parsedpath.length;
	if (length > 3 &&  length %2 == 0){
		return false;
	} else {
		return true;
	}
}

function createMapFromArray(array ) {

	KalturaLogger.log('Creating map from array: ' + array);
	var map = {};

	var mapSize = array.length;

	var format = array.shift();
	if (format != 'format')
	{
		return null;
	}

	var formatType = array.shift();
	map[format] = formatType;

	var serviceName = array.shift();
	map['service'] = serviceName;

	while (array.length > 1) {
		var attribute = array.shift();
		var attributeValue = array.shift();
		map[attribute] = attributeValue;
	}

	if (array.length == 1){
		var fileName = array.shift();
		map['fileName'] = fileName;
	}

	return map;
}

function validateExactFormatPath(currPath){
	KalturaLogger.log('Validating path start with correct format prefix: ' + currPath);
	var formats = formatTypes.split("\,");
	for ( var i=0 ; i < formats.length ; i++ ){
		if  ( currPath == ("/format/" + formats[i])){
			return true;
		}
	}
	return false;
}

function validateStartsWithServicePath(currPath) {
	KalturaLogger.log('Validating path start with correct service prefix: ' + currPath);
	var parsedpath = currPath.split("/");
	var size = parsedpath.length;
	var file = parsedpath[parsedpath.length-1];


	var currentClient = initClient();
	var formats = formatTypes.split("\,");
	var servicesList = [];
	for (service in currentClient) {
		if (currentClient[service].listAction && typeof currentClient[service].listAction === 'function') {
			for ( var i=0 ; i < formats.length ; i++ ){
				if  ( currPath.startsWith("/format/" + formats[i]+ "/" + service)){
					return true;
				}
			}
		}
	}
	return false;
}

function converFormatToConstFormat(format){
	switch (format){
		case 'xml':
			return kaltura.client.KalturaClientBase.KALTURA_SERVICE_FORMAT_XML;
		case 'ical':
			return kaltura.client.KalturaClientBase.KALTURA_SERVICE_FORMAT_ICAL;
		default:
			return kaltura.client.KalturaClientBase.KALTURA_SERVICE_FORMAT_JSON;
	}
}

function createFilter(map) {

	KalturaLogger.log('Creating filter from map: ' + map);
	var filter = {};
	var filterType = map['filter:objectType'];
	KalturaLogger.log('Creating filter objectType of type:' + filterType);
	if (filterType != null) {
		if (typeof kaltura.client.objects[filterType] === 'function') {
			var filter = new kaltura.client.objects[filterType]();
		}
		Object.keys(map).forEach(function (key) {
			var formatItem = key.split(":");
			if (formatItem[0] == 'filter' && formatItem[1] != 'objectType') {
				var val = map[key];
				KalturaLogger.log('Adding filter object: [' + filterTypeItem + ' , ' + filterType +']');
				var filterTypeItem = formatItem[1];
				filter[filterTypeItem] = val;
			}
		});
	}
	KalturaLogger.log('Filter created is: ' + JSON.stringify(filter));
	return filter;
}

function createPager(map) {
	KalturaLogger.log('Creating pager from map: ' + map);
	var pager = new kaltura.client.objects.KalturaFilterPager();
	pager.pageSize = map['pager:pageSize'];
	if (pager.pageSize == null) {
		pager.pageSize = 500;
	}
	pager.pageIndex = map['page:pageIndex'];
	if (pager.pageIndex == null) {
		pager.pageIndex = 1;
	}
	return pager;
}

function stripTrailingSlash(str) {
	if(str.substr(-1) === '/' && str.length > 1) {
		return str.substr(0, str.length - 1);
	}
	return str;
}

function validateFormatMatchesToFileExtension(fileExtension, format) {
	if (fileExtension != format) {
		if (fileExtension == 'ics' && format == 'ical')
			return true;
		else
		return false;
	} else {
		return true;
	}
}
