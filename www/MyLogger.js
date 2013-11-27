var exec = require('cordova/exec');

var Logger = function (callback) {
  this.callback = callback;
};

Logger.prototype.log = function (msg) {
  exec(this.callback, this.callback, 'MyLogger', 'log', [msg]);
};


module.exports = Logger;