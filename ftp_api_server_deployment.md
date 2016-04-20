Machine prerequisites:
=======================

- Git (For Ubuntu: https://www.digitalocean.com/community/tutorials/how-to-install-git-on-ubuntu-14-04)
- Node 0.10.26 or above: installation reference: https://github.com/joyent/node/wiki/Installing-Node.js-via-package-manager#ubuntu-mint-elementary-os
- Node Packaged Modules (npm) 1.4.3 or above

Kaltura platform required changes:
=======================
- Please note that push-server needs version Kajam-11.13.0 at least for it to run. So if you are behind please update you Kaltura installation before continuing to any of the next steps.

Code:
=======================
Clone https://github.com/kaltura/ftp-api-server to /opt/kaltura/ftp-api-server

Install:
=======================
- Navigate to /opt/kaltura/ftp-api-server
- npm install -g forever
- npm install
- ln -s /opt/kaltura/ftp-api-server/bin/ftp-server.sh /etc/init.d/kaltura_ftp_api_server

Configure:
=======================
- Create a log directory, e.g. mkdir /opt/kaltura/log
- cp /opt/kaltura/ftp-api-server/config/config.template.ini /opt/kaltura/ftp-api-server/config/config.ini

Replace tokens in config.ini file:
=======================
- @LOG_DIR@ - Your logs directory from previous step (e.g. /opt/kaltura/log )
- @MEMCACHE_HOST@ your memcache host

Execution:
=======================
/etc/init.d/kaltura_ftp_api_server start
