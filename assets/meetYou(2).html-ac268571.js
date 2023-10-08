import{_ as a,o as i,c as n,e}from"./app-d97ba30e.js";const t={},r=e(`<p><strong>总结一下今天的开发和收获</strong></p><h3 id="今日份开发编写的页面" tabindex="-1"><a class="header-anchor" href="#今日份开发编写的页面" aria-hidden="true">#</a> 今日份开发编写的页面</h3><p>今天完成了以下页面的编写</p><ul><li>登录页</li><li>注册页</li><li>首页</li><li>我的</li><li>搜索页<br> 都是一些静态页面，没有什么编写一些数据相关的逻辑，比较粗糙。</li></ul><h3 id="开发中遇到的错误" tabindex="-1"><a class="header-anchor" href="#开发中遇到的错误" aria-hidden="true">#</a> 开发中遇到的错误</h3><h4 id="插件错误" tabindex="-1"><a class="header-anchor" href="#插件错误" aria-hidden="true">#</a> 插件错误</h4><p>在使用uniapp开发app时，我想着使用vantUI组件库减少一些css样式的编写.<br> 于是开始按部就班的安装、使用插件.<br><img src="https://img1.imgtp.com/2023/10/08/uiWbWq54.png" alt="添加vant组件.png"><img src="https://img1.imgtp.com/2023/10/08/xWJ0ObGn.png" alt="使用vant.png"> 但是插件在H5端和小程序端没有任何问题，在app上不显示样式而且报错。<br> 如图: <img src="https://img1.imgtp.com/2023/10/08/8rMhIDof.png" alt="莫名奇妙的报错.png"> 这个问题我真的是绞尽脑汁最后放弃了。。。<br> 还是继续使用uniapp内置的uni-UI。<br></p><h4 id="h5端页面发生滚动" tabindex="-1"><a class="header-anchor" href="#h5端页面发生滚动" aria-hidden="true">#</a> H5端页面发生滚动</h4><p><img src="https://img1.imgtp.com/2023/10/08/YcsWETbp.png" alt="页面滚动.png"> 这个问题比较好解决，就是在app端页面是不会像h5端这样滚动的。<br> 也是建议开发的时候多比较不同平台编译的差异。<br></p><h4 id="uni-navigatto无法跳转tab页面" tabindex="-1"><a class="header-anchor" href="#uni-navigatto无法跳转tab页面" aria-hidden="true">#</a> uni.navigatTo无法跳转tab页面</h4><p><img src="https://img1.imgtp.com/2023/10/08/nQFMebtx.png" alt="uniapp无法跳转tabbar.png"></p><h3 id="收获" tabindex="-1"><a class="header-anchor" href="#收获" aria-hidden="true">#</a> 收获</h3><p>今天在我的页面使用了动画组件，这是我第一次使用，感觉非常丝滑，以后会在其他的页面引用上。<br></p><h4 id="uni-animation的使用" tabindex="-1"><a class="header-anchor" href="#uni-animation的使用" aria-hidden="true">#</a> uni-animation的使用</h4><p>uniapp 提供 createAnimation 内置函数，用于创建一个动画实例 animation。</p><ul><li>在data里创建一个animationData对象,用于接收动画实例(动画数据)</li><li>定义一个方法，在方法里创建动画实例，并且通过export方法导出</li><li>把动画数据也就是animationData传递给设置在组件里的animate属性</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>//创建动画实例
const animation = uni.createAnimation();
 animation.width(100).height(100).step()
  tis.animationData = animation.export(); 
//这个实例把对象元素的长宽设置为了100px(不用写单位)
//setup是用来进行动画分组的，因为uniapp默认并行执行，使用setup进行分组并行
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>//创建animationData对象
 data() {
    return {
        animationData: {}
    }
  },
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>//在组件里使用
&lt;view class=&quot;box&quot; :animation=&quot;animationData&quot;&gt;&lt;/view&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>好了，今天就到这里，期待明天的开发。。。<br></p>`,20),d=[r];function s(l,c){return i(),n("div",null,d)}const p=a(t,[["render",s],["__file","meetYou(2).html.vue"]]);export{p as default};
