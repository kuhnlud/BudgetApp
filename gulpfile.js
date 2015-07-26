var gulp = require('gulp');
var connect = require('gulp-connect');
var compass = require('gulp-compass');
var watch = require('gulp-watch');

gulp.task('compass', function(){
  gulp.src('app/sass/*.scss')
      .pipe(compass({
        css: 'app/css',
        sass: 'app/sass'
      }))
      .pipe(gulp.dest('app/css/'))
      .pipe(connect.reload());
});

gulp.task('html', function(){
  gulp.src('app/*.html')
    .pipe(connect.reload());
});

gulp.task('script', function(){
  gulp.src('app/script/**/*.js')
    .pipe(connect.reload());
});

gulp.task('serve', function(){
  connect.server({
    root: 'app',
    livereload: true
  });
});

gulp.task('watch', function(){
  gulp.watch('app/sass/**/*.scss', ['compass']);
  gulp.watch('app/**/*.html', ['html']);
  gulp.watch('app/script/**/*.js', ['script'])
});


/**
 * Default Task
 */
gulp.task('default', ['compass', 'html', 'script', 'serve', 'watch'] );
