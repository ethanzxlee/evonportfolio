var $ = require("jquery");

var siteNav;
var siteNavContainer;
var helloImage;
var helloIntro;
var helloIntroEmphasis;

$(window).on('load', function() {
    findElements();
    updateStickySiteNav();
    layoutHelloIntroText();
});

$(window).on('scroll', updateStickySiteNav);
$(window).on('resize', updateStickySiteNav);
$(window).on('resize', layoutHelloIntroText);

function findElements() {
    siteNav = $('#site-nav');
    siteNavContainer = $('#site-nav-container');
    helloImage = $('#hello-image');
    helloIntro = $('#hello-intro');
    helloIntroEmphasis = $('#hello-intro-emphasis');
}

function updateStickySiteNav() {
    if ($(window).scrollTop() > siteNavContainer.offset().top) {
        siteNav.addClass('sticky');
    } else {
        siteNav.removeClass('sticky');
    }
}

function layoutHelloIntroText() {
    if (window.matchMedia('screen and (max-width : 425px)').matches) {
        var helloImageHeight = helloImage.outerHeight(false);
        var helloIntroHeight = helloIntro.outerHeight(true);
        var helloIntroEmphasisHeight = helloIntroEmphasis.outerHeight(true);
        var helloIntroCombinedHeight = helloIntroHeight + helloIntroEmphasisHeight;
        
        helloImage.css('margin-top', helloIntroCombinedHeight);

        var helloImageOffsetTop = helloImage.offset().top;

        helloIntro.css('top', helloImageOffsetTop - helloIntroCombinedHeight);
        helloIntroEmphasis.css('top', helloImageOffsetTop - helloIntroEmphasisHeight)
    }
}