/**
 * 如果自己使用 需要 改一下文件夹路径
 * 以及安装依赖
 * 此脚本 支持
 * 1.   单个或者 多个 文件 合并
 * 2.   单个或者多个文件 合并 拆分
 * 3.   生成文件对等注释 占位文本 和 映射表
 *
 */
console.log("console.log( process.argv); ---------------------------");
console.log(process.argv);
let argv = process.argv;
var randomstring = require("randomstring");
// return false
var lodash = require("lodash");
const jsonfile = require("jsonfile");
var fs = require("fs");
var json2xls = require("json2xls");
const colors = require("colors/safe");
const excelToJson = require("convert-excel-to-json");
// 文件名称  规则  pc-20210130.json
function format_date_base_gmt_add_8(value) {
  /**
   * 传入的 是 UTC 时间戳
   * 在内部 转换为当地时间
   * 例如中国时间  实际上 内部 自动加了 8个小时
   *
   */
  let time = new Date(parseInt(value));
  let y = time.getFullYear();
  let m = (time.getMonth() + 1 + "").padStart(2, 0);
  let d = (time.getDate() + "").padStart(2, 0);
  let h = (time.getHours() + "").padStart(2, 0);
  let mm = (time.getMinutes() + "").padStart(2, 0);
  let s = (time.getSeconds() + "").padStart(2, 0);
  return [y, m, d, h, mm, s];
}
function compute_date_str() {
  let [y, m, d, h, mm, s] = format_date_base_gmt_add_8(new Date().getTime());
  return `${y}-${m}${d}-${h}${mm}`;
}
let date_str = compute_date_str();
//  原始i18n数据  不断 递归到一个 长key     对象 内
function deep_flaten_mulit_language(obj, key_str, lan, final_obj) {
  /**
   * obj ,当前 要继续 递归 抹平的 对象
   * key_str 当前对象对应的  已有的 键名的 多级字符串
   * lan  当前的 语言
   * final_obj  最终的 装载对象
   */
  if (Array.isArray(obj)) {
    // 数组 情况下 ，直接走下一级，实际的 数据没有增加 ，只增加了层级
    obj.map((x, i) => {
      deep_flaten_mulit_language(x, key_str + ".k_" + i, lan, final_obj);
    });
  } else if (typeof obj === "object") {
    // 纯对象情况下
    for (let item in obj) {
      if (obj.hasOwnProperty(item)) {
        // 如果对象有 自定义属性
        if (obj[item] && typeof obj[item] === "object") {
          //如果对象的 这个属性 的值 是 对象 或者数组
          deep_flaten_mulit_language(
            obj[item],
            key_str + ".k_" + item,
            lan,
            final_obj
          );
        } else {
          // 其他情况下  比如字符串   空值 之类的  计入 最终 数组  json
          let key_new = key_str + ".k_" + item;
          if (!final_obj[key_new]) {
            final_obj[key_new] = {
              key: key_new,
              [lan]: obj[item]
            };
          } else {
            final_obj[key_new] = {
              ...final_obj[key_new],
              [lan]: obj[item]
            };
          }
        }
      }
    }
  } else {
    // 其他情况下  比如字符串   空值 之类的   计入 最终 数组  json
    if (!final_obj[key_str]) {
      final_obj[key_str] = {
        key: key_str,
        [lan]: obj
      };
    } else {
      final_obj[key_str] = {
        ...final_obj[key_str],
        [lan]: obj
      };
    }
  }
}
// 计算   对象 形式的  长key   json 数据
function compute_json_data_mulit_language(
  raw_data,
  key_str,
  lan,
  final_obj = {}
) {
  // deep_flaten_mulit_language(raw_data, "sc", "zh_cn", final_obj);
  deep_flaten_mulit_language(raw_data, key_str, lan, final_obj);
  return final_obj;
}
//下载输出 合并后的 数据的 json   对象 形式
//dowload_json  是否下载 json
//dowload_excel   是否下载 excel
function marge_mulit_long_key_js_file(
  file_prefix,
  all_need_marge_long_key_data,
  annotation,
  dowload_json,
  dowload_excel
) {
  console.log(
    "需要合并的数据------length--",
    all_need_marge_long_key_data.length
  );
  // 注释对象
  let annotation_obj = {};
  let final_obj = {};
  let arr = [];
  all_need_marge_long_key_data.map(x => {
    arr = arr.concat(Object.keys(x));
  });
  // 所有 长 key
  arr = Array.from(new Set(arr));
  // 挂载 多种 语言 数据
  console.log("所有--长key ----------length--", arr.length);
  let nn = 0;
  arr.map(x => {
    let obj = {};
    //添加所有 数据
    // 合并所有需要 合并的对象  all_need_marge_long_key_data
    all_need_marge_long_key_data.map((y, i) => {
      // console.log(i);
      //
      let item = y[x];
      if (item) {
        // item['zh_cn']= item['zh_cn'] || ''
        // item['en_gb']= item['en_gb'] || ''
        obj = { ...obj, ...item };
        //  if(i==0){
        //   obj = { ...obj, ...item }
        //  }
        //  if(i==1){
        //   obj = { ...obj,
        //     "zh_tw":item.zh_tw ||''
        //   }
        //  }
        // if(i==0){
        //   obj["old_zh_cn"]= item[ 'zh_cn']
        //   obj["old_en_gb"]=item[ 'en_gb']
        // }
        // if(i==1){
        //   obj["chanpin_zh_cn"]=item[ 'zh_cn']
        //   obj["chanpin_en_gb"]=item[ 'en_gb']
        // }
        //部分产品为主 ，部分代码员工为主
        // if(obj.cp_f!=1){
        //   obj = { ...obj, ...y[x] }
        // }
      }
    });
    // 添加 注释   部分
    // 用 父级的   key   ，查找父级别的 key 对应的 注释短语  附加进去
    //  x  这个全路径切 片取值前面的  挂载 annotation_obj  下面 路径下 给一个 固定的 值
    // 判断当前 x 的   经过路径切片  之后的 前段 是否   在   annotation_obj 下面有对应属性 值
    // 有  就取出来  添加上  。没有 就重新生成
    // "app.k_common.k_we"
    // 如果 没有 挂载注释 就生产  随机字符串   或者使用 其他兄弟key 的注释  也就是  annotation_obj[f_path] 的值  添加注释进去
    //  生成  annotation_obj  参照对象
    if (annotation) {
      let f_path = x.substring(0, x.lastIndexOf(".")); // 父级别的 路径
      if (!obj.annotation) {
        // 如果 自己 没有 注释
        if (!annotation_obj[f_path]) {
          let rd_str = randomstring.generate();
          annotation_obj[f_path] = rd_str;
        }
        obj.annotation = annotation_obj[f_path];
      } else {
        // 如果 自己 有 注释 ，父级  annotation_obj[f_path] 没有 值  ，给他赋值
        if (!annotation_obj[f_path]) {
          annotation_obj[f_path] = obj.annotation;
        }
      }
    }
    //新增 key 标识
    // obj.is_new=0
    //   if( !all_need_marge_long_key_data[1][x]){
    //     obj.is_new =1
    //     nn++
    //   }
    // "old_zh_cn": "注",
    // "old_en_gb": "Bet",
    // "chanpin_zh_cn": "期望预测",
    // "chanpin_en_gb": "EXP forecast",
    //   obj.diff_zh_cn=0
    //   obj.diff_en_gb=0
    //   //  0  是 旧的代码内的   1 是新的产品给的
    //  // 新老差异标识
    //  if( obj.old_zh_cn&&obj.chanpin_zh_cn ){
    //   if(obj.old_zh_cn!=obj.chanpin_zh_cn){
    //     obj.diff_zh_cn=1
    //    }
    //     // 新老差异标识
    //    if(obj.old_en_gb!=obj.chanpin_en_gb){
    //     obj.diff_en_gb=1
    //    }
    //  }
    //  // 默认使用产品给的
    // obj.use_chanpin =1
    // if(obj.use_chanpin==0){
    //   obj.en_gb=obj.old_en_gb
    // }
    final_obj[x] = obj;
  });
  // console.log("以产品为主 合并数据   新增内容=============",nn);
  // 执行数据 合并完毕
  // 下载  全数据  json
  if (dowload_json) {
    let file_export =
      "./export/" + file_prefix + "-merge-" + date_str + ".json";
    jsonfile.writeFile(file_export, final_obj, function(err) {
      if (err) console.error(err);
    });
    if (annotation) {
      let file_export_2 =
        "./export/" + file_prefix + "-annotation-obj-" + date_str + ".json";
      jsonfile.writeFile(file_export_2, annotation_obj, function(err) {
        if (err) console.error(err);
      });
    }
    // 同时输出  注释  annotation_obj
  }
  //  下载  全数据  excel
  if (dowload_excel) {
    let data = Object.values(final_obj);
    let xls = json2xls(data);
    let file_export =
      "./export/" + file_prefix + "-merge-" + date_str + ".xlsx";
    fs.writeFileSync(file_export, xls, "binary");
  }
  return final_obj;
}

  /**
  * 输出 下载输出 合并后的 数据的 json   数组 形式
  * 下载  多个 长 key js 文件   合并 并且 拆分 为多个  代码内实际 使用的   多语言文件
  * （ 如果是 单个 文件   则 就是不合并拆分 ）
  * 第一个参数   是导出文件的 前缀
  * 第二个参数   是所有的 需要合并的 长 key 大 json 对象   数组    (多个是合并后再拆分 ，一个则就是拆分)
  * 第三个参数   是是否下载合并后的 json   文件 不传 不下载
  * 第四个参数   是是否下载合并后的 excel  文件 不传 不下载
  * 拆分结果     默认下载
  *     all_need_marge_long_key_data,
  *
  */ 

