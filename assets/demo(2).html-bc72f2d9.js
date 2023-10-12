import{_ as e,o as s,c as n,e as r}from"./app-74f9d087.js";const t={},i=r(`<h3 id="设置express跨域" tabindex="-1"><a class="header-anchor" href="#设置express跨域" aria-hidden="true">#</a> 设置Express跨域</h3><p>首先狭义的同源就是指，域名、协议、端口均为相同.<br> 跨域，是指浏览器不能执行其他网站的脚本。它是由浏览器的同源策略造成的，是浏览器对JavaScript实施的安全限制。<br> 这里说明一下，无法跨域是浏览器对于用户安全的考虑，如果自己写个没有同源策略的浏览器，完全不用考虑跨域问题了。是浏览器的锅，同源策略限制了一下行为： Cookie、LocalStorage 和 IndexDB 无法读取 DOM 和 JS 对象无法获取 Ajax请求发送不出去。<br> jsonp是一种投机取巧的方法，用《script src=&quot;&quot;》来做请求（前面讲浏览器不只限制那两个api），响应的报文字串会被浏览器当作脚本顺便就运行了<br><strong>目前我主要使用cors</strong><mark>CORS（Cross-Origin Resource Sharing）,跨域资源共享</mark> 当使用XMLHttpRequest发送请求时，如果浏览器发现违反了同源策略就会自动加上一个请求头 origin；<br></p><p>后端在接受到请求后确定响应后会在 Response Headers 中加入一个属性 Access-Control-Allow-Origin；<br></p><p>浏览器判断响应中的 Access-Control-Allow-Origin 值是否和当前的地址相同，匹配成功后才继续响应处理，否则报错.<br></p><p>下面在express的app.js里面设置cors</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// 允许跨域请求
app.use(function (req, res, next) {
  res.header(&quot;Access-Control-Allow-Origin&quot;, &quot;*&quot;);
  res.header(&quot;Access-Control-Allow-Headers&quot;, &quot;Origin, X-Requested-With, Content-Type, Accept&quot;);
  next();
});

// 允许content-type字段
app.options(&#39;*&#39;, function (req, res) {
  res.header(&quot;Access-Control-Allow-Methods&quot;, &quot;GET, PUT, POST, DELETE, OPTIONS&quot;);
  res.header(&quot;Access-Control-Allow-Headers&quot;, &quot;Content-Type, Authorization, Content-Length, X-Requested-With&quot;);
  res.sendStatus(200);
});

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6),o=[i];function a(d,l){return s(),n("div",null,o)}const u=e(t,[["render",a],["__file","demo(2).html.vue"]]);export{u as default};