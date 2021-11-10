// https://github.com/ggd543/includes-loader/blob/master/index.js
 

var loaderUtils = require('loader-utils');

// const url = "path/to/module.js";

var path = require('path')

// var fs = require('fs')
import fs  from 'fs';
 
let readFile =fs.readFile
console.log('fs---------',fs);


    function load_anytext(url){
        console.log('fs---------',fs);


    if (loaderUtils.isUrlRequest(url)) {
        // Logic for requestable url
        const filepath = loaderUtils.urlToRequest(url);
        console.log('  // Logic for requestable url',filepath);
        // this.cacheable && this.cacheable();
     
    readFile(filepath, 'utf-8', function (err, data) {

            console.log(' fs.readFile----------',data);
            // console.log('filepathPars-------',filepathPars);

        })

        // var filepathParse = path.parse(filepath)
  





      } else {
        // Logic for not requestable url
        console.log(' // Logic for not requestable url ');
      }

}


export {
    load_anytext 
}