function marge_mulit_long_key_js_file_to_mulit_short_key_i18n_json_file(
  file_prefix = "合并数据",
  all_need_marge_long_key_data,
  annotation = false,
  dowload_json = "dowload_json",
  dowload_excel = "dowload_excel"
) {
  console.log("当前计算进程------", file_prefix);
  // 计算 最终的 合并计算好的 长key 挂载的  对象形式 的 json 数据
  let import_obj = marge_mulit_long_key_js_file(
    file_prefix,
    all_need_marge_long_key_data,
    annotation,
    dowload_json,
    dowload_excel
  );
  // console.dir(import_obj);
  //计算 最终的 合并计算好的 长key 挂载的  对象形式 的 json 数据 取 value 转 的 数组包对象形式的 json
  let import_obj_arr = [];
  // 脚本支持 跑 对象 形式 和  数组形式 的  两种 json 转换  分离为单独 多语言 的文件
  if (Array.isArray(import_obj)) {
    import_obj_arr = import_obj;
  } else {
    import_obj_arr = Object.values(import_obj);
  }
  /**
   * 因为 项目代码 单种语言 存在 多个 文件 ，产品 希望 合并 给他们 。所以  此处拆分逻辑 需要 做分流
   * 约定的  type_prefix  值  ： 第一类 两个字母 ： pc , h5    第二类 大于 两个的  做标识  例如 app-index
   *
   *
   */
  //是否需要混合  默认 false
  let need_mix = false;
  //重新判定
  //第一个点 索引位置
  let fk = import_obj_arr[0]["key"] || "";
  let f_d_i = fk.indexOf(".");
  if (f_d_i == -1 || fk.length == 0) {
    console.log("当前数据结构异常 key 不存在 ,或者 key 没有 . 号分割 ---  ");
    return false;
  }
  if (f_d_i == 2) {
    // 第一类   第一类 两个字母 ： pc , h5 
    need_mix = false;
  } else {
    // 大于2  第二类   例如 app-index
    need_mix = true;
  }
  // 提取 语言 列表
  let lan_keys = Object.keys(import_obj_arr[0]);
  console.log("计算结果表头----length--", lan_keys.length);
  lodash.pull(lan_keys, "key");
  if (!need_mix) {
    // 不需要混合   第一类 两个字母 ： pc , h5 
    // 挂载所有 语言， 以 语言key 做键名的 ，以单种 语言 的所有数据作为属性值（其实就是代码内的 单种语言的i18n文件）
    // 结果类似 ： obj={zh_cn:{单语言对象},en_gb:{单语言对象} }
    // 叠加标识   fk.substring(0,2)   实际 不用
    let obj = {};
    import_obj_arr.map(x => {
      // 对象 路径  ： a.b.c.ff  之类的
      let x_key = x.key;
      if (!x_key) {
        console.log("-------- 出现异常数据   当前数据 没有 key 存在 --- ");
        console.log(x);
      } else {
        let path = x_key.substring(f_d_i);
        if (path) {
          lan_keys.map(y => {
            lodash.set(obj, y + path, x[y]);
          });
        }
      }
    });
    // 不需要混合   第一类   输出文件
    lan_keys.map(z => {
      let file_export = "./export/" + `${file_prefix}-${z}-${date_str}.json`;
      jsonfile.writeFile(file_export, obj[z], function(err) {
        if (err) console.error(err);
      });
    });
  } else {
    // 需要混合   第二类   例如 app-index   app-xxxx app-aaxsxsx
    console.log(" // 需要混合   第二类   例如 app-index   app-xxxx app-aaxsxsx");
    //  obj
    let obj = {};
    import_obj_arr.map(x => {
      // 对象 路径  ： a.b.c.ff  之类的
      let x_key = x.key;
      // console.log( x_key );
      if (!x_key) {
        console.log("-------- 出现异常数据   当前数据 没有 key 存在 --- ");
        console.log(x);
      } else {
        let path = x_key;
        if (path) {
          lan_keys.map(y => {
            console.log(y + "." + path);
            lodash.set(obj, y + "." + path, x[y]);
          });
        }
      }
    });
    // 文件 名称  追加的  标识 数组 例如 app-index   app-xxxx app-aaxsxsx
    // let file_prefix_add_keys =[]
    for (let i in obj) {
      // i 语言标识
      let file_prefix_add_keys = Object.keys(obj[i]);
      // 相当于 单种类的语言 下 的 i18n  所有文件 对象
      let obj_i = obj[i];
      for (let add_key in obj_i) {
        //  add_key 文件 名称  追加的  标识
        //  app-common - zh_cn -
        let file_export =
          "./export/" + `${file_prefix}-${add_key}-${i}-${date_str}.json`;
        jsonfile.writeFile(file_export, obj_i[add_key], function(err) {
          if (err) console.error(err);
        });
      }
    }
  }
}












