/*
 * @Date           : 2020-11-05 21:36:01
 * @FilePath       : /jinnian-space/src/config/menu.js
 * @Description    : 
 */

import routes from "src/router/routes.js"
let pages= routes[0]['children']
let arr=[]


pages.map(x=>{
  if(x['meta']&& x['meta']['show']){
    arr.push({
      path:x.path,
      name:x.name,
      order: x['meta']['order']
    })

  }

})
arr= arr.sort((a,b)=>a.order-b.order)
console.log('arr----',arr);

export default arr

