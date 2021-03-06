var gulp = require('gulp');
var browserSync = require('browser-sync').create();
gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./build"
        }
    });

    gulp.watch("./build/*.html").on('change', browserSync.reload);
});
gulp.task('default', gulp.series(['browser-sync']));
