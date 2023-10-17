---
title: 关于this指向问题
date: 2023/10/17
categories:
-  JavaScript
tags:
  - 前端
  - javascript
---

### 在全局作用域中
<mark>this指向了window</mark>

![全局.png](https://img1.imgtp.com/2023/10/17/66kTZlI6.png)

### 在普通函数里
<mark>this 取决于是谁调用，谁调用它就指向谁</mark>
```
  <script>
    let obj = {
      fn1() { console.log(this); },
      fn2() { fn3() }
    }
    function fn3() { console.log(this); }

    fn3()       //this --> window
    obj.fn1()  //this --> obj
    obj.fn2()  //this --> window
  </script>
```

### 在箭头函数里

<mark>箭头函数没有自己的this，箭头函数的this就是上下文定义的this</mark>

```

  var o={
        a:function(){
            var arr=[1];
          //就是定义所在对象中的this
          //这里的this—>o
            arr.forEach(item=>{
              //所以this -> o
                console.log(this);
            })
        },
      //这里的this指向window o是定义在window中的对象
        b:()=>{
            console.log(this);
        },
        c:function() {
            console.log(this);
        }
    }
    div.addEventListener('click',item=>{
        console.log(this);//this->window 这里的this就是定义上文window环境中的this
    });
    o.a(); //this->o
    o.b();//this->window
    o.c();//this->o 普通函数谁调用就指向谁

```

### 在事件绑定里的this
<mark>事件绑定里的this指向事件源</mark>
```
var div = document.querySelector('div'); 
    div.addEventListener('click',function() {
        console.log(this); //this->div
    });
    
    div.onclick = function() {
    console.log(this) //this->div
    }
```
