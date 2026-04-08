
import { name, age } from './user.mjs';
console.log(name, age);

import sayHello from './user.mjs';
sayHello();

// import sayHello, { name } from './user.mjs';
// console.log(name);
// sayHello();

import * as user from './user.mjs';
console.log(user.name);
user.default();