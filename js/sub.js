$(function(){
  // 페이지별 메인메뉴, 활성화되는 서브메뉴 제어
  const body = $("body");
  const subH2 = $(".sub-hd-lnb h2");
  const lnbBtn = $(".kcar-lnb-btn");
  const subBg = $(".sub-hd-bg");
  let lnb = $(".kcar-lnb-list");
  let pageTitle = "Company,Service,Notice,Sustainability,Career,IR";
  pageTitle = pageTitle.split(",");
  //console.log(pageTitle);
  let bodyNum, mainNum, subNum;
  bodyNum = body.attr("class");
  bodyNum = bodyNum.split(" ");
  // console.log(bodyNum[0]);
  mainNum = bodyNum[0].slice(3,4);
  subNum = bodyNum[0].slice(5,6);
  // console.log(mainNum, subNum);
  let subEl = lnb.eq(mainNum).children().eq(subNum);


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
  
  // LNB 리스트 제어(해상도에 따라)
  

  // 서브배경이미지 설정
  

});