/*
 * Lint JS outpout in a file
 */
 jshint = require('gulp-jshint');

 module.exports = function (gulp, plugins, params) {
	return function () {
	    gulp.task('lint-file', function () {
			return gulp.src(params.global.allInputJs)
				.pipe(jshint())
				.pipe(jshint.reporter('gulp-jshint-file-reporter', {
			    	filename: params.global.nameOutputJslintFile
			    }));
	    });
	}
};