import{_ as i,o as n,c as e,e as s}from"./app-616de0f2.js";const d={},l=s(`<h3 id="在全局作用域中" tabindex="-1"><a class="header-anchor" href="#在全局作用域中" aria-hidden="true">#</a> 在全局作用域中</h3><p><mark>this指向了window</mark></p><p><img src="https://img1.imgtp.com/2023/10/17/66kTZlI6.png" alt="全局.png"></p><h3 id="在普通函数里" tabindex="-1"><a class="header-anchor" href="#在普通函数里" aria-hidden="true">#</a> 在普通函数里</h3><p><mark>this 取决于是谁调用，谁调用它就指向谁</mark></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>  &lt;script&gt;
    let obj = {
      fn1() { console.log(this); },
      fn2() { fn3() }
    }
    function fn3() { console.log(this); }

    fn3()       //this --&gt; window
    obj.fn1()  //this --&gt; obj
    obj.fn2()  //this --&gt; window
  &lt;/script&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="在箭头函数里" tabindex="-1"><a class="header-anchor" href="#在箭头函数里" aria-hidden="true">#</a> 在箭头函数里</h3><p><mark>箭头函数没有自己的this，箭头函数的this就是上下文定义的this</mark></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>
  var o={
        a:function(){
            var arr=[1];
          //就是定义所在对象中的this
          //这里的this—&gt;o
            arr.forEach(item=&gt;{
              //所以this -&gt; o
                console.log(this);
            })
        },
      //这里的this指向window o是定义在window中的对象
        b:()=&gt;{
            console.log(this);
        },
        c:function() {
            console.log(this);
        }
    }
    div.addEventListener(&#39;click&#39;,item=&gt;{
        console.log(this);//this-&gt;window 这里的this就是定义上文window环境中的this
    });
    o.a(); //this-&gt;o
    o.b();//this-&gt;window
    o.c();//this-&gt;o 普通函数谁调用就指向谁

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="在事件绑定里的this" tabindex="-1"><a class="header-anchor" href="#在事件绑定里的this" aria-hidden="true">#</a> 在事件绑定里的this</h3><p><mark>事件绑定里的this指向事件源</mark></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>var div = document.querySelector(&#39;div&#39;); 
    div.addEventListener(&#39;click&#39;,function() {
        console.log(this); //this-&gt;div
    });
    
    div.onclick = function() {
    console.log(this) //this-&gt;div
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,12),a=[l];function t(r,v){return n(),e("div",null,a)}const o=i(d,[["render",t],["__file","thiszhixiangwenti.html.vue"]]);export{o as default};
