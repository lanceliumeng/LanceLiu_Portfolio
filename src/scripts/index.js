$(document).ready(function () {
    $(window).scroll(function () {
        // ====for navbar and menu btn function=====
        if (window.scrollY > 20) {
            // the below class one for navbar,one for menu icon
            $('.navbar,.menu-btn').addClass('sticky');
        } else {
            $('.navbar,.menu-btn').removeClass('sticky');
        }
        // =====for scroll btn function=====
        if (window.scrollY > 500) {
            $('.scroll-btn').addClass('working');
        } else {
            $('.scroll-btn').removeClass('working');
        }
    });
    // =====for scroll btn working--DOM click function====
    $('.scroll-btn').click(function () {
        $('html').animate({ scrollTop: 0 });
    })

    // ======toggle items and navbar js, for humburger btn working=====
    $('.menu-btn').click(function () {
        // hiden items menu
        $('.navbar .items').toggleClass('active');
        // change humburger icon, this is not necessary, just for fun xD
        $('.menu-btn i').toggleClass('active');
    })
    //==========typing words function script,needs typed.js--jQuery typing animation script==========
    // js READEME file => https://github.com/mattboldt/typed.js?utm_source=cdnjs&utm_medium=cdnjs_link&utm_campaign=cdnjs_library
    let options = {
        strings: ['Web Developer', 'Detail Oriented Guy', 'Reliable Guy', 'Creative Guy'],
        typeSpeed: 140,
        backSpeed: 120,
        loop: true,
    };
    let typedOne = new Typed('.typing-01', options);
    let typedTwo = new Typed('.typing-02', options);


    // ===========owl-carousel script for blogs carousel==========
    // https://owlcarousel2.github.io/OwlCarousel2/docs/api-options.html
    // https://owlcarousel2.github.io/OwlCarousel2/demos/responsive.html
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 20,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
                nav: false,
            },
            600: {
                items: 2,
                nav: false,
            },
            1000: {
                items: 3,
                nav: false,
            }
        },
    }
    );
    // owl website demo example setup, not good in my case
    // $('.owl-carousel').owlCarousel({
    //     loop: true,
    //     margin: 10,
    //     nav: true,
    //     responsive: {
    //         0: {
    //             items: 1
    //         },
    //         600: {
    //             items: 3
    //         },
    //         1000: {
    //             items: 5
    //         }
    //     }
    // })

})