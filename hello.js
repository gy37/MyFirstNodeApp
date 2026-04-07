console.log('Hello, Node.js!');
console.log('Node.js 版本:', process.version);
console.log('当前工作目录:', process.cwd());
console.log('操作系统:', process.platform);

const http = require('http');
http.createServer(function (request, response) {
    // 发送 HTTP 头部
    // HTTP 状态值: 200 : OK
    // 内容类型: text/plain
    response.writeHead(200, { 'Content-Type': 'text/plain' });

    // 发送响应数据 "Hello World"
    response.end('Hello World\n');
}).listen(8888);

console.log('Server running at http://127.0.0.1:8888/');