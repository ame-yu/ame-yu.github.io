{%- if theme.disqus.count %}
<script>
  function loadCount() {
    var d = document, s = d.createElement('script');
    s.src = 'https://{{ theme.disqus.shortname }}.disqus.com/count.js';
    s.id = 'dsq-count-scr';
    (d.head || d.body).appendChild(s);
  }
  // defer loading until the whole page loading is completed
  window.addEventListener('load', loadCount, false);
</script>
{%- endif %}
{%- if page.comments %}
<script>

function baseGet(url){
  return new Promise((resovle, reject) => {
    var xhr = new XMLHttpRequest();
    xhr.open("GET",url, true);
    xhr.send()
    xhr.onreadystatechange = () => {
     var DONE = 4; // readyState 4 代表已向服务器发送请求
     var OK = 200; // status 200 代表服务器返回成功
     if(xhr.readyState === DONE){
      if(xhr.status === OK){
        resovle(xhr.responseText);
      } else{
        reject(xhr.responseText);
      }
     }
    }
  })
}

  function disqus_config() {
    this.page.url = {{ page.permalink | json }};
    this.page.identifier = {{ page.path | json }};
    this.page.title = '{{ page.title | addslashes }}';
    {%- if __('disqus') !== 'disqus' -%}
      this.language = '{{ __('disqus') }}';
    {% endif -%}
  };
  function loadComments() {
    if (window.DISQUS) {
      DISQUS.reset({
        reload: true,
        config: disqus_config
      });
    } else {
      var d = document, s = d.createElement('script');
      s.src = 'https://{{ theme.disqus.shortname }}.disqus.com/embed.js';
      //var txt = baseGet('https://{{ theme.disqus.shortname }}.disqus.com/embed.js').replace("iframe","div")
      //s.text = txt
      s.setAttribute('data-timestamp', '' + +new Date());
      (d.head || d.body).appendChild(s);
    }
  }



  {%- if theme.disqus.lazyload %}
    (function() {
      var offsetTop = document.getElementById('comments').offsetTop - window.innerHeight;
      if (offsetTop <= 0) {
        // load directly when there's no a scrollbar
        window.addEventListener('load', loadComments, false);
      } else {
        var disqus_scroll = () => {
          // offsetTop may changes because of manually resizing browser window or lazy loading images.
          var offsetTop = document.getElementById('comments').offsetTop - window.innerHeight;
          var scrollTop = window.scrollY;

          // pre-load comments a bit? (margin or anything else)
          if (offsetTop - scrollTop < 60) {
            window.removeEventListener('scroll', disqus_scroll);
            loadComments();
          }
        };
        window.addEventListener('scroll', disqus_scroll);
      }
    })();
  {% else %}
    window.addEventListener('load', loadComments, false);
  {%- endif %}
</script>
{%- endif %}
