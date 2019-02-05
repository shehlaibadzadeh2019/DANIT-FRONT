let gulp = require('gulp');
gulp.task('test1', function(){
    console.log('test1');
});
gulp.task('test2', function(){
    console.log('test2');
});

gulp.task('testAll', ['test1', 'test2'], function(){
    console.log('All test passed');
});

gulp.task('copy-html', function(){
    gulp.src('./src/**/*.html').
    pipe(gulp.dest('./dist/'));
});