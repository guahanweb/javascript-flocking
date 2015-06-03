var Canvas = require('./canvas');
var c = new Canvas('basic-flocking');

// Add a couple objects
var o1 = c.addObject({ x: 100, y: 100 });
var o2 = c.addObject({ x: 200, y: 110 });

// Set a custom renderer for o2 (draw a circle)
o2.setRenderMethod(function (ctx) {
    ctx.beginPath();
    ctx.arc(0, 0, 5, 0, 2 * Math.PI, false);
    ctx.fillStyle = '#fff';
    ctx.fill();
});

// Render the current frame
c.drawFrame();
