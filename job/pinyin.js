const  pinyin = require("pinyin");


// console.log(pinyin("中心"));    // [ [ 'zhōng' ], [ 'xīn' ] ]
// console.log(pinyin("中心", {
//   heteronym: true               // 启用多音字模式
// }));                            // [ [ 'zhōng', 'zhòng' ], [ 'xīn' ] ]
// console.log(pinyin("中心", {
//   heteronym: true,              // 启用多音字模式
//   segment: true                 // 启用分词，以解决多音字问题。
// }));                            // [ [ 'zhōng' ], [ 'xīn' ] ]
// console.log(pinyin("我喜欢你", {
//   segment: true,                // 启用分词
//   group: true                   // 启用词组
// }));                            // [ [ 'wǒ' ], [ 'xǐhuān' ], [ 'nǐ' ] ]
// console.log(pinyin("中心", {
//   style: pinyin.STYLE_INITIALS, // 设置拼音风格
//   heteronym: true
// })); 
const convert_to_pinyin=(str)=>{
    let arr=  pinyin( str,{
        style: pinyin.STYLE_NORMAL, 
    })
    let str2= ''
    arr.map(x=>{str2+=x[0]})

    return str2
}
let str= 'zh--555--中国---'
let str2= convert_to_pinyin(str)

console.log( str,str2);
// zh--555--中国--- [ [ 'zh--555--' ], [ 'zhōng' ], [ 'guó' ], [ '---' ] ]

let partten= /[^\u4E00-\u9FA5A-Za-z]+/g
// ：^[\u4e00-\u9fa5_a-zA-Z0-9]+$
// 中文、英文、数字包括下划线：^[\u4E00-\u9FA5A-Za-z0-9_]+$
let str3= str2.replace(partten,'')
 

console.log('正则匹配', str3 ,str2);
