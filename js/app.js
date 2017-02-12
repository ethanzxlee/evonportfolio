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
            {
                thumbnail_1x: 'img/photography/6_thumb.jpg',
                thumbnail_2x: 'img/photography/6_thumb_2x.jpg',
                original: 'img/photography/6.jpg',
            },
            {
                thumbnail_1x: 'img/photography/7_thumb.jpg',
                thumbnail_2x: 'img/photography/7_thumb_2x.jpg',
                original: 'img/photography/7.jpg',
            },
            {
                thumbnail_1x: 'img/photography/8_thumb.jpg',
                thumbnail_2x: 'img/photography/8_thumb_2x.jpg',
                original: 'img/photography/8.jpg',
            },
            {
                thumbnail_1x: 'img/photography/9_thumb.jpg',
                thumbnail_2x: 'img/photography/9_thumb_2x.jpg',
                original: 'img/photography/9.jpg',
            },
            {
                thumbnail_1x: 'img/photography/10_thumb.jpg',
                thumbnail_2x: 'img/photography/10_thumb_2x.jpg',
                original: 'img/photography/10.jpg',
            },
            {
                thumbnail_1x: 'img/photography/11_thumb.jpg',
                thumbnail_2x: 'img/photography/11_thumb_2x.jpg',
                original: 'img/photography/11.jpg',
            },
            {
                thumbnail_1x: 'img/photography/12_thumb.jpg',
                thumbnail_2x: 'img/photography/12_thumb_2x.jpg',
                original: 'img/photography/12.jpg',
            },
            {
                thumbnail_1x: 'img/photography/13_thumb.jpg',
                thumbnail_2x: 'img/photography/13_thumb_2x.jpg',
                original: 'img/photography/13.jpg',
            },
            {
                thumbnail_1x: 'img/photography/14_thumb.jpg',
                thumbnail_2x: 'img/photography/14_thumb_2x.jpg',
                original: 'img/photography/14.jpg',
            },
        ],
        fine_arts: [
            {
                thumbnail_1x: 'img/fine_arts/1_thumb.jpg',
                thumbnail_2x: 'img/fine_arts/1_thumb_2x.jpg',
                original: 'img/fine_arts/1.jpg',
            },
            {
                thumbnail_1x: 'img/fine_arts/2_thumb.jpg',
                thumbnail_2x: 'img/fine_arts/2_thumb_2x.jpg',
                original: 'img/fine_arts/2.jpg',
            },
            {
                thumbnail_1x: 'img/fine_arts/3_thumb.jpg',
                thumbnail_2x: 'img/fine_arts/3_thumb_2x.jpg',
                original: 'img/fine_arts/3.jpg',
            },
            {
                thumbnail_1x: 'img/fine_arts/4_thumb.jpg',
                thumbnail_2x: 'img/fine_arts/4_thumb_2x.jpg',
                original: 'img/fine_arts/4.jpg',
            },
            {
                thumbnail_1x: 'img/fine_arts/5_thumb.jpg',
                thumbnail_2x: 'img/fine_arts/5_thumb_2x.jpg',
                original: 'img/fine_arts/5.jpg',
            },
            {
                thumbnail_1x: 'img/fine_arts/6_thumb.jpg',
                thumbnail_2x: 'img/fine_arts/6_thumb_2x.jpg',
                original: 'img/fine_arts/6.jpg',
            },
            {
                thumbnail_1x: 'img/fine_arts/7_thumb.jpg',
                thumbnail_2x: 'img/fine_arts/7_thumb_2x.jpg',
                original: 'img/fine_arts/7.jpg',
            },
            {
                thumbnail_1x: 'img/fine_arts/8_thumb.jpg',
                thumbnail_2x: 'img/fine_arts/8_thumb_2x.jpg',
                original: 'img/fine_arts/8.jpg',
            },
            {
                thumbnail_1x: 'img/fine_arts/9_thumb.jpg',
                thumbnail_2x: 'img/fine_arts/9_thumb_2x.jpg',
                original: 'img/fine_arts/9.jpg',
            },
            {
                thumbnail_1x: 'img/fine_arts/10_thumb.jpg',
                thumbnail_2x: 'img/fine_arts/10_thumb_2x.jpg',
                original: 'img/fine_arts/10.jpg',
            },
            {
                thumbnail_1x: 'img/fine_arts/11_thumb.jpg',
                thumbnail_2x: 'img/fine_arts/11_thumb_2x.jpg',
                original: 'img/fine_arts/11.jpg',
            },
            {
                thumbnail_1x: 'img/fine_arts/12_thumb.jpg',
                thumbnail_2x: 'img/fine_arts/12_thumb_2x.jpg',
                original: 'img/fine_arts/12.jpg',
            },
            {
                thumbnail_1x: 'img/fine_arts/13_thumb.jpg',
                thumbnail_2x: 'img/fine_arts/13_thumb_2x.jpg',
                original: 'img/fine_arts/13.jpg',
            },
            {
                thumbnail_1x: 'img/fine_arts/14_thumb.jpg',
                thumbnail_2x: 'img/fine_arts/14_thumb_2x.jpg',
                original: 'img/fine_arts/14.jpg',
            },
            {
                thumbnail_1x: 'img/fine_arts/15_thumb.jpg',
                thumbnail_2x: 'img/fine_arts/15_thumb_2x.jpg',
                original: 'img/fine_arts/15.jpg',
            },
        ],
        digital: [
            {
                thumbnail_1x: 'img/digital/1_thumb.jpg',
                thumbnail_2x: 'img/digital/1_thumb_2x.jpg',
                original: 'img/digital/1.jpg',
            },
            {
                thumbnail_1x: 'img/digital/2_thumb.jpg',
                thumbnail_2x: 'img/digital/2_thumb_2x.jpg',
                original: 'img/digital/2.jpg',
            },
            {
                thumbnail_1x: 'img/digital/3_thumb.jpg',
                thumbnail_2x: 'img/digital/3_thumb_2x.jpg',
                original: 'img/digital/3.jpg',
            },
            {
                thumbnail_1x: 'img/digital/4_thumb.jpg',
                thumbnail_2x: 'img/digital/4_thumb_2x.jpg',
                original: 'img/digital/4.jpg',
            },
            {
                thumbnail_1x: 'img/digital/5_thumb.jpg',
                thumbnail_2x: 'img/digital/5_thumb_2x.jpg',
                original: 'img/digital/5.jpg',
            },
            {
                thumbnail_1x: 'img/digital/6_thumb.jpg',
                thumbnail_2x: 'img/digital/6_thumb_2x.jpg',
                original: 'img/digital/6.jpg',
            },
            {
                thumbnail_1x: 'img/digital/7_thumb.jpg',
                thumbnail_2x: 'img/digital/7_thumb_2x.jpg',
                original: 'img/digital/7.jpg',
            },
            {
                thumbnail_1x: 'img/digital/8_thumb.jpg',
                thumbnail_2x: 'img/digital/8_thumb_2x.jpg',
                original: 'img/digital/8.jpg',
            },
        ],
        branding: [
            {
                thumbnail_1x: 'img/branding/1_thumb.jpg',
                thumbnail_2x: 'img/branding/1_thumb_2x.jpg',
                original: 'img/branding/1.jpg',
            },
            {
                thumbnail_1x: 'img/branding/2_thumb.jpg',
                thumbnail_2x: 'img/branding/2_thumb_2x.jpg',
                original: 'img/branding/2.jpg',
            },
            {
                thumbnail_1x: 'img/branding/3_thumb.jpg',
                thumbnail_2x: 'img/branding/3_thumb_2x.jpg',
                original: 'img/branding/3.jpg',
            },
            {
                thumbnail_1x: 'img/branding/4_thumb.jpg',
                thumbnail_2x: 'img/branding/4_thumb_2x.jpg',
                original: 'img/branding/4.jpg',
            },
            {
                thumbnail_1x: 'img/branding/5_thumb.jpg',
                thumbnail_2x: 'img/branding/5_thumb_2x.jpg',
                original: 'img/branding/5.jpg',
            },
            {
                thumbnail_1x: 'img/branding/6_thumb.jpg',
                thumbnail_2x: 'img/branding/6_thumb_2x.jpg',
                original: 'img/branding/6.jpg',
            },
            {
                thumbnail_1x: 'img/branding/7_thumb.jpg',
                thumbnail_2x: 'img/branding/7_thumb_2x.jpg',
                original: 'img/branding/7.jpg',
            },
            {
                thumbnail_1x: 'img/branding/8_thumb.jpg',
                thumbnail_2x: 'img/branding/8_thumb_2x.jpg',
                original: 'img/branding/8.jpg',
            },
            {
                thumbnail_1x: 'img/branding/9_thumb.jpg',
                thumbnail_2x: 'img/branding/9_thumb_2x.jpg',
                original: 'img/branding/9.jpg',
            },
            {
                thumbnail_1x: 'img/branding/10_thumb.jpg',
                thumbnail_2x: 'img/branding/10_thumb_2x.jpg',
                original: 'img/branding/10.jpg',
            },
            {
                thumbnail_1x: 'img/branding/11_thumb.jpg',
                thumbnail_2x: 'img/branding/11_thumb_2x.jpg',
                original: 'img/branding/11.jpg',
            },
            {
                thumbnail_1x: 'img/branding/12_thumb.jpg',
                thumbnail_2x: 'img/branding/12_thumb_2x.jpg',
                original: 'img/branding/12.jpg',
            },
            {
                thumbnail_1x: 'img/branding/13_thumb.jpg',
                thumbnail_2x: 'img/branding/13_thumb_2x.jpg',
                original: 'img/branding/13.jpg',
            },
            {
                thumbnail_1x: 'img/branding/14_thumb.jpg',
                thumbnail_2x: 'img/branding/14_thumb_2x.jpg',
                original: 'img/branding/14.jpg',
            },
            {
                thumbnail_1x: 'img/branding/15_thumb.jpg',
                thumbnail_2x: 'img/branding/15_thumb_2x.jpg',
                original: 'img/branding/15.jpg',
            },
            {
                thumbnail_1x: 'img/branding/16_thumb.jpg',
                thumbnail_2x: 'img/branding/16_thumb_2x.jpg',
                original: 'img/branding/16.jpg',
            },
            {
                thumbnail_1x: 'img/branding/17_thumb.jpg',
                thumbnail_2x: 'img/branding/17_thumb_2x.jpg',
                original: 'img/branding/17.jpg',
            },
        ],
    }

    var contactInfoContainer;

    $(window).on('load', onLoad);

    function onLoad() {
        findElements();

        // Update layouts
        updateStickySiteNav();
        layoutHelloIntroText();
        filterProjectType();
        layoutProjectContent();
        layoutContactInfo();

        // Attach listeners
        $(window).on('scroll', updateStickySiteNav);
        $(window).on('scroll', listenToActiveSection);
        $(window).on('resize', updateStickySiteNav);
        $(window).on('resize', listenToActiveSection);
        $(window).on('resize', layoutHelloIntroText);
        $(window).on('resize', layoutProjectContent);
        $(window).on('resize', layoutContactInfo);
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
        contactInfoContainer = $('.contact-info-container');
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
                projectContentItemContainer.on('click', function() {
                    window.location.pathname = url.original;
                });

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

        projectsContentContainerWrapper.slideUp(globalTransitionDuration * 1.5, function () {
            projectsContentContainerWrapper.empty();
            projectsContentContainerWrapper.append(toAddProjectContentItems);
            projectsContentContainerWrapper.delay(globalTransitionDuration / 2).slideDown(globalTransitionDuration * 1.5, function () {
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
                // If we find a section which is currently displayed    
                var activeSectionId = $(sections[i]).attr('id');
                var activeSectionListItem = $('#link-section-' + activeSectionId);

                if (!activeSectionListItem.hasClass('active')) {
                    siteNavList.children().removeClass('active');
                    activeSectionListItem.addClass('active');
                }

                // Stop finding the next one
                break;
            }
        }
    }

    function layoutProjectContent() {
        if (!window.matchMedia('screen and (max-width : 425px)').matches) {
            var imageWidth = 300;
            var margin = 16;
            var projectsCountPerRow = Math.floor(projectsContentContainerWrapper.innerWidth() / (imageWidth + margin + margin));
            var requiredWidth = projectsCountPerRow * (imageWidth + margin + margin);
            var horizontalDelta = (projectsContentContainerWrapper.innerWidth() - requiredWidth) / 2;
            projectsContentContainerWrapper.css('transform', 'translate(' + horizontalDelta + 'px)');
        }
    }
    
    function layoutContactInfo() {
        var maxWidth = 0;
        var contactInfoItem = contactInfoContainer.children();

        for (var i = 0; i < contactInfoItem.length; i++) {
            var width = $(contactInfoItem[i]).outerWidth();
            if (width > maxWidth) {
                maxWidth = width;
            }
        }

        var neededTranslateX = (contactInfoContainer.innerWidth() - maxWidth) / 2;

        for (var i = 0; i < contactInfoItem.length; i++) {
            $(contactInfoItem[i]).css('transform', 'translateX(' + neededTranslateX +'px)');
        }

        console.log(width, contactInfoContainer.innerWidth(), neededTranslateX);
    }

})();