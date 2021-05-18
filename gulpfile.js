/** @format */

// main gulp commands
const { src, dest, watch, series, parallel } = require("gulp");
// sass imports
const sass = require("gulp-sass");
sass.compiler = require("sass");
//* Note: Dart Sass, synchronous compilation is twice as fast as asynchronous
//* compilation by default, due to the overhead of asynchronous callbacks.
//* fibers package helps with this.
const Fiber = require("fibers");
// sourcemaps for the sass, css, & JS files.
const sourcemaps = require("gulp-sourcemaps");
// postcss plugin to use postcss tooling in gulp.
const postcss = require("gulp-postcss");
// add prefixes for webkit or mozilla if needed without having to write them.
const autoprefixer = require("autoprefixer");
// keeps file and directory shape and `puts` where you like.
const put = require("gulp-put");

function sassToCss() {
  const plugins = [autoprefixer()];
  return src("./sass/base.scss")
    .pipe(sourcemaps.init())
    .pipe(sass({ fiber: Fiber }).on("error", sass.logError))
    .pipe(postcss(plugins))
    .pipe(sourcemaps.write("./"))
    .pipe(dest("./css"));
}

exports.watchSass = function () {
  watch("./sass/**/*.scss", sassToCss);
};

exports.sassToCss = sassToCss;