// ===========================================================excel 转换为 json   核心 代码 开始===========================================================================

// 没有加密的 excel 转换为 json

// 转换以下 数组形式 为对象形式
//数组形式
// [
// { A: 'key', B: 'zh_cn', C: 'en_gb', D: 'zh_tw', E: 'vi-vn' },
// {
//   A: 'h5.k_ac_rules.k_auto',
//   B: '我们',
//   C: '我们-英语',
//   D: '我们-繁体字',
//   E: '我们-越南语'
// }
// ]
// 对象形式
// {
//   "h5.k_ac_rules.k_auto": {
//     "key": "h5.k_ac_rules.k_auto",
//     "zh_cn": "我们",
//     "en_gb": "我们-英语",
//     "zh_tw": "我们-繁体字",
//     "vi-vn":'我们-越南语'
//   }
// }
// console.log( result['Sheet 1']);

/**
 * 
 * @param {*} sourceFile   excel 资源 文件 路径 
 * @param {*} chaijie         是否转换并且拆解 
 */
 function convert_excel_to_json(sourceFile,chaijie) {
  console.log(
    colors.yellow(
      "---------------------    -------！！！！！ ----------------------"
    )
  );


  let result = excelToJson({
    sourceFile
    //   columnToKey:  { A: 'key', B: 'zh_cn', C: 'en_gb', D: 'zh_tw', E: 'vi-vn' }
  });
let sheet_key = Array.from(Object.keys(result))[0]

  let array =  result[sheet_key ]  ;

  if(! Array.isArray(array)){
    console.log(
      colors.yellow(
        "---------------------   excel 转换 json  数据  提取 出错 自己 定位一下   -------！！！！！ ----------------------"
      )
    );
  
    return false
  }

  let columnToKey = array.shift(0); //  { A: 'key', B: 'zh_cn', C: 'en_gb', D: 'zh_tw', E: 'vi-vn' }
  // 就算 列 是 key 的 列 标识
  let key_col_label = "";
  for (let i in columnToKey) {
    if (columnToKey[i] == "key") {
      key_col_label = i;
    }
  }
  //接收 合并后的对象 ，相当于  json  转换 excel 的 正向 转换生产的 中间核心 大对象    merge 大对象
  let final_obj = {};
  // 转换  数组到对象
  array.map(x => {

    let item_key = x[key_col_label];
    final_obj[item_key] = {};
    let obj = {};
    for (let i in x) {
      // console.log(i)
      obj[columnToKey[i]] = x[i];
    }
    final_obj[item_key] = { ...obj };
  });
  // 转换后的
  // console.log(final_obj);
  
  let file_prefix = sourceFile.substring(sourceFile.lastIndexOf("/") + 1);
  let file_export = "./export/" + `${file_prefix}-转换-json-${date_str}.json`;
  jsonfile.writeFile(file_export, final_obj, function(err) {
    if (err) console.error(err);
  });
 

if(chaijie){
  let prefix2 = sourceFile.substring(sourceFile.lastIndexOf("/") + 1, sourceFile.indexOf("---")+3)

  marge_mulit_long_key_js_file_to_mulit_short_key_i18n_json_file(
    prefix2,
     [final_obj],
    annotation=false
  );

}


}
// ===========================================================excel 转换为 json   核心 代码 结束===========================================================================



