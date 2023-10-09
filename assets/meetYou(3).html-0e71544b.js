import{_ as i,o as t,c as e,e as n}from"./app-e9574e26.js";const d={},l=n(`<p><strong>总结一下今天的开发和收获</strong></p><h3 id="今日份开发编写的页面" tabindex="-1"><a class="header-anchor" href="#今日份开发编写的页面" aria-hidden="true">#</a> 今日份开发编写的页面</h3><p>今天完成了以下页面的编写</p><ul><li>用户详情</li><li>聊天页</li><li>好友请求页<br> 都是一些静态页面，没有什么编写一些数据相关的逻辑，比较粗糙。</li></ul><h3 id="开发中遇到的错误" tabindex="-1"><a class="header-anchor" href="#开发中遇到的错误" aria-hidden="true">#</a> 开发中遇到的错误</h3><p>今天并未遇到什么错误？</p><h3 id="收获" tabindex="-1"><a class="header-anchor" href="#收获" aria-hidden="true">#</a> 收获</h3><p>对于聊天页的布局，本来想用相对定位解决。莫名发现有flex-direction的属性就可以解决. <img src="https://img1.imgtp.com/2023/10/09/47ClfXK2.png" alt="聊天页布局.png"></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>.leftMsg {
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><mark>使用row和row-revese完美解决</mark><br> 对于好友请求页的背景。 <img src="https://img1.imgtp.com/2023/10/09/pWW6lN74.png" alt="添加好友页的背景.png"></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>    .bg-img{
			opacity: 0.4;
			position: absolute;
			z-index: -1;
			left: -10rpx;
			top: -10rpx;
			width: 110%;
			height: 110%;
			filter: blur(16px);
		}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>主要是使用了与头像同款的图片，<mark>加上透明度和动态模糊。</mark> 我感觉非常好看。</p>`,12),s=[l];function r(a,v){return t(),e("div",null,s)}const m=i(d,[["render",r],["__file","meetYou(3).html.vue"]]);export{m as default};
