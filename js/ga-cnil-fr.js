// Remplacez la valeur UA-XXXXXX-Y par l'identifiant analytics de votre site.
gaProperty = 'UA-1725849-2'

// DÃ©sactive le tracking si le cookie d'Opt-out existe dÃ©jÃ .

var disableStr = 'ga-disable-' + gaProperty;

if (document.cookie.indexOf('hasConsent=false') > -1) {
    window[disableStr] = true;
}
//Cette fonction retourne la date d'expiration du cookie de consentement

function getCookieExpireDate() {
    var cookieTimeout = 34214400000; // Le nombre de millisecondes que font 13 mois
    var date = new Date();
    date.setTime(date.getTime() + cookieTimeout);
    var expires = "; expires=" + date.toGMTString();
    return expires;
}

// Cette fonction est appelÃ©e pour afficher la demande de consentement
function askConsent() {
    var bodytag = document.getElementsByTagName('body')[0];
    var div = document.createElement('div');
    div.setAttribute('id', 'cookie-banner');
    div.setAttribute('style', 'bottom:0px;position:fixed;width:100%;z-index:999999;');

    // Le code HTML de la demande de consentement
    // Vous pouvez modifier le contenu ainsi que le style
    div.innerHTML = '<div style="height:100%; background-color: #566085; color:white; width:100%; font-size: 12px; text-align: center; padding:1em;">\
	Sur ce site, vous nous autorisez &agrave; d&eacute;poser des cookies &agrave; des fins de mesure d\'audience.\
	Le refus des cookies n\'emp&ecirc;che pas la navigation. \
	<a class="btn btn-xs btn-default" href="javascript:gaClose()">Oui, j\'accepte</a> \
	<a class="btn btn-xs btn-default" href="javascript:gaOptout()">Non, je m\'y oppose</a> \
	</div>';
    bodytag.insertBefore(div, bodytag.firstChild); // Ajoute la banniÃ¨re juste au dÃ©but de la page
    document.getElementsByTagName('body')[0].className += ' cookiebanner';
}


// Fermeture de la fenÃªtre
function gaClose() {
    document.cookie = 'hasConsent=true; ' + getCookieExpireDate() + ' ; path=/';
    document.getElementById('cookie-banner').style.display = 'none';
}


// Retourne la chaine de caractÃ¨re correspondant Ã  nom=valeur
function getCookie(NomDuCookie) {
    if (document.cookie.length > 0) {
        begin = document.cookie.indexOf(NomDuCookie + "=");
        if (begin != -1) {
            begin += NomDuCookie.length + 1;
            end = document.cookie.indexOf(";", begin);
            if (end == -1) end = document.cookie.length;
            return unescape(document.cookie.substring(begin, end));
        }
    }
    return null;
}

// Fonction d'effacement des cookies
function delCookie(name) {
    path = ";path=" + "/";
    domain = ";domain=" + "." + document.location.hostname;
    var expiration = "Thu, 01-Jan-1970 00:00:01 GMT";
    document.cookie = name + "=" + path + domain + ";expires=" + expiration;
}

// Efface tous les types de cookies utilisÃ©s par Google Analytics
function deleteAnalyticsCookies() {
    var cookieNames = ["__utma", "__utmb", "__utmc", "__utmz", "_ga"]
    for (var i = 0; i < cookieNames.length; i++)
        delCookie(cookieNames[i])
}

// La fonction d'opt-out
function gaOptout() {
    document.cookie = disableStr + '=true;' + getCookieExpireDate() + ' ; path=/';
    document.cookie = 'hasConsent=false;' + getCookieExpireDate() + ' ; path=/';
    var div = document.getElementById('cookie-banner');
    // Ci dessous le code de la banniÃ¨re affichÃ©e une fois que l'utilisateur s'est opposÃ© au dÃ©pÃ´t
    // Vous pouvez modifier le contenu et le style
    if (div != null) div.innerHTML = '<div style="background-color:#aaaaaa; font-size:11px; text-align:center;"> Vous vous &ecirc;tes oppos&eacute; \
	au d&eacute;p&ocirc;t de cookies de mesures d\'audience dans votre navigateur </div>'
    window[disableStr] = true;
    deleteAnalyticsCookies();
}



//Ce bout de code vÃ©rifie que le consentement n'a pas dÃ©jÃ  Ã©tÃ© obtenu avant d'afficher
// la banniÃ¨re
var consentCookie = getCookie('hasConsent');
if (!consentCookie) { //L'utilisateur n'a pas encore de cookie de consentement
    var referrer_host = document.referrer.split('/')[2];
    if (referrer_host != document.location.hostname) { //si il vient d'un autre site
        //on dÃ©sactive le tracking et on affiche la demande de consentement
        window[disableStr] = true;
        window.onload = askConsent;
    } else { //sinon on lui dÃ©pose un cookie
        document.cookie = 'hasConsent=true; ' + getCookieExpireDate() + ' ; path=/';
    }
}