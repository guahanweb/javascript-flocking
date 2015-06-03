'use strict';

var colors = [
        'color: #dc0003; font-weight: bold;', // error
        'color: #ffaa24;', // warn
        'color: #4a8ed3;' // info
    ];
var defaults   = 'color: #000; font-weight: normal;';
var log_string = '%c[%s] %c%s';

function writeLog() {
    console.log.apply(console, arguments);
}

function writeLog(level, msg, data) {
    if (this.log_level >= level) {
        var args = [log_string, colors[level], this.context, defaults, msg];
        if (data) {
            args.push(data);
        }

        console.log.apply(console, args);
    }
}

function Logger(context) {
    this.context = context;
    this.log_level = Logger.level.ERROR; // default
}

Logger.prototype.info = function (msg, data) {
    writeLog.call(this, Logger.level.INFO, msg, data);
};

Logger.prototype.warn = function (msg, data) {
    writeLog.call(this, Logger.level.WARN, msg, data);
};

Logger.prototype.error = function (msg, err) {
    writeLog.call(this, Logger.level.ERROR, msg, err);
};

Logger.level = {
    DEBUG: 99,
    INFO: 2,
    WARN: 1,
    ERROR: 0
};

module.exports = Logger;
