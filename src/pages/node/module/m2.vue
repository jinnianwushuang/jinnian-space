<!--
 * @Date           : 2020-08-31 16:40:04
 * @FilePath       : /jinnian-space/src/pages/node/module/m2.vue
 * @Description    : 
-->
<template>
    <div>
       <pre>
           <code>

           
{
  "name": "node-web-fullstack",
  "version": "0.0.1",
  "description": "锦年node全栈学习项目",
  "productName": "锦年fullstack",
  "author": "jinnianwushuang ",
  "private": true,
  "main": "server.js",
  "apidoc":{
    "name": "锦年node全栈学习项目API",
    "version": "0.1.0",
    "description": "明日复明日，万事成蹉跎。",
    "title": "锦年node全栈学习项目API",
    "url": "http://192.168.0.36:19090"
  },
  "scripts": {
    "test": "echo \"No test specified\" && exit 0",
    "start-makedoc": "apidoc -i app/ -o apidoc/",
    "start-docpage": " http-server ./apidoc -a 192.168.0.36 -p 19092 -s -o ",
    "start-docpage-b": "http-server ./apidoc -a 192.168.0.36 -p 19092 -s -o ",
    "start-server": "nodemon --harmony  server.js",
    "start-webpage": "quasar dev",
    "start-doc-s": "run-s start-makedoc start-docpage",
    "start-fullstack-p": "run-p  start-server  start-webpage",
    "init-env": "node init.js",
    "start": "run-s  init-env   start2",
    "start2": "run-p   start-fullstack-p start-doc-s"
  },
  "dependencies": {
    "@quasar/extras": "^1.0.0",
    "axios": "^0.18.1",
    "body-parser": "^1.19.0",
    "core-js": "^3.6.5",
    "cors": "^2.8.5",
    "express": "^4.17.1",
    "lodash": "^4.17.20",
    "log4js": "^6.3.0",
    "md5": "^2.3.0",
    "mongoose": "^5.8.10",
    "mongoose-paginate-v2": "^1.3.9",
    "quasar": "^1.0.0",
    "vue-i18n": "^8.0.0"
  },
  "devDependencies": {
    "@quasar/app": "^2.0.0",
    "apidoc": "^0.25.0",
    "http-server": "^0.12.3",
    "nodemon": "^2.0.4",
    "npm-run-all": "^4.1.5"
  },
  "browserslist": [
    "ie >= 11",
    "last 10 Chrome versions",
    "last 10 Firefox versions",
    "last 4 Edge versions",
    "last 7 Safari versions",
    "last 8 Android versions",
    "last 8 ChromeAndroid versions",
    "last 8 FirefoxAndroid versions",
    "last 10 iOS versions",
    "last 5 Opera versions"
  ],
  "engines": {
    "node": ">= 10.18.1",
    "npm": ">= 6.13.4",
    "yarn": ">= 1.21.1"
  }
}

</code>
       </pre>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>

</style>