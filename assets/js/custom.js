jQuery(document).ready(function () {
    jQuery("#wpes-sidebar-links a[href^='#'], .dropdown-item[href^='#']").on('click', function (e) {
        e.preventDefault();

        var hash = this.hash;
        jQuery('html, body').animate({
            scrollTop: jQuery(hash).offset().top
        }, 300, function () {
            window.location.hash = hash;
        });
    });
});

hljs.initHighlightingOnLoad();