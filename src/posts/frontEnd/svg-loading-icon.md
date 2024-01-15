---
title: 使用SVG动画创建Loading图标
time: 2021-04-14
category: 前端
tag:
  - 前端
---


## SVG 动画
在早期SVG1.1的规范中，SVG的是只能行内样式的。

到了SVG2，除了行内样式还支持svg使用`link`标签像HTML一样导入CSS。同时SVG的元素还可以使用`id`、`class`属性，页面CSS同样可以通过选择器对其产生效果。

在这份[候选推荐标准](https://www.w3.org/TR/2018/CR-SVG2-20181004/styling.html#StylingUsingCSS)中规定了SVG样式

那为什么不使用[SMIL](https://www.w3.org/TR/smil/smil-animation.html)? 尽管SMIL可以比CSS与SVG结合更紧密，但是目前使用的`SMIL 3.0`距今已经十多个年头了，而且有不小的学习成本。主流浏览器将会在其替代品发展充分后弃用这个标准<sup>[1](https://en.wikipedia.org/wiki/Synchronized_Multimedia_Integration_Language#Software)</sup>。

## 本文Demo

预期目标如图

![R6S Loading](/images/svg_loading.gif)

## Section1. 绘制
SVG绘制可以用Photoshop也可以使用[Figama](https://www.figma.com/),本文使用的是开源的SVG作图客户端——[Inkscape](https://gitlab.com/inkscape/inkscape)。具体绘制工具操作不一样，但是都是绘制SVG中的六大元素。
- rect
- circle
- line
- ellipse
- polyline
- polygon

这个Loading仅三个元素。
外框和对勾使用path就可以，中间的白条则使用rect更合适。

![设计过程](/images/design_svg.png)

## Section2. 为元素增加样式
在设计SVG的时候预留id或者class方便导入后直接用CSS进行操作。

页面中去更改SVG内的class名称感觉并不是一个好主意。对于大部分前端框架来说SVG内的标签并不是标准的H5标签。

所以我使用CSS变量操作颜色，并把svg包裹起来，通过改变父元素的class来改变图标的显示状态。

<details>
  <summary>CSS代码</summary>

```css
/* 默认loading颜色 */
:root {
  --box-outline: #9a9a9a;
  --check-color: transparent;
  --bar-color: #fff;
}
/* 完成加载的颜色 */
.done {
  --box-outline: #17d;
  --bar-color: transparent;
  --check-color: #17d;
}
#outbox {
  transition: fill 0.3s;
  fill: var(--box-outline);
}
#bar {
  fill: var(--bar-color);
  transform: scaleY(0.01);
  opacity: 0;
  transform-origin: 50% 55%;
  animation: roll 3s ease forwards infinite;
}
#check {
  fill: var(--check-color);
}

@keyframes roll {
  10% {
    transform: scaleY(0.01);
    opacity: 1;
    transform: rotateZ(0deg);
  }
  80% {
    opacity: 1;
    transform: rotateZ(720deg);
  }
  90% {
    opacity: 0;
    transform: scaleY(0.01);
  }
  100% {
    opacity: 0;
  }
}
```

</details>



## Result
🎉 完成

<iframe src="https://codesandbox.io/embed/r6s-prepare-phase-loading-m9y0d?fontsize=14&hidenavigation=1&theme=dark&view=preview"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="R6S-prepare-phase-loading"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>

<https://codesandbox.io/s/m9y0d>

### 参考
1. <https://en.wikipedia.org/wiki/Scalable_Vector_Graphics>
2. <https://www.youtube.com/watch?v=UTHgr6NLeEw>
3. <https://caniuse.com/?search=svg>
4. <https://datatracker.ietf.org/doc/draft-brownlee-svg-rfc/13/>

