const fs = require('fs');
var data0 = '';
var readerStream = fs.createReadStream('input.txt');
readerStream.setEncoding('utf8');
readerStream.on('data', function (chunk) {
    data0 += chunk;
    readerStream.pause();
    setTimeout(() => {
        readerStream.resume();
        readerStream.destroy();
    }, 1000);
});
readerStream.on('end', function () {
    console.log('读取完成。');
    console.log(data0);
});
readerStream.on('error', function (err) {
    console.log(err.stack);
});
console.log('读取程序执行完毕');

var data1 = '菜鸟教程官网地址：www.runoob.com';
var writerStream = fs.createWriteStream('output.txt');
writerStream.write(data1, 'utf8');
writerStream.end();
writerStream.on('finish', function () {
    console.log('写入完成。');
});
writerStream.on('error', function (err) {
    console.log(err.stack);
});
console.log('写入程序执行完毕');

writerStream = fs.createWriteStream('output.txt');
readerStream.pipe(writerStream);
console.log('程序执行完毕');

var zlib = require('zlib');
fs.createReadStream('input.txt')
    .pipe(zlib.createGzip())
    .pipe(fs.createWriteStream('input.txt.gz'));
console.log('文件压缩完成。');

setTimeout(() => {
    fs.createReadStream('input.txt.gz')
        .pipe(zlib.createGunzip())
        .pipe(fs.createWriteStream('input.txt'));
    console.log('文件解压完成。');
}, 1000);