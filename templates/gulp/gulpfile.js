var gulp = require('gulp'),
  connect = require('gulp-connect'),
  exec = require('child_process').exec,
  gh = require('gh-pages'),
  path = require('path'),
  opn = require('opn');

gulp.task('haxe', function(){
  exec('haxelib run flow build web', function(){
    connect.reload();
  })
});

gulp.task('connect', ['haxe'], function(){
  connect.server({
    root: 'bin/web',
    livereload: true
  });
});

gulp.task('open', ['connect'], function(done){
  opn('http://localhost:8080', done);
});

gulp.task('watch', function(){
  gulp.watch(['src/**', 'assets/**'], ['haxe'])
});

gulp.task('serve', ['open', 'watch']);
gulp.task('default', ['serve']);

gulp.task('deploy', ['haxe'], function (done) {
  gh.publish(path.join(__dirname, 'bin/web'))
})
