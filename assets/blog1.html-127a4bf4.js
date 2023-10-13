import{_ as i,r as a,o as r,c as d,a as e,b as n,d as s,e as t}from"./app-1ab164f1.js";const o={},c=e("p",null,[n("博客网站虽然建好了，但是还有很多功能没有实现。"),e("br"),n(" 这种时候我们一般借助一些插件实现想要的功能。"),e("br"),n(" 本人不才哈，也希望某一天能够自己开发一个大家都喜欢用的插件。")],-1),u=e("h2",{id:"利用valien实现评论功能",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#利用valien实现评论功能","aria-hidden":"true"},"#"),n(" 利用valien实现评论功能")],-1),p=e("br",null,null,-1),v={href:"https://valine.js.org/",target:"_blank",rel:"noopener noreferrer"},m=e("br",null,null,-1),_=e("div",{class:"language-text line-numbers-mode","data-ext":"text"},[e("pre",{class:"language-text"},[e("code",null,`npm install --save vuepress-plugin-comment
`)]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"})])],-1),b=e("br",null,null,-1),h={href:"https://www.leancloud.cn/",target:"_blank",rel:"noopener noreferrer"},g=e("br",null,null,-1),x=t(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>module.exports = {
plugins: [
  [
    &#39;vuepress-plugin-comment&#39;,
    {
      choosen: &#39;valine&#39;, 
      // options选项中的所有参数，会传给Valine的配置
      options: {
        el: &#39;#valine-vuepress-comment&#39;,
        appId: &#39;Your own appId&#39;,
        appKey: &#39;Your own appKey&#39;
      }
    }
  ]
]
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在这样的配置下评论区会全局使用，也就是在每个文章下面都会有评论区。</p><p>这是评论区的样式,更多的样式可以自己魔改主题。不过我把重心放在博客上也就不折腾样式了。</p><p><img src="https://img1.imgtp.com/2023/10/06/ZaJlAWBi.png" alt="评论区"></p><h2 id="其他插件" tabindex="-1"><a class="header-anchor" href="#其他插件" aria-hidden="true">#</a> 其他插件</h2><p>插件可谓是丰富多样，遗憾的是很多都基于vuepress1<br> 我现在使用的vuepress2很多都是不兼容的，下载并配置后没反应。</p>`,6);function f(k,V){const l=a("ExternalLinkIcon");return r(),d("div",null,[c,u,e("p",null,[n("Valine 诞生于2017年8月7日，是一款基于LeanCloud的快速、简洁且高效的无后端评论系统。——来自官网的介绍"),p,n(" 很多时候看看"),e("a",v,[n("官方文档"),s(l)]),n("也就知其所以然了。"),m,n(" 按照惯例 先下载插件")]),_,e("p",null,[n("插件的基本配置(具体的配置看官网)"),b,n(" appid和appkey要注册使用"),e("a",h,[n("LeanCloud"),s(l)]),n("评论系统，不花钱，但是要实名认证。"),g,n(" 在LeanCloud里创建实例，就可以获得appid和appkey粘贴到下面配置即可。")]),x])}const L=i(o,[["render",f],["__file","blog1.html.vue"]]);export{L as default};
