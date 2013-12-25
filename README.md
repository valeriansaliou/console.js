Console.js
==========

A simple Web console log interface, avoiding browser issues when not supporting the native console interface.

[![build status](https://ci.frenchtouch.pro/projects/9/status.png?ref=master)](https://ci.frenchtouch.pro/projects/9?ref=master)


## How To Use?

1. Include the console.js file in your loaded scripts
2. Call Console.log('msg') wherever you need to log a simple text message
3. Call Console.log('msg', 'data') wherever you need to log data (string, object, number, ...)

**Note: beware of callink Console and not console when you want to use it. console will use the browser's native debug interface, but basically works exactly as console.js (called as Console).**

## Available Methods

* Console.log(msg, data) - *Basic data printing*
* Console.debug(msg, data) - *Prints provided debug data*
* Console.info(msg, data) - *Prints informational data*
* Console.warn(msg, data) - *Prints warning data*
* Console.error(msg, data) - *Prints error data*