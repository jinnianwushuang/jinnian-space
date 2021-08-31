# 30 个有用的 Node.js NPM 包
# 一、实用功能

## 1.  qs

> 一个简单易用的字符串解析和格式化库

```javascript
const qs = require('qs');
constv assert = require('assert');

const obj = qs.parse('a=c');
assert.deepEqual(obj, { a: 'c' });

const str = qs.stringify(obj);
assert.equal(str, 'a=c');

```

## 2. rxjs

> RxJS是一组模块化的库，用于使用 JavaScript 中的可观察集合和组合来组合异步和基于事件的程序。

```javascript
const { range } = require('rxjs');
const { map, filter } = require('rxjs/operators');
range(1, 200).pipe(
  filter(x => x % 2 === 1),
  map(x => x + x)
).subscribe(x => console.log(x));

```

## 3.  mitt

> 微型 200b 功能事件发射器/发布订阅.

```javascript
import mitt from 'mitt'
const emitter = mitt()
emitter.on('foo', e => console.log('foo', e) )
emitter.on('*', (type, e) => console.log(type, e) )
emitter.emit('foo', { a: 'b' })
emitter.all.clear()

function onFoo() {}
emitter.on('foo', onFoo)   // listen
emitter.off('foo', onFoo)  // unlisten

```

## 4. Underscore.js

> Underscore.js是一个用于 JavaScript 的实用程序带库，它在不扩展任何核心 JavaScript 对象的情况下为通常的功能嫌疑人（each、map、reduce、filter 等）提供支持。

```javascript
const _ = require(“underscore);
const list = [[5, 1, 7], [3, 2, 1]];
_.invoke(list, 'sort');
// => [[1, 5, 7], [1, 2, 3]]

```

## 5. day.js

> Day.js是一个极简主义的 JavaScript 库，它为现代浏览器解析、验证、操作和显示日期和时间，并具有很大程度上与 Moment 兼容的 API。

```javascript
const dayjs = require(“dayjs”);
dayjs().startOf('month').add(1, 'day').set('year', 2018).format('YYYY-MM-DD HH:mm:ss');

```

## 6. Ramda

> Ramda是一个实用的函数式库，具有可与柯里化组合的无副作用函数。

```javascript
import * as R from 'ramda';
const double = x => x * 2;
R.map(double, [1, 2, 3]); 
// => [2, 4, 6]
R.map(double, {x: 1, y: 2, z: 3}); 
// => {x: 2, y: 4, z: 6}

```

## 7. validator

> Validator是一个字符串验证器和清理器库。

```javascript
var validator = require('validator');
validator.isEmail('foo@bar.com'); //=> true

```

## 8. yup

> yup是一个用于复杂的、相互依赖的验证和转换的模式构建器。

```javascript
import * as yup from 'yup';
let schema = yup.object().shape({
  name: yup.string().required(),
  age: yup.number().required().positive().integer(),
  email: yup.string().email(),
  website: yup.string().url(),
  createdOn: yup.date().default(function () {
    return new Date();
  }),
});
// check validity
schema
  .isValid({
    name: 'jimmy',
    age: 24,
  })
  .then(valid => 
    console.log(valid) // => true
  );
// you can try and type cast objects to the defined schema
schema.cast({
  name: 'jimmy',
  age: '24',
  createdOn: '2014-09-23T19:25:25Z',
});
// => { name: 'jimmy', age: 24, createdOn: Date }

```

## 9. Lodash

> Lodash是一个实用程序库，通过消除处理数组、数字、对象、字符串等的麻烦，使 JavaScript 变得更容易。

```javascript
const _ = require("lodash");
const nums = _.range(1, 9);
// => [1, 2, 3, 4, 5, 6, 7, 8, 9]
const chunks = _.chunk(nums, 3);
// => [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
const right = _.takeRight(nums, 2);
// => [7, 8, 9]

```

## 10. date-fns

