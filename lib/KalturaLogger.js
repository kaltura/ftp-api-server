
var os = require('os');
var fs = require('fs');
var util = require('util');


KalturaLogger = {
    config: null,
    hostname: os.hostname(),
    debugEnabled: false,
    accessLogFile: null,
    logFile: null,
    errorFile: null,

    accessRequestHeaders: ['referrer', 'user-agent', 'x-kaltura-f5-https', 'host', 'x-forwarded-for', 'x-forwarded-server', 'x-forwarded-host'],
    accessResponseHeaders: ['content-range', 'cache-control', 'x-kaltura-session'],

    init: function(){
        if(!KalturaConfig.config.logger || KalturaLogger.config)
            return;

        KalturaLogger.config = KalturaConfig.config.logger;

        if(KalturaLogger.config.debugEnabled){
            KalturaLogger.debugEnabled = parseInt(KalturaLogger.config.debugEnabled);
        }
        if(KalturaLogger.config.accessRequestHeaders){
            KalturaLogger.accessRequestHeaders = KalturaLogger.config.accessRequestHeaders.split(',');
        }
        if(KalturaLogger.config.accessResponseHeaders){
            KalturaLogger.accessResponseHeaders = KalturaLogger.config.accessResponseHeaders.split(',');
        }

        if(KalturaLogger.config.accessLogName){
            KalturaLogger.accessLogFile = fs.openSync(KalturaLogger.config.logDir + '/' + KalturaLogger.config.accessLogName, 'a');
        }

        if(KalturaLogger.config.logName){
            KalturaLogger.logFile = fs.openSync(KalturaLogger.config.logDir + '/' + KalturaLogger.config.logName, 'a');
        }

        if(KalturaLogger.config.errorLogName){
            KalturaLogger.errorFile = fs.openSync(KalturaLogger.config.logDir + '/' + KalturaLogger.config.errorLogName, 'a');
        }
    },

    notifyLogsRotate: function(){
        if(KalturaLogger.config.accessLogName){
            var newAccessLogHandler = fs.openSync(KalturaLogger.config.logDir + '/' + KalturaLogger.config.accessLogName, 'a');
            var oldAccessLogHandler = KalturaLogger.accessLogFile;
            KalturaLogger.accessLogFile = newAccessLogHandler;
            fs.closeSync(oldAccessLogHandler);
        }
        if(KalturaLogger.config.logName){
            var newLogHandler = fs.openSync(KalturaLogger.config.logDir + '/' + KalturaLogger.config.logName, 'a');
            var oldLogHandler = KalturaLogger.logFile;
            KalturaLogger.logFile = newLogHandler;
            fs.closeSync(oldLogHandler);
        }
        if(KalturaLogger.config.errorLogName){
            var newErrorLogHandler = fs.openSync(KalturaLogger.config.logDir + '/' + KalturaLogger.config.errorLogName, 'a');
            var oldErrorLogHandler = KalturaLogger.errorFile;
            KalturaLogger.errorFile = newErrorLogHandler;
            fs.closeSync(oldErrorLogHandler);
        }
    },

    getDateTime: function () {
        var date = new Date();

        var hour = date.getHours();
        hour = (hour < 10 ? "0" : "") + hour;

        var min  = date.getMinutes();
        min = (min < 10 ? "0" : "") + min;

        var sec  = date.getSeconds();
        sec = (sec < 10 ? "0" : "") + sec;

        var year = date.getFullYear();

        var month = date.getMonth() + 1;
        month = (month < 10 ? "0" : "") + month;

        var day  = date.getDate();
        day = (day < 10 ? "0" : "") + day;

        return year + "/" + month + "/" + day + " " + hour + ":" + min + ":" + sec;
    },

    prefix: function(stackSource){
        var time = KalturaLogger.getDateTime();

        if(!stackSource)
            stackSource = new Error();
        var stack = stackSource.stack.split('\n');
        var stackLevel = 3;
        var line = stack[stackLevel].trim().split(' ');
        line = line[1];
        if(line.indexOf('/') > 0)
            line = line.substr(line.lastIndexOf('/') + 1);
        else if(line.indexOf('\\') > 0)
            line = line.substr(line.lastIndexOf('\\') + 1);

        return '[' + process.pid + '][' + time + '][' + line + ']';
    },

    write: function(str){
        if(KalturaLogger.logFile){
            fs.writeSync(KalturaLogger.logFile, str + '\n');
        }
        else{
            console.log(str);
        }
    },

    writeError: function(str){
        this.write(str);
        if(KalturaLogger.errorFile){
            fs.writeSync(KalturaLogger.errorFile, str + '\n');
        }
        else{
            console.error(str);
        }
    },

    debug: function(str, stackSource){
        if(KalturaLogger.debugEnabled){
            KalturaLogger.write(KalturaLogger.prefix(stackSource) + ' DEBUG: ' + str);
        }
    },

    log: function(str, stackSource){
        KalturaLogger.write(KalturaLogger.prefix(stackSource) + ' INFO: ' + str);
    },

    warn: function(str, stackSource){
        KalturaLogger.writeError(KalturaLogger.prefix(stackSource) + ' WARN: ' + str);
    },

    error: function(str, stackSource){
        KalturaLogger.writeError(KalturaLogger.prefix(stackSource) + ' ERROR: ' + str);
    },

    dir: function(object, stackSource, prefix){
        KalturaLogger.write(KalturaLogger.prefix(stackSource) + ' INFO: ' + (prefix ? prefix : '') + util.inspect(object, { showHidden: true, depth: null }));
    },

    quoteVar: function(val) {
        if (!val) {
            return '-';
        }

        return '"' + val + '"';
    },

    access: function(str, stackSource){
            if(KalturaLogger.accessLogFile){
                fs.writeSync(KalturaLogger.accessLogFile, KalturaLogger.prefix(stackSource) + ' ACCESS: ' + str + '\n');
            }
            KalturaLogger.write('ACCESS: ' + str);
    }
};

KalturaUtils = {
    getUniqueId: function () {
        return Math.floor(Math.random() * 10000000000000001).toString(36);
    }
}
KalturaLogger.init();