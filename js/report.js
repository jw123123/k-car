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
    // pagination: {
    //   el: ".swiper-pagination",
    //   clickable: true,
    // },
    breakpoints: {
      768: {
        slidesPerView: 2,
        spaceBetween: 40,
        // slidesPerGroup: 1
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