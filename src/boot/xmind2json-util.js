

const xmindparser = require('xmind2json');
let parser = new xmindparser()
const fileOrPath = './01HTML基础.xmind'

async function xmindParser(xmindPath) {
  const json = await parser.xmindToJSON(xmindPath)
  console.log(json);
  console.log('json', JSON.stringify(json) )
}

xmindParser(fileOrPath).then(res => {
  console.log('res', JSON.stringify(res) )
})