'use strict';

var browserSync = require('browser-sync').create();
var csscomb     = require('gulp-csscomb');
var dateTime    = require('@radioactivehamster/date-time');
var fs          = require('fs');
var gulp        = require('gulp');
var htmltidy    = require('gulp-htmltidy');
var jsYaml      = require('js-yaml');
var less        = require('gulp-less');
var stachio     = require('gulp-stachio');

gulp.task('cp', () => {
    return gulp.src('./vendor/any-old-icon/**/*.*')
        .pipe(gulp.dest('./dist/vendor/any-old-icon'));
});

// Static server
gulp.task('serve', ['template'], () => {
    browserSync.init({
        open: false,
        server: { baseDir: './dist/' }
    });

    gulp.watch('./src/asset/less/**/*.less', ['style']).on('change', browserSync.reload);
    gulp.watch('./src/template/**/*.hbs', ['template']).on('change', browserSync.reload);
});

gulp.task('style', () => {
    return gulp.src('./src/asset/less/main.less')
        .pipe(less())
        .pipe(csscomb())
        .pipe(gulp.dest('./dist/asset/css'));
});

gulp.task('template', () => {
    let htmltidyrc = jsYaml.load(fs.readFileSync('./.htmltidyrc').toString());

    return gulp.src('./src/template/**/*.hbs')
        .pipe(stachio({ timestamp: dateTime() }))
        //.pipe(htmlmin({ collapseWhitespace: true }))
        .pipe(htmltidy(htmltidyrc))
        .pipe(gulp.dest('dist'));
});

gulp.task('default', ['serve']);
