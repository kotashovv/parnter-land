document.addEventListener('DOMContentLoaded', ()=>{

    const mobileMenuBtn = document.querySelector('.burger-btn');
    const mobileMenu = document.querySelector('.mobile-menu');
    const closeMenuBtn = document.querySelector('.close-mobile');

    if (mobileMenuBtn && closeMenuBtn) {
        mobileMenuBtn.addEventListener('click', ()=>{
            OpenMenu();
        })

        closeMenuBtn.addEventListener('click', ()=>{
            CloseMenu();
        })
    }

    function OpenMenu() {   
        document.body.style.overflow = 'hidden';
        mobileMenu.classList.add('active');

    }

    function CloseMenu() {
        document.body.style.overflow = 'auto';
        mobileMenu.classList.remove('active');
    }

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

    const reviewsSlider = new Swiper('.reviews__slider', {
        slidesPerView: 2,
        spaceBetween: 40,
        navigation: {
            prevEl: '.reviews__navigation .prev-el',
            nextEl: '.reviews__navigation .next-el'
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
                spaceBetween: 15,
            },
            920: {
                slidesPerView: 2,
                spaceBetween: 30,
            }
            
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


    const faqBtns = document.querySelectorAll('.faq__item-button');

    if (faqBtns.length != 0) {
        faqBtns.forEach(item=>{
            item.addEventListener('click', (e)=>{
                if (e.target.classList.contains('active')) {
                    CloseFaq();
                } else {
                    CloseFaq();
                    OpenFaq(e.target);
                }
            })
        })

        function CloseFaq() {
            faqBtns.forEach(item=>{
                item.classList.remove('active');
            })
            const faqTexts = document.querySelectorAll('.faq__text');
            faqTexts.forEach(item=>{
                item.classList.remove('active');
            })
        }

        function OpenFaq(item) {
            item.classList.add('active');
            const currentText = item.nextElementSibling;
            currentText.classList.add('active');
        }
    }


    document.querySelectorAll("[data-goto]").forEach(element => {
        element.addEventListener("click", event => {
            event.preventDefault();
            const targetId = element.getAttribute("data-goto");
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop,
                    behavior: "smooth"
                });
            }
        });
    });
})