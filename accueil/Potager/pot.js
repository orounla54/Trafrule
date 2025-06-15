$(window).on("scroll", function(){
        if($(window).scrollTop()>=60) {
                $(".bg-color").addClass("colored")
        } else {
                $(".bg-color").removeClass("colored")
        }
});

const swiper = new Swiper('.swiper', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
        // If we need pagination
        pagination: {
          el: '.swiper-pagination',
        },
        // Navigation arrows
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        slidesPerView: 1,
        breakpoints: {
                320: {
                slidesPerView: 1,
                spaceBetween: 20,
                },
                768: {
                slidesPerView: 2,
                spaceBetween: 20,
                },
                1280: {
                slidesPerView: 3,
                spaceBetween: 40,
                }
        }
    
      });
      