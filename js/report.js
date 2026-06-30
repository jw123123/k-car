$(function(){
// news 영역 swiper
  let swiper = new Swiper(".news-slider", {
    slidesPerView: 1,
    spaceBetween: 60,
      autoplay: {
        delay: 2000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      },
    loop: true,
    speed: 500,
    breakpoints: {
      768: {
        slidesPerView: 2,
        spaceBetween: 40,
      },
      1280: {
        loop: false,
        autoplay: false,
        slidesPerView: 4,
        spaceBetween: 20,
      }
    }
  });
});