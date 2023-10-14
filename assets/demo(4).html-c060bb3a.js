import{_ as e,o as i,c as n,e as s}from"./app-e855bf65.js";const d={},l=s(`<h3 id="开启qq邮箱的smtp服务和设置授权码" tabindex="-1"><a class="header-anchor" href="#开启qq邮箱的smtp服务和设置授权码" aria-hidden="true">#</a> 开启QQ邮箱的SMTP服务和设置授权码</h3><p><strong>什么是SMTP服务和授权码?</strong></p><p>SMTP（Simple Mail Transfer Protocol）是一种简单的邮件传输协议，它可以让你在不同的邮件系统之间发送和接收邮件。QQ邮箱开启SMTP服务后,允许使用QQ邮箱在第三方邮件客户端进行邮件发送，例如在Outlook、Foxmail、邮件达人等。</p><p>授权码是一种用于验证你身份的16位字符串，它是由QQ邮箱系统自动生成的，授权码相当于你的QQ邮箱软件专用密码，它可以保护你的账号安全，防止密码泄露。设置授权码后，使用QQ邮箱地址和授权码就可以在邮箱客户端中进行邮件发送，而不需要输入你的QQ密码。</p><p><strong>如何开启SMTP服务和设置授权码</strong><img src="https://img1.imgtp.com/2023/10/13/KQzd5xoL.png" alt="qqSMTP.png"></p><p><img src="https://img1.imgtp.com/2023/10/13/dgTYNINi.png" alt="STMP.png"></p><p>在开启后会跳转至授权码页面,先复制好授权码</p><h3 id="express安装nodemailer插件" tabindex="-1"><a class="header-anchor" href="#express安装nodemailer插件" aria-hidden="true">#</a> express安装nodemailer插件</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>npm install nodemailer
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>在config页面下新建文件用于存储qq邮箱证书,方便后续更改发送信息的邮箱</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>//qq发邮箱的证书
module.exports = {
  //链接qq邮箱
  qq: {
    user: &#39;发送信息的邮箱&#39;,
    pass: &#39;授权码&#39;
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="配置邮箱内容" tabindex="-1"><a class="header-anchor" href="#配置邮箱内容" aria-hidden="true">#</a> 配置邮箱内容</h3><p>创建一个emailserver.js文件配置邮箱内容</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>//应用发送邮件的插件
var nodemailer = require(&#39;nodemailer&#39;)
//应用证书文件
var credentials = require(&#39;../config/credentials&#39;)
//创建传输方式
var transporter = nodemailer.createTransport({
  service: &#39;qq&#39;,
  auth: {
    user: credentials.qq.user,
    pass: credentials.qq.pass
  }
})

//注册发送邮件给用户
exports.emailSignUp = function (email, res) {
  //发送信息内容
  let options = {
    from: &#39;2311129161@qq.com&#39;,
    to: email,
    subject: &#39;感谢在weetYou注册&#39;,
    html: &#39;&lt;span&gt;weetYou欢迎你的加入!&lt;/span&gt;&lt;a href=&quot;#&quot;&gt;点击&lt;/a&gt;&#39;
  }

  //发送邮件
  transporter.sendMail(options, function (err, res) {
    if (err) {
      res.send(&#39;邮箱发送失败!&#39;)
      console.log(err);
    }
    else {
      res.send(&#39;邮箱发送成功!&#39;)
      console.log(&#39;邮箱发送成功!&#39;);
    }
  })
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>定义发送邮箱信息的接口</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>  //发送邮箱
  app.post(&#39;/mail&#39;, (req, res) =&gt; {
    let mail = req.body.mail
    emailserver.emailSignUp(mail, res)
    res.send(mail)
  })
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="测试邮箱是否能成功发送消息" tabindex="-1"><a class="header-anchor" href="#测试邮箱是否能成功发送消息" aria-hidden="true">#</a> 测试邮箱是否能成功发送消息</h3><p>在前端页面用户输入了邮箱号，接口返回用户的邮箱号，传入nodemailer插件配置文件，并且向邮件发送自定义的信息。</p><p>如图：用户收到邮件 <img src="https://img1.imgtp.com/2023/10/13/s2fOHcU5.png" alt="Snipaste_2023-10-13_19-34-47.png"></p><p><img src="https://img1.imgtp.com/2023/10/13/wBk4I7g9.png" alt="youx.png"></p>`,20),a=[l];function r(t,v){return i(),n("div",null,a)}const m=e(d,[["render",r],["__file","demo(4).html.vue"]]);export{m as default};
