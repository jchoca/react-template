# React Project Template
## uses Browserify, Browsersync, Babel, and Gulp

## Installation/Usage:

**Step 1**: Install dependencies
```bash
$ npm install
```

**Step 2**: Start Gulp, etc.
```bash
$ npm start

### `gulpfile.js`:
```js
var gulp         = require('gulp');
var gutil        = require('gulp-util');
var source       = require('vinyl-source-stream');
var watchify     = require('watchify');
var browserify   = require('browserify');
var browserSync  = require('browser-sync');
var babelify     = require('babelify');

// Setting debug: true will cause Browserify to generate source maps
var opts = {
    cache: {},
    packageCache: {},
    debug: true
}
var bundler     = watchify(browserify('./app/js/app.jsx', opts));

// Babel handles jsx transformation and es6 to es5 compilation
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

gulp.task('default', ['bundle'], function () {
    browserSync({
        server: "./app"
    });
});
```