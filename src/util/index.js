/*
 * @Date           : 2020-10-30 23:46:29
 * @FilePath       : /jinnian-space/src/util/index.js
 * @Description    : 
 */

 let  isdev=process.env.DEV
//  var path = require("path");

//  var  base_url = path.resolve('./');
 var  base_url =  process.cwd()
//  console.log('  base_url ', base_url);

//  import  util from "src/util/index.js"
// util.compute_public_data_src()
const  compute_public_data_src=(str)=>{
  console.log('isdev',isdev);
        let prefix='https://github.com/jinnianwushuang/jinnian-space/blob/master/public/'
        if(isdev){
          // return     str.trim()
          // console.log( base_url+  str.trim());
          return  'books/'+ str.trim()

        }else{
             return  prefix+ 'books/'+ str.trim()
        }
          
}


export default {
    compute_public_data_src
}