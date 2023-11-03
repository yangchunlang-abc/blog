import{_ as t,r as a,o as s,c as d,a as e,b as n,d as r,e as i}from"./app-abc032b7.js";const l={},c=e("p",null,[n("在编写调试 Node.js 项目的时候，如果修改了项目的代码，则需要频繁的手动关掉，然后再重新启动，非常繁琐。"),e("br")],-1),m={href:"https://www.npmjs.com/package/nodemon",target:"_blank",rel:"noopener noreferrer"},u=e("br",null,null,-1),_=i(`<h3 id="安装nodemon" tabindex="-1"><a class="header-anchor" href="#安装nodemon" aria-hidden="true">#</a> 安装nodemon</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>npm install -g nodemon

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>在package.json的文件里更改启动代码<br></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>  &quot;scripts&quot;: {
    &quot;start&quot;: &quot;nodemon ./bin/www&quot; //更改处
  },

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>现在只需要 npm run start即可。<br></p>`,5);function p(v,h){const o=a("ExternalLinkIcon");return s(),d("div",null,[c,e("p",null,[n("现在我们可以使用"),e("a",m,[n("nodemon"),r(o)]),n("工具在启动项目后自动重启更改的项目。"),u]),_])}const x=t(l,[["render",p],["__file","3.shiyongnodemon.html.vue"]]);export{x as default};
