/*
 * @Date           : 2021-07-04 19:33:41
 * @FilePath       : /jinnian-space/z-sh/cp.js
 * @Description    :
 */
const { setTimeout } = require('core-js');
var shell = require('shelljs');
if (!shell.which('git')) {
  shell.echo('Sorry, this script requires git');
  shell.exit(1);
}
console.log('-------删除操作和拷贝操作 将于两秒后执行---------');
// setTimeout(function(){

// // Copy files to release dir
// shell.rm('-rf', './public/fonts/*');
// // shell.cp('-R', './docs-2/fonts/*', './public/fonts/');
// shell.rm('-rf', './public/css/*');
// // shell.cp('-R', './docs-2/css/*', './public/css/');
// shell.rm('-rf', './public/js/*');
// // shell.cp('-R', './docs-2/js/*', './public/js/');
// shell.rm('-rf', './index.html');
// // shell.cp('-R', './docs-2/index.html', './index.html');
// console.log('-------删除操作  执行完毕   ---------');
// },2000)

function remove_old_stuff(){
  console.log('-------删除操作  开始执行   ---------');
  shell.rm('-rf', './public/fonts/*');
  shell.rm('-rf', './public/css/*');
  shell.rm('-rf', './public/js/*');
  shell.rm('-rf', './index.html');
  console.log('-------删除操作  执行完毕   ---------');
}

function copy_new_stuff(){
  console.log('-------拷贝操作  开始执行   ---------');
  shell.cp('-R', './docs-2/fonts/*', './public/fonts/');
  shell.cp('-R', './docs-2/css/*', './public/css/');
  shell.cp('-R', './docs-2/js/*', './public/js/');
  shell.cp('-R', './docs-2/index.html', './index.html');
  console.log('-------拷贝操作  执行完毕   ---------');
}


setTimeout(remove_old_stuff,2000)
setTimeout(copy_new_stuff,6000)


// rm -r ./public/fonts/* ; cp -r ./docs-2/fonts/*  ./public/fonts/
// rm -r ./public/css/* ; cp -r ./docs-2/css/*  ./public/css/
// rm -r ./public/js/* ; cp -r ./docs-2/js/*  ./public/js/
// Replace macros in each .js file
// shell.cd('lib');
// shell.ls('*.js').forEach(function (file) {
//   shell.sed('-i', 'BUILD_VERSION', 'v0.1.2', file);
//   shell.sed('-i', /^.*REMOVE_THIS_LINE.*$/, '', file);
//   shell.sed('-i', /.*REPLACE_LINE_WITH_MACRO.*\n/, shell.cat('macro.js'), file);
// });
// shell.cd('..');
// // Run external tool synchronously
// if (shell.exec('git commit -am "Auto-commit"').code !== 0) {
//   shell.echo('Error: Git commit failed');
//   shell.exit(1);
// }
