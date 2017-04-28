/*
 * Icon font by nfroidure
 * TODO : to be completed
 */
module.exports = function (gulp, plugins, params) {
    return function () {
        gulp.task('icons', function () {
            var runTimestamp = Math.round(Date.now()/1000);
            return gulp.src(params.global.svgInputFont,
                {
                    base: params.global.baseSvgFont}
                )
                .pipe(plugins.iconfontCss({
                    fontName: params.global.nameOutputFont,
                    path: params.global.fontPath,
                    targetPath: params.global.fontOutputLessPath,
                    fontPath: params.global.fontOutputFontPath
                }))
                .pipe(plugins.iconfont({
                    fontName: params.global.nameOutputFont,
                    prependUnicode: true,
                    normalize:true,
                    formats: ['svg', 'ttf', 'eot', 'woff', 'woff2'],
                    timestamp: runTimestamp,
                    centerHorizontally: true,
                    fontHeight: 1000
                }))
                .pipe(gulp.dest(params.global.fontOutputFontPath));
            })
        }
};
