$(document).ready(function () {
    $(window).scroll(function () {
        if (window.scrollY > 20) {
            // the below class one for navbar,one for menu icon
            $('.navbar,.menu-btn').addClass('sticky');
        } else {
            $('.navbar,.menu-btn').removeClass('sticky');
        }
    })
    // toggle items and navbar js
    $('.menu-btn').click(function () {
        // hiden items menu
        $('.navbar .items').toggleClass('active');
        // change humburger icon, this is not necessary, just for fun xD
        $('.menu-btn i').toggleClass('active');
    })
})