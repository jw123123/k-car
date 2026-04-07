$(function () {
  // 반응형 구현
  const body = $("body");
  const tbWidth = 768;
  const pcWidth = 1280;
  let scTop = $(window).scrollTop();
  let vW, vH; //화면 크기 저장하는 변수
  const hd = $("#kcar-hd");
  const ft = $("#kcar-ft");
  let hdHeight = hd.height();
  let ftOffset = ft.offset().top - 200;
  const gnb = "#kcar-gnb";
  const depth1 = $(".depth1");
  const langWrap = $(".lang-wrap");
  const langBtn = $(".lang-btn");
  const siteMap = $(".kcar-mo-gnb-sec");
  const openBtn = $(".sitemap-open-btn");
  const closeBtn = $(".sitemap-close-btn");
  const moDepth1 = $(".mo-depth1 > a");
  const logo = $(".kcar-logo");
  const speed = 600;



  rwd();
  $(window).resize(function () {
    rwd();
  });


  // 반응형 구현
  //해상도에 반응하기 위해 실행
  function rwd() {
    vW = window.innerWidth;
    vH = window.innerHeight;
    if (vW < tbWidth) { //모바일
      body.removeClass("tb pc").addClass("mo");
    } else if (vW >= tbWidth && vW < pcWidth) { //태블릿
      body.removeClass("mo pc").addClass("tb");
    } else { //PC
      body.removeClass("mo tb").addClass("pc");
    }
  }
  // 화면에 요소 보일 때쯤 애니메이션
  let aniEl = $(".move-top, .ani-bottom,.ani-left, .ani-right, .fade-in");
  aniEl.each(function () {
    let aniElTop = $(this).offset().top - vH;
    if (scTop > aniElTop) {
      $(this).addClass("ani-start");
    } else {
      $(this).removeClass("ani-start");
    }
  });


  // 헤더 제어
  //console.log(scTop);
  $(window).scroll(function () {
    scTop = $(window).scrollTop();
    if (scTop > hdHeight) { //헤더만큼 스크롤 됐을 때
      hd.addClass("fixed");
    } else {
      hd.removeClass("fixed");
    }
    // 푸터가 화면에 표시 될 때쯤 헤더 숨기기
    if (scTop > ftOffset) {
      hd.fadeOut(300);
    } else {
      hd.fadeIn(300);
    }

    // 애니메이션 제어
    aniEl.each(function () {
      let aniElTop = $(this).offset().top - vH;
      if (scTop > aniElTop) {
        $(this).addClass("ani-start");
      } else {
        $(this).removeClass("ani-start");
      }
    });

  });


  // PC GNB 제어
  $(gnb).mouseenter(function () {
    $(this).find(".depth1").addClass("active");
    $(this).addClass("sub-on");
  });

  $(gnb).mouseleave(function () {
    $(this).find(".depth1").removeClass("active");
    $(this).removeClass("sub-on");
  });

  // 로고링크 제어
  logo.click(function () {
    $(location).attr('href', 'index.html');
  });

  // 언어영역 제어
  langBtn.click(function () {
    langWrap.toggleClass("active");
  });


  //사이트맵 제어
  openBtn.click(function () {
    body.addClass("fixed");
    siteMap.attr("style", "");
    //해상도가 모바일이라면 = body의 클래스가 "mo"라면
    if (body.hasClass("pc")) {
      siteMap.addClass("active");
    } else { //mo, tb일 때
      siteMap.stop().animate({
        "right": "0",
        "opacity": "1"
      }, speed);
    }
  });
  closeBtn.click(function () {
    body.removeClass("fixed");
    if (body.hasClass("pc")) {
      siteMap.removeClass("active");
    } else { //mo, tb일 때
      siteMap.stop().animate({
        "right": "-100%",
        "opacity": "0"
      }, speed);
    }
  });

  moDepth1.click(function (e) {
    if (body.hasClass("mo")) {
      e.preventDefault();
      $(this).parent().toggleClass("active");
      $(this).parent().siblings().removeClass("active");
    }
  });


  // 부드러운 스크롤
  const lenis = new Lenis();
  function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf);
  }
  requestAnimationFrame(raf);

  // 임시링크 문서 꼭대기로 이동하는 것 막아주기


  // AOS 플러그인
    AOS.init();
});