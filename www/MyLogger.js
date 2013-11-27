var exec = require('cordova/exec');

var MyLogger = function (callback) {
  this.callback = callback;
};

MyLogger.prototype.log = function (msg) {
  exec(this.callback, this.callback, 'MyLogger', 'log', [msg]);
};


module.exports = MyLogger;