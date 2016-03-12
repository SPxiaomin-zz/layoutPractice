var gulp = require('gulp');
var plumber = require('gulp-plumber');
var livereload = require('gulp-livereload');
var notify = require('gulp-notify');

var less = require('gulp-less');
var autoprefixer = require('gulp-autoprefixer');


var paths = {
  html: './index.html',
  less: './css/build/*.less'
};


gulp.task('html', function() {
  var stream = gulp.src(paths.html).
    .pipe(livereload());

  return stream;
});

gulp.task('css', function() {
  var cssDest = './css/src';

  var stream = gulp.src(paths.less)
    .pipe(plumber({
      errorHandler: notify.onError('Message:\n\t<%= error.message %>\nDetails:\n\tlineNumber: <%= error.lineNumber %>')
    }))
    .pipe(less())
    .pipe(autoprefixer())
    .pipe(gulp.dest(cssDest))
    .pipe(livereload());

  return stream;
});


function watcherCallback(event) {
  console.log('File ' + event.path + ' was ' + event.type + ', task running...');
}

gulp.task('default', ['css'], function() {
  livereload.listen();

  gulp.watch(paths.html, ['html']);

  var cssWatcher = gulp.watch(paths.less, ['css']);
  cssWatcher.on('change', watcherCallback);
});
