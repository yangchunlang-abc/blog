import{_ as d,r as l,o as r,c as a,a as e,b as n,d as i,e as u}from"./app-abc032b7.js";const v={},c=e("p",null,"由于前面服务器过期，现在买服务器还是有点小贵，所以最近又重新捣腾了个静态博客。",-1),t=e("h2",{id:"安装vuepress",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#安装vuepress","aria-hidden":"true"},"#"),n(" 安装Vuepress")],-1),o={href:"https://v2.vuepress.vuejs.org/zh/",target:"_blank",rel:"noopener noreferrer"},m=e("br",null,null,-1),b=e("p",null,[e("img",{src:"https://img1.imgtp.com/2023/10/06/LTPORYzI.jpg",alt:"OIP.jpg"})],-1),p=e("h2",{id:"使用vuepress-reco主题",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#使用vuepress-reco主题","aria-hidden":"true"},"#"),n(" 使用vuepress-reco主题")],-1),h=e("br",null,null,-1),_={href:"https://vuepress-theme-reco.recoluan.com/",target:"_blank",rel:"noopener noreferrer"},g=u(`<h2 id="项目上线" tabindex="-1"><a class="header-anchor" href="#项目上线" aria-hidden="true">#</a> 项目上线</h2><p>国内使用github始终是速度慢啊，但我用的还是github。<br>创建好仓库后，用github里的actions弄了一个自动化部署。<br>这样我每次上传到github它后自动打包放到另外一个分支，然后开启GitHub Pages，让别人访问你的博客。<br></p><p>下面是自动化部署文件的配置(.github/workflows/deploy.yml)</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># name 可以自定义
name: Deploy GitHub Pages
# 触发条件：在 push 到 main/master 分支后，新的 Github 项目 应该都是 main，而之前的项目一般都是 master
on:
push:
  branches:
    - main
# 任务
jobs:
build-and-deploy:
  # 服务器环境：最新版 Ubuntu
  runs-on: ubuntu-latest
  steps:
    # 拉取代码
    - name: Checkout
      uses: actions/checkout@v2
      with:
        persist-credentials: false
    # 生成静态文件
    - name: Build
      run: npm install &amp;&amp; npm run build
    # 部署到 GitHub Pages
    - name: Deploy
      uses: JamesIves/github-pages-deploy-action@releases/v3
      with:
        ACCESS_TOKEN: \${{ secrets.ACCESS_TOKEN }} # 也就是我们刚才生成的 secret
        BRANCH: gh-pages # 部署到 gh-pages 分支，因为 main 分支存放的一般是源码，而 gh-pages 分支则用来存放生成的静态文件
        FOLDER: docs/.vuepress/dist # vuepress 生成的静态文件存放的地方
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="所有流程" tabindex="-1"><a class="header-anchor" href="#所有流程" aria-hidden="true">#</a> 所有流程</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code> npm init
  # 安装vuepress
  npm i vuepress -D
  # 安装主题
  npm i vuepress-theme-reco -D
  # 在package.json的scripts中加入
  &quot;docs:dev&quot;: &quot;vuepress dev docs&quot;,
  &quot;docs:build&quot;: &quot;vuepress build docs&quot;,
  # 在根目录下建一个README.md文件，这里就是你的主页内容
  # 在根目录下创建一个docs文件夹
  # docs下创建一个.vuepress文件夹
  # .vuepress下建一个config.js，这就是配置文件
  # 使用主题
  // .vuepress/config.js
  module.exports = {
    theme: &#39;reco&#39;
  }
  # 本地预览
  npm run docs:dev
  # 生成静态文件 会生成一个dist文件夹,在.vuepress下
  npm run docs:build
  # 然后就可以推送上线了。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>不得不说，有时候vuepress的热更新不太行，看到代码不生效就重启项目试试，能够少踩很多坑</p>`,7);function f(x,k){const s=l("ExternalLinkIcon");return r(),a("div",null,[c,t,e("p",null,[n("具体的安装使用方法"),e("a",o,[n("官方文档"),i(s)]),n("写的非常详细"),m]),b,p,e("p",null,[n("但是呢，Vuepress的博客主题对于我而言太过简约，所以我选择vuepress-reco主题"),h,n(" 当然了，安装方法还是看"),e("a",_,[n("文档"),i(s)]),n("比本人靠谱")]),g])}const j=d(v,[["render",f],["__file","1.dajianboke.html.vue"]]);export{j as default};
