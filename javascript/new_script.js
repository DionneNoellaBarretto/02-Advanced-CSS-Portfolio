// banner-type-text
AOS.init({
    easing: 'ease-out-back',
    duration: 1000
});

// sticky nav bar
$(() => {

    //On Scroll Functionality
    $(window).scroll(() => {
        var windowTop = $(window).scrollTop();
        windowTop > 100 ? $('nav').addClass('navShadow') : $('nav').removeClass('navShadow');
        windowTop > 100 ? $('ul.nav-honey').css('top', '50px') : $('ul.nav-honey').css('top', '160px');
    });

    //Click Logo To Scroll To Top
    $('#logo').on('click', () => {
        $('html,body').animate({
            scrollTop: 0
        }, 500);
    });


    //Toggle Menu
    $('#menu-toggle').on('click', () => {
        $('#menu-toggle').toggleClass('closeMenu');
        $('ul').toggleClass('showMenu');

        $('li').on('click', () => {
            $('ul').removeClass('showMenu');
            $('#menu-toggle').removeClass('closeMenu');
        });
    });

});

    //Get to the Top button:
    mybutton = document.getElementById("myBtn");
    // When the user scrolls down 50px from the top of the document, show the button
    window.onscroll = function() {
        scrollFunction()
    };
    function scrollFunction() {
        if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 20) {
            mybutton.style.display = "block";
        } else {
            mybutton.style.display = "none";
        }
    }
    // When the user clicks on the button, scroll to the top of the document
    function topFunction() {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    }

//simple lightbox
$('.proj_gallery_grid a').simpleLightbox();

//stats
$('.counter').countUp();

//smooth scrolling
jQuery(document).ready(function($) {
    $(".scroll").click(function(event) {
        event.preventDefault();
        $('html,body').animate({
            scrollTop: $(this.hash).offset().top
        }, 900);
    });
});
$(document).ready(function() {
    $().UItoTop({
        easingType: 'easeOutQuart'
    });

});

// jQuery Timeline Plugin
$(document).ready(function() {

    var events = [{
            date: 'Oct 2021 - Present',
            content: 'Company Name <small>Co-founder, Front-end Designer</small>'
        },
        {
            date: '2016 - 2021',
            content: 'Company Name <small>Senior Visual Designer</small>'
        },
        {
            date: '2013 - 2016',
            content: 'Company Name <small>Mid-level Designer</small>'
        },
        {
            date: '2012 - 2013',
            content: 'Company Name <small>Mid-level Designer</small>'
        },
        {
            date: '2012 - 2013',
            content: 'Company Name <small>Freelance</small>'
        },
        {
            date: '2011 - 2012',
            content: 'San Diego university  <small>For Design</small>'
        },
        {
            date: '2010 - 2011',
            content: 'New York university  <small>For Graphic Design</small>'
        },

        {
            date: '2009 - 2010',
            content: 'New York university  <small>For Graphic Design</small>'
        },

        {
            date: '2008 - 2009',
            content: 'New York university  <small>For Graphic Design</small>'
        },
        {
            date: '2005 - 2008',
            content: 'Lorem Ipsum  <small>Add Description</small>'
        },
        {
            date: '2003 - 2005',
            content: 'Lorem IPsum  <small>Add Description</small>'
        },
        {
            date: '2001 - 2003',
            content: 'Lorem IPsum  <small>Add Description</small>'
        }
    ];

    $('#my-timeline').roadmap(events, {
        eventsPerSlide: 6,
        slide: 1,
        prevArrow: '<i class="fas fa-chevron-left"></i>',
        nextArrow: '<i class="fas fa-chevron-right"></i>'
    });
});