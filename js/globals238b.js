var sAppstrapHostWww = window.location.hostname;
var sAppstrapHostData = "";
switch (sAppstrapHostWww) {
    case "www-dev.index-education.com":
        //sAppstrapHostData = "data-dev.index-education.com";
        sAppstrapHostData = "www-dev.index-education.com/contenu";
        break;
    case "www-local.index-education.com":
        //sAppstrapHostData = "data-local.index-education.com";
        sAppstrapHostData = "www-local.index-education.com/contenu";
        break;
    case "wwwadmin.index-education.com":
        sAppstrapHostData = "dataadmin.index-education.com";
        break;
    case "www.index-education.com":
        //sAppstrapHostData = "data-www.index-education.com";
        sAppstrapHostData = "www.index-education.com/contenu";
        break;
    case "wwwsqlserver.index-education.com":
        //sAppstrapHostData = "data-www2.index-education.com";//test
        sAppstrapHostData = "wwwsqlserver.index-education.com/contenu";
        break;
    case "wwwadmin.index-education.com":
        sAppstrapHostData = "wwwadmin.index-education.com/contenu";
        break;
    case "wwwadmin2.index-education.com":
        sAppstrapHostData = "dataadmin2.index-education.com"; //test2
        break;
    default:
        var thisRegex = new RegExp('w[78x]-(.*)$');
        if (!thisRegex.test(sAppstrapHostWww)) {
            //alert('fail');
        } else {
            sAppstrapHostData = sAppstrapHostWww;
        }

}

sAppstrapHostData = window.location.hostname + "/contenu";