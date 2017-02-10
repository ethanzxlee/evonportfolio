'use strict';

var $ = require("jquery");

(function App() {

    var globalTransitionDuration = 400;

    var sections;
    var siteNav;
    var siteNavContainer;
    var siteNavList;

    var helloImage;
    var helloIntro;
    var helloIntroEmphasis;

    var projectsContentMenuTab;
    var projectsContentContainerWrapper;
    var projectsContentItemImageUrls = {
        photography: [
            {
                thumbnail_1x: 'img/photography/1_thumb.jpg',
                thumbnail_2x: 'img/photography/1_thumb_2x.jpg',
                original: 'img/photography/1.jpg',
            },
            {
                thumbnail_1x: 'img/photography/2_thumb.jpg',
                thumbnail_2x: 'img/photography/2_thumb_2x.jpg',
                original: 'img/photography/2.jpg',
            },
            {
                thumbnail_1x: 'img/photography/3_thumb.jpg',
                thumbnail_2x: 'img/photography/3_thumb_2x.jpg',
                original: 'img/photography/3.jpg',
            },
            {
                thumbnail_1x: 'img/photography/4_thumb.jpg',
                thumbnail_2x: 'img/photography/4_thumb_2x.jpg',
                original: 'img/photography/4.jpg',
            },
            {
                thumbnail_1x: 'img/photography/5_thumb.jpg',
                thumbnail_2x: 'img/photography/5_thumb_2x.jpg',
                original: 'img/photography/5.jpg',
            },
        ],
        fine_arts: [
            {
                thumbnail_1x: 'img/photography/1_thumb.jpg',
                thumbnail_2x: 'img/photography/1_thumb_2x.jpg',
                original: 'img/photography/1.jpg',
            },
        ],
    }

    $(window).on('load', onLoad);

    function onLoad() {
        findElements();

        // Update layouts
        updateStickySiteNav();
        layoutHelloIntroText();
        filterProjectType();
        layoutProjectContent();

        // Attach listeners
        $(window).on('scroll', updateStickySiteNav);
        $(window).on('scroll', listenToActiveSection);
        $(window).on('resize', updateStickySiteNav);
        $(window).on('resize', listenToActiveSection);
        $(window).on('resize', layoutHelloIntroText);
        $(window).on('resize', layoutProjectContent);
        projectsContentMenuTab.on('change', filterProjectType);
    }

    function findElements() {
        sections = $('section');
        siteNav = $('#site-nav');
        siteNavContainer = $('#site-nav-container');
        siteNavList = $('.site-nav-list');
        helloImage = $('#hello-image');
        helloIntro = $('#hello-intro');
        helloIntroEmphasis = $('#hello-intro-emphasis');
        projectsContentMenuTab = $('input[name=projects-content-menu-tab]')
        projectsContentContainerWrapper = $('.projects-content-container-wrapper');
    }

    function filterProjectType() {
        var checkedCategory = projectsContentMenuTab.filter(':checked').val();
        var urls = projectsContentItemImageUrls[checkedCategory];
        var toAddProjectContentItems = [];

        if (Array.isArray(urls)) {
            // Create elements from the checked category
            urls.forEach(function (url, index) {
                var projectContentItemContainer = $(document.createElement('div'));
                projectContentItemContainer.addClass('projects-content-item-container');

                var img = $(document.createElement('img'));
                img.addClass('thumbnail');
                img.attr('src', url.thumbnail_1x);
                img.attr('srcset', url.thumbnail_1x + ' 1x, ' + url.thumbnail_2x + ' 2x');
                projectContentItemContainer.append(img);

                toAddProjectContentItems.push(projectContentItemContainer);
            });
        }

        // Replace the children in the containers
        var minHeight = projectsContentContainerWrapper.css('min-height');
        projectsContentContainerWrapper.css('min-height', 0);

        projectsContentContainerWrapper.slideUp(globalTransitionDuration, function () {
            projectsContentContainerWrapper.empty();
            projectsContentContainerWrapper.append(toAddProjectContentItems);
            projectsContentContainerWrapper.slideDown(globalTransitionDuration, function () {
                    projectsContentContainerWrapper.css('min-height', minHeight);
                });
        });

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


    function listenToActiveSection() {
        for (var i = 0; i < sections.length; i++) {
            if ($(window).scrollTop() + 30 >= $(sections[i]).offset().top &&
                $(window).scrollTop() + 30 < $(sections[i]).offset().top + $(sections[i]).outerHeight()) {

                var activeSectionId = $(sections[i]).attr('id');
                var activeSectionListItem = $('#link-section-' + activeSectionId);

                if (!activeSectionListItem.hasClass('active')) {
                    siteNavList.children().removeClass('active');
                    activeSectionListItem.addClass('active');
                }

                break;
            }
        }
    }

    function layoutProjectContent() {
        var imageWidth = 300;
        var margin = 16;
        var projectsCountPerRow = Math.floor(projectsContentContainerWrapper.innerWidth() / (imageWidth + margin + margin));
        var requiredWidth = projectsCountPerRow * (imageWidth + margin + margin);
        var horizontalDelta = (projectsContentContainerWrapper.innerWidth() - requiredWidth) / 2;
        projectsContentContainerWrapper.css('transform', 'translate(' + horizontalDelta + 'px)')
    }

    function smoothScrollToSection() {

    }

})();