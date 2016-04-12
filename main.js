require('./lib/KalturaFTPServer');

// add startsWith/endsWith functions to string
if (typeof String.prototype.startsWith != 'function') {
    String.prototype.startsWith = function (str){
        return this.slice(0, str.length) == str;
    };
}
