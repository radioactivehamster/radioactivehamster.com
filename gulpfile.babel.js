'use strict';

var browserSync = require('browser-sync').create();
var csscomb     = require('gulp-csscomb');
var dateTime    = require('@radioactivehamster/date-time');
var gulp        = require('gulp');
var htmlmin     = require('gulp-htmlmin');
var less        = require('gulp-less');
var stachio     = require('gulp-stachio');

// Static server
gulp.task('serve', ['template'], function () {
    browserSync.init({
        open: false,
        server: { baseDir: './dist/' }
    });

    gulp.watch('style/**/*.less', ['style']);
    gulp.watch('**/*.hbs', ['template']).on('change', browserSync.reload);
});

gulp.task('style', function () {
    return gulp.src('asset/less/**/*.less')
        .pipe(less())
        .pipe(csscomb())
        .pipe(gulp.dest('./dist/asset/css'));
});

gulp.task('template', function () {
    return gulp.src('src/template/**/*.hbs')
        .pipe(stachio({ timestamp: dateTime() }))
        //.pipe(htmlmin({ collapseWhitespace: true }))
        .pipe(gulp.dest('dist'));
});

gulp.task('default', ['serve']);
