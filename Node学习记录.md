### Node学习记录

1. Node应用组成：
* require 指令：在 Node.js 中，使用 require 指令来加载和引入模块，引入的模块可以是内置模块，也可以是第三方模块或自定义模块。
* 创建服务器：服务器可以监听客户端的请求，类似于 Apache 、Nginx 等 HTTP 服务器。
* 接收请求与响应请求 服务器很容易创建，客户端可以使用浏览器或终端发送 HTTP 请求，服务器接收请求后返回响应数据。
2. Node特点：
* 单线程：Node.js 使用单线程处理请求
* 事件循环：通过事件驱动机制处理并发
* 非阻塞 I/O：I/O 操作不会阻塞主线程
* 跨平台：可以在 Windows、Linux、macOS 等系统上运行
3. 事件循环阶段：
* Timers：执行 setTimeout() 和 setInterval() 的回调。
* I/O Callbacks：处理一些延迟的 I/O 回调。
* Idle, prepare：内部使用，不常见。
* Poll：检索新的 I/O 事件，执行与 I/O 相关的回调。
* Check：执行 setImmediate() 回调。
* Close Callbacks：处理关闭的回调，如 socket.on('close', ...)。
4. 事件循环流程：
* 任务进入事件循环队列。
* 事件循环按照阶段顺序进行处理，每个阶段有自己的回调队列。
* 事件循环会在 poll 阶段等待新的事件到达，如果没有事件，会检查其他阶段的回调。
* 如果 setImmediate() 和 setTimeout() 都存在，setImmediate() 在 check 阶段先执行，而 setTimeout() 在 timers 阶段执行。
5. 事件驱动流程：
* 注册事件：在程序中通过 EventEmitter 实例注册事件和对应的处理器。
* 触发事件：当指定的事件发生时，EventEmitter 会触发该事件。
* 处理事件：事件循环会调度相应的回调函数来执行任务。
6. exports 和 module.exports 的使用
如果要对外暴露属性或方法，就用 exports 就行，要暴露对象(类似class，包含了很多属性和方法)，就用 module.exports。
7. CommonJS 特点：
* 同步加载：适合服务器端环境，因为模块通常都在本地文件系统中，加载速度快。
* 运行时加载：require() 可以在代码的任何位置调用，这使得你可以根据条件来动态加载模块。
* 缓存机制：require() 加载的模块会被缓存，第二次导入时会直接从缓存中读取，避免重复加载。
8. ESM 特点：
* 异步加载：默认是异步加载，不会阻塞主线程，更适合浏览器环境，但在 Node.js 中通常表现为同步加载。
* 静态分析：import 和 export 语句在代码执行前就可以确定模块的依赖关系，这使得工具（如 Webpack、Vite）可以进行更好的优化（如 Tree Shaking）。
* 严格模式：ESM 模块默认在严格模式下运行。
9. CommonJS 和 ESM 的区别   
    | 项目 | CommonJS | ESM |
    |---|---|---|
    | 语法	| require / module.exports	| import / export |
    | 加载机制	| 运行时同步加载	| 编译时静态加载 |
    | 默认支持	| Node.js 默认支持	| 需 .mjs 或 "type": "module" |
    | 适合场景	| 后端脚本、老项目	| 前后端现代项目、Tree-shaking |
    | 是否可混用	| 不能直接混用（需额外配置）	| 不能直接混用（需额外配置） |
10. 混合使用.  
Node.js 在较新版本中支持两种模块系统共存。你可以在同一个项目中同时使用 CommonJS 和 ESM，但需要注意以下几点：
* ESM 中不能直接使用 require() 和 module.exports。
* CommonJS 中不能直接使用 import 和 export。
* 如果想在 ESM 中导入 CommonJS 模块，可以直接使用 import 语句，ESM 会将其视为默认导出。
    ```js
    // commonjs_module.js
    module.exports = { data: 'hello' };

    // esm_module.mjs
    import commonModule from './commonjs_module.js';
    console.log(commonModule.data); // 输出: hello
    ```
* 如果想在 CommonJS 中导入 ESM 模块，你需要使用动态 import() 函数。
    ```js
    // esm_module.mjs
    export const name = 'Bob';

    // commonjs_module.js
    async function loadESM() {
    const { name } = await import('./esm_module.mjs');
    console.log(name);
    }
    loadESM();
    ```
11. 闭包是指一个函数能够记住并访问其词法作用域，即使这个函数在其词法作用域之外执行。
    ```js
    function createCounter() {
        let count = 0;
        return function() {
            count++;
            return count;
        };
    }

    const counter = createCounter();
    console.log(counter()); // 1
    console.log(counter()); // 2
    ```
12. 