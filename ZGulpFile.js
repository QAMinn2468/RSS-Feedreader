gulp.task('default', () =>
  return gulp.src('src/images/*')
    .pipe(imagemin({
      progressive: true,
      use: [pngquant()]
    }))
      .pipe(gulp.dest('dist/images'));
 );
