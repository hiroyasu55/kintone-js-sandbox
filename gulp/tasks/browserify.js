var browserify = require('browserify');
var watchify = require('watchify');
var bundleLogger = require('../util/bundleLogger');
var gulp = require('gulp');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');
var buffer = require('vinyl-buffer');
var handleErrors = require('../util/handleErrors');
var source = require('vinyl-source-stream');
// var notify       = require('gulp-notify');
var config = require('../jsConfig');
var apps = config.modules;

var createTask = function (entries, dest) {
    return function () {
        var bundleMethod = global.isWatching ? watchify : browserify;

        var bundler = bundleMethod({
            entries: entries,
            extensions: ['.coffee']
        });

        var bundle = function () {
            bundleLogger.start();

            return bundler
                .bundle({debug: true}) // Enable source maps
                .on('error', handleErrors)
                .pipe(source(dest + ".js"))
                .pipe(buffer())
                .pipe(gulp.dest(config.destDir))
                .pipe(uglify())
                .pipe(rename({suffix: '.min'}))
                .pipe(gulp.dest(config.destDir))

                // .pipe(notify("Run browserify"))
                .on('end', bundleLogger.end);
        };

        if (global.isWatching) {
            // Rebundle with watchify on changes.
            bundler.on('update', bundle);
        }

        return bundle();
    };
};

// Generate sub tasks
apps.forEach(function (m) {
    gulp.task("browserify:" + m,
        createTask([config.srcDir + m + "/" + config.entryPointFile],
            m));
});

// Generate main task
var tasks = apps.map(function (app) {
    return "browserify:" + app;
});

gulp.task('browserify', tasks);
