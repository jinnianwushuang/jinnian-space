## diary.package.json 笔记类项目的参照配置

```json
{
  "name": "jinnian-space",
  "version": "0.0.1",
  "description": "A Quasar Framework app",
  "productName": "jinnian",
  "cordovaId": "org.cordova.quasar.app",
  "capacitorId": "",
  "author": "",
  "private": true,
  "scripts": {
    "test": "echo \"No test specified\" && exit 0",
    "bg": "run-s build-github cp",
    "build-github": "quasar build g",
    "bs": "quasar build s",
    "cp-fonts": "rm -r ./public/fonts/* ; cp -r ./docs-2/fonts/*  ./public/fonts/",
    "cp-css": "rm -r ./public/css/* ; cp -r ./docs-2/css/*  ./public/css/",
    "cp-js": "rm -r ./public/js/* ; cp -r ./docs-2/js/*  ./public/js/",
    "cp": "node ./z-sh/cp.js"
  },
  "dependencies": {
    "@quasar/cli": "^1.2.0",
    "@quasar/extras": "^1.0.0",
    "@vue/composition-api": "^0.6.4",
    "axios": "^0.18.1",
    "core-js": "^3.6.5",
    "github-markdown-css": "^4.0.0",
    "marked": "^2.0.3",
    "quasar": "^1.0.0",
    "vue-i18n": "^8.0.0"
  },
  "devDependencies": {
    "@quasar/app": "^2.0.0",
    "@quasar/quasar-app-extension-qmarkdown": "^1.0.34",
    "@quasar/quasar-app-extension-qpdfviewer": "^1.0.0-beta.8",
    "@quasar/quasar-app-extension-qribbon": "^1.0.0-beta.15",
    "devtron": "^1.4.0",
    "electron": "^9.3.3",
    "electron-debug": "^3.1.0",
    "electron-devtools-installer": "^3.1.1",
    "electron-packager": "^14.2.1",
    "npm-run-all": "^4.1.5",
    "quasar-app-extension-json-api-viewer": "^1.2.0",
    "shelljs": "^0.8.4",
    "vue-markdown-loader": "^2.4.1"
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

```
