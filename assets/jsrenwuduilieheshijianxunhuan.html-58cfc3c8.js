import{_ as t,o as i,c as e,e as s}from"./app-abc032b7.js";const n={},l=s(`<h3 id="最近在uniapp聊天室项目发现一个问题" tabindex="-1"><a class="header-anchor" href="#最近在uniapp聊天室项目发现一个问题" aria-hidden="true">#</a> 最近在uniapp聊天室项目发现一个问题</h3><p>就是，我要让uni.showToast()展示某些信息后跳转到特定的页面。 在uni.showToast的成功回调中，我使用了跳转，<mark>实际上页面直接跳转了，没有显示信息</mark></p><p>后来在网上找到了这么一段代码</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>	setTimeout(() =&gt; {
								uni.showToast({
									title: &quot;欢迎使用!&quot;,
									duration: 3000,  //信息显示，3秒
									icon: &#39;success&#39;
								})
								setTimeout(() =&gt; {
									uni.switchTab({
										url: &#39;/pages/index/index&#39;,
									})
								}, 3000)    //等待3秒后，跳转页面
							}, 0)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>成功解决了，显示后跳转的问题。 我看着这段代码，想到了任务队列。</p><h3 id="宏任务和微任务" tabindex="-1"><a class="header-anchor" href="#宏任务和微任务" aria-hidden="true">#</a> 宏任务和微任务</h3><p>js是单线程的代码，有时候需要一种机制来执行多个块。 在执行块的时候调用js引擎，这样的机制就叫做事件循环。<br></p><p><mark>事件循环：主线程 + 宏任务 + 微任务</mark><br> 常见的宏任务包括:script,setTimeOut,setInterval,I/O <br> 常见的微任务包括:nextTick,promise.then(),await右边第二个任务(第一个作为同步代码顺序执行)<br></p><h3 id="事件循环" tabindex="-1"><a class="header-anchor" href="#事件循环" aria-hidden="true">#</a> 事件循环</h3><p>在js页面执行代码的过程中：</p><ul><li>主线程只有一个，先执行主线程，也就是同步代码，顺序执行</li><li>把宏任务放到宏任务队列</li><li>把微任务放到微任务队列</li><li>先执行主线程 -&gt; 微任务 -&gt; 宏任务</li><li>以此循环</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>    Promise.resolve().then(() =&gt; {
      console.log(&#39;Promise1&#39;)
      setTimeout(() =&gt; {
        console.log(&#39;setTimeOut2&#39;)
      }, 0)
    })

    setTimeout(() =&gt; {
      console.log(&#39;setTiemOut1&#39;)
      Promise.resolve().then(() =&gt; {
        console.log(&#39;Promise2&#39;)
      })
    })
    console.log(&#39;start&#39;)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>解析：<br></p><ol><li>在代码里首先顺序执行主线程的代码：输出 start</li><li>初步划分一下宏微队列</li><li>Promise.resolve().then()加入微队列</li><li>setTimeOut加入宏队列</li><li>执行微队列: 输出 Promise1 此时下面setTimeOut加入宏队列</li><li>执行宏队列： 输出 setTiemOut1 此时下面Promise.resolve().then()加入微队列</li><li>执行微队列: 输出 Promise2</li><li>执行宏队列： 输出 setTimeOut2 答案就是:start-&gt;promise1-&gt;setTimeout1-&gt;promise2-&gt;setTimeout2</li></ol><p><img src="https://img1.imgtp.com/2023/11/03/vK0E19pC.png" alt="宏微队列.png"></p><p><mark>事件循环执行顺序：宏-&gt;主线程 -&gt; 微 -&gt; 宏-&gt; 微 -&gt; 宏</mark></p><p><mark>因为script就是属于宏队列，所以先宏队列再微队列</mark></p><p>在事件循环中，宏任务队列的优先级高于微任务队列，因此宏任务队列中的任务会先于微任务队列中的任务执行。</p><p><mark>当一个宏任务执行完毕后，引擎会检查微任务队列，如果存在微任务，就会立即执行微任务队列中的所有任务，直到微任务队列为空。然后继续执行下一个宏任务。</mark></p><p>因此，在script标签中的代码执行过程中，如果存在微任务，它们会在当前宏任务执行完毕后立即执行。这也就是为什么在script标签中使用Promise等微任务时，它们的执行顺序会先于setTimeout等宏任务的原因。</p><p>有人说宏任务先于微任务执行，也有人说微任务先于宏任务执行</p><p>其实，由于整个 script 身就是一个大的宏任务，所以在执行任务时，肯定是执行script这个大的宏任务里面的代码，因此，我们也可以说是宏任务优先于微任务</p><p>但是如果我们忽略script这个大的宏任务，仅仅只讨论script里包含的任务代码块，那么任务的执行顺序就一定是微任务优先于宏任务</p><p><mark>记住宏队列优先级高于微队列</mark></p>`,24),a=[l];function r(d,m){return i(),e("div",null,a)}const c=t(n,[["render",r],["__file","jsrenwuduilieheshijianxunhuan.html.vue"]]);export{c as default};
