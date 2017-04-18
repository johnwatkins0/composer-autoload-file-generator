import gulp from 'gulp';
import babel from 'gulp-babel';

gulp.task('default', () => {
  return gulp
    .src('src/index.js')
    .pipe(babel({ presets: [ 'node6' ] }))
    .pipe(gulp.dest('dist'));
});
