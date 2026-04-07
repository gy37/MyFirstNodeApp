const fs = require('fs');
fs.readFile('README.MD', 'utf8', (err, data) => {
    if (err) {
        console.error('读取文件出错：', err);
        return;
    }
    console.log('文件内容：', data);
});
console.log('读取文件请求已发送，继续执行其他代码……');

fs.promises.readFile('README.MD', 'utf8')
    .then(data => {
        console.log('文件内容：', data);
    })
    .catch(err => {
        console.error('读取文件出错：', err);
    });
console.log('读取文件请求已发送，继续执行其他代码……');

async function readFile() {
    try {
        const data = await fs.promises.readFile('README.MD', 'utf8');
        console.log('文件内容：', data);
    } catch (err) {
        console.error('读取文件出错：', err);
    }
}
readFile();
console.log('读取文件请求已发送，继续执行其他代码……');
