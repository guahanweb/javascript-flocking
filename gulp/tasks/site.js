'use strict';

var gulp = require('gulp');

gulp.task('site', function () {
    return gulp.src('src/html/**/*.html')
        .pipe(gulp.dest('dist'));
});