/**
 * 此脚本 可用于：
 * 1.  多个代码内的   同语种多语言 js 文件 合并 为一个长key json 文件
 * 2.  多个代码内的   同语种多语言 js 文件 合并 为一个并集  js 文件
 *     （  需要自己 改文件类型 和 添加  module.exports= 就能使用的 ）
 * 3.  单个  由 excel 转 json 的 长 key 文件 ， 对象 形式 或者  数组形式 的  两种 json 转换  分离为 多个 单独  的多语言  文件
 *     （  需要自己 改文件类型 和 添加  module.exports= 就能使用的 ）
 *
 * 此脚本 支持 两种 输入  两种输出
 *
 *建议：
 *     合并之前  把 json 文件  改为 js 文件   并且 module.exports=    输出出去
 *      可以避免多层  jsonfile.readFile 读取文件  嵌套  这个  是同步执行 ， 回调内操作数据
 *
 *
 *
 */


//支持的 两种输入
let all_need_marge_long_key_data = [];
// 输入一：  一个或者多个    短key  文件
/**
 * 这是 支持的 场景一  短key 合并   单种 或者 多种语言 合并 ，任意多 版本
 * 参数一：  代码内原始的 短key 等待转换长key 的  单语种 对象   js 文件   数组   短key 常规的
 * 参数二：  传入  多语言 长key 的 初始值   建议  H5 h5  ，PC pc
 * 参数三：  多语言标识
 * 中文-zh_cn": "zh_cn",   zh-CN
 * "英文-en_gb": "en_gb"  en-us
 *
 * 需要注意一点  代码内 原始的 文件 是     ES6 模块 语法  不支持  需要 改为 module.exports=
 */
