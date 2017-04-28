/*
 * Lint JS
 */

jshint = require('gulp-jshint');

module.exports = function (gulp, plugins, params) {
    return function () {
		return gulp.src(params.global.allInputJs)
			.pipe(jshint())
			.pipe(jshint.reporter());
    };
};
