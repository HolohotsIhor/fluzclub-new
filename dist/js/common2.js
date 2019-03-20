$(document).ready(function() {
    /* *****************Random link Facebook start****************** */
    var dynamicUrlFb = window.location.href;
    var staticUrlFb = 'https://www.fluzclub.com/fb/';

    if ( dynamicUrlFb == staticUrlFb && staticUrlFb.length == dynamicUrlFb.length ){
        var arrFacebook = [
        "https://qhw5.app.link/zd8qY0FiOU",
        "https://qhw5.app.link/9B65xCbL0U",
        "https://qhw5.app.link/2kizL0hL0U",
        "https://qhw5.app.link/OEQvdGonzU",
        "https://qhw5.app.link/9YaHpeUJwU",
        "https://qhw5.app.link/JDEJOXrz0U",
        "https://qhw5.app.link/CHqbMFpz0U",
        "https://qhw5.app.link/uJOF3rmz0U",
        "https://qhw5.app.link/oKx2XbJO0U",
        "https://qhw5.app.link/5w5bhfKO0U",
        "https://qhw5.app.link/v69iQ6KO0U",
        "https://qhw5.app.link/6troYYGA1U",
        "https://qhw5.app.link/wD8c8ICA1U",
        "https://qhw5.app.link/lh20buHuQU",
        "https://qhw5.app.link/dXlFdAerbV",
        "https://qhw5.app.link/kQS3XfxrbV",
        "https://qhw5.app.link/LHsZA6BrbV",
        "https://qhw5.app.link/hW5MIqHF0U",
        "https://qhw5.app.link/eQHvgjKF0U",
        "https://qhw5.app.link/lIqf68y9CU",
        "https://qhw5.app.link/RGLo4DlCUU",
        "https://qhw5.app.link/IN7q5G0PUU",
        "https://qhw5.app.link/0lZgUDOTUU",
        "https://qhw5.app.link/H2sLKwQTUU",
        "https://qhw5.app.link/nD0co1RTUU",
        "https://qhw5.app.link/659kbGsWUU",
        "https://qhw5.app.link/OAjy5hzWUU",
        "https://qhw5.app.link/Lvr8RgCWUU",
        "https://qhw5.app.link/6983TrB42U",
        "https://qhw5.app.link/f7SY28H42U",
        "https://qhw5.app.link/g1IKgoJ42U",
        "https://qhw5.app.link/ToPrvtr7MU",
        "https://qhw5.app.link/SeEeIbpwBU",
        "https://qhw5.app.link/f6J4F05K0U"];
        function getRandomInt(min, max) {
            return Math.floor(Math.random() * (max - min)) + min;
        }
        var refferalIdRandomNumber = getRandomInt(0,arrFacebook.length);
        $("a.randomLinkFacebook").attr("href", arrFacebook[refferalIdRandomNumber]);
    }
    /* *****************Random link end****************** */




    /* Burger */
    $(".toggle_mnu").click(function() {
        $(".sandwich").toggleClass("active");
    });

    /* Burger. Hover */
    $(".top_mnu ul a").click(function() {
        $(".top_mnu").fadeOut(600);
        $(".sandwich").toggleClass("active");
        $(".top_text").css("opacity", "1");
    }).append("<span>");

    /* Burger. Open and close */
    $(".toggle_mnu").click(function() {
        if ($(".top_mnu").is(":visible")) {
            $(".top_text").css("opacity", "1");
            $(".top_mnu").fadeOut(600);
            $(".top_mnu li a").removeClass("fadeInUp animated");
        } else {
            $(".top_text").css("opacity", ".1");
            $(".top_mnu").fadeIn(600);
            $(".top_mnu li a").addClass("fadeInUp animated");
        };
    });

    $('.carousel').carousel({
        interval: 8000
    })

    /*Scrool animation*/
    $(window).scroll(function() {
        $('.mov').each(function() {
            var imagePos = $(this).offset().top;
            var topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow + 500) {
                $(this).addClass('fadeIn');
                $(this).css('opacity', '1');
            }
        });
    });

    /* Video button */
    $('#play-video').on('click', function(e) {
        e.preventDefault();
        $('#video-overlay').addClass('open');
        $("#video-overlay").append('<iframe id="fancybox-frame1552831515612" name="fancybox-frame1552831515612" class="fancybox-iframe" frameborder="0" vspace="0" hspace="0" webkitallowfullscreen="" mozallowfullscreen="" allowfullscreen="" allowtransparency="true" src="//www.youtube.com/embed/t_lJCr0kZTQ?autoplay=1&amp;autohide=1&amp;fs=1&amp;rel=0&amp;hd=1&amp;wmode=transparent&amp;enablejsapi=1&amp;html5=1" scrolling="no"></iframe>');
    });

    $('.video-overlay, .video-overlay-close').on('click', function(e) {
        e.preventDefault();
        close_video();
    });

    $(document).keyup(function(e) {
        if (e.keyCode === 27) { close_video(); }
    });

    function close_video() {
        $('.video-overlay.open').removeClass('open').find('iframe').remove();
    };

    /* Dropdown toggle */
    jQuery('document').ready(function($) {
        $('.dropdown__top').click(function() {
            if ($(this).parent(".dropdown").hasClass("open")) {
                $(this).parent(".dropdown").removeClass("open");
                $(this).siblings(".dropdown__btm").slideUp(500);
            } else {
                $(".dropdown").removeClass("open");
                $(".dropdown .dropdown__btm").slideUp(500);
                $(this).parent(".dropdown").addClass("open");
                $(this).siblings(".dropdown__btm").slideDown(500);
            }
        })
    });

    /* S3 Carousel */
    var carousel = document.querySelector('.s3-carousel');
    var cells = carousel.querySelectorAll('.carousel__cell');
    var cellCount; // cellCount set from cells-range input value
    var selectedIndex = 4;
    var cellWidth = carousel.offsetWidth;
    //var rotateFn = 'rotateY';
    var radius, theta;
    //console.log( cellWidth, cellHeight );
    function rotateCarousel() {
        var angle = theta * selectedIndex * -1;

        carousel.style.transform = 'translateZ(' + -radius + 'px) ' +
        rotateFn + '(' + angle + 'deg)';
    }
    var myVar = setInterval(myTimer, 3000);
    function myTimer() {
        cells.forEach(function(arrayItem) {
            arrayItem.style.opacity = 0;

        });
        if (selectedIndex < 1) selectedIndex = 4;
        selectedIndex--;
        rotateCarousel();
        cells[selectedIndex].style.opacity = 1;
    }
    function changeCarousel() {
        cellCount = 360;
        theta = 1;
        var cellSize = cellWidth;
        radius = Math.round((cellSize / 2) / Math.tan(Math.PI / cellCount));
        for (var i = 0; i < cells.length; i++) {
            var cell = cells[i];
            if (i < 4) {
                // visible cell
                cell.style.opacity = 1;
                var cellAngle = theta * i;
                cell.style.transform = rotateFn + '(' + cellAngle + 'deg) translateZ(' + radius + 'px)';
            } else {
                // hidden cell
                cell.style.opacity = 0;
                cell.style.transform = 'none';
            }
        }

        //rotateCarousel();
    }
    rotateFn = 'rotateY';
    changeCarousel();

     /* Tab play */
    var tabChange = function() {
        var tabs = $('.nav-tabs > li');
        var active = tabs.filter('.active');
        var next = active.next('li').length ? active.next('li').find('a') : tabs.filter(':first-child').find('a');
        // Use the Bootsrap tab show method
        next.tab('show');
    };
    // Tab Cycle function
    var tabCycle = setInterval(tabChange, 6000);

    // Tab click event handler
    $('.nav-tabs li a').on('click', function(e) {
        e.preventDefault();
        // Stop the cycle
        clearInterval(tabCycle);
        // Show the clicked tabs associated tab-pane
        $(this).tab('show');
        // Start the cycle again in a predefined amount of time
        setTimeout(function() {
            //tabCycle = setInterval(tabChange, 5000);
        }, 10000);
    });

});