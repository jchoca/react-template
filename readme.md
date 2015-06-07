# React Project Template
## uses Browserify, Browsersync, Babel, and Gulp

## Installation/Usage:

To try this example, follow these 4 simple steps. 

**Step 1**: Install dependencies
```bash
$ npm install
```

**Step 2**: Start Gulp, etc.
```bash
$ npm start
```

### Additional Info:

Write your React JSX code, in ES6, compiled by Browserify and auto-reload all devices
when the compilation is complete.

### `gulpfile.js`:
```js
var gulp         = require('gulp');
var gutil        = require('gulp-util');
var source       = require('vinyl-source-stream');
var watchify     = require('watchify');
var browserify   = require('browserify');
var browserSync  = require('browser-sync');
var babelify     = require('babelify');

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

/**
 * Gulp task alias
 */
gulp.task('bundle', function () {
    return bundle();
});

/**
 * First bundle, then serve from the ./app directory
 */
gulp.task('default', ['bundle'], function () {
    browserSync({
        server: "./app"
    });
});
```