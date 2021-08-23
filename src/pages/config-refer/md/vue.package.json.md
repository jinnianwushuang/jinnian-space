## vue.package.json           vue2.x

```json
{
  "_args": [
    [
      "vue@2.6.12",
      "D:\\CODE\\WEB\\jinnian-space"
    ]
  ],
  "_development": true,
  "_from": "vue@2.6.12",
  "_id": "vue@2.6.12",
  "_inBundle": false,
  "_integrity": "sha512-uhmLFETqPPNyuLLbsKz6ioJ4q7AZHzD8ZVFNATNyICSZouqP2Sz0rotWQC8UNBF6VGSCs5abnKJoStA6JbCbfg==",
  "_location": "/vue",
  "_phantomChildren": {},
  "_requested": {
    "type": "version",
    "registry": true,
    "raw": "vue@2.6.12",
    "name": "vue",
    "escapedName": "vue",
    "rawSpec": "2.6.12",
    "saveSpec": null,
    "fetchSpec": "2.6.12"
  },
  "_requiredBy": [
    "/@quasar/app"
  ],
  "_resolved": "https://registry.npmjs.org/vue/-/vue-2.6.12.tgz",
  "_spec": "2.6.12",
  "_where": "D:\\CODE\\WEB\\jinnian-space",
  "author": {
    "name": "Evan You"
  },
  "bugs": {
    "url": "https://github.com/vuejs/vue/issues"
  },
  "config": {
    "commitizen": {
      "path": "./node_modules/cz-conventional-changelog"
    }
  },
  "description": "Reactive, component-oriented view layer for modern web interfaces.",
  "devDependencies": {
    "@babel/core": "^7.0.0",
    "@babel/plugin-proposal-class-properties": "^7.1.0",
    "@babel/plugin-syntax-dynamic-import": "^7.0.0",
    "@babel/plugin-syntax-jsx": "^7.0.0",
    "@babel/plugin-transform-flow-strip-types": "^7.0.0",
    "@babel/preset-env": "^7.0.0",
    "@babel/register": "^7.0.0",
    "@types/node": "^12.12.0",
    "@types/webpack": "^4.4.22",
    "acorn": "^5.2.1",
    "babel-eslint": "^10.0.1",
    "babel-helper-vue-jsx-merge-props": "^2.0.3",
    "babel-loader": "^8.0.4",
    "babel-plugin-istanbul": "^5.1.0",
    "babel-plugin-transform-vue-jsx": "^4.0.1",
    "babel-preset-flow-vue": "^1.0.0",
    "buble": "^0.19.3",
    "chalk": "^2.3.0",
    "chromedriver": "^2.45.0",
    "codecov": "^3.0.0",
    "commitizen": "^2.9.6",
    "conventional-changelog": "^1.1.3",
    "cross-spawn": "^6.0.5",
    "cz-conventional-changelog": "^2.0.0",
    "de-indent": "^1.0.2",
    "es6-promise": "^4.1.0",
    "escodegen": "^1.8.1",
    "eslint": "^5.7.0",
    "eslint-plugin-flowtype": "^2.34.0",
    "eslint-plugin-jasmine": "^2.8.4",
    "file-loader": "^3.0.1",
    "flow-bin": "^0.61.0",
    "hash-sum": "^1.0.2",
    "he": "^1.1.1",
    "http-server": "^0.11.1",
    "jasmine": "^2.99.0",
    "jasmine-core": "^2.99.0",
    "karma": "^3.1.1",
    "karma-chrome-launcher": "^2.1.1",
    "karma-coverage": "^1.1.1",
    "karma-firefox-launcher": "^1.0.1",
    "karma-jasmine": "^1.1.0",
    "karma-mocha-reporter": "^2.2.3",
    "karma-phantomjs-launcher": "^1.0.4",
    "karma-safari-launcher": "^1.0.0",
    "karma-sauce-launcher": "^2.0.2",
    "karma-sourcemap-loader": "^0.3.7",
    "karma-webpack": "^4.0.0-rc.2",
    "lint-staged": "^8.0.0",
    "lodash": "^4.17.4",
    "lodash.template": "^4.4.0",
    "lodash.uniq": "^4.5.0",
    "lru-cache": "^5.1.1",
    "nightwatch": "^0.9.16",
    "nightwatch-helpers": "^1.2.0",
    "phantomjs-prebuilt": "^2.1.14",
    "puppeteer": "^1.11.0",
    "resolve": "^1.3.3",
    "rollup": "^1.0.0",
    "rollup-plugin-alias": "^1.3.1",
    "rollup-plugin-buble": "^0.19.6",
    "rollup-plugin-commonjs": "^9.2.0",
    "rollup-plugin-flow-no-whitespace": "^1.0.0",
    "rollup-plugin-node-resolve": "^4.0.0",
    "rollup-plugin-replace": "^2.0.0",
    "selenium-server": "^2.53.1",
    "serialize-javascript": "^3.1.0",
    "shelljs": "^0.8.1",
    "terser": "^3.10.2",
    "typescript": "^3.6.4",
    "webpack": "~4.28.4",
    "weex-js-runtime": "^0.23.6",
    "weex-styler": "^0.3.0",
    "yorkie": "^2.0.0"
  },
  "files": [
    "src",
    "dist/*.js",
    "types/*.d.ts"
  ],
  "gitHooks": {
    "pre-commit": "lint-staged",
    "commit-msg": "node scripts/verify-commit-msg.js"
  },
  "homepage": "https://github.com/vuejs/vue#readme",
  "jsdelivr": "dist/vue.js",
  "keywords": [
    "vue"
  ],
  "license": "MIT",
  "lint-staged": {
    "*.js": [
      "eslint --fix",
      "git add"
    ]
  },
  "main": "dist/vue.runtime.common.js",
  "module": "dist/vue.runtime.esm.js",
  "name": "vue",
  "repository": {
    "type": "git",
    "url": "git+https://github.com/vuejs/vue.git"
  },
  "scripts": {
    "bench:ssr": "npm run build:ssr && node benchmarks/ssr/renderToString.js && node benchmarks/ssr/renderToStream.js",
    "build": "node scripts/build.js",
    "build:ssr": "npm run build -- web-runtime-cjs,web-server-renderer",
    "build:weex": "npm run build -- weex",
    "commit": "git-cz",
    "dev": "rollup -w -c scripts/config.js --environment TARGET:web-full-dev",
    "dev:cjs": "rollup -w -c scripts/config.js --environment TARGET:web-runtime-cjs-dev",
    "dev:compiler": "rollup -w -c scripts/config.js --environment TARGET:web-compiler ",
    "dev:esm": "rollup -w -c scripts/config.js --environment TARGET:web-runtime-esm",
    "dev:ssr": "rollup -w -c scripts/config.js --environment TARGET:web-server-renderer",
    "dev:test": "karma start test/unit/karma.dev.config.js",
    "dev:weex": "rollup -w -c scripts/config.js --environment TARGET:weex-framework",
    "dev:weex:compiler": "rollup -w -c scripts/config.js --environment TARGET:weex-compiler ",
    "dev:weex:factory": "rollup -w -c scripts/config.js --environment TARGET:weex-factory",
    "flow": "flow check",
    "lint": "eslint src scripts test",
    "release": "bash scripts/release.sh",
    "release:note": "node scripts/gen-release-note.js",
    "release:weex": "bash scripts/release-weex.sh",
    "sauce": "karma start test/unit/karma.sauce.config.js",
    "test": "npm run lint && flow check && npm run test:types && npm run test:cover && npm run test:e2e -- --env phantomjs && npm run test:ssr && npm run test:weex",
    "test:cover": "karma start test/unit/karma.cover.config.js",
    "test:e2e": "npm run build -- web-full-prod,web-server-basic-renderer && node test/e2e/runner.js",
    "test:sauce": "npm run sauce -- 0 && npm run sauce -- 1 && npm run sauce -- 2",
    "test:ssr": "npm run build:ssr && jasmine JASMINE_CONFIG_PATH=test/ssr/jasmine.js",
    "test:types": "tsc -p ./types/test/tsconfig.json",
    "test:unit": "karma start test/unit/karma.unit.config.js",
    "test:weex": "npm run build:weex && jasmine JASMINE_CONFIG_PATH=test/weex/jasmine.js"
  },
  "sideEffects": false,
  "typings": "types/index.d.ts",
  "unpkg": "dist/vue.js",
  "version": "2.6.12"
}

```
