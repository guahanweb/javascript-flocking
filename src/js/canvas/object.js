'use strict';

var Logger = require('../logger');
var logger = new Logger('CANVAS OBJECT');
logger.log_level = Logger.level.DEBUG;

function CanvasObject() {
    logger.info('New object created');
}

CanvasObject.prototype.update = function () {

};

CanvasObject.prototype.render = function (ctx) {
    logger.info('Rendering at ' + this.x + ', ' + this.y);
    ctx.beginPath();
    ctx.rect(-5, -5, 10, 10);
    ctx.fillStyle = '#fff';
    ctx.fill();
    ctx.lineWidth = 2;
    ctx.strokeStyle = '#aaa';
    ctx.stroke();
};

module.exports = CanvasObject;
