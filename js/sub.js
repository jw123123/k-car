$(function(){
  // 페이지별 메인메뉴, 활성화되는 서브메뉴 제어
  const body = $("body");
  const subH2 = $(".sub-hd-lnb h2");
  const lnbBtn = $(".kcar-lnb-btn");
  const subHdBtn = $(".sub-hd-btn");
  let hdlnb = $(".kcar-lnb-depth1");
  let lnb = $(".kcar-lnb-depth2");
  let pageTitle = "Company,Service,Notice,Sustainability,Career,Investor Relations";
  pageTitle = pageTitle.split(",");
  // console.log(pageTitle);
  let bodyNum, mainNum, subNum;
  bodyNum = body.attr("class");
  bodyNum = bodyNum.split(" ");
  // console.log(bodyNum[0]);
  mainNum = bodyNum[0].slice(3,4);
  subNum = bodyNum[0].slice(5,6);
  // console.log(mainNum, subNum);
  let subHdEl = "K Car소개,서비스,PR센터,ESG,인재채용,IR";
  subHdEl = subHdEl.split(",");
  // console.log(subHdEl);
  let subEl = lnb.eq(mainNum).children().eq(subNum);
  
  // 서브헤더 네비 내용 삽입
    let navi = `> ${subHdEl[mainNum]} > ${subEl.text()}`;
  $(".navigation").append(navi);
  

  // 페이지 타이틀 입력
  subH2.text(pageTitle[mainNum]);
  
  // LNB 화면에 표시(해상도에 따라)
  if(body.hasClass("mo")) { // 모바일이라면
    lnb.eq(mainNum).css("display", "none");
  } else {
    lnb.eq(mainNum).css("display", "flex");
  }
  
  // 활성화되는 서브메뉴
  subEl.addClass("active");
  
  
  // 모바일 LNB Label 입력
  lnbBtn.text(subEl.text());
  subHdBtn.text(subHdEl[mainNum]);
  

  // LNB 리스트 제어(해상도에 따라)
  $(window).resize(function () {
    if (body.hasClass("mo")) { // 모바일이라면
      lnb.eq(mainNum).css("display", "none");
    } else {
      lnb.eq(mainNum).css("display", "flex");
    }
  });

  // LNB 제어(mo에서 버튼 클릭하면 하위리스트 열리기)
  lnbBtn.click(function(){
    lnb.eq(mainNum).toggle();
  });

  subHdBtn.click(function(){
    hdlnb.toggleClass("active");
  });


  // 서브배경이미지 설정
  

});