'use strict';

var gulp = require('gulp');
var browserify = require('gulp-browserify');
var rename = require('gulp-rename');

gulp.task('scripts', function () {
    return gulp.src(['src/js/app.js'], { read: false })
        .pipe(browserify({
            insertGlobals: false,
            debug: false
        }))
        .pipe(rename('app.js'))
        .pipe(gulp.dest('dist/js'));
});
