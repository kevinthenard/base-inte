/*
 * File watch
 */
module.exports = function (gulp, plugins, params) {
    return function () {
    	// SCSS from Dev
    	gulp.watch(params.global.allInputCss, ['scss']);
    	// JS from Dev
    	gulp.watch(params.global.allInputJs, ['js']);
    };
};
