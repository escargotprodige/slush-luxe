var gulp = require('gulp'),
  connect = require('gulp-connect'),
  exec = require('child_process').exec,
  watch = require('gulp-watch'),
  gh = require('gh-pages'),
  path = require('path'),
  opn = require('opn');

gulp.task('haxe', function(done){
  exec('haxelib run flow build web', done);
});

gulp.task('connect', ['haxe'], function(done){
  connect.server({
    root: 'bin/web',
    livereload: true
  });

  opn('http://localhost:8080', done)
});

gulp.task('watch', function(){
  gulp.watch(['src/**', 'assets/**'], ['haxe']);
  watch('bin/web').pipe(connect.reload());
});

gulp.task('default', ['connect', 'watch']);

gulp.task('deploy', ['haxe'], function (done) {
  gh.publish(path.join(__dirname, 'bin/web'))
});
