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

const  md5 = require("md5")
const  pinyin = require("pinyin");
const convert_to_pinyin=(str)=>{
    let arr=  pinyin( str,{
        style: pinyin.STYLE_NORMAL, 
    })
    let str2= ''
    arr.map(x=>{str2+=x[0]})
    return str2
}
// 计算相对文件夹路径 
// 输入 "./distributed-system/rpc/服务之间的调用为啥不直接用HTTP而用RPC.md"  输出  distributed-system/rpc/
const  compute_relative_folder=(x)=>{
    if(!x){
        return ''
    }
    let str =''
    let arr= x.split("/")
    arr.shift()
    arr.pop()
    str= arr.join("/")
    return  str?  '/'+ str+'/' :''
}

// " distributed-system/zookeeper/zookeeper-in-action"  ==>  'zookeeper-in-action'
const compute_show_label=(x)=>{
    x=x||''
    let str=''
    let arr= x.split('/')
    let len= arr.length

   

    return  arr[len-1] 
}

/**
 * 
 * @param {*} field_components  webpack require 进来的  指定 文件
 * @param {*} type            文件类型
 * @param {*} convert_name    转换 模块 value 键  默认转换
 * @param {*} warp_html       转换包裹上HTML    默认 不转化
 * @param {*} beautify_label   美化  显示的  label  默认 不美化 
 * @returns 
 */
export const compute_config_base_on_require_context=(field_components,type='md',convert_name=true,warp_html=false,beautify_label=true)=>{
    //warp_html  转换包裹上HTML 
    console.log('当前 require.context---',field_components);
    console.log('当前 field_components.keys()---',field_components.keys());
    let filenames=  field_components.keys()
    // let all_keys =filenames.map(x=>{ return x.slice(2,x.length-tail)})
    let  all_components={ }  //所有组件 
    let all_modules=[] //组件 英文 名字 和 值 // { label: "双向绑定原理", value: "m2" },
    let all_modules_obj={} // 组件 英文 名字 和 值 对象 键值对 
       let label_arr= [] // label 排序
    // 匹配中文 /[\u4e00-\u9fa5]/gm
    //匹配 英文  /^[a-z]+$/i          /[a-zA-Z]/
    // 匹配数字   /^\d+$/
    // 英文数字下划线 /^\w+$/  [a-zA-Z0-9_] \w
    filenames.map(x=>{
        let partten= /[^\u4E00-\u9FA5A-Za-z]+/g
        // ：^[\u4e00-\u9fa5_a-zA-Z0-9]+$
        // 中文、英文、数字包括下划线：^[\u4E00-\u9FA5A-Za-z0-9_]+$
        let label= x.slice(2,x.length-type.length-1)
        let value = "module_"+ md5(x)
        // if(convert_name){
        //     //
        //     value =  convert_to_pinyin(x).replace(partten,'')
        //     value= value.slice(0,value.length-type.length)
        // }else{
        //     value= label
        // }
        

        // field_components[x].default.name
        label_arr.push(label)
        all_modules_obj[label] = {
            value, //模块键
            relative_path: x,  //相对路径
            relative_folder: compute_relative_folder(x), //相对文件夹 路径 
        }
        console.log('x---',x);
        if(warp_html){
            // 包裹html  一般 用户 各类型的配置文件 
            all_components[value]=     `
            <div>
            <code>
              ${ field_components(x).default }
            </code>
            </div>
            `  

        }else{
            // 原始形态 一般用与 md 文件
            all_components[value]= field_components(x).default
        }
       
    })
    label_arr.sort((a,b)=>parseFloat(a)-parseFloat(b))
    label_arr.map(x=>{
              all_modules.push({
            label:   beautify_label? compute_show_label(x) :x,
            value:all_modules_obj[x]['value'],
            modules_obj:{...all_modules_obj[x]}
        })
    })
    console.log('all_components------------',all_components);
    console.log('all_modules---------------',all_modules);
    return {
         all_components,
        all_modules
    }
}



// export const  convert_to_html =(field_components,type,convert_name=true)=>{

//     return  compute_config_base_on_require_context(field_components,type,convert_name,true)

// }





// =======================================输出结果参照=======================================================


//  all_components={
//     module_8e58cf6bc79f1125a4d2ead6baad2f09 :'# 一些散乱笔记\r\n\r\nnode 项目 遇到的坑\r\n\r\n- linux 部署 node 项目 后台运行 需要两次回车 ，第一次 退出 node 项目界.....'
//  } 


//  all_modules =[
//    {
//     label: "0.概述笔记",
//     value: "module_8e58cf6bc79f1125a4d2ead6baad2f09",
//     modules_obj:{
//         relative_folder: "",
//         relative_path: "./0.概述笔记.md",
//         value: "module_8e58cf6bc79f1125a4d2ead6baad2f09" ,
//     }
//    }

//  ]