// 多语种 多个合并  例如： 合并  新老  两个版本的   项目代码 多语言文件  的 common   文件 的 中英文 版本   如果只 合并 中文文件 则 不 传入 英文 就行
// 需要合并的版本多的话 再  复制叠加  注意顺序  ， 最后一个 优先级最高
//// 输入二：  一个  或者   多个  长key  文件
/**
 * 这是 支持的 场景二    长key 合并        （ 如果是 单个 文件   则 就是不合并拆分 ）
 * 这种 是直接 就是 长 key 大 json 对象   数组   一般用于 新旧 长 key 多语言文件 合并  ，注意顺序
 * 只是 引入的 文件相当于   compute_json_data_mulit_language  方法  计算 输出的  多个 版本的  多语种 长 key 文件
 * json 文件可以直接引入
 */

all_need_marge_long_key_data = [
  (() => {
    let final_obj = {};
    //h5
    final_obj = compute_json_data_mulit_language( require("../src/i18n/zh-cn/index.js"), "h5", "zh_cn", final_obj );
    final_obj = compute_json_data_mulit_language( require("../src/i18n/en-us/index.js"), "h5", "en_gb", final_obj );
    final_obj = compute_json_data_mulit_language( require("../src/i18n/tw-cn/index.js"), "h5", "zh_tw", final_obj );
 
    return final_obj;
  })(),
  (() => {
    let final_obj = {};

    // final_obj= require("./export/app-项目代码下午产品给的--common---merge-2021-0310-1711.json")
    // final_obj= require("./export/app-项目代码下午产品给的--index---merge-2021-0310-1711.json")
    return final_obj;
  })()
];