> Date-fns提供了最全面、最简单且一致的工具集，用于在浏览器和 Node.js 中操作 JavaScript 日期。

```javascript
import { format, formatDistance, formatRelative, subDays } from 'date-fns'
format(new Date(), '[Today is a] dddd')
//=> "Today is a Wednesday"
formatDistance(subDays(new Date(), 3), new Date())
//=> "3 days ago"
formatRelative(subDays(new Date(), 3), new Date())
//=> "last Friday at 7:26 p.m."

```

## 11. jsonwebtoken

> Jsonwebtoken是一个用于对 JSON Web 令牌进行签名、验证和解码的库。

```javascript
const jwt = require('jsonwebtoken');
const token = jwt.sign({ foo: 'bar' }, 'shhhhh');

```

## 12. uuid

> UUID 是一个用于创建 RFC4122 通用唯一标识符的库。

```javascript
const { v4: uuidv4 } = require('uuid');
uuidv4(); // => '1a68a438-b077-468b-b1e8-dcdd976a0f5b'

```

# 二、操作文件系统

## 1. rimraf

> Rimraf 为节点提供了与 UNIX rm -rf 命令等效的命令。

```javascript
const rimraf = require(“rimraf”);
rimraf('./build', error => {
  if (error) console.error(error);
});

```

## 2. fs-extra

> FS-extra 添加了未包含在本机 fs 模块中的文件系统方法，并为 fs 方法添加了 promise 支持。

```javascript
const fs = require(‘fs-extra’);
async function copyFiles () {
  try {
    await fs.copy('/tmp/myfile', '/tmp/mynewfile');
    console.log('success!');
  } catch (err) {
    console.error(err);
  }
}
copyFiles();

```

## 3. mkdirp

> 就像 mkdir -p 一样，mkdirp 递归地创建目录和所有必要的子目录。

```javascript
const mkdirp = require('mkdirp')
// return value is a Promise resolving to the first directory created
mkdirp('/tmp/foo/bar/baz').then(made =>
  console.log(`made directories, starting with ${made}`));

```

## 4. glob

> Glob 是一个使用多种模式匹配文件的库。

```javascript
const glob = require("glob");
// options is optional
glob("**/*.js", options, function (er, files) {
  // files is an array of filenames.
  // If the `nonull` option is set, and nothing
  // was found, then files is ["**/*.js"]
  // er is an error object or null.
});

```

## 5. shelljs

> ShellJS 是基于 Node.js API 的 Unix shell 命令的可移植 (Windows/Linux/OS X) 实现。

```javascript
const shell = require('shelljs');
if (!shell.which('git')) {
  shell.echo('Sorry, this script requires git');
  shell.exit(1);
}
// Copy files to release dir
shell.rm('-rf', 'out/Release');
shell.cp('-R', 'stuff/', 'out/Release');
// Replace macros in each .js file
shell.cd('lib');
shell.ls('*.js').forEach(function (file) {
  shell.sed('-i', 'BUILD_VERSION', 'v0.1.2', file);
  shell.sed('-i', /^.*REMOVE_THIS_LINE.*$/, '', file);
  shell.sed('-i', /.*REPLACE_LINE_WITH_MACRO.*\n/, shell.cat('macro.js'), file);
});
shell.cd('..');
// Run external tool synchronously
if (shell.exec('git commit -am "Auto-commit"').code !== 0) {
  shell.echo('Error: Git commit failed');
  shell.exit(1);
}

```

## 6. js-yaml

> Js-yaml 是 YAML 的一种实现，YAML 是一种流行的人性化数据序列化语言。

```javascript
const yaml = require('js-yaml');
const fs   = require('fs');
// Get document, or throw exception on error
try {
  const doc = yaml.load(fs.readFileSync('/home/ixti/example.yml', 'utf8'));
  console.log(doc);
} catch (e) {
  console.log(e);
}

```

# 三、Web框架

## 1.  koa

> Koa 是由 Express 背后的团队设计的新 Web 框架，旨在成为 Web 应用程序和 API 的更小、更具表现力和更健壮的基础。

