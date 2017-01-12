var gulp = require('gulp');
var concat = require('gulp-concat');
var replace = require('gulp-replace');
 
gulp.task('default',function(){
	gulp.start('cacheBuster')
}); 
gulp.task('cacheBuster', function () {
    var randomNumber = parseInt(Math.random()*909090) ;
    return gulp.src('./public/test.html', { base: './' }) //must define base so I can overwrite the src file below. Per http://stackoverflow.com/questions/22418799/can-gulp-overwrite-all-src-files
        .pipe(replace(':cacheBuster', '?ts=' + randomNumber))  //so find the script tag with an id of bundle, and replace its src.
        .pipe(gulp.dest('./')); //Write the file back to the same spot.
});