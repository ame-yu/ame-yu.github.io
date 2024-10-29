import{_ as i}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as a,d as n,o as e}from"./app-Byj-PdKh.js";const l="/images/svg_loading.gif",t="/images/design_svg.png",h={};function p(r,s){return e(),a("div",null,s[0]||(s[0]=[n('<h2 id="svg-动画" tabindex="-1"><a class="header-anchor" href="#svg-动画"><span>SVG 动画</span></a></h2><p>在早期SVG1.1的规范中，SVG的是只能行内样式的。</p><p>到了SVG2，除了行内样式还支持svg使用<code>link</code>标签像HTML一样导入CSS。同时SVG的元素还可以使用<code>id</code>、<code>class</code>属性，页面CSS同样可以通过选择器对其产生效果。</p><p>在这份<a href="https://www.w3.org/TR/2018/CR-SVG2-20181004/styling.html#StylingUsingCSS" target="_blank" rel="noopener noreferrer">候选推荐标准</a>中规定了SVG样式</p><p>那为什么不使用<a href="https://www.w3.org/TR/smil/smil-animation.html" target="_blank" rel="noopener noreferrer">SMIL</a>? 尽管SMIL可以比CSS与SVG结合更紧密，但是目前使用的<code>SMIL 3.0</code>距今已经十多个年头了，而且有不小的学习成本。主流浏览器将会在其替代品发展充分后弃用这个标准<sup><a href="https://en.wikipedia.org/wiki/Synchronized_Multimedia_Integration_Language#Software" target="_blank" rel="noopener noreferrer">1</a></sup>。</p><h2 id="本文demo" tabindex="-1"><a class="header-anchor" href="#本文demo"><span>本文Demo</span></a></h2><p>预期目标如图</p><figure><img src="'+l+'" alt="R6S Loading" tabindex="0" loading="lazy"><figcaption>R6S Loading</figcaption></figure><h2 id="section1-绘制" tabindex="-1"><a class="header-anchor" href="#section1-绘制"><span>Section1. 绘制</span></a></h2><p>SVG绘制可以用Photoshop也可以使用<a href="https://www.figma.com/" target="_blank" rel="noopener noreferrer">Figama</a>,本文使用的是开源的SVG作图客户端——<a href="https://gitlab.com/inkscape/inkscape" target="_blank" rel="noopener noreferrer">Inkscape</a>。具体绘制工具操作不一样，但是都是绘制SVG中的六大元素。</p><ul><li>rect</li><li>circle</li><li>line</li><li>ellipse</li><li>polyline</li><li>polygon</li></ul><p>这个Loading仅三个元素。 外框和对勾使用path就可以，中间的白条则使用rect更合适。</p><figure><img src="'+t+`" alt="设计过程" tabindex="0" loading="lazy"><figcaption>设计过程</figcaption></figure><h2 id="section2-为元素增加样式" tabindex="-1"><a class="header-anchor" href="#section2-为元素增加样式"><span>Section2. 为元素增加样式</span></a></h2><p>在设计SVG的时候预留id或者class方便导入后直接用CSS进行操作。</p><p>页面中去更改SVG内的class名称感觉并不是一个好主意。对于大部分前端框架来说SVG内的标签并不是标准的H5标签。</p><p>所以我使用CSS变量操作颜色，并把svg包裹起来，通过改变父元素的class来改变图标的显示状态。</p><details><summary>CSS代码</summary><div class="language-css line-numbers-mode" data-highlighter="shiki" data-ext="css" data-title="css" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">/* 默认loading颜色 */</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#56B6C2;">:root</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">  --box-outline</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">#</span><span style="--shiki-light:#0184BC;--shiki-dark:#D19A66;">9a9a9a</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">  --check-color</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#383A42;--shiki-dark:#D19A66;">transparent</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">  --bar-color</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">#</span><span style="--shiki-light:#0184BC;--shiki-dark:#D19A66;">fff</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">/* 完成加载的颜色 */</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">.done</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">  --box-outline</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">#</span><span style="--shiki-light:#0184BC;--shiki-dark:#D19A66;">17d</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">  --bar-color</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#383A42;--shiki-dark:#D19A66;">transparent</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">  --check-color</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">#</span><span style="--shiki-light:#0184BC;--shiki-dark:#D19A66;">17d</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">#outbox</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  transition: </span><span style="--shiki-light:#383A42;--shiki-dark:#D19A66;">fill</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 0.3</span><span style="--shiki-light:#986801;--shiki-dark:#E06C75;">s</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  fill: </span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">var</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">--box-outline</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">#bar</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  fill: </span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">var</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">--bar-color</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  transform: </span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">scaleY</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">0.01</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  opacity: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  transform-origin: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">50</span><span style="--shiki-light:#986801;--shiki-dark:#E06C75;">%</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 55</span><span style="--shiki-light:#986801;--shiki-dark:#E06C75;">%</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  animation: roll </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">3</span><span style="--shiki-light:#986801;--shiki-dark:#E06C75;">s</span><span style="--shiki-light:#383A42;--shiki-dark:#D19A66;"> ease</span><span style="--shiki-light:#383A42;--shiki-dark:#D19A66;"> forwards</span><span style="--shiki-light:#383A42;--shiki-dark:#D19A66;"> infinite</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">#check</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  fill: </span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">var</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">--check-color</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">@keyframes</span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;"> roll</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  10% {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    transform: </span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">scaleY</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">0.01</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    opacity: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    transform: </span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">rotateZ</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">0</span><span style="--shiki-light:#986801;--shiki-dark:#E06C75;">deg</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  80% {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    opacity: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    transform: </span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">rotateZ</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">720</span><span style="--shiki-light:#986801;--shiki-dark:#E06C75;">deg</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  90% {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    opacity: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    transform: </span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">scaleY</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">0.01</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  100% {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    opacity: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h2 id="result" tabindex="-1"><a class="header-anchor" href="#result"><span>Result</span></a></h2><p>🎉 完成</p><iframe src="https://codesandbox.io/embed/r6s-prepare-phase-loading-m9y0d?fontsize=14&amp;hidenavigation=1&amp;theme=dark&amp;view=preview" style="width:100%;height:500px;border:0;border-radius:4px;overflow:hidden;" title="R6S-prepare-phase-loading" allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking" sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"></iframe><p><a href="https://codesandbox.io/s/m9y0d" target="_blank" rel="noopener noreferrer">https://codesandbox.io/s/m9y0d</a></p><h3 id="参考" tabindex="-1"><a class="header-anchor" href="#参考"><span>参考</span></a></h3><ol><li><a href="https://en.wikipedia.org/wiki/Scalable_Vector_Graphics" target="_blank" rel="noopener noreferrer">https://en.wikipedia.org/wiki/Scalable_Vector_Graphics</a></li><li><a href="https://www.youtube.com/watch?v=UTHgr6NLeEw" target="_blank" rel="noopener noreferrer">https://www.youtube.com/watch?v=UTHgr6NLeEw</a></li><li><a href="https://caniuse.com/?search=svg" target="_blank" rel="noopener noreferrer">https://caniuse.com/?search=svg</a></li><li><a href="https://datatracker.ietf.org/doc/draft-brownlee-svg-rfc/13/" target="_blank" rel="noopener noreferrer">https://datatracker.ietf.org/doc/draft-brownlee-svg-rfc/13/</a></li></ol>`,24)]))}const o=i(h,[["render",p],["__file","svg-loading-icon.html.vue"]]),c=JSON.parse('{"path":"/posts/frontEnd/svg-loading-icon.html","title":"使用SVG动画创建Loading图标","lang":"zh-CN","frontmatter":{"title":"使用SVG动画创建Loading图标","date":"2021-04-14T00:00:00.000Z","category":"前端","tag":["前端"],"description":"SVG 动画 在早期SVG1.1的规范中，SVG的是只能行内样式的。 到了SVG2，除了行内样式还支持svg使用link标签像HTML一样导入CSS。同时SVG的元素还可以使用id、class属性，页面CSS同样可以通过选择器对其产生效果。 在这份候选推荐标准中规定了SVG样式 那为什么不使用SMIL? 尽管SMIL可以比CSS与SVG结合更紧密，但是...","head":[["meta",{"property":"og:url","content":"https://ame-yu.github.io/posts/frontEnd/svg-loading-icon.html"}],["meta",{"property":"og:site_name","content":"KyleZhou个人博客"}],["meta",{"property":"og:title","content":"使用SVG动画创建Loading图标"}],["meta",{"property":"og:description","content":"SVG 动画 在早期SVG1.1的规范中，SVG的是只能行内样式的。 到了SVG2，除了行内样式还支持svg使用link标签像HTML一样导入CSS。同时SVG的元素还可以使用id、class属性，页面CSS同样可以通过选择器对其产生效果。 在这份候选推荐标准中规定了SVG样式 那为什么不使用SMIL? 尽管SMIL可以比CSS与SVG结合更紧密，但是..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://ame-yu.github.io/images/svg_loading.gif"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-01-22T04:25:26.000Z"}],["meta",{"property":"article:tag","content":"前端"}],["meta",{"property":"article:published_time","content":"2021-04-14T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-01-22T04:25:26.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"使用SVG动画创建Loading图标\\",\\"image\\":[\\"https://ame-yu.github.io/images/svg_loading.gif\\",\\"https://ame-yu.github.io/images/design_svg.png\\"],\\"datePublished\\":\\"2021-04-14T00:00:00.000Z\\",\\"dateModified\\":\\"2024-01-22T04:25:26.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Kyle Zhou\\"}]}"]]},"headers":[{"level":2,"title":"SVG 动画","slug":"svg-动画","link":"#svg-动画","children":[]},{"level":2,"title":"本文Demo","slug":"本文demo","link":"#本文demo","children":[]},{"level":2,"title":"Section1. 绘制","slug":"section1-绘制","link":"#section1-绘制","children":[]},{"level":2,"title":"Section2. 为元素增加样式","slug":"section2-为元素增加样式","link":"#section2-为元素增加样式","children":[]},{"level":2,"title":"Result","slug":"result","link":"#result","children":[{"level":3,"title":"参考","slug":"参考","link":"#参考","children":[]}]}],"git":{"createdTime":1624458029000,"updatedTime":1705897526000,"contributors":[{"name":"ame-yu","email":"lueu@live.com","commits":2}]},"readingTime":{"minutes":2.11,"words":633},"filePathRelative":"posts/frontEnd/svg-loading-icon.md","localizedDate":"2021年4月14日","excerpt":"<h2>SVG 动画</h2>\\n<p>在早期SVG1.1的规范中，SVG的是只能行内样式的。</p>\\n<p>到了SVG2，除了行内样式还支持svg使用<code>link</code>标签像HTML一样导入CSS。同时SVG的元素还可以使用<code>id</code>、<code>class</code>属性，页面CSS同样可以通过选择器对其产生效果。</p>\\n<p>在这份<a href=\\"https://www.w3.org/TR/2018/CR-SVG2-20181004/styling.html#StylingUsingCSS\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">候选推荐标准</a>中规定了SVG样式</p>","autoDesc":true}');export{o as comp,c as data};
