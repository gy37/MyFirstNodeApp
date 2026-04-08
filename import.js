const user = require('./user');
console.log(user.name);
user.sayHello();

const { name, age, sayHello } = require('./user');
console.log(name);
sayHello();
