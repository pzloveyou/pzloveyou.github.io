// const gulp = require('gulp')
// const cleanCSS = require('gulp-clean-css')
// const htmlmin = require('gulp-html-minifier-terser')
// const htmlclean = require('gulp-htmlclean')
// const imagemin = require('gulp-imagemin')
// // gulp-tester (如果使用 gulp-tester,把下面的//去掉)
// //const terser = require('gulp-terser');
//
// // babel (如果不是使用bebel,把下面兩行註釋掉)
// const uglify = require('gulp-uglify')
// const babel = require('gulp-babel')
//
// // const workbox = require("workbox-build");
// //
// // // pwa
// // gulp.task('generate-service-worker', () => {
// //     return workbox.injectManifest({
// //         swSrc: './sw-template.js',
// //         swDest: './public/sw.js',
// //         globDirectory: './public',
// //         globPatterns: [
// //             "**/*.{html,css,js,json,woff2}"
// //         ],
// //         modifyURLPrefix: {
// //             "": "./"
// //         }
// //     });
// // });
//
// // gulp.task("build",gulp.series("generate-service-worker"));
//
//
// // minify js - babel（ 如果不是使用bebel,把下面註釋掉）
// gulp.task('compress', () =>
//     gulp.src(['./public/**/*.js', '!./public/**/*.min.js'])
//         .pipe(babel({
//             presets: ['@babel/preset-env']
//         }))
//         .pipe(uglify().on('error', function (e) {
//             console.log(e)
//         }))
//         .pipe(gulp.dest('./public'))
// )
//
// //minify js - gulp-tester (如果使用 gulp-tester,把下面前面的//去掉)
// // gulp.task('compress', () =>
// //   gulp.src(['./public/**/*.js', '!./public/**/*.min.js'])
// //     .pipe(terser())
// //     .pipe(gulp.dest('./public'))
// // )
//
//
//
//
// // css
// gulp.task('minify-css', () => {
//     return gulp.src('./public/**/*.css')
//         .pipe(cleanCSS({
//             compatibility: 'ie11'
//         }))
//         .pipe(gulp.dest('./public'))
// })
//
// // 壓縮 public 目錄內 html
// gulp.task('minify-html', () => {
//     return gulp.src('./public/**/*.html')
//         .pipe(htmlclean())
//         .pipe(htmlmin({
//             removeComments: true, // 清除 HTML 註釋
//             collapseWhitespace: true, // 壓縮 HTML
//             collapseBooleanAttributes: true, // 省略布爾屬性的值 <input checked="true"/> ==> <input />
//             removeEmptyAttributes: true, // 刪除所有空格作屬性值 <input id="" /> ==> <input />
//             removeScriptTypeAttributes: true, // 刪除 <script> 的 type="text/javascript"
//             removeStyleLinkTypeAttributes: true, // 刪除 <style> 和 <link> 的 type="text/css"
//             minifyJS: true, // 壓縮頁面 JS
//             minifyCSS: true, // 壓縮頁面 CSS
//             minifyURLs: true
//         }))
//         .pipe(gulp.dest('./public'))
// })
//
// // 壓縮 public/uploads 目錄內圖片
// gulp.task('minify-images', async () => {
//     gulp.src('./public/image/**/*.*')
//         .pipe(imagemin({
//             optimizationLevel: 5, // 類型：Number  預設：3  取值範圍：0-7（優化等級）
//             progressive: true, // 類型：Boolean 預設：false 無失真壓縮jpg圖片
//             interlaced: false, // 類型：Boolean 預設：false 隔行掃描gif進行渲染
//             multipass: false // 類型：Boolean 預設：false 多次優化svg直到完全優化
//         }))
//         .pipe(gulp.dest('./public/img'))
// })
//
// // 執行 gulp 命令時執行的任務
// gulp.task("default",gulp.parallel(
//     'compress','minify-html', 'minify-css', 'minify-images'
// ));
//


//使用另外一个
// 引入需要的模块
var gulp = require('gulp');
var minifycss = require('gulp-minify-css');
var uglify = require('gulp-uglify');
var htmlmin = require('gulp-htmlmin');
var htmlclean = require('gulp-htmlclean');
var imagemin = require('gulp-imagemin');

// 压缩public目录下所有html文件, minify-html是任务名, 设置为default，启动gulp压缩的时候可以省去任务名
gulp.task('minify-html', function() {
    return gulp.src('./public/**/*.html') // 压缩文件所在的目录
        .pipe(htmlclean())
        .pipe(htmlmin({
            removeComments: true,
            minifyJS: true,
            minifyCSS: true,
            minifyURLs: true,
        }))
        .pipe(gulp.dest('./public')) // 输出的目录
});

// 压缩css
gulp.task('minify-css', function() {
    return gulp.src(['./public/**/*.css','!./public/js/**/*min.css'])
        .pipe(minifycss({
            compatibility: 'ie8'
        }))
        .pipe(gulp.dest('./public'));
});
// 压缩js
gulp.task('minify-js', function() {
    return gulp.src(['./public/**/.js','!./public/js/**/*min.js'])
        .pipe(uglify())
        .pipe(gulp.dest('./public'));
});
// 压缩图片
gulp.task('minify-images', function() {
    return gulp.src(['./public/**/*.png','./public/**/*.jpg','./public/**/*.gif'])
        .pipe(imagemin(
            [imagemin.gifsicle({'optimizationLevel': 3}),
                imagemin.mozjpeg({'progressive': true}),
                imagemin.optipng({'optimizationLevel': 5}),
                imagemin.svgo()],
            {'verbose': true}))
        .pipe(gulp.dest('./public'))
});
// gulp 4.0 适用的方式
gulp.task('default', gulp.parallel('minify-html','minify-css','minify-js','minify-images'
));

