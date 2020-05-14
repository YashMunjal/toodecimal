const gulp = require('gulp')
const imagemin=require('gulp-imagemin');
const cssmin=require('gulp-clean-css');
const uglify=require('gulp-uglify');
var htmlmin = require('gulp-html-minifier');

gulp.task('message',async function(){
    return console.log('Gulp Started');
});

//image-optimization
gulp.task('imageMin',async ()=>{
    gulp.src('img/*')
    .pipe(imagemin())
    .pipe(gulp.dest('build/img'))
});

gulp.task('jsMin',async ()=>{
    gulp.src('js/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('build/js'));
    gulp.src('vendor/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('build/js/vendor'));
});
gulp.task('cssMin',async ()=>{
    gulp.src('css/*.css')
    // Minify the file
    .pipe(cssmin())
    // Output
    .pipe(gulp.dest('build/css'))
});
//minify html
gulp.task('minifyHtml', async function() {
    gulp.src('*.html')
      .pipe(htmlmin({collapseWhitespace: true}))
      .pipe(gulp.dest('./build'))
  });

  gulp.task('default',gulp.series('message','minifyHtml','imageMin','jsMin','cssMin'));