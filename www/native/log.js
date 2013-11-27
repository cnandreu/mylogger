var exec = require('cordova/exec');

var noop = function (){};

module.exports = {

  log : function (msg) {
    exec(noop, noop, 'MyLogger', 'log', [msg]);
  }
};