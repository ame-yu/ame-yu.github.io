<div class="site-brand-container">
  <div class="site-meta{%- if theme.custom_logo %} custom-logo{%- endif %}">
    {%- if theme.custom_logo and theme.scheme === 'Muse' %}
      <div class="site-meta-headline">
        <a>
          <img class="custom-logo-image" src="{{ theme.custom_logo }}" alt="{{ title }}">
        </a>
      </div>
    {%- endif %}

    <div class="land-brand">
      {{title}}
    </div>
    {%- if subtitle %}
      {%- if theme.seo %}
        <h1 class="site-subtitle" itemprop="description">{{ subtitle }}</h1>
      {% else %}
        <p class="site-subtitle">{{ subtitle }}</p>
      {%- endif %}
    {%- endif %}
    {%- if theme.custom_logo and (theme.scheme === 'Gemini' or theme.scheme === 'Pisces') %}
      <a>
        <img class="custom-logo-image" src="{{ theme.custom_logo }}" alt="{{ title }}">
      </a>
    {%- endif %}
  </div>

  <div class="site-nav-toggle">
    <button aria-label="{{ __('accessibility.nav_toggle') }}">
      <span class="btn-bar"></span>
      <span class="btn-bar"></span>
      <span class="btn-bar"></span>
    </button>
  </div>
</div>


{%- set hasSearch = theme.algolia_search.enable || theme.local_search.enable %}

<nav class="site-nav">
  {{ partial('_partials/header/menu.swig', {}, {cache: theme.cache.enable}) }}

  {%- if theme.scheme === 'Muse' || theme.scheme === 'Mist' %}
    {% include 'sub-menu.swig' %}
  {%- endif %}
</nav>

{%- if hasSearch %}
  <div class="site-search">
    {{ partial('_partials/search/index.swig', {}, {cache: theme.cache.enable}) }}
  </div>
{%- endif %}

{{- next_inject('header') }}
