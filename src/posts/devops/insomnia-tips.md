---
title: Insomnia填坑记录
time: 2021-11-13
category: 运维
tag:
  - 测试
---

> 记录的insomnia版本是`2020.4.1`，最新版可能已经解决以下的一些痛点

Insomnia是用来测试API的工具（开源、部分功能收费）。同类产品如Postman(闭源商业软件)、Hoppscotch（开源免费，原Postwoman）。

## 单元测试相关
Insomnia单元测试并不强大，遇到了不少坑。以下是我整理一些有参考价值的。

### 1. 如何修改单元测试的顺序？
直接修改insomnia data里的`insomnia.UnitTest.db`是[行格式JSON](https://jsonlines.org/)。
排序的字段`created`（创建时间）。

直接修改不方便，可以用我写的网页辅助一下 [insomnia-testsuit-order-editor](/demo/insomnia-testsuit-order-editor.html)

### 2. 某一单元测试失败后如何终止？
粗暴的做法是直接删除请求的方法。后面的请求都不会被发送。
```
insomnia.sendRequest = null
```

### 3. 同一组单元测试如何传递变量？
还是简单粗暴，直接借用global全局对象
```
global.temp = {foo: "bar"}
console.log(global.temp.foo) //bar
```

### 4. 如何动态修改请求Header、body？

改Insomnia源码对send方法进行拓展（如这个[PR](https://github.com/Kong/insomnia/pull/2994)）

或者

使用利用插件注册requestHooks，对请求进行修改。
可以使用、参考我写的这个插件。
[ame-yu/insomnia-plugin-req-tamper](https://github.com/ame-yu/insomnia-plugin-req-tamper)

### 参考
1. <https://github.com/Kong/insomnia>

