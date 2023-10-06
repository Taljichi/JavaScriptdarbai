'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));

function buildStyles() {
    return gulp.src('./src/sass/main.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./dest/'));
};

exports.styles = buildStyles;

exports.watch = function () {
    gulp.watch('./src/sass/**/*.scss', gulp.series('styles'));
};

// npm install --save-dev gulp gulp-sass sass 
//  .container {
//      width: 100%;
//      max-width: 1000px;
//      margin: 0 auto;
// }
// 
// 