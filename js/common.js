$(function(){
  // 반응형 구현
  const body = $("body");
  const tbWidth = 768;
  const pcWidth = 1280;
  let scTop = $(window).scrollTop();
  let vW, vH; //화면 크기 저장하는 변수
	rwd();
	$(window).resize(function(){
		rwd();
	});
	//해상도에 반응하기 위해 실행
	function rwd() {
		vW = window.innerWidth;
		vH = window.innerHeight;
		if(vW < tbWidth){ //모바일
        body.removeClass("tb pc").addClass("mo");
		} else if(vW >= tbWidth && vW < pcWidth) { //태블릿
        body.removeClass("mo pc").addClass("tb");
		} else { //PC
        body.removeClass("mo tb").addClass("pc");
		}
	}  
  // 화면에 요소 보일 때쯤 애니메이션
  let aniEl = $(".ani-top, .ani-bottom,.ani-left, .ani-right, .fade-in");
  aniEl.each(function(){
    let aniElTop = $(this).offset().top - vH;
    if(scTop > aniElTop ){
      $(this).addClass("ani-start");
    } else {
      $(this).removeClass("ani-start");
    }
  });
 

  

  // 헤더 제어
  const hd = $("#cv-hd");
  const ft = $("#cv-ft");
  let hdHeight = hd.height();
  let ftOffset = ft.offset().top - 200;
  
  //console.log(scTop);
  $(window).scroll(function(){
    scTop = $(window).scrollTop();
    if(scTop > hdHeight) { //헤더만큼 스크롤 됐을 때
      hd.addClass("fixed");
    } else {
      hd.removeClass("fixed");
    }
    // 푸터가 화면에 표시 될 때쯤 헤더 숨기기
    if(scTop > ftOffset){
      hd.fadeOut(300);
    } else {
      hd.fadeIn(300);
    }

    // 애니메이션 제어
    
    aniEl.each(function(){
      let aniElTop = $(this).offset().top - vH;
      if(scTop > aniElTop ){
        $(this).addClass("ani-start");
      } else {
        $(this).removeClass("ani-start");
      }
    });

  });

  const siteMap = $(".cv-mo-gnb-sec");
  const openBtn = $(".sitemap-open-btn");
  const closeBtn = $(".sitemap-close-btn");
  const logo = $(".cv-logo");
  const speed = 600;
  
  openBtn.click(function(){
    body.addClass("hidden");
    siteMap.attr("style", "");
    //해상도가 모바일이라면 = body의 클래스가 "mo"라면
    if(body.hasClass("mo")){
      //console.log("모바일이다");
      logo.addClass("wh-logo");
      siteMap.stop().animate({
        "right": "0",
        "opacity": "1"
      }, speed);
    } else { //tb, pc일 때
      siteMap.stop().animate({
        "top": "0",
        "opacity": "1"
      }, speed);
    }
  });
  closeBtn.click(function(){
    body.removeClass("hidden");
    if(body.hasClass("mo")){
      logo.removeClass("wh-logo");
      siteMap.stop().animate({
        "right": "-100%",
        "opacity": "0"
      }, speed);
    } else { //tb, pc일 때
      siteMap.stop().animate({
        "top": "-100%",
        "opacity": "0"
      }, speed);
    }
  });

  // PC GNB 제어
  const depth1 = $(".depth1");
  //console.log(depth1);
  depth1.mouseenter(function(){
   // $(this).addClass("active");
  });
  depth1.mouseleave(function(){
   // $(this).removeClass("active");
  });

  const gnb = "#cv-gnb";

  // PC GNB 구현 : depth1에 마우스가 진입하면 depth2가 슬라이드다운
  $(gnb).mouseenter(function(){
    $(this).find(".depth1").addClass("active");
    $(this).addClass("sub-on");    
  });
  // PC GNB 구현 : depth1에 마우스가 떠나면 depth2가 슬라이드업
  $(gnb).mouseleave(function(){
    $(this).find(".depth1").removeClass("active");
    $(this).removeClass("sub-on");
  });


  // 언어영역 제어
  const langWrap = $(".lang-wrap");
  const langBtn = $(".lang-btn");
  langBtn.click(function(){
    langWrap.toggleClass("active");
  });

  // MO, 사이트맵 제어
  const moDepth1 = $(".mo-depth1 > a");
  moDepth1.click(function(e){
    if(body.hasClass("mo")){
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

});