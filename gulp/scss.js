/*
 * built SCSS
 */

var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('autoprefixer');
var cleanCSS = require('gulp-clean-css');
var cssnano = require('cssnano');
var sass = require('gulp-sass');



module.exports = function (gulp, plugins, params, version) {
    var autoPrefixerParams = {};
    autoPrefixerParams[0] = params.global.supportedBrowser;
    autoPrefixerParams["cascade"] = false;
    var browsersVersion = [
        autoprefixer(autoPrefixerParams)
    ];
    return function () {
        gulp.task('scss', function () {
            return gulp.src(params.global.cssInput)
                .pipe(sourcemaps.init())
                .pipe(sass({ outputStyle: 'compressed' })
                .on('error', sass.logError))
                .pipe(plugins.postcss(browsersVersion))
                //.pipe(cssnano())
                .pipe(plugins.modifyCssUrls({
                  append: '?v=' + version
                }))
                .pipe(cleanCSS({debug: false}))
                .pipe(sourcemaps.write('../map'))
                .pipe(plugins.rename({suffix: '.min'}))
                .pipe(gulp.dest(params.global.allOutputCss));
        });
    }
};