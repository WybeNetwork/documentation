# Change Footer Logo and Copyright Details in vPanel

This script allow you to change the cPanel logo present in the footer of vPanel and copyright details present in the footer of your vPanel to your company branding.

### Method 1

!> `directory-name` is the name of directory where you uploaded script files.

```html
<script type="text/javascript">  

    var b = {  
        company_name : "Your company name",  
        company_logo : "Your company logo",  
        company_started : "What year did your company start?",  
        prm_site : "Your Primary site URL (With HTTP:// or HTTPS://)",  
    }  

</script>  
<script src="https://yourdomain.tld/directory-name/cpanel-logo-to-copyright.js" type="text/javascript"></script>
```

### Method 2

```html
<script type="text/javascript">  

    var b = {  
        company_name : "Your company name",  
        company_logo : "Your company logo",  
        company_started : "What year did your company start?",  
        prm_site : "Your Primary site URL (With HTTP:// or HTTPS://)",  
    }  

</script>  
<script src="https://vpc.cdn.wybenetwork.com/cpanel-logo-to-copyright/cpanel-logo-to-copyright.js" type="text/javascript"></script>  
```