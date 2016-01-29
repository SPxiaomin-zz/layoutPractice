/* jshint node: true */

var gulp = require('gulp');

var plumber = require('gulp-plumber');
var livereload = require('gulp-livereload');
var rename = require('gulp-rename');

var jade = require('gulp-jade');

var less = require('gulp-less');
var autoprefixer = require('gulp-autoprefixer');
var minCSS = require('gulp-minify-css');

var jshint = require('gulp-jshint');
var uglify = require('gulp-uglify');


var paths = {
    html: ['./views/**/*.jade', '!./views/error.jade'],
    less: ['./public/stylesheets/src/**/*.less'],
    js: ['./public/javascripts/src/**/*.js']
};


gulp.task('html', function() {
    var htmlDest = './views/html';
    var stream = gulp.src(paths.html)
        .pipe(plumber())
        .pipe(jade({
            doctype: 'html',
            pretty: true
        }))
        .pipe(gulp.dest(htmlDest))
        .pipe(livereload());

    return stream;
});


gulp.task('styles', function() {
    var cssDest = './public/stylesheets/dest';
    var stream = gulp.src(paths.less)
        .pipe(plumber())
        .pipe(less())
        .pipe(autoprefixer())
        .pipe(gulp.dest(cssDest))
        .pipe(minCSS())
        .pipe(rename({
            extname: '.min.css'
        }))
        .pipe(gulp.dest(cssDest))
        .pipe(livereload());

    return stream;
});


gulp.task('js', function() {
    var jsDest = './public/javascripts/dest';
    var stream = gulp.src(paths.js)
        .pipe(plumber())
        .pipe(jshint())
        .pipe(jshint.reporter('default'))
        .pipe(uglify())
        .pipe(gulp.dest(jsDest))
        .pipe(livereload());

    return stream;
});


var watcherCallback = function(event) {
    console.log('File ' + event.path + ' was ' + event.type + ', task running...');
};


gulp.task('default', ['html', 'styles', 'js'], function() {
    livereload.listen();

    var watcherHtml = gulp.watch(paths.html, ['html']);
    watcherHtml.on('change', watcherCallback);

    var watcherLess = gulp.watch(paths.less, ['styles']);
    watcherLess.on('change', watcherCallback);

    var watcherJs = gulp.watch(paths.js, ['js']);
    watcherJs.on('change', watcherCallback);
});
