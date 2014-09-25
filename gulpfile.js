
var gulp = require('gulp'),
	deploy = require("gulp-gh-pages");

gulp.task('deploy', function () {
    return gulp.src("./_site/**/*")
        // .pipe(deploy(options));
        .pipe(deploy({ cacheDir: '.tmp/tmpRepo' }));
});