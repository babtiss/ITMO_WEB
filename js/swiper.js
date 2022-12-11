const swiper = new Swiper(".swiper", {
    // конфигурация контролов слайдера, перейти к следующему элементу, предыдущему
    navigation: {
        nextEl: ".swiper-nextSlide",
        prevEl: ".swiper-prevSlide",
    },
    // сколько слайдов в видимой области
    slidesPerView: 1,
    // направление слайдера
    direction: "horizontal",
    // бесконечный слайдер
    loop: true,
    // скорость слайдера
    speed: 500,
});
