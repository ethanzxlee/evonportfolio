var $ = require("jquery");

$(window).on('load', updateStickySiteNav);
$(window).on('scroll', updateStickySiteNav);
$(window).on('resize', updateStickySiteNav);

var siteNav;
var siteNavContainer;

function updateStickySiteNav(eventObj) {
    siteNav = siteNav || $('#site-nav');
    siteNavContainer = siteNavContainer || $('#site-nav-container');
    
    if ($(window).scrollTop() > siteNavContainer.offset().top) {
        siteNav.addClass('sticky');
    } else {
        siteNav.removeClass('sticky');
    }
}