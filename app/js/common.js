$(document).ready(function() {
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
    $('a').on('click', function(e) {
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

    // /* S3 Carousel */
    // var carousel = document.querySelector('.s3-carousel');
    // var cells = carousel.querySelectorAll('.carousel__cell');
    // var cellCount; // cellCount set from cells-range input value
    // var selectedIndex = 4;
    // var cellWidth = carousel.offsetWidth;
    // //var rotateFn = 'rotateY';
    // var radius, theta;
    // //console.log( cellWidth, cellHeight );
    // function rotateCarousel() {
    //     var angle = theta * selectedIndex * -1;

    //     carousel.style.transform = 'translateZ(' + -radius + 'px) ' +
    //     rotateFn + '(' + angle + 'deg)';
    // }
    // var myVar = setInterval(myTimer, 3000);
    // function myTimer() {
    //     cells.forEach(function(arrayItem) {
    //         arrayItem.style.opacity = 0;

    //     });
    //     if (selectedIndex < 1) selectedIndex = 4;
    //     selectedIndex--;
    //     rotateCarousel();
    //     cells[selectedIndex].style.opacity = 1;
    // }
    // function changeCarousel() {
    //     cellCount = 360;
    //     theta = 1;
    //     var cellSize = cellWidth;
    //     radius = Math.round((cellSize / 2) / Math.tan(Math.PI / cellCount));
    //     for (var i = 0; i < cells.length; i++) {
    //         var cell = cells[i];
    //         if (i < 4) {
    //             // visible cell
    //             cell.style.opacity = 1;
    //             var cellAngle = theta * i;
    //             cell.style.transform = rotateFn + '(' + cellAngle + 'deg) translateZ(' + radius + 'px)';
    //         } else {
    //             // hidden cell
    //             cell.style.opacity = 0;
    //             cell.style.transform = 'none';
    //         }
    //     }

    //     //rotateCarousel();
    // }
    // rotateFn = 'rotateY';
    // changeCarousel();



    /* Easy slide 
    $("header .top_mnu ul a").mPageScroll2id();*/

    /* Speed scrool 
    function wheel(event) {
        var delta = 0;
        if (event.wheelDelta) {(delta = event.wheelDelta / 120);}
        else if (event.detail) {(delta = -event.detail / 3);}

        handle(delta);
        if (event.preventDefault) {(event.preventDefault());}
        event.returnValue = false;
    }
    function handle(delta) {
        var time = 200;
        var distance = 500;

        $('html, body').stop().animate({
            scrollTop: $(window).scrollTop() - (distance * delta)
        }, time );
    }
    if (window.addEventListener) {window.addEventListener('DOMMouseScroll', wheel, false);}
    window.onmousewheel = document.onmousewheel = wheel;*/
});