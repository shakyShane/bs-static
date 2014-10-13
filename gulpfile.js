var gulp         = require("gulp");
var sass         = require("gulp-ruby-sass");
var autoprefix   = require("gulp-autoprefixer");
var browserSync  = require("browser-sync");
var htmlInjector = require("bs-html-injector");

/**
 * Start BrowserSync
 */
gulp.task('browser-sync', function () {
    gulp.watch("scss/**/*.scss", ['sass']);
    browserSync({
        server: true,
        files: [
            "css/*.css",
            "index.html"
        ]
    });
});

/**
 * Compile CSS
 */
gulp.task('sass', function () {
    return gulp.src('scss/**/*.scss')
        .pipe(sass())
        .on('error', function (err) { console.log(err.message); })
        .pipe(autoprefix())
        .pipe(gulp.dest('css'));
});

gulp.task("default", ["sass", "browser-sync"]);