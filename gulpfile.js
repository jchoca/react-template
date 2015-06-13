var babelify     = require('babelify');
var browserify   = require('browserify');
var browserSync  = require('browser-sync');
var gulp         = require('gulp');
var sass         = require('gulp-sass');
var sourcemaps   = require('gulp-sourcemaps');
var gutil        = require('gulp-util');
var source       = require('vinyl-source-stream');
var watchify     = require('watchify');

var opts = {
    cache: {},
    packageCache: {},
    // setting debug: true causes source maps to be generated
    debug: true
}
var bundler     = watchify(browserify('./app/js/app.jsx', opts));

bundler.transform(babelify);

bundler.on('update', bundle);

function bundle() {

    gutil.log('Compiling JS...');

    return bundler.bundle()
        .on('error', function (err) {
            gutil.log(err.message);
            browserSync.notify("Browserify Error!");
            this.emit("end");
        })
        .pipe(source('bundle.js'))
        .pipe(gulp.dest('./app/build/js'))
        .pipe(browserSync.reload({stream: true, once: true}));
}

gulp.task('bundle', function () {
    return bundle();
});

gulp.task('sass:dev', function () {
  gulp.src('./app/sass/**/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./app/build/css'))
    .pipe(browserSync.reload({stream: true, once: true}));
});

gulp.task('sass', function () {
    gulp.src('./app/sass/**/*.scss')
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(gulp.dest('./app/build/css'));
});
 
gulp.task('sass:watch', function () {
  gulp.watch('./app/sass/**/*.scss', ['sass:dev']);
});

gulp.task('default', ['bundle', 'sass', 'sass:watch'], function () {
    browserSync({
        server: "./app"
    });
});