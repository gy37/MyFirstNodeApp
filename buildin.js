const path = require('path');

const fullPath = path.join(__dirname, 'files', 'example.txt');
console.log(fullPath); // 输出类似: /home/user/project/files/example.txt

const ext = path.extname('index.html');
console.log(ext); // 输出: .html

const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello Node.js Server');
});

server.listen(3000, () => {
    console.log('Server running at http://localhost:3000/');
});

const EventEmitter = require('events');

class MyEmitter extends EventEmitter { }

const myEmitter = new MyEmitter();

// 监听事件
myEmitter.on('event', () => {
    console.log('事件被触发!');
});

// 触发事件
myEmitter.emit('event');

const os = require('os');

console.log(os.platform()); // 操作系统平台
console.log(os.totalmem()); // 系统总内存
console.log(os.freemem()); // 系统可用内存
console.log(os.cpus()); // CPU 信息