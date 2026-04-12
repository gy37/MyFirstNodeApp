const http = require('http');
var server = http.createServer((req, res) => {
    const { url, method } = req;
    if (url === '/' && method === 'GET') {
        res.writeHead(200, { 'content-type': 'text-plain' });
        res.end('Home Page');
    } else if (url === '/about' && method === 'GET') {
        res.writeHead(200, { 'content-type': 'text-plain' });
        res.end('About Page');
    } else {
        res.writeHead(404, { 'content-type': 'text-plain' });
        res.end('404 Not Found');
    }
});

server.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});

function route(pathname) {
    console.log("About to route a request for " + pathname);
}

server = require('./server');
server.start(route);

const express = require('express');
const app = express();
const port = 3001;

// 日志记录中间件
const logger = (req, res, next) => {
    console.log(`Request Type: ${req.method} ${req.url}`);
    next();
};

// 使用中间件
app.use(logger);

// 创建一个路由器实例
const userRouter = express.Router();

// 定义用户相关的路由
userRouter.get('/', (req, res) => {
    res.send('List of users');
});

userRouter.get('/:id', (req, res) => {
    const userId = req.params.id;
    res.send(`User ID: ${userId}`);
});

// 挂载用户路由器
app.use('/users', userRouter);

// 定义错误处理中间件来捕获和处理路由中的错误
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

// 仅允许认证用户访问
const authMiddleware = (req, res, next) => {
    if (req.headers.authorization) {
        next();
    } else {
        res.status(401).send('Unauthorized');
    }
};
app.get('/admin', authMiddleware, (req, res) => {
    res.send('Admin page');
});

app.get('/', (req, res) => {
    res.send('Hello World!')
});
app.post('/submit', (req, res) => {
    res.send('Form submitted!');
});
app.get('/search/:query', (req, res) => {
    const query = req.params.query;
    res.send(`Search query: ${query}`);
});
app.get('/search', (req, res) => {
    const query = req.query.word;
    res.send(`Search query: ${query}`);
});
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});