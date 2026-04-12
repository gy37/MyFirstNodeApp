function readFilePromise(path) {
    return new Promise((resolve, reject) => {
        fs.readFile(path, 'utf8', (err, data) => {
            if (err) reject(err);
            else resolve(data);
        });
    });
}
async function fetchUser(id) {
    try {
        const response = await fetch(`https://api.example.com/users/${id}`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const user = await response.json();
        return user;
    } catch (error) {
        console.error('Error fetching user:', error);
    }
}

fetchUser(1).then(user => console.log(user));

function createCounter() {
    let count = 0;
    return function () {
        count++;
        return count;
    };
}

const counter = createCounter();
console.log(counter());
console.log(counter());

function applyOperation(a, b, operation) {
    return operation(a, b);
}
const sum = applyOperation(5, 3, (x, y) => x + y);
const product = applyOperation(5, 3, (x, y) => x * y);
console.log(sum);
console.log(product);

function sumNumbers(...numbers) {
    return numbers.reduce((acc, num) => acc + num, 0);
}
console.log(sumNumbers(1, 2, 3, 4, 5));

/**
 * 实现摄氏度和华氏度互相转换
 * @param {number} temp - 温度值
 * @param {string} unit - 原始单位 ('C' 或 'F')
 * @returns {number} 转换后的温度
 */
function convertTemperature(temp, unit) {
    //摄氏转华氏：‌°F = (°C × 9/5) + 32‌ 或 ‌°F = °C × 1.8 + 32‌ 。‌‌
    if (unit == 'C') return (temp * 9 / 5) + 32;
    //华氏转摄氏：‌°C = (°F - 32) × 5/9‌ 或 ‌°C = (°F - 32) ÷ 1.8‌
    else return (temp - 32) * 5 / 9;
}
console.log(convertTemperature(120, 'C'));
console.log(convertTemperature(120, 'F'));

class EventEmitter {
    constructor() {
        // 初始化一个对象来存储事件和对应的监听器数组
        this.events = {};
    }

    // 添加监听器到指定事件
    on(eventName, listener) {
        // 如果事件不存在，则初始化一个空数组
        if (!this.events[eventName]) {
            this.events[eventName] = [];
        }
        // 将监听器添加到对应事件的数组中
        this.events[eventName].push(listener);
    }

    // 移除指定事件的监听器
    off(eventName, listener) {
        // 如果事件存在，则从数组中移除监听器
        if (this.events[eventName]) {
            this.events[eventName] = this.events[eventName].filter(l => l !== listener);
        }
    }

    // 触发事件，调用所有监听器
    emit(eventName, ...args) {
        // 如果事件存在，则调用所有监听器
        if (this.events[eventName]) {
            this.events[eventName].forEach(listener => listener(...args));
        }
    }
}

// 创建一个EventEmitter实例
const emitter = new EventEmitter();

const listener = (message) => {
    console.log('Event1 triggered:', message);
};

// 添加监听器到特定事件
emitter.on('event1', listener);
emitter.on('event2', (a, b) => {
    console.log('Event2 triggered:', a, b);
});

// 触发事件
emitter.emit('event1', 'Hello, Event1!'); // 输出: Event1 triggered: Hello, Event1!
emitter.off('event1', listener);
emitter.emit('event1', 'Hello, Event1!'); // 输出: Event1 triggered: Hello, Event1!
emitter.emit('event2', 'A', 'B'); // 输出: Event2 triggered: A B

