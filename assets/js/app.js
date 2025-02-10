document.addEventListener('DOMContentLoaded', ()=>{
    const homesSlider = new Swiper('.homes__slider', {
        slidesPerView: 2,
        spaceBetween: 20,
        navigation: {
            prevEl: '.homes__slider .prev-el',
            nextEl: '.homes__slider .next-el'
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
                spaceBetween: 10,
            },
            560: {
                slidesPerView: 2,
                spaceBetween: 20,
            }
            
        }
    })

    const helpSlider = new Swiper('.help__slider', {
        spaceBetween: 15,
        navigation: {
            prevEl: '.help__slider-body > button:first-child',
            nextEl: '.help__slider-body > button:last-child',
        },
        breakpoints: {
            1: {
                slidesPerView: 1,
            }, 
            560: {
                slidesPerView: 3,
            }, 
            769: {
                slidesPerView: 2,
            },
        }
    })

    const gallerySlider = new Swiper('.gallery__slider', {
        slidesPerView: 2,
        spaceBetween: 20,
        centeredSlides: true,
        initialSlide: 1,
        navigation: {
            prevEl: '.gallery__slider .prev-el',
            nextEl: '.gallery__slider .next-el'
        },
        pagination: {
            el: '.gallery__slider .swiper-pagination',
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
                spaceBetween: 15
            }, 
            560: {
                slidesPerView: 1.5,
                spaceBetween: 15
            }, 
            920: {
                slidesPerView: 2,
                spaceBetween: 20
            }, 

        }
    })
})