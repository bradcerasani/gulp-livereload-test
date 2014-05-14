var gulp = require('gulp');
var sass = require('gulp-sass');
var csso = require('gulp-csso');
var livereload = require('gulp-livereload');
var http = require('http');
var path = require('path');
var rename = require('gulp-rename');

gulp.task('default', function() {
  var connect = require('connect');
  var server = connect();

  server.use(connect.static('./')).listen(3000);
  gulp.watch('sass/*.scss', ['styles']);
});

gulp.task('styles', function() {
  return gulp.src('./sass/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('./css'))
    .pipe(livereload())
    .pipe(csso())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('./css'))
});
