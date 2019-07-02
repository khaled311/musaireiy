$(function() {


    // Side Nav
    $(".nav.fixed-top .drop-btn").on("click", function() {
        $(this).toggleClass("change");
        $(".side-nav-pa").toggleClass("open");
        $("body").css("overflow","hidden");
    });

    // Side Nav
    $(".side-nav .drop-btn").on("click", function() {
        $(".side-nav-pa").toggleClass("open");
        $(".nav.fixed-top .drop-btn").toggleClass("change");
        $("body").css("overflow","auto");
    });

    ////////////////////Adding Class To Navbar
    $(window).on('scroll', function() {
        if($(window).scrollTop() >= 200){
            $(".nav.fixed-top").addClass('scrolled')
        }else{
            $(".nav.fixed-top").removeClass('scrolled')
        }
    });

    // Navbar Effect On Scroll
    var zero = 0;
    $(window).on('scroll', function() {
        $(".nav.fixed-top").toggleClass('hide', $(window).scrollTop() > zero);
        zero = $(window).scrollTop();
    });

    // Map
    var x = 0;
    var locations = [
        ['الرياض', 24.7041827,46.7008969, ++x]
    ];

    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 6,
        center: new google.maps.LatLng(24.7041827,46.7398969),
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        zoomControl: false,
        fullscreenControl: false
    });


    var marker, i;

    for (i = 0; i < locations.length; i++) {
        marker = new google.maps.Marker({
            position: new google.maps.LatLng(locations[i][1], locations[i][2]),
            icon: '../images/marker.png',
            map: map
        });
    }
    

    // Header Slider
    $('header .owl-carousel').owlCarousel({
        rtl:true,
        loop:true,
        nav:true,
        smartSpeed: 1000,
        navText: ["<i class='fas fa-chevron-right'></i>", "<i class='fas fa-chevron-left'></i>"],
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    });

    // Activity Slider
    $('.activity .owl-carousel').owlCarousel({
        rtl:true,
        loop:true,
        margin:40,
        nav:true,
        navText: ["<i class='fas fa-long-arrow-alt-right'></i>", "<i class='fas fa-long-arrow-alt-left'></i>"],
        responsive:{
            0:{
                items:1
            },
            1024:{
                items:2
            },
            1200:{
                items:3
            }
        }
    });

    // Importers Slider
    $('.importers .owl-carousel').owlCarousel({
        rtl:true,
        loop:true,
        margin:5,
        nav:true,
        dots: true,
        navText: ["<i class='fas fa-chevron-right'></i>", "<i class='fas fa-chevron-left'></i>"],
        responsive:{
            0:{
                items:1
            },
            768:{
                items: 2
            },
            1024:{
                items:4
            },
            1200:{
                items:5
            }
        }
    });

    

    if($(window).width() < 992){
        $(".clients .row").addClass("owl-carousel");
    }else{
        $(".clients .row").removeClass("owl-carousel");
    }
    $('.clients .owl-carousel').owlCarousel({
        rtl:true,
        autoplay: false,
        loop:true,
        margin:5,
        nav:false,
        dots: true,
        items: 1,
        navText: ["<i class='fas fa-chevron-right'></i>", "<i class='fas fa-chevron-left'></i>"],
        responsive:{
            0:{
                items:1
            },
            768:{
                items: 2
            },
            991:{
                items: 2
            }
        }
    });

})