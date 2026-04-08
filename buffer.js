// 创建一个长度为 10、且用 0 填充的 Buffer。
const buf1 = Buffer.alloc(10);

// 创建一个长度为 10、且用 0x1 填充的 Buffer。
const buf2 = Buffer.alloc(10, 1);

// 创建一个长度为 10、且未初始化的 Buffer。
// 这个方法比调用 Buffer.alloc() 更快，
// 但返回的 Buffer 实例可能包含旧数据，
// 因此需要使用 fill() 或 write() 重写。
const buf3 = Buffer.allocUnsafe(10);

// 创建一个包含 [0x1, 0x2, 0x3] 的 Buffer。
const buf4 = Buffer.from([1, 2, 3]);

// 创建一个包含 UTF-8 字节 [0x74, 0xc3, 0xa9, 0x73, 0x74] 的 Buffer。
const buf5 = Buffer.from('tést');

// 创建一个包含 Latin-1 字节 [0x74, 0xe9, 0x73, 0x74] 的 Buffer。
const buf6 = Buffer.from('tést', 'latin1');

console.log(buf1, buf2, buf3, buf4, buf5, buf6);

var buf = Buffer.alloc(256);
const len = buf.write('www.runoob.com');
console.log(buf);
console.log('写入字节数：' + len);

buf = Buffer.alloc(26);
for (var i = 0; i < 26; i++) {
    buf[i] = i + 97;
}
console.log(buf.toString('ascii'));
console.log(buf.toString('ascii', 0, 5));
console.log(buf.toString('utf8', 0, 5));
console.log(buf.toString(undefined, 0, 5));

buf = Buffer.from([0x1, 0x2, 0x3, 0x4, 0x5]);
const json = JSON.stringify(buf);
console.log(json);

const copy = JSON.parse(json, (key, value) => {
    return value && value.type === 'Buffer' ?
        Buffer.from(value.data) :
        value;
});
console.log(copy);

const buffer1 = Buffer.from('菜鸟教程');
const buffer2 = Buffer.from('www.runoob.com');
const buffer3 = Buffer.concat([buffer1, buffer2]);
console.log('buffer3 内容：' + buffer3.toString());

const result = buffer1.compare(buffer2);
if (result < 0) {
    console.log(buffer1 + ' 在 ' + buffer2 + '之前');
} else if (result == 0) {
    console.log(buffer1 + ' 与 ' + buffer2 + '相同');
} else {
    console.log(buffer1 + ' 在 ' + buffer2 + '之后');
}

buffer2.copy(buffer1, 3);
console.log(buffer1.toString());

const buffer4 = buffer1.slice(0, 3);
console.log('buffer4 content：' + buffer4.toString());
buffer4.write('abc');
console.log('buffer1 content：' + buffer1.toString());