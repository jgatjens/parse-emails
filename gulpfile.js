var deploy = require("gulp-gh-pages");

gulp.task('deploy', function () {
    gulp.src("./_site/**/*")
        .pipe(deploy(options));
});