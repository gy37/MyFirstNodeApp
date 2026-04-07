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
6. 