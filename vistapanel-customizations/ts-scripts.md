# Theme Switcher

This scripts works with our themes for vistapanel to allow users to switch between multiple themes using dropdown menu.

### Manual Installation

!> `directory-name` is the name of directory where you uploaded script files. You can use as many themes as you want.

```html
<script src="https://yourdomain.tld/theme-switcher.min.js" type="text/javascript"></script>
<script type="text/javascript">
    // object must be created with this name
    const wnThemeSwitcher = new ThemeSwitcher(
        [
            // Add theme folder name, name and type
            {
                dir: 'gradient-blue', // must be folder name of theme
                title: 'Gradient Blue', // any name you want to show on user end
                type: 'normal' // type of theme
            },
            {
                dir: 'light-lite',
                title: 'Light Theme',
                type: 'lite'
            },
            {
                dir: 'lightspace-blue',
                title: 'Lightspace Blue',
                type: 'special'
            }
        ],
        { // set options for themes
            baseURL: 'https://yourdomain.tld/', // optional, default is https://vpt.cdn.wybenetwork.com/ for loading themes
            position: 'usernav', // optional, default is bottom (footer area)
            default: { // optional, use to setup the default theme
                dir: 'dark-discord', // must be folder name of theme
                type: 'normal' // type of theme
            }
        }
    )
</script>
```

### Using our CDN

```html
<script src="https://vpc.cdn.wybenetwork.com/theme-switcher/theme-switcher.min.js" type="text/javascript"></script>
<script type="text/javascript">
    // object must be created with this name
    const wnThemeSwitcher = new ThemeSwitcher(
        [
            // Add theme folder name, name and type
            {
                dir: 'gradient-blue', // must be folder name of theme
                title: 'Gradient Blue', // any name you want to show on user end
                type: 'normal' // type of theme
            },
            {
                dir: 'light-lite',
                title: 'Light Theme',
                type: 'lite'
            },
            {
                dir: 'lightspace-blue',
                title: 'Lightspace Blue',
                type: 'special'
            }
        ],
        { // set options for themes
            default: { // optional, use to setup the default theme
                dir: 'dark-discord', // must be folder name of theme
                type: 'normal' // type of theme
            }
        }
    )
</script>
```
