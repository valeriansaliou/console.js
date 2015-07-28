/*
 *  Console.js
 *
 *  An interface to native console methods
 *  Avoids issues when browser does not have native support for console
 *
 *  @license OS
 *  @author Valérian Saliou <valerian@valeriansaliou.name>
 *  @url https://github.com/valeriansaliou/console.js
 */

var Console = (function () {

  var self = {};


  /* Variables */

  self._html_sel = document.getElementsByTagName('html')[0];
  self._environment = self._html_sel.getAttribute('data-environment');
  self._development = self._environment == 'development';
  self._available = typeof(window.console) != 'undefined';
  self._has = self._development && self._available;
  self._console = self._available ? console : {};


  /* Methods */

  self.warn = function (ns, value) {
    if (self._has) {
      console.warn(ns, value);
    }
  };

  self.error = function (ns, value) {
    if (self._has) {
      console.error(ns, value);
    }
  };

  self.info = function (ns, value) {
    if (self._has) {
      console.info(ns, value);
    }
  };

  self.log = function (ns, value) {
    if (self._has) {
      console.log(ns, value);
    }
  };

  self.debug = function (ns, value) {
    if (self._has) {
      if (typeof console.debug != "undefined") {
        console.debug(ns, value);
      } else {
        console.log(ns, value);
      }
    }
  };


  return self;

})();
