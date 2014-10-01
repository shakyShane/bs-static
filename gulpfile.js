var gulp         = require("gulp");
var sass         = require("gulp-ruby-sass");
var autoprefix   = require("gulp-autoprefixer");
var browserSync  = require("/Users/shakyshane/sites/os-browser-sync");
var htmlInjector = require("/Users/shakyshane/code/bs-plugins/html-injector");
var cp           = require("/Users/shakyshane/Sites/browser-sync-modules/browser-sync-cp");

/**
 * Start BrowserSync
 */
gulp.task('browser-sync', function () {
    gulp.watch("scss/**/*.scss", ['sass']);
    browserSync.use(htmlInjector, {files: "*.html"});
    browserSync.use(cp);
    browserSync({
        server: true,
        files: ["css/**"]
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