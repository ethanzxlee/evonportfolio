var browserify = require('browserify');
var buff = require('vinyl-buffer');
var gulp = require('gulp');
var sass = require('gulp-sass');
var connect = require('gulp-connect');
var source = require('vinyl-source-stream');
var uglify = require('gulp-uglify');

gulp.task('connect', function () {
    connect.server({
        root: 'public',
        livereload: true,
    });
});

gulp.task('livereload', function () {
    return gulp.src('./public/**/*')
        .pipe(connect.reload());
});

gulp.task('watch', function () {
    gulp.watch('./sass/**/*.scss', ['sass']);
    gulp.watch('./js/**/*.js', ['browserify']);
    gulp.watch('./public/**/*', ['livereload']);
});

gulp.task('browserify', function () {
    return browserify('js/app.js', {
        debug: true,
    })
        .bundle()
        .pipe(source('bundle.js'))
        .pipe(buff())
        .pipe(gulp.dest('public/js'));
});

gulp.task('browserify-production', function () {
    return browserify('js/app.js', {
        debug: false,
    })
        .bundle()
        .pipe(source('bundle.js'))
        .pipe(buff())
        .pipe(uglify({
            compress: {
                drop_console: true
            }
        }))
        .pipe(gulp.dest('public/js'));
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
            }).on('error', sass.logError)
        )
        .pipe(gulp.dest('./public/css'));
});

gulp.task('develop', ['connect', 'watch', 'browserify', 'sass']);

gulp.task('default', ['browserify-production', 'sass-production']);