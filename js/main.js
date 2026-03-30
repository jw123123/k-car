$(window).on('scroll', function() {
    const scrollTop = $(window).scrollTop();
    const $section = $('#service-section');
    const $wrapper = $('.service-fixed-wrapper');
    
    const sectionTop = $section.offset().top;
    const sectionHeight = $section.height();
    const windowHeight = $(window).height();
    const sectionBottom = sectionTop + sectionHeight;

    // 1. 화면 고정 제어 (is-fixed)
    if (scrollTop >= sectionTop && scrollTop < sectionBottom - windowHeight) {
        $wrapper.addClass('is-fixed').removeClass('is-bottom');
    } else if (scrollTop >= sectionBottom - windowHeight) {
        $wrapper.removeClass('is-fixed').addClass('is-bottom');
    } else {
        $wrapper.removeClass('is-fixed').removeClass('is-bottom');
    }

    // 2. 콘텐츠 교체 제어
    let progress = (scrollTop - sectionTop) / (sectionHeight - windowHeight);
    progress = Math.max(0, Math.min(1, progress));

    const totalItems = 5;
    const idx = Math.min(Math.floor(progress * totalItems), totalItems - 1);

    $('.service-text-item').eq(idx).addClass('active').siblings().removeClass('active');
    $('.service-img-item').eq(idx).addClass('active').siblings().removeClass('active');
});






    // 2. ESG 섹션 함수 (전체 초기화 후 활성화)
$(function() {
    $('.side-bar-item').on('click', function() {
        const idx = $(this).attr('data-target');
        $('.esg-slide').removeClass('active');
        $('.esg-slide').eq(idx).addClass('active');
    });
});