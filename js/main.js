function showAlert() {
    var myText = "Congratulations! Your appointment has been successfully booked. We will contact you as soon as possible. Have a nice day";
    alert (myText);
  }

function showAlert1() {
    var myText = "Congratulations! Our newsletter subscription request has been successful";
    alert (myText);
  }

function kirimPesan1(){
    var newsletter = document.getElementById('newsletter');

    var gabungan = 'New%20Whitepaper%20Request%0A%0AEmail%3A%0A' + newsletter.value;

    var token = '[Your Token]';
    var grup = '[Telegram Group Id]';

    $.ajax({
        url:`https://api.telegram.org/bot${token}/sendMessage?chat_id=${grup}&text=${gabungan}&parse_mode=html`,
        method:`POST`,
    })

}

function kirimPesan(){
    var nama = document.getElementById('nama');
    var email = document.getElementById('email');
    var mobile = document.getElementById('mobile');
    var keperluan=document.getElementById("keperluan");
    var hari = document.getElementById('hari');
    var jam = document.getElementById('jam');
    var pesan = document.getElementById('pesan');

    var gabungan = 'NEW%20BOOK%20APPOINTMENT%0A%0ANama%3A%0A' + nama.value + '%0AEmail%3A%0A' + email.value + '%0ANo.Hp%3A%0A' + mobile.value + '%0AKeperluan%3A%0A' + keperluan.value +'%0ATanggal%3A%0A' + hari.value + '%0AJam%3A%0A' + jam.value+ '%0APesan%3A%0A' + pesan.value;

    var token = '[Your Token]';
    var grup = 'Telegram Group Id';

    $.ajax({
        url:`https://api.telegram.org/bot${token}/sendMessage?chat_id=${grup}&text=${gabungan}&parse_mode=html`,
        method:`POST`,
    })

}

(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.sticky-top').addClass('shadow-sm').css('top', '0px');
        } else {
            $('.sticky-top').removeClass('shadow-sm').css('top', '-100px');
        }
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });


    // Date and time picker
    $('.date').datetimepicker({
        format: 'L'
    });
    $('.time').datetimepicker({
        format: 'LT'
    });


    // Header carousel
    $(".header-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        loop: true,
        nav: false,
        dots: true,
        items: 1,
        dotsData: true,
    });


    // Testimonials carousel
    $('.testimonial-carousel').owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        loop: true,
        nav: false,
        dots: true,
        items: 1,
        dotsData: true,
    });

    
})(jQuery);

