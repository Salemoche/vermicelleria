const gulp = require('gulp');
var babel = require('gulp-babel');
const sass = require('gulp-sass');
// const uglify = require('gulp-clean-css');
const autoPrefixer = require('gulp-autoprefixer');

/*

  --- Top Level Functions ---

  gulp.task - Define tasks
  gulp.src - Point to files to user
  gulp.dest - Points to folder to output
  gulp.watch - Watch files and folders for changes

*/


//
// Sass
//

const compileSass = function(){
  return gulp.src('./src/sass/style.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(autoPrefixer())
    // .pipe(uglify())
    .pipe(gulp.dest('./dist/css'));
}

gulp.task('sass', compileSass);

//
// Scripts
//

const compileJS = function() {
  return gulp.src(
    [
    './node_modules/babel-polyfill/dist/polyfill.js',
    './src/js/*.js'
    ])
    .pipe(babel())
    .pipe(gulp.dest('./dist/js'))
}

gulp.task('scripts', compileJS);


//
// Default
//

gulp.task('default', gulp.series(gulp.parallel(compileSass, compileJS)));

gulp.task('watch', function(){
  gulp.watch('./src/sass/**/*.scss')
  .on('change', gulp.series('sass', function(done){
    done();
  }));
  gulp.watch('./src/js/*.js')
  .on('change', gulp.series('scripts', function(done){
    done();
  }));
});
