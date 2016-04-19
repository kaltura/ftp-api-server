var kaltura  = require('./lib/KalturaFTPServer');
var ftpd = require('ftpd');

var options = {
    host : '0.0.0.0',
    port : 21,
    tls : null,
};

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

server.listen(options.port);
KalturaLogger.access('Listening on port ' + options.port);
var KalturaProcess = null;

KalturaProcess = new kaltura.KalturaMainProcess(server);

server.on('client:connected', function(connection) {
    KalturaLogger.access('client connected: ' + connection.remoteAddress);
    connection.on('command:user', function(user, success, failure) {
        var res = user.split("\/");
        if (res.length != 2) {
            KalturaLogger.access('UserName is not in the correct format. expecting [partner-id/user-id] but got ' + user);
            failure();
        } else {
            var isnum = /^[0-9]+$/.test(res[0]);
            if (!isnum || !res[1]) {
                KalturaLogger.access('UserName is not in the correct format. expecting [partner-id/user-id] but got ' + user);
                failure();
            } else {
                if (user) {
                    connection.partnerId = res[0];
                    connection.username = res[1];
                    success();
                } else {
                    failure();
                }
            }
        }
    });

    connection.on('command:pass', function(pass, success, failure) {
        KalturaLogger.access('Trying to Login for ' + connection.username);
        var sessionId =  Math.floor(Math.random() * 10000000000000001).toString(36);
        var session = new kaltura.FtpSession(connection, sessionId);
        session.login(pass, function(client){
            session.connection.client = client;
            KalturaLogger.access('Successful login for user ' + connection.username);
            success(connection.username, session);
        }, failure);
    });
});


