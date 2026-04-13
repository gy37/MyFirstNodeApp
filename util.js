const util = require('util');
const name = 'Alice';
const age = 25;
console.log(util.format('Name: %s, Age: %d', name, age));

const fs = require('fs');
const readFileAsync = util.promisify(fs.readFile);
(async () => {
    try {
        const data = await readFileAsync('input.txt', 'utf8');
        console.log(data);
    } catch (err) {
        console.error(err);
    }
})();

async function fn() {
    return 'hello world';
}
function fn() {
    return Promise.reject(null);
}
const callbackFunction = util.callbackify(fn);
callbackFunction((err, ret) => {
    // if (err) throw err;
    err && err.hasOwnProperty('reason') && err.reason === null;
    console.log(ret);
});

const oldFunction = util.deprecate(() => {
    console.log('This function is deprecated');
}, 'oldFunction is deprecated. Use newFunction instead.');

oldFunction();  // 调用时会显示警告

console.log(util.types.isDate(new Date()));
console.log(util.types.isMap(new Map()));

function Base() {
    this.name = 'base';
    this.base = 1991;
    this.sayHello = function () {
        console.log('Hello ' + this.name);
    };
}
Base.prototype.showName = function () {
    console.log(this.name);
}
function Sub() {
    this.name = 'sub';
}
util.inherits(Sub, Base);
var objBase = new Base();
objBase.showName();
objBase.sayHello();
console.log(objBase);
var objSub = new Sub();
objSub.showName();
// objSub.sayHello();
console.log(objSub);

const obj = { a: 1, b: 2, c: { d: 3 } };
console.log(util.inspect(obj, { showHidden: false, depth: null, colors: true }));
console.log(util.isArray([]));
console.log(util.isArray(new Array));
console.log(util.isArray(obj));

console.log(new Date())
console.log(Date())

