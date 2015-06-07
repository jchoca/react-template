var gulp         = require('gulp');
var gutil        = require('gulp-util');
var source       = require('vinyl-source-stream');
var watchify     = require('watchify');
var browserify   = require('browserify');
var browserSync  = require('browser-sync');
var babelify     = require('babelify');
var sass         = require('gulp-sass');

// Input file.
var opts = {
    cache: {},
    packageCache: {},
    debug: true
}
var bundler     = watchify(browserify('./app/js/app.jsx', opts));

bundler.transform(babelify);

// On updates recompile
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
        .pipe(gulp.dest('./app/js/dist'))
        .pipe(browserSync.reload({stream: true, once: true}));
}

gulp.task('bundle', function () {
    return bundle();
});

gulp.task('sass', function () {
  gulp.src('./app/sass/**/*.scss')
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(gulp.dest('./app/css'))
    .pipe(browserSync.reload({stream: true, once: true}));
});
 
gulp.task('sass:watch', function () {
  gulp.watch('./app/sass/**/*.scss', ['sass']);
});

gulp.task('default', ['bundle', 'sass:watch'], function () {
    browserSync({
        server: "./app"
    });
});