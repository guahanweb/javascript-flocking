var path = require('path');
var fs = require('fs');

var tasks = fs.readdirSync('./gulp/tasks').filter(function (file) {
    // Require all JS files in the tasks directory
    return /\.js$/i.test(path.extname(file));
});

tasks.forEach(function (task) {
    require('./tasks/' + task);
});
