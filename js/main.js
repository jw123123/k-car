$(function(){
  let vH = window.innerHeight;
  let scTop = $(window).scrollTop();
  const hd = $("#kcar-hd");

  // 각 섹션별 헤더 디자인 제어
  $(".main-sec.wh").each(function(){
    let sec = $(this);
    let secOffsetMin = sec.offset().top - vH;
    let secOffsetMax = sec.offset().top + sec.innerHeight();
    //console.log(sec.index(), secOffsetMin, secOffsetMax);
    $(window).scroll(function() {
      scTop = $(window).scrollTop();
      if(scTop >= secOffsetMin && scTop < secOffsetMax){ //2번째 섹션일 때
        hd.addClass("wh");
      } else {
        hd.removeClass("wh");
      }
      // 맨위
      if(scTop < vH) {
        hd.addClass("wh");
      }
    });
  });

  //chatGPT
  const steps = document.querySelectorAll('.step');
  const texts = document.querySelectorAll('.text-item');
  const images = document.querySelectorAll('.image-item');

  const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const index = [...steps].indexOf(entry.target);

      texts.forEach(t => t.classList.remove('active'));
      images.forEach(i => i.classList.remove('active'));

      texts[index].classList.add('active');
      images[index].classList.add('active');
    }
  });
}, {
  threshold: 0.5
});

steps.forEach(step => observer.observe(step));

  // 1. 메인 제품 영역 변수


  // 현재페이지 / 전체페이지


  // 화면 사이즈가 조정될 때마다 제품 좌표 리셋


  // 제품리스트 클릭할 때 실행


  // 선택한 제품 슬라이드 함수


  // 제품 슬라이드 영역에서 마우스 커서 바꾸기
  
  
  /*
  easing.js 추가한 후 다른 그래프 사용 가능
  사용가능 easing (참고:https://api.jqueryui.com/easings/)
  linear swing easeInQuad easeOutQuad easeInOutQuad easeInCubic easeOutCubic easeInOutCubic easeInQuart easeOutQuart easeInOutQuart easeInQuint easeOutQuint
  easeInOutQuint easeInSine easeOutSine easeInOutSine easeInExpo easeOutExpo easeInOutExpo easeInCirc easeOutCirc easeInOutCirc easeInElastic easeOutElastic 
  easeInOutElastic easeInBack easeOutBack easeInOutBack easeInBounce easeOutBounce easeInOutBounce
  */
});