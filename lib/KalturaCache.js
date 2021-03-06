var os = require('os');
var memcached = require('memcached');
var path = require('path');

KalturaCache = {
    config : null,
    server : null,
    dataVersion: 0,

    init: function(){
        this.config = KalturaConfig.config.memcache;
        if ('timeout' in this.config) //time is string as default and memcached require number
	this.config.timeout = parseInt(this.config.timeout);
	this.server = new memcached(this.config.hostname + ':' + this.config.port, this.config);

        if(this.config.dataVersion){
            this.dataVersion = parseInt(this.config.dataVersion);
        }
    },

    getStack : function() {
        return new Error();
    },

    get : function(key, callback, errorCallback) {
        var stackSource = this.getStack();
        KalturaLogger.debug('Cache.get [' + key + ']...', stackSource);
        this.server.get(key, function(err, data){
            if(err){
                var errMessage = 'Cache.get [' + key + ']:' + err;
                if(errorCallback){
                    errorCallback(errMessage);
                }
                else{
                    KalturaLogger.error(errMessage + "\n" + stackSource.stack, stackSource);
                }
            }
            else{
                KalturaLogger.debug('Cache.get [' + key + ']: OK', stackSource);
                if(callback)
                    callback(data);
            }
        });
    },

    set : function(key, value, lifetime, callback, errorCallback) {
        if(!lifetime || isNaN(lifetime)){
            throw new Error('Cache.set [' + key + ']: lifetime [' + lifetime + '] is not numeric');
        }
        lifetime = parseInt(lifetime);
        var stackSource = this.getStack();
        this.server.set(key, value, lifetime, function(err){
            if(err){
                var errMessage = 'Cache.set [' + key + ']:' + err;
                if(errorCallback){
                    errorCallback(errMessage, key);
                }
                else{
                    KalturaLogger.error(errMessage + "\n" + stackSource.stack, stackSource);
                }
            }
            else{
                KalturaLogger.debug('Cache.set [' + key + ']: OK', stackSource);
                if(callback)
                    callback();
            }
        });
    },

    touch : function(key, lifetime, callback, errorCallback) {
        if(!lifetime || isNaN(lifetime)){
            throw new Error('Cache.touch [' + key + ']: lifetime [' + lifetime + '] is not numeric');
        }
        lifetime = parseInt(lifetime);
        var stackSource = this.getStack();
        var cacheTouchCallback = function(err){
            if(err){
                var errMessage = 'Cache.touch [' + key + ']:' + err;
                if(errorCallback){
                    errorCallback(errMessage);
                }
                else{
                    KalturaLogger.error(errMessage + "\n" + stackSource.stack, stackSource);
                }
            }
            else{
                KalturaLogger.debug('Cache.touch [' + key + ']: OK', stackSource);
                if(callback)
                    callback();
            }
        };

        if(parseInt(this.config.touchEnabled)){
            this.server.touch(key, lifetime, function(err, value){
                if(err){
                    cacheTouchCallback(err);
                }
                else if(value){
                    cacheTouchCallback();
                }
                else{
                    cacheTouchCallback('value is null');
                }
            });
        }
        else{
            var This = this;
            this.server.get(key, function(err, value){
                if(err){
                    cacheTouchCallback(err);
                }
                else if(value){
                    This.server.set(key, value, lifetime, cacheTouchCallback);
                }
                else{
                    cacheTouchCallback('value is null');
                }
            });
        }
    },

    add : function(key, value, lifetime, callback, errorCallback) {
        if(!lifetime || isNaN(lifetime)){
            throw new Error('Cache.set [' + key + ']: lifetime [' + lifetime + '] is not numeric');
        }
        lifetime = parseInt(lifetime);
        var stackSource = this.getStack();
        this.server.add(key, value, lifetime, function(err){
            if(err){
                var errMessage = 'Cache.add [' + key + ']:' + err;
                if(errorCallback){
                    errorCallback(errMessage);
                }
                else{
                    KalturaLogger.error(errMessage + "\n" + stackSource.stack, stackSource);
                }
            }
            else{
                KalturaLogger.debug('Cache.add [' + key + ']: OK', stackSource);
                if(callback)
                    callback();
            }
        });
    },

    del : function(key, callback, errorCallback) {
        var stackSource = this.getStack();
        return this.server.del(key, function(err){
            if(err){
                var errMessage = 'Cache.del [' + key + ']:' + err;
                if(errorCallback){
                    errorCallback(errMessage);
                }
                else{
                    KalturaLogger.error(errMessage + "\n" + stackSource.stack, stackSource);
                }
            }
            else{
                KalturaLogger.debug('Cache.del [' + key + ']: OK', stackSource);
                if(callback)
                    callback();
            }
        });
    },

    replace : function(key, value, lifetime, callback, errorCallback) {
        if(!lifetime || isNaN(lifetime)){
            throw new Error('Cache.set [' + key + ']: lifetime [' + lifetime + '] is not numeric');
        }
        lifetime = parseInt(lifetime);
        var stackSource = this.getStack();
        return this.server.replace(key, value, lifetime, function(err){
            if(err){
                var errMessage = 'Cache.replace [' + key + ']:' + err;
                if(errorCallback){
                    errorCallback(errMessage);
                }
                else{
                    KalturaLogger.error(errMessage + "\n" + stackSource.stack, stackSource);
                }
            }
            else{
                KalturaLogger.debug('Cache.replace [' + key + ']: OK', stackSource);
                if(callback)
                    callback();
            }
        });
    },
};

KalturaCache.init();
