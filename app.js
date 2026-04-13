const http = require('http');
const util = require('util');
var querystring = require('querystring');

var postHTML =
    '<html><head><meta charset="utf-8"><title>菜鸟教程 Node.js 实例</title></head>' +
    '<body>' +
    '<form method="post">' +
    '网站名： <input name="name"><br>' +
    '网站 URL： <input name="url"><br>' +
    '<input type="submit">' +
    '</form>' +
    '</body></html>';

// 创建服务器
const server = http.createServer((req, res) => {
    // 设置HTTP响应的状态码和头信息
    // res.writeHead(200, {
    //     // 设置内容类型为 HTML，并指定字符集为 UTF-8，这样中文不会乱码
    //     'Content-Type': 'text/html; charset=utf-8'
    // });

    // 使用 URL 构造函数解析请求的 URL
    // const myUrl = new URL(req.url, `http://${req.headers.host}`);

    // 发送响应体
    // res.end('<h1>Hello, World!</h1><p>这是我的第一个 Node.js 应用。</p>');

    // 输出 URL 的各个部分
    /*res.end(util.inspect({
        href: myUrl.href,
        origin: myUrl.origin,
        protocol: myUrl.protocol,
        host: myUrl.host,
        hostname: myUrl.hostname,
        port: myUrl.port,
        pathname: myUrl.pathname,
        search: myUrl.search,
        searchParams: Object.fromEntries(myUrl.searchParams) // 将 searchParams 转为普通对象
    }));*/

    // 获取查询参数
    /*const name = myUrl.searchParams.get("name");
    const siteUrl = myUrl.searchParams.get("url");

    res.write("网站名：" + (name || "未提供"));
    res.write("<br />");
    res.write("网站 URL：" + (siteUrl || "未提供"));
    res.end();*/

    // 检查请求方法是否为 POST
    /*if (req.method === 'POST') {
        let body = '';

        // 监听 data 事件，逐块接收数据
        req.on('data', (chunk) => {
            body += chunk; // 累加接收到的数据块
        });

        // 监听 end 事件，数据接收完毕
        req.on('end', () => {
            const parsedData = JSON.parse(body); // 将 JSON 字符串解析为对象

            // 输出接收到的 POST 数据
            console.log('Received POST data:', parsedData);

            // 设置响应头和内容
            res.writeHead(200, { 'Content-Type': 'text/plain' });
            res.end('JSON data received successfully!');
        });

    } else {
        // 非 POST 请求的处理
        res.writeHead(405, { 'Content-Type': 'text/plain' });
        res.end('Only POST requests are supported.');
    }*/
    var body = "";
    req.on('data', function (chunk) {
        body += chunk;
    });
    req.on('end', function () {
        // 解析参数
        body = querystring.parse(body);
        // 设置响应头部信息及编码
        res.writeHead(200, { 'Content-Type': 'text/html; charset=utf8' });

        if (body.name && body.url) { // 输出提交的数据
            res.write("网站名：" + body.name);
            res.write("<br>");
            res.write("网站 URL：" + body.url);
        } else {  // 输出表单
            res.write(postHTML);
        }
        res.end();
    });
});

// 监听端口
const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});