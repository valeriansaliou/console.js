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
  self._warn = function (ns, value) {
    if (self._has) {
      console.warn(ns, value);
    }
  };

  self._error = function (ns, value) {
    if (self._has) {
      console.error(ns, value);
    }
  };

  self._info = function (ns, value) {
    if (self._has) {
      console.info(ns, value);
    }
  };

  self._log = function (ns, value) {
    if (self._has) {
      console.log(ns, value);
    }
  };

  self._debug = function (ns, value) {
    if (self._has) {
      console.debug(ns, value);
    }
  };


  /* Adapters */
  self._adapter = function (level, ns, value) {
    var adapter = null;

    try {
      switch (level) {
        case 0:
          adapter = self._warn;  break;
        case 1:
          adapter = self._error; break;
        case 2:
          adapter = self._info;  break;
        case 3:
          adapter = self._log;   break;
        case 4:
          adapter = self._debug; break;
      }
    } catch (e) {
      adapter = function() {};
    }

    return adapter;
  };


  /* Methods */
  self.warn  = self._adapter(0);
  self.error = self._adapter(1);
  self.info  = self._adapter(2);
  self.log   = self._adapter(3);
  self.debug = self._adapter(4);


  return self;

})();
