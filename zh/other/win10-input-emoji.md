---
title: 微软拼音Emoji输入优化
time: 2021-06-23
category: 其他
tag:
  - Windows
  - 工具
---

## 广为人知的Windows拼音输入技巧
- u模式输入
- v模式输入
- `win`+`;`调出emoji面板

## 存在的问题
Emoji 搜索仅存在于美式键盘输入模式下。中文（简体，中国）输入环境是没办法进行Emoji搜索的。
对比如图
![对比图](/images/emoji_input.jpg)

拼音输入法中也存在Emoji语义化。比如输入`qu'kuan'ji`是能看到🏧（ATM）的。但是像😸就很难想到对应中文。来回切换中英输入环境也有些麻烦，所以考虑把通用的Emoji加入拼音输入法当作单词输入。

## 准备
先找一份Emoji语义对照表，我选择了[node-emoji](https://github.com/omnidan/node-emoji/blob/master/lib/emoji.json)里的emoji.json文件。

## 代码：导出为Emoji字典
```javascript
const emoji = require("./emoji.json");
const fs = require("fs");

var content = "";
var position = 5; //候选位置，依个人喜好调整

for (let key of Object.keys(emoji)) {
  //去除太短的、太长、不常用、无语义、纯数字
  if (
    key.length < 3 ||
    key.length > 20 ||
    /^\d+$/.test(key) ||
    /flag-|^u|^(wo)?man|^(fe)?male|skin|blond|^clock|\+|\-|^v/.test(key)
  )
    continue;

  value = emoji[key];
  key = key.replace(/(-|_)([a-z])/g, (g) => "'" + g[1]);
  key = key.replace(/\d/g, ""); //去除数字
  content += `${key},${value},${position}\n`;
}

fs.writeFileSync("emoji_dict.txt", content);
```
运行后得到`emoji_dict.txt`
```txt
coffee,☕,5
sparkles,✨,5
grey'question,❔,5
....
```

## 字典转换
由于Win10输入法的导入格式并不是明文的，刚刚得到的自定义字典必须再经过一个步骤才行。

借助开源工具[深蓝词库转换](https://github.com/studyzy/imewlconverter)能很方便地转换成不同输入法的用户自定义词库。

设置自定义输入，词语之间`'`分割,参数之间用`,`分割。

![字典转换](/images/covert_dict.png)

## 尝试😋

![测试输入法](/images/typing_emoji.gif)

[📎附件：微软拼音自定义短语Emoji词库dat](/assets/EmojiUserDefinedPhrase.dat)

### 参考
1. <https://github.com/omnidan/node-emoji>
1. <https://github.com/studyzy/imewlconverter>
1. <https://stackoverflow.com/questions/6660977/convert-hyphens-to-camel-case-camelcase>

