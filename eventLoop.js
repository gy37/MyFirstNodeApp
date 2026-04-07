setTimeout(() => {
    console.log('Timeout callback');
}, 0);
setImmediate(() => {
    console.log('Immediate callback');
});
Promise.resolve().then(() => {
    console.log('Promise callback');
});
process.nextTick(() => {
    console.log('Next tick callback');
});
console.log('Main thread execution');

var EventEmitter = require('events');
// 创建 eventEmitter 对象
var myEmitter = new EventEmitter();
// 绑定事件及事件的处理程序
myEmitter.on('greet', () => {
    console.log('Hello, world!');
});
// 触发事件
myEmitter.emit('greet');

var events = require('events');
// 创建 eventEmitter 对象
var eventEmitter = new events.EventEmitter();
// 创建事件处理程序
var connectHandler = function connected() {
    console.log('连接成功。');
    // 触发 data_received 事件
    eventEmitter.emit('data_received');
}
// 绑定 connection 事件处理程序
eventEmitter.on('connection', connectHandler);
// 使用匿名函数绑定 data_received 事件
eventEmitter.on('data_received', function () {
    console.log('数据接收成功。');
});
// 触发 connection 事件
eventEmitter.emit('connection');
console.log('程序执行完毕。');

myEmitter.once('init', () => {
    console.log('Initialization event occurred');
});
myEmitter.emit('init');
myEmitter.emit('init');

eventEmitter = new events.EventEmitter();
var listener1 = function listener1() {
    console.log('监听器listener1执行。');
}
var listener2 = function listener2() {
    console.log('监听器listener2执行。');
}
eventEmitter.addListener('connection', listener1);
eventEmitter.on('connection', listener2);
var eventListeners = eventEmitter.listenerCount('connection');
console.log(eventListeners + ' 个监听器监听连接事件。');
eventEmitter.emit('connection');
eventEmitter.removeListener('connection', listener1);
console.log('listener1 不再受监听。');
eventEmitter.emit('connection');
eventListeners = eventEmitter.listenerCount('connection');
console.log(eventListeners + ' 个监听器监听连接事件。');
console.log('程序执行完毕。');

eventEmitter.emit('error');