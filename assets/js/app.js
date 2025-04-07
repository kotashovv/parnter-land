document.addEventListener('DOMContentLoaded', () => {

    const mobileMenuBtn = document.querySelector('.burger-btn');
    const mobileMenu = document.querySelector('.mobile-menu');
    const closeMenuBtn = document.querySelector('.close-mobile');

    if (mobileMenuBtn && closeMenuBtn) {
        mobileMenuBtn.addEventListener('click', () => {
            OpenMenu();
        })

        closeMenuBtn.addEventListener('click', () => {
            CloseMenu();
        })


        const mobileNavLink = document.querySelectorAll('.mobile__nav a');

        mobileNavLink.forEach(item => {
            item.addEventListener('click', () => {
                CloseMenu();
            })
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
        faqBtns.forEach(item => {
            item.addEventListener('click', (e) => {
                if (e.target.classList.contains('active')) {
                    CloseFaq();
                } else {
                    CloseFaq();
                    OpenFaq(e.target);
                }
            })
        })

        function CloseFaq() {
            faqBtns.forEach(item => {
                item.classList.remove('active');
            })
            const faqTexts = document.querySelectorAll('.faq__text');
            faqTexts.forEach(item => {
                item.classList.remove('active');
            })
        }

        function OpenFaq(item) {
            item.classList.add('active');
            const currentText = item.nextElementSibling;
            currentText.classList.add('active');
        }


        OpenFaq(faqBtns[0]);
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



    const newRemSlider = new Swiper('.newrem1__slider', {
        spaceBetween: 15,
        navigation: {
            prevEl: '.reviews__btn.prev-newrem1-el',
            nextEl: '.reviews__btn.next-newrem1-el',
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
                autoHeight: true,
            },
            620: {
                slidesPerView: 2,
            }
        }
    })

    const projSlider = new Swiper('.newrem2__slider', {
        slidesPerView: 4.2,
        spaceBetween: 20,
        breakpoints: {
            0: {
                slidesPerView: 1,
                autoHeight: true,
            },
            620: {
                slidesPerView: 2,
                autoHeight: false,
            },
            920: {
                slidesPerView: 2.5,
            },
            1200: {
                slidesPerView: 3.5,
            },
            1600: {
                slidesPerView: 4.2,
            },
        }
    })

    document.querySelectorAll('.img-slider').forEach((sliderEl) => {
        const wrapper = sliderEl.closest('.img-slider');
        const prevBtn = wrapper.querySelector('.img-slider-prev');
        const nextBtn = wrapper.querySelector('.img-slider-next');

        new Swiper(sliderEl, {
            slidesPerView: 1,
            spaceBetween: 5,
            allowTouchMove: false,
            navigation: {
                prevEl: prevBtn,
                nextEl: nextBtn,
            },
        });
    });

    var mySlider = new rSlider({
        target: '#rangeslider',
        values: Array.from({ length: 471 }, (_, i) => i + 30), // от 30 до 120
        tooltip: true,
        labels: false,
        scale: false, // отключаем шкалу
        range: false,
        set: [60], // стартовое значение
        onChange: function (val) {
            currentArea = parseInt(val);
            areaNumberInput.value = val;
            updateTotal();
          }
    });


    const remontRadios = document.querySelectorAll('input[name="remont-variant"]');
    const areaSliderInput = document.getElementById('rangeslider');
    const areaNumberInput = document.querySelector('.newrem4__rangealt input[type="number"]');
    const totalValue = document.querySelector('.total__value span:nth-child(2)');

    // Тарифы за м²
    const prices = {
        0: 15500, // Косметический
        1: 25380, // Капитальный
        2: 34000  // Дизайнерский
    };

    let currentTariff = 0;
    let currentArea = 30;

    areaNumberInput.addEventListener('input', function () {
        let val = parseInt(this.value);
        if (isNaN(val) || val < 30) val = 30;
        if (val > 120) val = 120;
    
        currentArea = val;
        mySlider.set(val);
        updateTotal();
      });
    
      // Обработка выбора тарифа
      remontRadios.forEach((radio, index) => {
        radio.addEventListener('change', function () {
          currentTariff = index;
          updateTotal();
        });
      });
    
      function updateTotal() {
        const price = prices[currentTariff] * currentArea;
        totalValue.textContent = `${price.toLocaleString('ru-RU')} ₽`;
      }
    
      // Стартовое обновление
      updateTotal();
})