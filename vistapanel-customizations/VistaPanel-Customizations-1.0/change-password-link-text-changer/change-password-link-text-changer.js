/**
 *	Vista Panel Add-on
 *	Script Name: "Change Password" Link and Text Changer
 *	Author: MAHOfficial & VPT (Vista Panel Themes) Team
 *	Author URL: https://mahofficial.win
 *	Version: 1.0
 *	Github Project URL: https://github.com/VPTOfficial/VistaPanel-Customizations
 *	Official Website URL: https://vpthemes.win
 *	This file is licensed under MIT
 *
 *	Modified at 2 November 2018 by PlanetCloud
 */
var n = document.getElementById("lnkUserPrefChangePwd");
n.setAttribute("href", change_password_link);
n.innerHTML = change_password_text;
