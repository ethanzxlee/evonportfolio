var $ = require("jquery");

var siteNav;
var siteNavContainer;
var helloImage;
var helloIntro;
var helloIntroEmphasis;
var projectsContentMenuTab;
var projectsContentItemContainers;

$(window).on('load', onLoad);

function onLoad() {
    findElements();

    // Update layouts
    updateStickySiteNav();
    layoutHelloIntroText();
    filterProjectType();
    
    // Attach listeners
    $(window).on('scroll', updateStickySiteNav);
    $(window).on('resize', updateStickySiteNav);
    $(window).on('resize', layoutHelloIntroText);
    projectsContentMenuTab.on('change', filterProjectType);
}

function findElements() {
    siteNav = $('#site-nav');
    siteNavContainer = $('#site-nav-container');
    helloImage = $('#hello-image');
    helloIntro = $('#hello-intro');
    helloIntroEmphasis = $('#hello-intro-emphasis');
    projectsContentMenuTab = $('input[name=projects-content-menu-tab]')
    projectsContentItemContainers = $('.projects-content-item-container');
}

function filterProjectType() {
    var checkedCategory = projectsContentMenuTab.filter(":checked").val();
    var visibleProjects;
    var hiddenProjects;
    
    if (checkedCategory == 'all') {
        visibleProjects = projectsContentItemContainers;
        visibleProjects.removeClass('hidden');
    } else {
        visibleProjects = projectsContentItemContainers.filter('[data-category="' + checkedCategory + '"]');
        hiddenProjects = projectsContentItemContainers.not('[data-category="' + checkedCategory + '"]');
        hiddenProjects.addClass('hidden');
        visibleProjects.removeClass('hidden');
    }
    
    
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
    else {
        helloImage.css('margin-top', 'initial');
    }
}