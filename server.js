const http = require('http');
const { URL } = require('url');

function start(route) {
    function onRequest(request, response) {
        const pathname = new URL(request.url, `http://${request.headers.host}`).pathname;
        console.log(`Request for ${pathname} received.`);

        route(pathname);

        response.writeHead(200, { "Content-Type": "text/plain" }); // 设置状态码和内容类型
        response.write("Hello World");
        response.end();
    }

    http.createServer(onRequest).listen(8888);
    console.log("Server has started.")
}

module.exports.start = start;