'use strict';

var browserSync = require('browser-sync').create();
var colorguard  = require('gulp-colorguard');
var csscomb     = require('gulp-csscomb');
var dateTime    = require('@radioactivehamster/date-time');
var fs          = require('fs');
var gulp        = require('gulp');
var htmltidy    = require('gulp-htmltidy');
var jsYaml      = require('js-yaml');
var less        = require('gulp-less');
var pkg         = require('./package.json');
var stachio     = require('gulp-stachio');

// Static server
gulp.task('serve', ['style', 'template'], () => {
    browserSync.init({
        open: false,
        server: { baseDir: './' }
    });

    gulp.watch('src/style/*.less', ['style']).on('change', browserSync.reload);
    gulp.watch('src/template/*.hbs', ['template']).on('change', browserSync.reload);
});

gulp.task('style', () => {
    return gulp.src('src/style/main.less')
        .pipe(less())
        .pipe(csscomb())
        .pipe(colorguard().on('error', e => console.warn(e.message)))
        .pipe(gulp.dest('asset/css'));
});

gulp.task('template', () => {
    let analyticsId = pkg.config.analyticsId;
    let cname       = fs.readFileSync('./CNAME').toString().trim();
    let htmltidyrc  = jsYaml.load(fs.readFileSync('./.htmltidyrc').toString());

    return gulp.src('src/template/*.hbs')
        .pipe(stachio({ analyticsId, cname, timestamp: dateTime() }))
        .pipe(htmltidy(htmltidyrc))
        .pipe(gulp.dest('./'));
});

gulp.task('default', ['style', 'template']);
