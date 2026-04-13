var fs = require("fs");

// 异步读取
fs.readFile('input.txt', function (err, data) {
    if (err) {
        return console.error(err);
    }
    console.log("异步读取: " + data.toString());
});

// 同步读取
var data = fs.readFileSync('input.txt');
console.log("同步读取: " + data.toString());

console.log("程序执行完毕。");

fs.writeFile('example.txt', 'Hello, World!', (err) => {
    if (err) {
        console.error('Error writing file:', err);
        return;
    }
    console.log("异步写入：" + 'File written successfully');
});

try {
    fs.writeFileSync('example.txt', 'Hello, World!');
    console.log("同步写入：" + 'File written successfully');
} catch (err) {
    console.error('Error writing file:', err);
}

fs.appendFile('example.txt', '\nAppending some text', (err) => {
    if (err) {
        console.error('Error appending to file:', err);
        return;
    }
    console.log("异步附加：" + 'Text appended successfully');
});

try {
    fs.appendFileSync('example.txt', '\nAppending some text');
    console.log("同步附加：" + 'Text appended successfully');
} catch (err) {
    console.error('Error appending to file:', err);
}

fs.unlink('example.txt', (err) => {
    if (err) {
        console.error('Error deleting file:', err);
        return;
    }
    console.log('File deleted successfully');
});

fs.mkdir('new_directory', (err) => {
    if (err) {
        console.error('Error creating directory:', err);
        return;
    }
    console.log('Directory created successfully');
});
fs.access('new_directory', fs.constants.F_OK, (err) => {
    if (err) {
        console.log('Directory does not exist');
    } else {
        console.log('Directory exists');
    }
});

fs.readdir('new_directory', (err, files) => {
    if (err) {
        console.error('Error reading directory:', err);
        return;
    }
    console.log('Directory contents:', files);
});
fs.rmdir('new_directory', (err) => {
    if (err) {
        console.error('Error deleting directory:', err);
        return;
    }
    console.log('Directory deleted successfully');
});

const readableStream = fs.createReadStream('input.txt', 'utf8');

readableStream.on('data', (chunk) => {
    console.log('Received chunk:', chunk);
});

readableStream.on('end', () => {
    console.log('No more data.');
});

const writableStream = fs.createWriteStream('output.txt');

writableStream.write('Hello, ');
writableStream.write('World!\n');

writableStream.end();

writableStream.on('finish', () => {
    console.log('All writes are now complete.');
});

fs.stat('input.txt', (err, stats) => {
    if (err) {
        console.error('Error getting stats:', err);
        return;
    }
    console.log('Is file?', stats.isFile());
    console.log('Is directory?', stats.isDirectory());
    console.log('Size:', stats.size);
});

// 异步打开文件
console.log("准备打开文件！");
fs.open('input.txt', 'r+', function (err, fd) {
    if (err) {
        return console.error(err);
    }
    console.log("文件打开成功！");
    console.log("准备读取文件：");
    var buf = new Buffer.alloc(1024);
    fs.read(fd, buf, 0, buf.length, 0, function (err, bytes) {
        if (err) {
            console.log(err);
        }
        console.log(bytes + "  字节被读取");

        // 仅输出读取的字节
        if (bytes > 0) {
            console.log(buf.slice(0, bytes).toString());
        }

        fs.close(fd, function (err) {
            if (err) {
                console.error(err);
            }
            console.log("文件关闭成功");
        });
    });
});

fs.stat('./file.js', function (err, stats) {
    console.log(stats.isFile());         //true
    console.log(stats);
});

console.log("准备写入文件");
fs.writeFile('input.txt', '我是通 过fs.writeFile 写入文件的内容', function (err) {
    if (err) {
        return console.error(err);
    }
    console.log("数据写入成功！");
    console.log("--------我是分割线-------------")
    console.log("读取写入的数据！");
    fs.readFile('input.txt', function (err, data) {
        if (err) {
            return console.error(err);
        }
        console.log("异步读取文件数据: " + data.toString());
    });
});