// https://webpack.js.org/api/module-methods/#requirecontext
// require.context
// require.context(
//   (directory: String),
//   (includeSubdirs: Boolean) /* optional, default true */,
//   (filter: RegExp) /* optional, default /^\.\/.*$/, any file */,
//   (mode: String) /* optional, 'sync' | 'eager' | 'weak' | 'lazy' | 'lazy-once', default 'sync' */
// );
// Specify a whole group of dependencies using a path to the directory, an option to includeSubdirs, a filter for more fine grained control of the modules included, and a mode to define the way how loading will work. Underlying modules can then be easily resolved later on:

// var context = require.context('components', true, /\.html$/);
// var componentA = context.resolve('componentA');
// If mode is set to 'lazy', the underlying modules will be loaded asynchronously:

// var context = require.context('locales', true, /\.json$/, 'lazy');
// context('localeA').then((locale) => {
//   // do something with locale
// });
// The full list of available modes and their behavior is described in import() documentation.

// require.include

/**
 * 
 * 此插件 只适用于 同步引入 sync vue 和 md 文件 ，并且VUE 文件为简单文件 ，不能有其他 提前加载的需要 计算 东西 例如 excel 
 * 
 */

//  import {compute_config_base_on_require_context} from "src/boot/require-utils.js"
//  llet { all_components, all_modules }  =compute_config_base_on_require_context(require.context('./md/', false, /\.md$/))
 

//  import {compute_config_base_on_require_context} from "src/boot/require-utils.js"
//  let { all_components, all_modules } =compute_config_base_on_require_context(require.context('./module/', false, /\.vue$/),'vue')
const  pinyin = require("pinyin");
const convert_to_pinyin=(str)=>{
    let arr=  pinyin( str,{
        style: pinyin.STYLE_NORMAL, 
    })
    let str2= ''
    arr.map(x=>{str2+=x[0]})
    return str2
}
export const compute_config_base_on_require_context=(field_components,type='md',convert_name=true)=>{
    console.log('当前 require.context---',field_components);
    console.log('当前 field_components.keys()---',field_components.keys());
   
     
   
    let filenames=  field_components.keys()
    // let all_keys =filenames.map(x=>{ return x.slice(2,x.length-tail)})
    let  all_components={ }  //所有组件 
    let all_modules=[] //组件 英文 名字 和 值 // { label: "双向绑定原理", value: "m2" },
    // 匹配中文 /[\u4e00-\u9fa5]/gm
    //匹配 英文  /^[a-z]+$/i          /[a-zA-Z]/
    // 匹配数字   /^\d+$/
    // 英文数字下划线 /^\w+$/  [a-zA-Z0-9_] \w
    filenames.map(x=>{
        let partten= /[^\u4E00-\u9FA5A-Za-z]+/g
        // ：^[\u4e00-\u9fa5_a-zA-Z0-9]+$
        // 中文、英文、数字包括下划线：^[\u4E00-\u9FA5A-Za-z0-9_]+$
        let label= x.slice(2,x.length-type.length-1)
        let value = ''
        if(convert_name){
            //
            value =  convert_to_pinyin(x).replace(partten,'')
            value= value.slice(0,value.length-type.length)
        }else{
            value= label

        }
        
    
        // field_components[x].default.name
    
     
        all_modules.push({
            label,
            value
        })
        console.log('x---',x);

        all_components[value]= field_components(x).default
    })
    console.log('all_components------------',all_components);
    console.log('all_modules---------------',all_modules);
    return {
         all_components,
        all_modules
    }
}