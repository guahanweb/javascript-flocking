'use strict';

var Logger = require('../logger');
var logger = new Logger('CANVAS OBJECT');
logger.log_level = Logger.level.DEBUG;

function defaultRender(ctx) {
    logger.info('Default render being used');
    ctx.beginPath();
    ctx.rect(-5, -5, 10, 10);
    ctx.fillStyle = '#fff';
    ctx.fill();
    ctx.lineWidth = 2;
    ctx.strokeStyle = '#aaa';
    ctx.stroke();
}

function CanvasObject() {
    logger.info('New object created');
    this.render = defaultRender;
}

CanvasObject.prototype.update = function () {

};

CanvasObject.prototype.setRenderMethod = function (fn) {
    this.render = fn;
};

module.exports = CanvasObject;
