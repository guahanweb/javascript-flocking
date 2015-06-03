'use strict';
var CanvasObject = require('./object');

var Logger = require('../logger');
var logger = new Logger('CANVAS');
logger.log_level = Logger.level.DEBUG;

var Canvas = function (id) {
    logger.info('Creating new object');
    this.canvas = document.getElementById(id);
    if (!this.canvas) {
        logger.error('No canvas element found for provided ID');
        return;
    }

    // Set up base variables for reference
    this.context = this.canvas.getContext('2d');
    this.height = this.canvas.offsetHeight;
    this.width  = this.canvas.offsetWidth;

    // Set up environmental elements
    this.objects = [];

    logger.info('Created with dimensions: ' + this.width + 'x' + this.height);
};

Canvas.prototype.clear = function () {
    this.context.clearRect(0, 0, this.width, this.height);
};

Canvas.prototype.addObject = function (coords) {
    logger.info('Creating new object at:', coords);
    var o = new CanvasObject();
    o.x = coords.x || this.width / 2;
    o.y = coords.y || this.height / 2;
    this.objects.push(o);
    return o;
};

Canvas.prototype.drawFrame = function () {
    this.clear();

    // We need to update all objects and then render them
    var canvas = this;
    this.objects.forEach(function (o) {
        o.update();
        canvas.context.save();
        canvas.context.translate(o.x, o.y);
        o.render(canvas.context);
        canvas.context.restore();
    });
};

module.exports = Canvas;
