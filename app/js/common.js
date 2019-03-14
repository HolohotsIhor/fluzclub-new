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