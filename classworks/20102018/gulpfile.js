const gulp = require('gulp');
const browserSync = require('browser-sync');
const sass = require('gulp-sass');
const csscomb = require('gulp-csscomb');

gulp.task('copy-html', function () {
  gulp.src('./src/**/*.html')
    .pipe(gulp.dest('./dist/'));
})

gulp.task('copy-js', function () {
  gulp.src('./src/**/js/*.js')
    .pipe(gulp.dest('./dist/'));
})

gulp.task('sass', function () {
  gulp.src('./src/scss/**/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('./dist/css/'));
})

gulp.task('sass-minify', function () {
  gulp.src('./src/scss/**/*.scss')
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(gulp.dest('./dist/css/'));
})

gulp.task('sass-beautify', function () {
  gulp.src('./src/scss/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(csscomb())
    .pipe(gulp.dest('./dist/css/'))
})

gulp.task('build', function () {
  gulp.run('sass-minify');
  gulp.run('copy-html');
  gulp.run('copy-js');
})

gulp.task('browser-sync', function () {
  browserSync.init({
    server: {
      baseDir: "./dist"
    }
  });
  gulp.watch('./src/**/*.html', ['copy-html']).on('change', browserSync.reload);
  gulp.watch('./src/**/js/*.js', ['copy-js']).on('change', browserSync.reload);
  gulp.watch('./src/**/scss/*.scss', ['sass-minify']).on('change', browserSync.reload);
});