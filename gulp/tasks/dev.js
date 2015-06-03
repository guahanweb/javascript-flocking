var gulp = require('gulp');

gulp.task('dev', ['lint', 'site', 'styles', 'scripts'], function () {
    // Watch for changes and rebuild
    gulp.watch('src/html/**/*.html', ['site']);
    gulp.watch('src/sass/**/*.scss', ['styles']);
    gulp.watch('src/js/**/*.js', ['scripts']);
});
