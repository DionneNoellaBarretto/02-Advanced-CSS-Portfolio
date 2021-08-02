

// sticky nav bar
$(() => {

    //On Scroll Functionality
    $(window).scroll(() => {
        var windowTop = $(window).scrollTop();
        windowTop > 100 ? $('nav').addClass('navShadow') : $('nav').removeClass('navShadow');
        windowTop > 100 ? $('ul.nav-honey').css('top', '50px') : $('ul.nav-honey').css('top', '160px');
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

/* Still working on including a timeline for professional experience.. 

    <!-- Include jQuery Timeline Plugin -->
    <script src="./javascript/jquery.roadmap.js"></script>
    <script src="./javascript/jquery.waypoints.min.js"></script>
<!-- inline javascript using jquery for the professional experience section -->
    <script>
        // jQuery Timeline Plugin
$(document).ready(function() {

var events = [{
        date: 'Feb 2021 - Present',
        content: 'Google Inc <small>Technical Account Manager, Google Cloud</small>'
    },
    {
        date: 'Oct 2019 - Feb 2021',
        content: 'Rubrik Inc <small>Customer Experience Manager, Cloud Data Management</small>'
    },
    {
        date: 'Aug 2018 - Oct 2019',
        content: 'VMware <small>Regional Escalation Manager, Horizon Cloud</small>'
    },
    {
        date: 'Feb 2017 - Aug 2018',
        content: 'VMware <small>Technical Support Manager, Horizon Cloud</small>'
    },
    {
        date: 'Apr 2016- Feb 2017',
        content: 'VMware AirWatch <small>Technical Support Engineer, Horizon Cloud</small>'
    },
    {
        date: 'May 2015 - Apr 2016',
        content: 'AirWatch by VMware<small>Application Support Engineer, Mobile Device Management</small>'
    },
    {
        date: 'Aug 2013 - May 2015',
        content: 'Syracuse University  <small>Master in Telecommunication and Network Management</small>'
    },

    {
        date: 'June 2009 - May 2013',
        content: 'Mumbai University (Xavier Institute of Engineering)<small>Bachelors in Electronics and Telecommunication Engineering</small>'
    },
];

$('#my-timeline').roadmap(events, {
    eventsPerSlide: 4,
    slide: 1,
    prevArrow: '<i class="fas fa-chevron-left"></i>',
    nextArrow: '<i class="fas fa-chevron-right"></i>'
});
});
    </script> */