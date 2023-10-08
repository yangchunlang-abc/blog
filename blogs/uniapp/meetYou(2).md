---
title: 用uniapp打造一个聊天室软件(2)
date: 2023/10/08
categories:
-  uniapp
tags:
  - 前端
---
**总结一下今天的开发和收获**
### 今日份开发编写的页面
今天完成了以下页面的编写
- 登录页
- 注册页
- 首页
- 我的
- 搜索页<br>
都是一些静态页面，没有什么编写一些数据相关的逻辑，比较粗糙。
### 开发中遇到的错误
#### 插件错误
在使用uniapp开发app时，我想着使用vantUI组件库减少一些css样式的编写.<br>
于是开始按部就班的安装、使用插件.<br>
![添加vant组件.png](https://img1.imgtp.com/2023/10/08/uiWbWq54.png)
![使用vant.png](https://img1.imgtp.com/2023/10/08/xWJ0ObGn.png)
但是插件在H5端和小程序端没有任何问题，在app上不显示样式而且报错。<br>
如图:
![莫名奇妙的报错.png](https://img1.imgtp.com/2023/10/08/8rMhIDof.png)
这个问题我真的是绞尽脑汁最后放弃了。。。<br>
还是继续使用uniapp内置的uni-UI。<br>
#### H5端页面发生滚动
![页面滚动.png](https://img1.imgtp.com/2023/10/08/YcsWETbp.png)
这个问题比较好解决，就是在app端页面是不会像h5端这样滚动的。<br>
也是建议开发的时候多比较不同平台编译的差异。<br>
#### uni.navigatTo无法跳转tab页面
![uniapp无法跳转tabbar.png](https://img1.imgtp.com/2023/10/08/nQFMebtx.png)
### 收获
今天在我的页面使用了动画组件，这是我第一次使用，感觉非常丝滑，以后会在其他的页面引用上。<br>
#### uni-animation的使用
uniapp 提供 createAnimation 内置函数，用于创建一个动画实例 animation。
- 在data里创建一个animationData对象,用于接收动画实例(动画数据)
- 定义一个方法，在方法里创建动画实例，并且通过export方法导出
- 把动画数据也就是animationData传递给设置在组件里的animate属性

```
//创建动画实例
const animation = uni.createAnimation();
 animation.width(100).height(100).step()
  tis.animationData = animation.export(); 
//这个实例把对象元素的长宽设置为了100px(不用写单位)
//setup是用来进行动画分组的，因为uniapp默认并行执行，使用setup进行分组并行
```

```
//创建animationData对象
 data() {
    return {
        animationData: {}
    }
  },
```
```
//在组件里使用
<view class="box" :animation="animationData"></view>
```
好了，今天就到这里，期待明天的开发。。。<br>