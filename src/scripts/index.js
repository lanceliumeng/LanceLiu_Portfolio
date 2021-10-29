$(document).ready(function () {
    $(window).scroll(function () {
        if (window.scrollY > 20) {
            // the below class one for navbar,one for menu icon
            $('.navbar,.menu-btn').addClass("sticky");
        } else {
            $('.navbar,.menu-btn').removeClass('sticky');
        }
    })
    // toggle items and navbar js
    $('.menu-btn').click(function () {
        $('.navbar .items').toggleClass('active');
    })
})