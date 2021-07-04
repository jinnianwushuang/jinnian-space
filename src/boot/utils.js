/*
 * @Date           : 2021-07-04 23:58:05
 * @FilePath       : /jinnian-space/src/boot/utils.js
 * @Description    : 
 */

import Vue from 'vue'
let isdev = process.env.DEV;
//  var path = require("path");

//  var  base_url = path.resolve('./');
var base_url = process.cwd();
//  console.log('  base_url ', base_url);

//  import  util from "src/util/index.js"
// util.compute_book_src()
const compute_book_src = str => {
  console.log("isdev", isdev);
  // let prefix='https://github.com/jinnianwushuang/jinnian-space/blob/master/public/'
  if (isdev) {
    // return     str.trim()
    // console.log( base_url+  str.trim());
    return "books/" + str.trim();
  } else {
    return "books/" + str.trim();
  }
};

const compute_book_name = item => {
  let arr = item.split("/");
  return arr[arr.length - 1];
};

const utils = {
  compute_book_src,
  compute_book_name
};




Vue.prototype.$utils = utils