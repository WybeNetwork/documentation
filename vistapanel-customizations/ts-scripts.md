# Theme Switcher

This scripts works with our themes for vistapanel to allow users to switch between multiple themes using dropdown menu.

### Method 1

!> `directory-name` is the name of directory where you uploaded script files. You can use as many themes as you want.

```html
<link rel="stylesheet" type="text/css" href="https://vpt.cdn.wybenetwork.com/light-lite/styles.css" title="lightlite" />
<link rel="stylesheet" type="text/css" href="https://vpt.cdn.wybenetwork.com/gradient-blue-lite/styles.css" title="gradientbluelite" />
<link rel="stylesheet" type="text/css" href="https://vpt.cdn.wybenetwork.com/dark-lite/styles.css" title="draklight" />
<script type="text/javascript" src="https://yourdomain.tld/directory-name/switcher.js"></script>
<button data-toggle="dropdown" class="btn dropdown-toggle user-preferences-btn">
<span>Theme Options</span>
</button>
<ul class="dropdown-menu dropdown-menu-right">
<li>
<a href="#" onclick="setActiveStyleSheet('lightlite'); return false;">Light Lite</a>
</li>
<li>
<a href="#" onclick="setActiveStyleSheet('gradientbluelite'); return false;">Gradient Blue Lite</a>
</li>
<li>
<a href="#" onclick="setActiveStyleSheet('draklight'); return false;">Dark Light</a>
</li>
</ul>
```

### Method 2

```html
<link rel="stylesheet" type="text/css" href="https://vpt.cdn.wybenetwork.com/light-lite/styles.css" title="lightlite" />
<link rel="stylesheet" type="text/css" href="https://vpt.cdn.wybenetwork.com/gradient-blue-lite/styles.css" title="gradientbluelite" />
<link rel="stylesheet" type="text/css" href="https://vpt.cdn.wybenetwork.com/dark-lite/styles.css" title="draklight" />
<script type="text/javascript" src="https://vpc.cdn.wybenetwork.com/theme-switcher/switcher.js"></script>
<button data-toggle="dropdown" class="btn dropdown-toggle user-preferences-btn">
<span>Theme Options</span>
</button>
<ul class="dropdown-menu dropdown-menu-right">
<li>
<a href="#" onclick="setActiveStyleSheet('lightlite'); return false;">Light Lite</a>
</li>
<li>
<a href="#" onclick="setActiveStyleSheet('gradientbluelite'); return false;">Gradient Blue Lite</a>
</li>
<li>
<a href="#" onclick="setActiveStyleSheet('draklight'); return false;">Dark Light</a>
</li>
</ul>
```