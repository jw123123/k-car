let svcSwiper = null;

function buildSvcSwiper() {
  const isPC = $('body').hasClass('pc');

  if (svcSwiper) {
    svcSwiper.destroy(true, true);
    svcSwiper = null;
  }

  svcSwiper = new Swiper('.svc-swiper', {
    direction: isPC ? 'vertical' : 'horizontal',
    slidesPerView: 1,
    slidesPerGroup: 1,
    spaceBetween: 0,
    speed: 850,
    resistanceRatio: 0,
    observer: true,
    observeParents: true,

    allowTouchMove: !isPC,
    simulateTouch: !isPC,

    mousewheel: isPC
      ? {
          forceToAxis: true,
          releaseOnEdges: true,
          sensitivity: 1.8,
          thresholdDelta: 40,
          thresholdTime: 400
        }
      : false,

    pagination: {
      el: '.svc-pagination',
      type: 'fraction',
      clickable: false
    },

    navigation: {
      nextEl: '.svc-next',
      prevEl: '.svc-prev'
    }
  });
}

$(window).on('load', function () {
  buildSvcSwiper();
});

$(window).on('resize', function () {
  clearTimeout(window.svcResizeTimer);
  window.svcResizeTimer = setTimeout(function () {
    buildSvcSwiper();
  }, 150);
});

$(window).on('load', function () {
    buildSvcSwiper();
    // updateSvcPcByScroll();
    // bindSvcWheelControl();
});

$(window).on('resize', function () {
    clearTimeout(window.svcResizeTimer);
    window.svcResizeTimer = setTimeout(function () {
        buildSvcSwiper();
        // updateSvcPcByScroll();
        // bindSvcWheelControl();
    }, 150);
});

// $(window).on('scroll', function () {
//     updateSvcPcByScroll();
// });






//지속가능경영
$(function () {
  const $esgSection = $('.esg-section');
  const $slides = $('.esg-slide');
  const $pageBtns = $('.esg-page-btn');
  const $sideBtns = $('.side-bar-item');

  function setEsgSlide(index) {
    index = Number(index);

    $slides.removeClass('active').eq(index).addClass('active');
    $pageBtns.removeClass('active').eq(index).addClass('active');

    $esgSection.removeClass('is-e is-s is-g');

    if (index === 0) {
      $esgSection.addClass('is-e');
    } else if (index === 1) {
      $esgSection.addClass('is-s');
    } else if (index === 2) {
      $esgSection.addClass('is-g');
    }
  }

  $pageBtns.on('click', function () {
    setEsgSlide($(this).data('target'));
  });

  $sideBtns.on('click', function () {
    setEsgSlide($(this).data('target'));
  });

  // 처음 진입 상태
  setEsgSlide(0);
});
