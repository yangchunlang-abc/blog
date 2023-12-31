---
title: js任务队列和事件循环
date: 2023/11/01
categories:
-  JavaScript
tags:
  - 前端
  - javascript
---

### 最近在uniapp聊天室项目发现一个问题
就是，我要让uni.showToast()展示某些信息后跳转到特定的页面。
在uni.showToast的成功回调中，我使用了跳转，<mark>实际上页面直接跳转了，没有显示信息</mark>

后来在网上找到了这么一段代码
```
	setTimeout(() => {
								uni.showToast({
									title: "欢迎使用!",
									duration: 3000,  //信息显示，3秒
									icon: 'success'
								})
								setTimeout(() => {
									uni.switchTab({
										url: '/pages/index/index',
									})
								}, 3000)    //等待3秒后，跳转页面
							}, 0)
```
成功解决了，显示后跳转的问题。
我看着这段代码，想到了任务队列。


### 宏任务和微任务
js是单线程的代码，有时候需要一种机制来执行多个块。
在执行块的时候调用js引擎，这样的机制就叫做事件循环。<br/>

<mark>事件循环：主线程 + 宏任务 + 微任务</mark><br/>
 常见的宏任务包括:script,setTimeOut,setInterval,I/O <br/>
 常见的微任务包括:nextTick,promise.then(),await右边第二个任务(第一个作为同步代码顺序执行)<br/>

### 事件循环

在js页面执行代码的过程中：
- 主线程只有一个，先执行主线程，也就是同步代码，顺序执行
- 把宏任务放到宏任务队列
- 把微任务放到微任务队列
- 先执行主线程 -> 微任务 -> 宏任务
- 以此循环

```
    Promise.resolve().then(() => {
      console.log('Promise1')
      setTimeout(() => {
        console.log('setTimeOut2')
      }, 0)
    })

    setTimeout(() => {
      console.log('setTiemOut1')
      Promise.resolve().then(() => {
        console.log('Promise2')
      })
    })
    console.log('start')
```

解析：<br/>

1. 在代码里首先顺序执行主线程的代码：输出 start
2. 初步划分一下宏微队列
3. Promise.resolve().then()加入微队列
4. setTimeOut加入宏队列
5. 执行微队列: 输出 Promise1 此时下面setTimeOut加入宏队列
6. 执行宏队列： 输出 setTiemOut1 此时下面Promise.resolve().then()加入微队列
7. 执行微队列: 输出 Promise2
8. 执行宏队列： 输出 setTimeOut2
答案就是:start->promise1->setTimeout1->promise2->setTimeout2

![宏微队列.png](https://img1.imgtp.com/2023/11/03/vK0E19pC.png)

<mark>事件循环执行顺序：宏->主线程 -> 微 -> 宏-> 微 -> 宏</mark>

<mark>因为script就是属于宏队列，所以先宏队列再微队列</mark>

在事件循环中，宏任务队列的优先级高于微任务队列，因此宏任务队列中的任务会先于微任务队列中的任务执行。

<mark>当一个宏任务执行完毕后，引擎会检查微任务队列，如果存在微任务，就会立即执行微任务队列中的所有任务，直到微任务队列为空。然后继续执行下一个宏任务。</mark>

因此，在script标签中的代码执行过程中，如果存在微任务，它们会在当前宏任务执行完毕后立即执行。这也就是为什么在script标签中使用Promise等微任务时，它们的执行顺序会先于setTimeout等宏任务的原因。

有人说宏任务先于微任务执行，也有人说微任务先于宏任务执行

其实，由于整个 script 身就是一个大的宏任务，所以在执行任务时，肯定是执行script这个大的宏任务里面的代码，因此，我们也可以说是宏任务优先于微任务

但是如果我们忽略script这个大的宏任务，仅仅只讨论script里包含的任务代码块，那么任务的执行顺序就一定是微任务优先于宏任务

<mark>记住宏队列优先级高于微队列</mark>