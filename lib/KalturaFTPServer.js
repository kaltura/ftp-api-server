var path = require('path');
var ftpd = require('ftpd');
var xmldoc = require("xmldoc").XmlDocument;;

require('./KalturaConfig');
require('./KalturaLogger');

var kaltura = {
	client: require('../client/KalturaClient'),
};

var serverHost = KalturaConfig.config.ftp.serverHost;
var formatTypes = ['json','xml','ical'];
var iCalExtention = 'ics';
var parsedList = {};

var FtpSession = function(connection, sessionId) {
	this.connection = connection;
	this.sessionId = sessionId;
}

FtpSession.prototype = {

	logMsg: function (msg) {
		KalturaLogger.log('[SESSION:' + this.sessionId + ']:' + msg);
	},

	logErrorMsg: function (msg) {
		KalturaLogger.error('[SESSION:' + this.sessionId + ']:' + msg);
	},

	logAccessMsg: function (msg) {
		KalturaLogger.access('[SESSION:' + this.sessionId + ']:' + msg);
	},

	readdir: function (path, callback) {
		this.logMsg('readdir  ' + path);
		var currentClient = this.connection.client;
		var contents = [];

		var currPath = path.replace(__dirname, "");
		currPath = this.stripTrailingSlash(currPath);
		if (currPath == "/") {
			contents = ['format'];
			callback(null, contents);
		} else if (currPath == "/format") {
			contents = formatTypes;
			callback(null, contents);
		} else if (this.validateExactFormatPath(currPath)) {
			for (service in this.connection.client) {
				if (currentClient[service].listAction && typeof currentClient[service].listAction === 'function') {
					contents.push(service);
				}
			}
			callback(null, contents);
		} else {
			if (this.validateStartsWithServicePath(currentClient, currPath)) {
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

	getFileAndInsertToCache: function (callback, extension, file, service, id) {
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
		var formatNumber = this.converFormatToConstFormat(extension);
		this.setClientConfig(this.connection.client, formatNumber);
		this.connection.client[service].get(handler, id);
	},


	readFile: function (path, callback) {// get the object in the expected format and return it
		this.logMsg('readFile ' + path);
		var currPath = path.replace(__dirname, "");
		currPath = this.stripTrailingSlash(currPath);
		if (this.validatePathLengthForDirectory(currPath)) {
			this.logErrorMsg('Invalid Path ' + currPath, []);
			callback('Invalid Path ' + currPath, []);
		}
		else {
			var parsedPath = currPath.split("/");
			var service = parsedPath[3];
			var extension = parsedPath[2];
			var size = parsedPath.length;
			var file = parsedPath[size - 1];

			var res = file.split("\.");
			var id = res[0];
			var fileExtension = res[1];

			if (!this.validateFormatMatchesToFileExtension(fileExtension, extension)) {
				var msg = 'Incorrect file directory format type and file extension : [ file extension is: ' + fileExtension + ' and format type is: ' + extension + ']'
				this.logErrorMsg(msg);
				callback(msg, []);
			}
			else {

				this.logMsg('Handling file : ' + file + " extension is : " + extension);

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

	handleXmlListResponse: function (listResponse, callback, This, service, currentList, map, pager, currentClient, handler, filter) {
		var document = new xmldoc(listResponse);
		var error = document.childNamed("result").childNamed("error");
		if (error != null) {
			This.logErrorMsg(error.toString());
			callback(error.toString(), null);
		} else {
			var objects = document.childNamed("result").childNamed("objects");
			objects.eachChild(function (item) {
				This.lists[service].push(item);
				currentList.push(item.valueWithPath("id") + '.' + map.format);
				var itemId = item.valueWithPath("id") + '.' + map.format;
				This.logMsg('Adding item to cache item key ' + itemId);
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
		var results = listResponse.match(eventsRegex);
		if (results == null) {
			callback(null, currentList);
		} else {
			for (var i = 0; i < results.length; i++) {
				var event = results[i];
				var eventIdRegex = /(?:^|\n)x-kaltura-id:([^\s]+)/i;
				var eventId = event.match(eventIdRegex).slice(1);

				This.lists[service].push(event);
				currentList.push(eventId + '.' + iCalExtention);
				var eventId = eventId + '.' + iCalExtention;
				This.logMsg('Adding item to cache item key ' + eventId);
				parsedList[eventId] = event;
			}
			if (results.length == pager.pageSize) {
				pager.pageIndex++;
				currentClient[service].listAction(handler, filter, pager);
			}
			else {
				callback(null, currentList);
			}
		}
	},

	handleDefaultListResponse: function (listResponse, This, service, currentList, map, pager, currentClient, handler, filter, callback) {
		for (var i = 0; i < listResponse.objects.length; i++) {
			This.lists[service].push(listResponse.objects[i]);
			currentList.push(listResponse.objects[i].id + '.' + map.format);
			//var parsedItem = parseItem(listResponse.objects[i],  )
			var item = {};
			var itemId = listResponse.objects[i].id + '.' + map.format;
			This.logMsg('Adding item to cache item key ' + itemId);
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

	handleValidFileDirectory: function (currPath, callback, contents, currentClient) {
		var parsedPath = currPath.split("/");
		parsedPath.shift(); // remove first empty item.

		var map = this.createMapFromArray(parsedPath);
		if (map == null) {
			callback(null, contents);
		}

		var service = map.service;
		var extension = map.format;

		var formatNumber = this.converFormatToConstFormat(extension);
		this.setClientConfig(currentClient, formatNumber);

		this.lists = [];
		this.lists[service] = [];

		var currentList = [];
		var filter = this.createFilter(map);

		var pager = this.createPager(map);

		var This = this;
		var handler = null;
		handler = function (listResponse, err) {
			if (err) {
				This.logErrorMsg(JSON.stringify(err));
				callback(JSON.stringify(err), []);
			}

			if (listResponse === null) {
				This.logMsg('list response returned null');
				callback(null, currentList);
			}
			else {
				switch (extension) {
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
			}
		};
		currentClient[service].listAction(handler, filter, pager);
		return {service: service, currentClient: currentClient};
	},

	createReadStream: function () {
	},

	unlink: function () {
	},

	mkdir: function () {
	},

	open: function () {
	},

	close: function () {
	},

	rmdir: function () {
	},

	rename: function () {
	},

	stat: function (path, callback) {
		this.logMsg('stat [' + path + ']');
		var err = null;
		var This = this;
		var stat = {
			isDirectory: function () {
				var currPath = path.replace(__dirname, "");
				currPath = This.stripTrailingSlash(currPath);
				if (This.validatePathLengthForDirectory(currPath)) {
					if (currPath == "/" || currPath == "/format") {
						return true;
					}
					if (This.validateExactFormatPath(currPath)) {
						return true;
					}
					if (This.validateStartsWithServicePath(This.connection.client, currPath)) {
						return true;
					}
					This.logMsg('Path is in a directory length format but dosen\'t meet requirements of a valid directory [' + path + ']');
					return false;
				}
				else // we get here only if the path is to a direct file.
				{
					This.logMsg('Path is for a specific file [' + path + ']');

					var parsedPath = currPath.split("/");
					parsedPath.shift(); // remove first empty item.
					var map = This.createMapFromArray(parsedPath);

					var file = map.fileName;
					var format = map.format;
					var res = file.split("\.");
					var fileExtension = res[1];

					if (!This.validateFormatMatchesToFileExtension(fileExtension, format)) {
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
								this.connection.fileSize = fileItem.length;
								this.size = fileItem.length;
								var eventUpdatedDateRegex = /(?:^|\n)DTSTAMP:([^\s]+)/i;
								var date = fileItem.match(eventUpdatedDateRegex).slice(1);
								date = This.parseICalDate(date);
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
			mtime: new Date()
		};
		callback(err, stat);
	},

	login: function (password, success, failure) {
		var client = this.initClient();
		var This = this;
		client.user.loginByLoginId(function (ks, err) {
			if (ks) {
				This.logMsg('Successful login');
				This.logMsg('KS IS: ' + ks);
				client.setKs(ks);
				success(client);
			} else {
				This.logErrorMsg('Error while trying to login to Kaltura server. ');
				This.logErrorMsg('Got no KS from login');
				This.logErrorMsg(JSON.stringify(err));
				failure();
			}
		}, this.connection.username, password);
	},

	validateStartsWithServicePath: function (currentClient, currPath) {
		this.logMsg('Validating path start with correct service prefix: ' + currPath);
		var parsedpath = currPath.split("/");
		var size = parsedpath.length;
		var file = parsedpath[parsedpath.length - 1];

		for (service in currentClient) {
			if (currentClient[service].listAction && typeof currentClient[service].listAction === 'function') {
				for (var i = 0; i < formatTypes.length; i++) {
					if (currPath.startsWith("/format/" + formatTypes[i] + "/" + service)) {
						return true;
					}
				}
			}
		}
		return false;
	},

	initClient: function (format) {
		this.logMsg('Initializing client');
		var clientConfig = new kaltura.client.KalturaConfiguration();
		clientConfig.serviceUrl = 'http://' + serverHost;
		if (format != null) {
			clientConfig.format = format;
		}
		clientConfig.setLogger(KalturaLogger);
		var client = new kaltura.client.KalturaClient(clientConfig);
		return client;
	},

	setClientConfig: function (client, format) {
		this.logMsg('Setting client config');
		var clientConfig = new kaltura.client.KalturaConfiguration();
		clientConfig.serviceUrl = 'http://' + serverHost;
		if (format != null) {
			clientConfig.format = format;
		}
		clientConfig.setLogger(KalturaLogger);
		client.setConfig(clientConfig);
	},

// case 1: '\format' -> true (directory)
// case 2: '\format\formatType' -> true (directory)
// case 3: '\format\formatType\ServiceName\fileName.ext' -> false (not a directory)
// case 4: '\format\formatType\ServiceName\filter\filtervalue\fileName.ext' -> false (not a directory)
// case 5: '\format\formatType\ServiceName\filter\filtervalue' -> true (directory)
	validatePathLengthForDirectory: function( path ){
	this.logMsg("Validating path length is a directory format length for: " + path);
	var parsedPath = path.split("/");
	parsedPath.shift(); // remove first empty item.
	var length = parsedPath.length;
	if (length > 3 &&  length %2 == 0){
		return false;
	} else {
		return true;
	}
},

 createMapFromArray: function(array ) {

	this.logMsg('Creating map from array: ' + array);
	var map = {};

	var format = array.shift();
	if (format != 'format')
	{
		return null;
	}

	var formatType = array.shift();
	map.format = formatType;

	var serviceName = array.shift();
	map.service = serviceName;

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
},

validateExactFormatPath: function (currPath){
	this.logMsg('Validating path start with correct format prefix: ' + currPath);
	for ( var i=0 ; i < formatTypes.length ; i++ ){
		if  ( currPath == ("/format/" + formatTypes[i])){
			return true;
		}
	}
	return false;
},
converFormatToConstFormat: function(format){
	switch (format){
		case 'xml':
			return kaltura.client.KalturaClientBase.KALTURA_SERVICE_FORMAT_XML;
		case 'ical':
			return 'ical';
		default:
			return kaltura.client.KalturaClientBase.KALTURA_SERVICE_FORMAT_JSON;
	}
},

	createFilter: function(map) {

	this.logMsg('Creating filter from map: ' + map);
	var filter = {};
	var filterType = map['filter:objectType'];
	this.logMsg('Creating filter objectType of type:' + filterType);
	if (filterType != null) {
		if (typeof kaltura.client.objects[filterType] === 'function') {
			var filter = new kaltura.client.objects[filterType]();
		}
		Object.keys(map).forEach(function (key) {
			var formatItem = key.split(":");
			if (formatItem[0] == 'filter' && formatItem[1] != 'objectType') {
				var val = map[key];
				this.logMsg('Adding filter object: [' + filterTypeItem + ' , ' + filterType +']');
				var filterTypeItem = formatItem[1];
				filter[filterTypeItem] = val;
			}
		});
	}
	this.logMsg('Filter created is: ' + JSON.stringify(filter));
	return filter;
},

 createPager: function(map) {
	this.logMsg('Creating pager from map: ' + map);
	var pager = new kaltura.client.objects.KalturaFilterPager();
	pager.pageSize = map['pager:pageSize'];
	if (pager.pageSize == null) {
		pager.pageSize = 500;
	}
	pager.pageIndex = map['pager:pageIndex'];
	if (pager.pageIndex == null) {
		pager.pageIndex = 1;
	}
	return pager;
},

 stripTrailingSlash: function(str) {
	if(str.substr(-1) === '/' && str.length > 1) {
		return str.substr(0, str.length - 1);
	}
	return str;
},

 validateFormatMatchesToFileExtension: function(fileExtension, format) {
	if (fileExtension != format) {
		if (fileExtension == 'ics' && format == 'ical')
			return true;
		else
			return false;
	} else {
		return true;
	}
},

	 parseICalDate: function(value) {
		 this.logMsg('Parsing iCal Date ' + value);
		 var a = /^(\d{4})(\d{2})(\d{2})T(\d{2})(\d{2})(\d{2})Z{0,1}$/.exec(value);
		 this.logMsg('Parsing iCal Date result : ' + JSON.stringify(a));
		 if (a) {
			 return new Date(+a[1], +a[2] - 1, +a[3], +a[4], +a[5], +a[6]);
		 }
		 return null;
	 }

};


var KalturaMainProcess = function (server) {
	server.debugging = KalturaConfig.config.ftp.debugLevel;
	server.on('error', function (error) {
		KalturaLogger.error('FTP Server error:' + error);
	});
}

module.exports.KalturaMainProcess = KalturaMainProcess;
module.exports.FtpSession = FtpSession;

// add startsWith/endsWith functions to string
if (typeof String.prototype.startsWith != 'function') {
	String.prototype.startsWith = function (str){
		return this.slice(0, str.length) == str;
	};
}
