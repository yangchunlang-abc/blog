import{_ as e,o as s,c as r,e as n}from"./app-e855bf65.js";const d={},a=n(`<p>在使用body-parser模块时，发现：<br> 使用body-parser中间件,显示bodyParser已被弃用,bodyParser is deprecated.</p><p>其实在Express 4.16.0开始，express已经内置了body解析，只需要添加一行配置文件就行</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>const express = require(&#39;express&#39;);

const app = express();
app.use(express.json());
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),t=[a];function i(c,o){return s(),r("div",null,t)}const p=e(d,[["render",i],["__file","demo(5).html.vue"]]);export{p as default};
