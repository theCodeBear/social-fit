var gulp = require('gulp'),
    gutil = require('gulp-util'),
    bower = require('bower'),
    concat = require('gulp-concat'),
    sass = require('gulp-sass'),
    minifyCss = require('gulp-minify-css'),
    rename = require('gulp-rename'),
    sh = require('shelljs'),
    babel = require('gulp-babel'),
    jshint = require('gulp-jshint'),
    copy = require('gulp-copy'),
    del = require('del');


var paths = {
  sass: ['./build/scss/**/*.scss'],
  js: ['./build/**/*.js'],
  html: ['./build/**/*.html']
};

gulp.task('default', ['watch']);

gulp.task('sass', ['clean-css'], function(done) {
  gulp.src(paths.sass)
    .pipe(sass({
      errLogToConsole: true,
      outputStyle: 'expanded'
    }))
    .pipe(gulp.dest('./www/css/'))
    .pipe(minifyCss({
      keepSpecialComments: 0
    }))
    .pipe(rename({ extname: '.min.css' }))
    .pipe(gulp.dest('./www/css/'))
    .on('end', done);
});

gulp.task('jshint', ['babel'], function() {
  gulp.src(['./www/**/*.js', '!./www/lib', '!./www/lib/**/*.js'])
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'));
});

gulp.task('babel', ['clean-js'], function() {
  gulp.src(paths.js)
    .pipe(babel())
    .pipe(gulp.dest('./www'));
});

gulp.task('copyHtmlImg', ['clean-html'], function() {
  return gulp.src(['./build/**/*.html', './build/img', './build/img/**/*'])
    .pipe(copy('./www', { prefix: 1 }));
});

gulp.task('clean-js', function(cb) {
  del(['./www/**/*.js', '!./www/lib', '!./www/lib/**/*.js'], cb);
});

gulp.task('clean-html', function(cb) {
  del(['./www/**/*.html', '!./www/lib', '!./www/lib/**/*.html'], cb);
});

gulp.task('clean-css', function(cb) {
  del(['./www/css/**/*.css', '!./www/css'], cb);
});

gulp.task('watch', ['sass', 'jshint', 'copyHtmlImg'], function() {
  gulp.watch(paths.sass, ['sass']);
  gulp.watch(paths.js, ['jshint']);
  gulp.watch(paths.html, ['copyHtmlImg']);
});



gulp.task('install', ['git-check'], function() {
  return bower.commands.install()
    .on('log', function(data) {
      gutil.log('bower', gutil.colors.cyan(data.id), data.message);
    });
});

gulp.task('git-check', function(done) {
  if (!sh.which('git')) {
    console.log(
      '  ' + gutil.colors.red('Git is not installed.'),
      '\n  Git, the version control system, is required to download Ionic.',
      '\n  Download git here:', gutil.colors.cyan('http://git-scm.com/downloads') + '.',
      '\n  Once git is installed, run \'' + gutil.colors.cyan('gulp install') + '\' again.'
    );
    process.exit(1);
  }
  done();
});
