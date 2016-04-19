var path = require('path');
var ftpd = require('ftpd');
var os = require('os');
var xmldoc = require("xmldoc").XmlDocument;

require('./KalturaConfig');
require('./KalturaLogger');
require('./KalturaCache');

var kaltura = {
	client: require('../client/KalturaClient'),
};

var serverHost = KalturaConfig.config.ftp.serverHost;
var maxPageIndex = KalturaConfig.config.ftp.maxListPageIndex;
var cacheItemExpiration = parseInt(KalturaConfig.config.memcache.maxExpiration);

var formatTypes = ['json','xml','ical'];
var iCalExtention = 'ics';

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
		} else if (this.validateStartsWithServicePath(currentClient, currPath)) {
			var __ret = this.handleValidFileDirectory(currPath, callback, contents, currentClient);
			var service = __ret.service;
			currentClient = __ret.currentClient;
		}
		else {
			var err = "Invalid Dir";
			callback(err, []);
		}
	},

	getFileAndInsertToCache: function (callback, extension, file, service, id) {
		var handler = null;
		var This = this;
		handler = function (result, err) {
			if (err) {
				This.logErrorMsg(JSON.stringify(err));
				return callback(JSON.stringify(err), null);
			}
			else {
				var res = null;
				switch (extension) {
					case 'xml':
						var xmlRes = new xmldoc(result);
						var error = xmlRes.childNamed("result").childNamed("error");
						if (error != null) {
							This.logErrorMsg(error.toString());
							return callback(error.toString(), null);
						} else {
							var regexToRemove = /<executionTime>([\s\S]*?)<\/executionTime>/g;
							var tempStr = xmlRes.toString();
							var res = tempStr.replace(regexToRemove, '');
							var document = new xmldoc(res);
							KalturaCache.set(file, document.toString(), cacheItemExpiration);
							res = document.toString();
						}
						break;
					case 'ical':
						var eventsRegex = /BEGIN:VERROR([\s\S]*?)END:VERROR/g;
						var eventError = result.match(eventsRegex);
						if (eventError != null) {
							This.logErrorMsg(eventError);
							return callback(eventError, null);
						} else {
							var regexToRemove = /X-KALTURA-EXECUTION-TIME:.*/g;
							var resICal = result.replace(regexToRemove, '');
							KalturaCache.set(file, resICal, cacheItemExpiration);
							res = resICal;
						}
						break;
					default:
						res = JSON.stringify(result);
						KalturaCache.set(file, res, cacheItemExpiration);
						break;
				}
			}
			callback(null, res);
		};
		var formatNumber = This.converFormatToConstFormat(extension);
		This.setClientConfig(This.connection.client, formatNumber);
		This.connection.client[service].get(handler, id);
	},


	readFile: function (path, callback) {// get the object in the expected format and return it
		this.logMsg('readFile ' + path);
		var currPath = path.replace(__dirname, "");
		currPath = this.stripTrailingSlash(currPath);
		if (this.validatePathLengthForDirectory(currPath)) {
			this.logErrorMsg('Invalid Path ' + currPath, []);
			callback('Invalid Path ' + currPath, null);
		}
		else {
			var parsedPath = currPath.split("/");
			var service = parsedPath[3];
			var extension = parsedPath[2];
			var size = parsedPath.length;
			var file = parsedPath[size - 1];

			var id = file.substring(0, file.lastIndexOf("\.") + 1);
			var fileExtension = file.substring(file.lastIndexOf("\.") + 1, file.length);
			var This = this;

			if (!this.validateFormatMatchesToFileExtension(fileExtension, extension)) {
				var msg = 'Incorrect file directory format type and file extension : [ file extension is: ' + fileExtension + ' and format type is: ' + extension + ']'
				this.logErrorMsg(msg);
				callback(msg, []);
			}
			else {
				this.logMsg('Handling file : ' + file + " extension is : " + extension);
				KalturaCache.get(file, function (itemInCache) {
					if (itemInCache != null) {
						switch (extension) {
							case 'xml':
								callback('', itemInCache.toString());
								break;
							case 'ical':
								callback(null, itemInCache.toString());
								break;
							default:
								callback(null, JSON.stringify(itemInCache));
						}
					}
					else {
						This.getFileAndInsertToCache(callback, extension, file, service, id);
					}
				}, function (err) {
					callback(err,null);
				});
			}
		}
	},

	handleXmlListResponse: function (listResponse, service, currentList, map, callback) {
		var document = new xmldoc(listResponse);
		var This = this;
		var error = document.childNamed("result").childNamed("error");
		if (error != null) {
			This.logErrorMsg(error.toString());
			callback(error.toString(), null);
		} else {
			var objects = document.childNamed("result").childNamed("objects");
			var count = 0;
			objects.eachChild(function (item) {
				This.lists[service].push(item);
				currentList.push(item.valueWithPath("id") + '.' + map.format);
				var itemId = item.valueWithPath("id") + '.' + map.format;
				This.logMsg('Adding item to cache item key ' + itemId);
				KalturaCache.set(itemId, item.toString(), cacheItemExpiration);
				count++;
			});
			callback(null, currentList, count);
		}
	},

	handleICalListResponse: function (listResponse, service, currentList, callback) {
		var eventsRegex = /BEGIN:VERROR([\s\S]*?)END:VERROR/g;
		var This = this;
		var eventError = listResponse.match(eventsRegex);
		if (eventError != null) {
			This.logErrorMsg(eventError);
			callback(eventError, currentList);
		} else {
			var eventsRegex = /BEGIN:VEVENT([\s\S]*?)END:VEVENT/g;
			var results = listResponse.match(eventsRegex);
			if (results != null) {
				for (var i = 0; i < results.length; i++) {
					var event = results[i];
					var eventIdRegex = /(?:^|\n)X-KALTURA-ID:([^\s]+)/i;
					var eventId = event.match(eventIdRegex).slice(1);
					event = 'BEGIN:VCALENDAR\n' + event + '\nEND:VCALENDAR';
					This.lists[service].push(event);
					currentList.push(eventId + '.' + iCalExtention);
					var eventId = eventId + '.' + iCalExtention;
					This.logMsg('Adding item to cache item key ' + eventId);
					KalturaCache.set(eventId, event, cacheItemExpiration);
				}
					callback(null, currentList, results.length);
			} else {
				callback(null, currentList);
			}
		}
	},

	handleDefaultListResponse: function (listResponse, service, currentList, map, callback ) {
		var This = this;
		for (var i = 0; i < listResponse.objects.length; i++) {
			This.lists[service].push(listResponse.objects[i]);
			currentList.push(listResponse.objects[i].id + '.' + map.format);
			var item = {};
			var itemId = listResponse.objects[i].id + '.' + map.format;
			This.logMsg('Adding item to cache item key ' + itemId);
			KalturaCache.set(itemId, listResponse.objects[i], cacheItemExpiration);
		}
			callback(null, currentList, listResponse.objects.length);
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
		var filter = this.createListingObject(map, 'filter', {});
		var pager = this.createListingObject(map, 'pager', null);

		var retrieveOnePageOnly = true;

		if ( pager == null ){
			pager = new kaltura.client.objects.KalturaFilterPager();
			pager.pageIndex = 1;
			pager.pageSize = 500;
			var retrieveOnePageOnly = false;
		}

		var This = this;

		var pagingHandler = function (err, currentList, count) {
			if (err) {
				This.logErrorMsg(JSON.stringify(err));
				callback(JSON.stringify(err), []);
			} else {
				if (!retrieveOnePageOnly && count == pager.pageSize && pager.pageIndex <= maxPageIndex){
					pager.pageIndex++;
					currentClient[service].listAction(handler, filter, pager);
				}
				else {
					callback(null, currentList);
				}
			}
		}

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
						This.handleXmlListResponse(listResponse, service, currentList, map, pagingHandler);
						break;
					case 'ical':
						This.handleICalListResponse(listResponse, service, currentList, pagingHandler);
						break;
					default:
						This.handleDefaultListResponse(listResponse, service, currentList, map, pagingHandler);
						break;
				}
			}
		};
		currentClient[service].listAction(handler, filter, pager);
		return {service: service, currentClient: currentClient};
	},

	createReadStream: function () {
		var err = 'createReadStream: Unimplemented usage';
		throw new Error(err);
	},

	unlink: function (path, callback) {
		var err = 'unlink: Unimplemented usage';
		if (callback) {
			callback(err, []);
		} else {
			throw new Error(err);
		}
	},

	mkdir: function (path, callback) {
		var err = 'mkdir: Unimplemented usage';
		if (callback) {
			callback(err, []);
		} else {
			throw new Error(err);
		}
	},

	open: function (path, flags, callback) {
		var err = 'open: Unimplemented usage';
		if (callback) {
			callback(err, []);
		} else {
			throw new Error(err);
		}
	},

	close: function (fd, callback) {
		var err = 'close: Unimplemented usage';
		if (callback) {
			callback(err, []);
		} else {
			throw new Error(err);
		}
	},

	rmdir: function (path, callback) {
		var err = 'rmdir: Unimplemented usage';
		if (callback) {
			callback(err, []);
		} else {
			throw new Error(err);
		}
	},

	rename: function (oldPath, newPath, callback) {
		var err = 'rename: Unimplemented usage';
		if (callback) {
			callback(err, []);
		} else {
			throw new Error(err);
		}
	},

	stat: function (path, callback) {
		var stat = {
			isDirectory: function () {
				return isDir;
			},
			mode: 33188,
			size: 0,
			mtime: new Date()
		};

		this.logMsg('stat [' + path + ']');

		var err = null;
		var currPath = path.replace(__dirname, "");
		currPath = this.stripTrailingSlash(currPath);
		var isDir;
		var This = this;
		if (this.validatePathLengthForDirectory(currPath)) {
			if (currPath == "/" || currPath == "/format") {
				isDir = true;
			} else if (this.validateExactFormatPath(currPath)) {
				isDir = true;
			} else if (this.validateStartsWithServicePath(this.connection.client, currPath)) {
				isDir = true;
			} else {
				err = 'Path is in a directory length format but dosen\'t meet requirements of a valid directory [' + path + ']';
				this.logErrorMsg(err);
			}
			if (!callback){
				throw new Error(err);
			}
			callback(err, stat);
		}
		else // we get here only if the path is to a direct file.
		{
			this.logMsg('Path is for a specific file [' + path + ']');
			var parsedPath = currPath.split("/");
			parsedPath.shift(); // remove first empty item.
			var map = this.createMapFromArray(parsedPath);

			var file = map.fileName;
			var format = map.format;

			var id = file.substring(0, file.lastIndexOf("\.") + 1);
			var fileExtension = file.substring(file.lastIndexOf("\.") + 1, file.length);

			if (!this.validateFormatMatchesToFileExtension(fileExtension, format)) {
				err = 'File format dosen\'t match file extension [' + path + ']';
				this.logErrorMsg(err);
				isDir = false;
				if (!callback){
					throw new Error(err);
				}
				callback(err, stat);
			} else {
				KalturaCache.get(file, function (fileItem) {
					if (fileItem != null) {
						var date = null;
						switch (format) {
							case 'xml':
								var xmlRes = new xmldoc(fileItem);
								date = xmlRes.valueWithPath("updatedAt");
								if (date != null) {
									stat.mtime = new Date(date * 1000);
								}
								stat.size = fileItem.length;
								break;
							case 'ical':
								stat.size = fileItem.length;
								var eventUpdatedDateRegex = /(?:^|\n)DTSTAMP:([^\s]+)/i;
								var date = fileItem.match(eventUpdatedDateRegex).slice(1);
								date = This.parseICalDate(date);
								if (date != null) {
									stat.mtime = date;
								}
							default:
								stat.size = (JSON.stringify(fileItem)).length;
								date = fileItem['updatedAt'];
								if (date != null) {
									stat.mtime = new Date(date * 1000);
								}
								break;
						}
					}
					isDir = false;
					if (!callback){
						throw new Error(err);
					}
					callback(err, stat);
				});
			}
		}
	},

	login: function (password, success, failure) {
		var client = this.initClient();
		var This = this;
		client.user.loginByLoginId(function (ks, err) {
			if (ks) {
				This.logMsg('Successful login for user: [' + This.connection.username + ' , ' + This.connection.partnerId + ']');
				This.logMsg('KS IS: ' + ks);
				client.setKs(ks);
				success(client);
			} else {
				This.logErrorMsg('Error while trying to login to Kaltura server. ');
				This.logErrorMsg('Got no KS from login');
				This.logErrorMsg(JSON.stringify(err));
				failure();
			}
		}, This.connection.username, password, This.connection.partnerId);
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
	validatePathLengthForDirectory: function (path) {
		this.logMsg("Validating path length is a directory format length for: " + path);
		var parsedPath = path.split("/");
		parsedPath.shift(); // remove first empty item.
		var length = parsedPath.length;
		if (length > 3 && length % 2 == 0) {
			return false;
		} else {
			return true;
		}
	},

	createMapFromArray: function (array) {

		this.logMsg('Creating map from array: ' + array);
		var map = {};

		var format = array.shift();
		if (format != 'format') {
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

		if (array.length == 1) {
			var fileName = array.shift();
			this.logMsg('file name is: ' + fileName);
			map['fileName'] = fileName;
		}

		return map;
	},

	validateExactFormatPath: function (currPath) {
		this.logMsg('Validating path start with correct format prefix: ' + currPath);
		for (var i = 0; i < formatTypes.length; i++) {
			if (currPath == ("/format/" + formatTypes[i])) {
				return true;
			}
		}
		return false;
	},
	converFormatToConstFormat: function (format) {
		switch (format) {
			case 'xml':
				return kaltura.client.KalturaClientBase.KALTURA_SERVICE_FORMAT_XML;
			case 'ical':
				return 'ical';
			default:
				return kaltura.client.KalturaClientBase.KALTURA_SERVICE_FORMAT_JSON;
		}
	},

	createListingObject: function (map, objectName, defaultValue) {
		this.logMsg('Creating ListObject from map: ' + map);
		var listingObject = null;
		var objectType = map[objectName + ':objectType'];
		var This = this;
		this.logMsg('Creating ' + objectName + ' of type: ' + objectType);
		if (objectType != null) {
			if (typeof kaltura.client.objects[objectType] === 'function') {
				listingObject = new kaltura.client.objects[objectType]();
				Object.keys(map).forEach(function (key) {
					var formatItem = key.split(":");
					if (formatItem[0] == objectName && formatItem[1] != 'objectType') {
						var val = map[key];
						var ObjectTypeItem = formatItem[1];
						This.logMsg('Adding ' + objectName + ' object: [' + ObjectTypeItem + ' , ' + val + ']');
						listingObject[ObjectTypeItem] = val;
					}
				});
			} else {
				this.logMsg('Setting listing object ' + objectName + ' default value of: ' + defaultValue);
				listingObject = defaultValue;
			}
		} else {
			this.logMsg('Setting listing object ' + objectName + ' default value of: ' + defaultValue);
			listingObject = defaultValue;
		}
		this.logMsg('Listing Object created created is: ' + JSON.stringify(listingObject));
		return listingObject;
	},

	stripTrailingSlash: function (str) {
		if (str.substr(-1) === '/' && str.length > 1) {
			return str.substr(0, str.length - 1);
		}
		return str;
	},

	validateFormatMatchesToFileExtension: function (fileExtension, format) {
		if (fileExtension != format) {
			if (fileExtension == 'ics' && format == 'ical')
				return true;
			else
				return false;
		} else {
			return true;
		}
	},

	parseICalDate: function (value) {
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
