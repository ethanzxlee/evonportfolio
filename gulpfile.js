var gulp = require('gulp');
var sass = require('gulp-sass');
var connect = require('gulp-connect');

gulp.task('connect', function () {
    connect.server({
        root: 'public',
        livereload: true,
    });
});

gulp.task('sass', function () {
    return gulp.src('./sass/bundle.scss')
        .pipe(sass({ errLogToConsole: true }))
        .pipe(gulp.dest('./public/css'));
});

gulp.task('sass-production', function () {
    return gulp.src('./sass/bundle.scss')
        .pipe(sass({
            outputStyle: 'compressed'
        }))
        .pipe(sass({ errLogToConsole: true }))
        .pipe(gulp.dest('./public/css'));
});

gulp.task('livereload', function () {
    return gulp.src('./public/**/*')
        .pipe(connect.reload());
});

gulp.task('watch', function () {
    gulp.watch('./sass/**/*.scss', ['sass']);
    gulp.watch('./public/**/*', ['livereload']);
});

gulp.task('develop', ['connect', 'watch', 'sass']);

gulp.task('default', ['sass-production']);