//script index present sur toutes les pages

function OpenWindow(Page, Largeur, Hauteur, Scrollbar, Resizable) {
    var opt = "toolbar=no, location=no, directories=no, status=no, scrollbars=" + Scrollbar + ", resizable=" + Resizable + ", copyhistory=no, width=" + Largeur + ", height=" + Hauteur;
    window.open(Page, 'ined', opt);
}

$(document).ready(function() {
    //Javascript to enable link to tab
    var hash = document.location.hash;
    var prefix = "tab_";
    if (hash) {
        $('.nav-pills a[href="' + hash.replace(prefix, "") + '"]').tab('show');
    }

    // Change hash for page-reload
    $('.nav-pills a').on('shown', function(e) {
        window.location.hash = e.target.hash.replace("#", "#" + prefix);
    });

    if (hash) {
        $('.nav-tabs a[href="' + hash.replace(prefix, "") + '"]').tab('show');
    }

    // Change hash for page-reload
    $('.nav-tabs a').on('shown', function(e) {
        window.location.hash = e.target.hash.replace("#", "#" + prefix);
    });

    //recherche multisite
    $('#aBoutonMultiSite').on('click', function(e) {
        $('#rowMultiSite').toggle();
    });
    $('.closeMultiSite').on('click', function(e) {
        $('#rowMultiSite').hide();
    });

});