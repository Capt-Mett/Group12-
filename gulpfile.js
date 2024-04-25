var gulp = require("gulp"),
  sass = require("gulp-sass")(require("sass")),
  concat = require("gulp-concat"),
  sourcemaps = require("gulp-sourcemaps"),
  browsersync = require("browser-sync").create(),
  terser = require("gulp-terser"),
  rename = require("gulp-rename"),
  cleancss = require("gulp-clean-css"),
  flatten = require("gulp-flatten");

var paths = {
  styles: {
    // By using styles/**/*.sass we're telling gulp to check all folders for any sass file
    src: "resource/scss/*.scss",
    // Compiled files will end up in whichever folder it's found in (partials are not compiled)
    dest: "assets/css",
  },
};

var SassBuild = () => {
  return gulp
    .src(paths.styles.src)
    .pipe(sourcemaps.init())
    .pipe(sass({ outputStyle: "compressed" })) // Using gulp-sass
    .pipe(
      rename({
        suffix: ".min",
      })
    )
    .pipe(sourcemaps.write("."))
    .pipe(gulp.dest(paths.styles.dest));
};

function browserSyncReload(done) {
  browsersync.reload();
  done();
}

function html() {
  return gulp.src("app/*.html").pipe(gulp.dest("dist/"));
}

function style() {
  return (
    gulp
      .src(paths.styles.src)
      .pipe(sourcemaps.init())
      .pipe(sass())
      .on("error", sass.logError)
      // .pipe(postcss([autoprefixer(), cssnano()]))
      .pipe(sourcemaps.write())
      .pipe(gulp.dest(paths.styles.dest))
      .pipe(
        rename({
          suffix: ".min",
        })
      )
      .pipe(cleancss())
      .pipe(gulp.dest(paths.styles.dest))
      .pipe(browsersync.stream())
  );
}

function script_app() {
  return (
    gulp
      .src([
        "!resource/js/**/*.js",
        "!resource/js/**/*.min.js",
        "resource/js/**/angular.min.js",
        "resource/js/**/app.js",
      ])
      .pipe(concat("app.min.js"))
      // .pipe(sourcemaps.write())
      .pipe(gulp.dest("assets/js"))
      .pipe(browsersync.stream())
  );
}

function script() {
  return (
    gulp
      .src([
        "resource/js/**/local_lang_template.js",
        "resource/js/blazy.min.js",
        "resource/js/jquery.blockUI.js",
        "resource/js/swiper.min.js",
        "resource/js/global.js",
        // '!resource/js/**/*.min.js',
        "!resource/js/**/app.js",
      ])
      .pipe(concat("plus-lib.js"))
      .pipe(sourcemaps.init())
      //.pipe(uglify())
      .pipe(
        rename({
          suffix: ".min",
        })
      )
      .pipe(sourcemaps.write())
      // .pipe(flatten())
      .pipe(gulp.dest("assets/js"))
      .pipe(browsersync.stream())
  );
}

function copyCssVendor() {
  return (
    gulp
      .src([
        "!resource/css/**/*.min.css",
        "resource/css/**/*.css",
        "resource/css/SansiriCore.css",
        "resource/css/stylecard.css",
        "resource/css/form.css",
        "resource/css/global.css",
        "resource/css/search.css",
      ])
      .pipe(flatten())
      // .pipe(postcss([autoprefixer(), cssnano()]))
      // .pipe(rename({
      //     suffix: ".min"
      // }))
      // .pipe(cssImport())
      .pipe(cleancss())
      .pipe(concat("global.min.css"))
      .pipe(gulp.dest("assets/css"))
  );
}

function copyScriptVendor() {
  return gulp
    .src(["resource/js/*.min.js"])
    .pipe(flatten())
    .pipe(gulp.dest("assets/js"));
}

function copyImage() {
  return gulp
    .src(["resource/images/*.*"])
    .pipe(flatten())
    .pipe(gulp.dest("assets/images"));
}

function copyJsBower() {
  return gulp
    .src(["app/bower_components/**/dist/**/*.js"])
    .pipe(flatten())
    .pipe(gulp.dest("dist/js"));
}

function copyCssBower() {
  return gulp
    .src(["app/bower_components/**/dist/**/*.min.css"])
    .pipe(flatten())
    .pipe(gulp.dest("dist/css"));
}

function copyFonts() {
  return gulp
    .src(["app/fonts/*.*"])
    .pipe(flatten())
    .pipe(gulp.dest("dist/fonts"));
}

function copyWebfonts() {
  return gulp
    .src(["app/webfonts/*.*"])
    .pipe(flatten())
    .pipe(gulp.dest("dist/webfonts"));
}

function copyJson() {
  return gulp
    .src(["resource/source_data/*.*"])
    .pipe(flatten())
    .pipe(gulp.dest("source_data/"));
}

function watchFiles() {
  // gulp.watch(paths.styles.src, style);
  // gulp.watch(['resource/js/**/*.js','!resource/js/**/*.min.js','!resource/js/**/app.js'], script);
  // gulp.watch(['!resource/js/**/*.js','!resource/js/**/*.min.js','resource/js/**/app.js'], script_app);
  gulp.watch(paths.styles.src,
    SassBuild
  );
  // gulp.watch(['resource/source_data/*.json'], copyJson);
  // gulp.watch(['resource/source_data/*.json'], browserSyncReload);
}

var build = gulp.parallel(SassBuild, watchFiles);

// export tasks
exports.SassBuild = SassBuild;
exports.build = build;
exports.default = build;
