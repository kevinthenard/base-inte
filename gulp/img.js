/*
 * Images optimization
 */
var image = require('gulp-image');

module.exports = function (gulp, plugins, params) {
  return function () {
    gulp.task('img', function () {
      gulp.src(params.global.allInputImg)
      .pipe(image({
        pngquant: true,
        optipng: true,
        zopflipng: true,
        jpegRecompress: true,
        jpegoptim: true,
        mozjpeg: true,
        guetzli: false,
        gifsicle: true,
        svgo: { 
          enable: ["removeRasterImages"],
          disable: ["removeDoctype"]
        },
        concurrent: 10
      }))
      // If error : active the "on error"
      //.on('error', console.log)
      .pipe(gulp.dest(params.global.allOutputImg));
    });
  }
};
