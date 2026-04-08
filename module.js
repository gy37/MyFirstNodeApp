const os = require('os');
console.log('Operating System: ', os.platform());
console.log('Total Memory: ', os.totalmem() / 1024 / 1024, 'M');

const lodash = require('lodash');
const array = [1, 2, 3, 4];
const reversedArray = lodash.reverse(array.slice());
console.log('Reversed Array:', reversedArray);

// var hello = require('./export');
// hello.world();
var Hello = require('./export');
var hello = new Hello();
hello.setName('BYVoid');
hello.sayHello();