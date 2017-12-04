'use strict';

const gulp          = require('gulp');
const sass          = require('gulp-sass');
const sassGlob      = require('gulp-sass-glob');
const groupMediaQueries = require('gulp-group-css-media-queries');
const cleanCSS      = require('gulp-cleancss');
const imagemin      = require('gulp-imagemin');
const concat        = require('gulp-concat');
const uglify        = require('gulp-uglify');
const rename        = require('gulp-rename');
const sourcemaps    = require('gulp-sourcemaps');
const replace       = require('gulp-replace');
const del           = require('del');
const plumber       = require('gulp-plumber');
const browserSync   = require('browser-sync');
const autoprefixer  = require('gulp-autoprefixer');
const pug           = require('gulp-pug');
const svgSprite    = require('gulp-svg-sprites');
const svgmin    = require('gulp-svgmin');
// const babel         = require('gulp-babel');

const paths =  {
  src: 'src/',              // paths.src
  build: 'build/',           // paths.build
  project: 'RomaTur.github.io/' // paths.project - name of project
};


////////////////////////////////////
////////////WATCH///////////////////
////////////////////////////////////
gulp.task('sass-watch', function(){

    return gulp.src(paths.src+'sass/main.sass')
        .pipe(plumber())
        .pipe(sourcemaps.init())
        .pipe(sassGlob())
        .pipe(sass())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(paths.build + 'css/'))
        .pipe(browserSync.reload({stream: true}))

});

gulp.task('scripts-watch', function(){
    var headScripts =  gulp.src(paths.src + 'js/headScripts/*.js')
            .pipe(plumber())
            .pipe(concat('headScripts.js'))
            .pipe(gulp.dest(paths.build + 'js/'));
    var footerScripts = gulp.src(paths.src+'js/footerScripts/*.js')
            .pipe(plumber())
            .pipe(concat('footerScripts.js'))
            .pipe(gulp.dest(paths.build + 'js/'))
            .pipe(browserSync.reload({stream: true}));
    return headScripts, footerScripts;

});

gulp.task('html-watch',function(){
  return gulp.src(paths.src + 'views/index.pug')
    .pipe(plumber())
    .pipe(pug({pretty:true}))
    .pipe(replace(/\n\s*<!--DEV[\s\S]+?-->/gm, ''))
    .pipe(gulp.dest(paths.build))
    .pipe(browserSync.reload({stream: true}));
});

gulp.task('onlyMove-watch',function(){
    let img = gulp.src([paths.src + 'img/**/*.{jpg,png,jpeg}', paths.src + 'img/about/student.svg'])
            .pipe(plumber())
            .pipe(imagemin({
                progressive:true,
                interlaced:true
            }))
            .pipe(gulp.dest(paths.build + 'img/'))
            .pipe(browserSync.reload({stream: true}));
    let fonts = gulp.src(paths.src + 'fonts/**/*.*')
                .pipe(plumber())
                .pipe(gulp.dest(paths.build + 'fonts/'));
    let favicon = gulp.src(paths.src + 'favicon.ico')
                .pipe(plumber())
                .pipe(gulp.dest(paths.build ));
    let php = gulp.src(paths.src + 'php/**/*.php')
                .pipe(plumber())
                .pipe(gulp.dest(paths.build + 'php/'));
    return img , fonts, favicon, php;
});

gulp.task('sprites-watch', function () {
    return gulp.src(paths.src+'img/**/*.svg')
        .pipe(svgSprite({mode: "symbols"}))
        // .pipe(svgmin())
        .pipe(gulp.dest(paths.build+'img/'));
});
////////////////////////////////////
////////////////////////////////////
////////////////////////////////////
////////////////////////////////////





////////////////////////////////////
////////////BUILD///////////////////
////////////////////////////////////
gulp.task('sass', function(){

    return gulp.src(paths.src+'sass/main.sass')
        .pipe(plumber())
        .pipe(sassGlob())
        .pipe(sass())
        .pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true }))
        .pipe(groupMediaQueries())
        .pipe(cleanCSS())
        .pipe(gulp.dest(paths.build + 'css/'))

});

gulp.task('scripts', function(){
    let headScripts =  gulp.src(paths.src + 'js/headScripts/*.js')
            .pipe(plumber())
            // .pipe(uglify())
            .pipe(concat('headScripts.js'))
            .pipe(gulp.dest(paths.build + 'js/'));
    let footerScripts = gulp.src(paths.src+'js/footerScripts/*.js')
            .pipe(plumber())
            // .pipe(uglify())
            .pipe(concat('footerScripts.js'))
            .pipe(gulp.dest(paths.build + 'js/'));
    return headScripts, footerScripts;

});

gulp.task('html',function(){
  return gulp.src(paths.src + 'views/index.pug')
    .pipe(plumber())
    .pipe(pug())
    .pipe(replace(/\n\s*<!--DEV[\s\S]+?-->/gm, ''))
    .pipe(gulp.dest(paths.build));
});

gulp.task('onlyMove',function(){
    let img = gulp.src([paths.src + 'img/**/*.{jpg,png,jpeg}', paths.src + 'img/about/student.svg'])
            .pipe(plumber())
            .pipe(imagemin({
                progressive:true,
                interlaced:true
            }))
            .pipe(gulp.dest(paths.build + 'img/'));
    let fonts = gulp.src(paths.src + 'fonts/**/*.*')
                .pipe(plumber())
                .pipe(gulp.dest(paths.build + 'fonts/'));
    let favicon = gulp.src(paths.src + 'favicon.ico')
                .pipe(plumber())
                .pipe(gulp.dest(paths.build));
    let json = gulp.src(paths.src + 'js/**/*.json')
                .pipe(plumber())
                .pipe(gulp.dest(paths.build+'js/'));
    let php = gulp.src(paths.src + 'php/**/*.php')
                .pipe(plumber())
                .pipe(gulp.dest(paths.build + 'php/'));
    return img , fonts, favicon, php;
});

////////////////////////////////////
////////////////////////////////////
////////////////////////////////////
////////////////////////////////////

gulp.task('clean', function(){
    return del(paths.build)
});


gulp.task('watch', function(){
    gulp.watch(paths.src + 'sass/**/*.sass', gulp.series('sass-watch'));
    gulp.watch(paths.src + 'js/**/*.js', gulp.series('scripts-watch'));
    gulp.watch(paths.src + 'views/**/*.pug', gulp.series('html-watch'));
    gulp.watch([paths.src + 'img/**/*.*', paths.src + 'fonts/**/*.*', paths.src + 'favicon.ico', paths.src + 'js/**/*.json'], gulp.series('onlyMove-watch', 'sprites-watch'));
});

gulp.task('serve', function() {
    browserSync({
        notify:false,
        open:true,
        port:8889,
        proxy: "http://localhost:8888/"+paths.project+paths.build
    });
    // browserSync.watch(paths.build + '**/*.*', browserSync.reload({stream: true}));
});
///////////////////////////////////////////////////////////
gulp.task('build', gulp.series(
  'clean',
  gulp.parallel('sass', 'scripts', 'html', 'onlyMove', 'sprites-watch')
));
////////////////////////////////////////////////////////////
gulp.task('default', gulp.series(
  'clean',
  gulp.parallel('sass-watch', 'scripts-watch', 'html-watch', 'onlyMove', 'sprites-watch'),
  gulp.parallel('watch', 'serve')
));
