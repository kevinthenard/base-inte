/*
* GulpFile
* @author: Kévin Thenard
*
*/
'use strict';


var version = Math.floor(new Date().getTime() / 1000);

var gulp = require('gulp');

// method andy-carter
var plugins = require('gulp-load-plugins')({
    pattern: ['gulp-*', 'gulp.*', 'del', 'imagemin-pngquant', 'jshint-stylish', 'merge-stream', 'path', 'gutil', 'browser-sync', 'fs'],
    replaceString: /^gulp(-|\.)/,
    camelize: true,
    lazy: true
});

plugins._ = require('lodash');


var params = [];
params.global = require('./gulp/config/global');
params.jsAssets = require('./gulp/config/js');


// Init tasks & default
gulp.task('default', ['init', 'watch']);
gulp.task('init', ['img', 'lint-file', 'icons', 'sprite', 'js', 'scss']);


// Begin a server
gulp.task('watch', require('./gulp/watch')(gulp, plugins, params));
gulp.task('server', require('./gulp/server')(gulp, plugins, params));


// JS
gulp.task('js', require('./gulp/js')(gulp, plugins, params));

// JS QUALITY
gulp.task('lint', require('./gulp/lint')(gulp, plugins, params));
gulp.task('lint-file', require('./gulp/lint-file')(gulp, plugins, params));


// Images, Sprite & Typo
gulp.task('img', require('./gulp/img')(gulp, plugins, params));
gulp.task('sprite', require('./gulp/sprite')(gulp, plugins, params));
gulp.task('icons', require('./gulp/glyphs')(gulp, plugins, params));


// SCSS & Clean CSS or PostCSS
gulp.task('scss', require('./gulp/scss')(gulp, plugins, params, version));


// UI KIT
gulp.task('uikit', require('./gulp/uikit')(gulp, plugins, params));