---
title: 用uniapp打造一个聊天室软件(3)
date: 2023/10/09
categories:
-  uniapp
tags:
  - 前端
---
**总结一下今天的开发和收获**
### 今日份开发编写的页面
今天完成了以下页面的编写
- 用户详情
- 聊天页
- 好友请求页<br>
都是一些静态页面，没有什么编写一些数据相关的逻辑，比较粗糙。
### 开发中遇到的错误

今天并未遇到什么错误？

### 收获
对于聊天页的布局，本来想用相对定位解决。莫名发现有flex-direction的属性就可以解决.
![聊天页布局.png](https://img1.imgtp.com/2023/10/09/47ClfXK2.png)

```
.leftMsg {
			display: flex;
			flex-direction: row;
			.avatar {
				image {
					width: 80rpx;
					height: 80rpx;
				}
			}

			.info {
				padding: 20rpx;
				margin: 0 0 40rpx 20rpx;
				height: 100%;
				max-width: 434rpx;
				background-color: #FFFFFF;
				border-radius: 20rpx 0 20rpx 20rpx;
			}
		}

		.rightMsg {
			display: flex;
			flex-direction: row-reverse;

			.avatar {
				image {
					width: 80rpx;
					height: 80rpx;
				}
			}

			.info {
				padding: 20rpx;
				margin: 0 20rpx 0 40rpx;
				height: 100%;
				width: 434rpx;
				background-color: #FFE431;
			}
		}
```

<mark>使用row和row-revese完美解决</mark><br>
对于好友请求页的背景。
![添加好友页的背景.png](https://img1.imgtp.com/2023/10/09/pWW6lN74.png)

```
    .bg-img{
			opacity: 0.4;
			position: absolute;
			z-index: -1;
			left: -10rpx;
			top: -10rpx;
			width: 110%;
			height: 110%;
			filter: blur(16px);
		}
```
主要是使用了与头像同款的图片，<mark>加上透明度和动态模糊。</mark>
我感觉非常好看。