```javascript
const Koa = require('koa');
const app = new Koa();

app.use(async ctx => {
  ctx.body = 'Hello World';
});
app.listen(3000);

```

## 2.  express

> Express.js 是最流行、最快速、最简约的 node.js 后端 Web 框架。

```javascript
const express = require('express');
const app = express();
app.get('/', function (req, res) {
  res.send('Hello World');
});
app.listen(3000);

```

## 3.  Fastify

Fastify是最快的可扩展 Web 框架之一，专注于以最少的开销提供最佳的开发人员体验。

```javascript
const fastify = require('fastify')({
  logger: true
});
fastify.get('/', async (request, reply) => {
  reply.type('application/json').code(200);
  return { hello: 'world' };
});
fastify.listen(3000, (err, address) => {
  if (err) throw err;
  fastify.log.info(`App listening on ${address}`);
});

```

## 4.  socket.io

> Socket.IO使用长轮询或 WebSockets 启用实时双向基于事件的通信，并具有断开连接检测和自动重新连接支持。

```javascript
const server = require('http').createServer();
const io = require('socket.io')(server);
io.on('connection', client => {
  client.on('event', data => { /* … */ });
  client.on('disconnect', () => { /* … */ });
});
server.listen(3000);

```



# 四、辅助开发

## 1.  jest

> Jest 已完成并准备好设置 JavaScript 测试解决方案

```javascript
test('adds 1 + 2 to equal 3', () => {
  expect(1 + 2).toBe(3);
});

```

## 2.  typescript

> TypeScript 是可扩展的 JavaScript。 它是一种添加可选类型并编译为普通可读 JavaScript 的语言。

```javascript
interface User {
  name: string;
  id: number;
}
const user: User = {
  name: "Hayes",
  id: 0,
};

```

## 3. winston

> Winston 是一个简单且通用的日志库，支持多种传输。

```javascript
const winston = require('winston');
const logger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  defaultMeta: { service: 'user-service' },
  transports: [
    // Write all logs with level `error` and below to `error.log`
    new winston.transports.File({ filename: 'error.log', level: 'error' }),
    // Write all logs with level `info` and below to `combined.log`
    new winston.transports.File({ filename: 'combined.log' }),
  ],
});
logger.log({
  level: 'error',
  message: 'Hello distributed log files!'
});
logger.info('Hello again distributed logs');

```

## 4. debug

> Debug 是一个微型 JavaScript 调试实用程序，模仿 Node.js 核心的调试技术。

```javascript
const debug = require('debug')('http')
  , http = require('http')
  , name = 'My App';
debug('booting %o', name);
http.createServer(function(req, res){
  debug(req.method + ' ' + req.url);
  res.end('hello\n');
}).listen(3000, function(){
  debug('listening');
});

```

## 5.  eslint

> ESLint 是一种用于查找和修复 JavaScript 和 TypeScript 代码中问题的工具。

```javascript
{
    "rules": {
        "semi": ["error", "always"],
        "quotes": ["error", "double"]
    }
}

```

## 6.  nodemon

> Nodemon 是一个工具，它通过在检测到目录中的文件更改时自动重新启动节点应用程序来帮助开发基于 node.js 的应用程序。

```javascript
nodemon ./server.js 

```

## 7.  dotenv

> Dotenv 是一个零依赖模块，可将 .env 文件中的环境变量加载到 process.env 中

```javascript
.env file:

DB_HOST=localhost
DB_USER=root
DB_PASS=s1mpl3
require('dotenv').config();
const db = require('db');
db.connect({
  host: process.env.DB_HOST,
  username: process.env.DB_USER,
  password: process.env.DB_PASS
});

```

## 8.  cross-env

> Cross-env enables scripts to set and use environment variables across platforms.

```javascript
{
  "scripts": {
    "start-prod": "cross-env NODE_ENV=production node ./app.js"
  }
}
```