/**
 * 
 * @param {*} type    脚本 执行的  转换类型
 * @param {*} json_to_excel_prefix   代码内 json 文件转换为  excel 文件 的 前缀
 */
 
function run_convert_job(type,json_to_excel_prefix) {
   type = Number(type)
  switch (type) {
    case 1:
      console.log(
        colors.yellow(
          "--------------------- 开始 json    转换   excel  进程 ，目标 给产品提供excel  -------！！！！！ ----------------------"
        )
      );
    

      // json  to  excel

      marge_mulit_long_key_js_file_to_mulit_short_key_i18n_json_file(
        json_to_excel_prefix,
        all_need_marge_long_key_data,
        annotation = false
      );
      break;
    case 2:
      console.log(
        colors.yellow(
          "--------------------- 开始 excel   转换   json   进程 ，目标 转换产品提供的excel  -------！！！！！ ----------------------"
        )
      );
      // excel  to json
      convert_excel_to_json(sourceFile);
      break;

      case 3:
        console.log(
          colors.yellow(
            "--------------------- 开始 excel   转换   json   进程 ，目标 转换 并且 拆解产品提供的excel  -------！！！！！ ----------------------"
          )
        );
        // excel  to json
        convert_excel_to_json(sourceFile,true);
        break;
  
    default:
      console.log(
        colors.yellow(
          "--------------------- 帅哥美女----  留意看  脚本 说明 -------！！！！！ ----------------------"
        )
      );
      break;
  }
}







// 代码内的 国际化文件  需要 改一下  ：             export default   为   module.exports=  

let sourceFile = "./import/pc 国际化合并---merge-2021-0420-1043.xlsx";
   
//   type=1    json  to  excel     ||  type=2    excel  to json  仅仅转换   ||  type=3   excel  to json  转换  和拆解  

 let type = (argv[2] || '1').trim() || 1
//这个名字前缀要带上  ---  
let json_to_excel_prefix=   (argv[3] || '1').trim() ||  "h5 国际化合并---" 

//  命令行 启动方式       例如       node ./job.js   1   "h5 国际化合并---"


run_convert_job(type,json_to_excel_prefix)
