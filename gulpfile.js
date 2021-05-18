const gulp, { watch } = require('gulp');
const autoprefixer = require('autoprefixer');
const cssDeclarationSorter = require('css-declaration-sorter');
const Fiber = require('fibers');
const clean = require('gulp-clean');
const postcss = require('gulp-postcss');
const put = require('gulp-put');
const sass  = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
sass.compiler = require('sass');


