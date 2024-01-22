const e=JSON.parse('{"key":"v-47758a4b","path":"/posts/devops/insomnia-tips.html","title":"Insomnia填坑记录","lang":"zh-CN","frontmatter":{"title":"Insomnia填坑记录","date":"2021-11-13T00:00:00.000Z","category":"运维","tag":["测试"],"description":"记录的insomnia版本是2020.4.1，最新版可能已经解决以下的一些痛点 Insomnia是用来测试API的工具（开源、部分功能收费）。同类产品如Postman(闭源商业软件)、Hoppscotch（开源免费，原Postwoman）。 单元测试相关 Insomnia单元测试并不强大，遇到了不少坑。以下是我整理一些有参考价值的。 1. 如何修改单元测试的顺序？ 直接修改insomnia data里的insomnia.UnitTest.db是行格式JSON。 排序的字段created（创建时间）。","head":[["meta",{"property":"og:url","content":"https://ame-yu.github.io/posts/devops/insomnia-tips.html"}],["meta",{"property":"og:site_name","content":"KyleZhou个人博客"}],["meta",{"property":"og:title","content":"Insomnia填坑记录"}],["meta",{"property":"og:description","content":"记录的insomnia版本是2020.4.1，最新版可能已经解决以下的一些痛点 Insomnia是用来测试API的工具（开源、部分功能收费）。同类产品如Postman(闭源商业软件)、Hoppscotch（开源免费，原Postwoman）。 单元测试相关 Insomnia单元测试并不强大，遇到了不少坑。以下是我整理一些有参考价值的。 1. 如何修改单元测试的顺序？ 直接修改insomnia data里的insomnia.UnitTest.db是行格式JSON。 排序的字段created（创建时间）。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-01-22T04:25:26.000Z"}],["meta",{"property":"article:author","content":"Kyle Zhou"}],["meta",{"property":"article:tag","content":"测试"}],["meta",{"property":"article:published_time","content":"2021-11-13T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-01-22T04:25:26.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Insomnia填坑记录\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2021-11-13T00:00:00.000Z\\",\\"dateModified\\":\\"2024-01-22T04:25:26.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Kyle Zhou\\"}]}"]]},"headers":[{"level":2,"title":"单元测试相关","slug":"单元测试相关","link":"#单元测试相关","children":[{"level":3,"title":"1. 如何修改单元测试的顺序？","slug":"_1-如何修改单元测试的顺序","link":"#_1-如何修改单元测试的顺序","children":[]},{"level":3,"title":"2. 某一单元测试失败后如何终止？","slug":"_2-某一单元测试失败后如何终止","link":"#_2-某一单元测试失败后如何终止","children":[]},{"level":3,"title":"3. 同一组单元测试如何传递变量？","slug":"_3-同一组单元测试如何传递变量","link":"#_3-同一组单元测试如何传递变量","children":[]},{"level":3,"title":"4. 如何动态修改请求Header、body？","slug":"_4-如何动态修改请求header、body","link":"#_4-如何动态修改请求header、body","children":[]},{"level":3,"title":"参考","slug":"参考","link":"#参考","children":[]}]}],"git":{"createdTime":1705306961000,"updatedTime":1705897526000,"contributors":[{"name":"ame-yu","email":"lueu@live.com","commits":2}]},"readingTime":{"minutes":1.1,"words":330},"filePathRelative":"posts/devops/insomnia-tips.md","localizedDate":"2021年11月13日","excerpt":"<blockquote>\\n<p>记录的insomnia版本是<code>2020.4.1</code>，最新版可能已经解决以下的一些痛点</p>\\n</blockquote>\\n<p>Insomnia是用来测试API的工具（开源、部分功能收费）。同类产品如Postman(闭源商业软件)、Hoppscotch（开源免费，原Postwoman）。</p>\\n<h2> 单元测试相关</h2>\\n<p>Insomnia单元测试并不强大，遇到了不少坑。以下是我整理一些有参考价值的。</p>\\n<h3> 1. 如何修改单元测试的顺序？</h3>\\n<p>直接修改insomnia data里的<code>insomnia.UnitTest.db</code>是<a href=\\"https://jsonlines.org/\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">行格式JSON</a>。\\n排序的字段<code>created</code>（创建时间）。</p>","autoDesc":true}');export{e as data};