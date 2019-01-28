const gulp = require('gulp')
const sass = require('gulp-sass')

gulp.task('sass', function (){
  return Gulp
    .src('scss/**/*.scss')
    .pipe(sass())
    .pipegulp.dest('css')
})
