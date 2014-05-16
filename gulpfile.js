var gulp = require('gulp');
var sass = require('gulp-sass');
var csso = require('gulp-csso');
var rename = require('gulp-rename');
var connect = require('gulp-connect');

gulp.task('default', function() {
  connect.server({
    livereload: true
  });
  gulp.watch('sass/*.scss', ['styles']);
});

gulp.task('styles', function() {
  return gulp.src('./sass/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('./css'))
    .pipe(connect.reload())
    .pipe(csso())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('./css'))
});
