(function () {
    const $window = $(window);
    const $section = $('#service-section');
    const $wrapper = $('.service-fixed-wrapper');
    const $contentWrap = $('.service-content-wrap');
    const $slides = $('.service-slide');
    const $current = $('.service-pagination .current');
    const $total = $('.service-pagination .total');
    const totalItems = $slides.length;

    $total.text(totalItems);

    function updatePcService() {
        if (window.innerWidth < 1280) {
            $wrapper.removeClass('is-fixed is-bottom');
            return;
        }

        const scrollTop = $window.scrollTop();
        const sectionTop = $section.offset().top;
        const sectionHeight = $section.outerHeight();
        const windowHeight = $window.height();
        const sectionBottom = sectionTop + sectionHeight;

        if (scrollTop >= sectionTop && scrollTop < sectionBottom - windowHeight) {
            $wrapper.addClass('is-fixed').removeClass('is-bottom');
        } else if (scrollTop >= sectionBottom - windowHeight) {
            $wrapper.removeClass('is-fixed').addClass('is-bottom');
        } else {
            $wrapper.removeClass('is-fixed is-bottom');
        }

        let progress = (scrollTop - sectionTop) / (sectionHeight - windowHeight);
        progress = Math.max(0, Math.min(1, progress));

        const idx = Math.min(Math.floor(progress * totalItems), totalItems - 1);

        $slides.eq(idx).addClass('active').siblings().removeClass('active');
        $current.text(idx + 1);
    }

    function updateMobileServicePagination() {
        if (window.innerWidth >= 1280) return;

        const slideWidth = $slides.eq(0).outerWidth(true);
        const scrollLeft = $contentWrap.scrollLeft();
        const idx = Math.round(scrollLeft / slideWidth);
        const currentIdx = Math.max(0, Math.min(idx, totalItems - 1));

        $current.text(currentIdx + 1);
    }

    function resetServiceMode() {
        if (window.innerWidth >= 1280) {
            $contentWrap.scrollLeft(0);
            $slides.removeClass('active').eq(0).addClass('active');
            $current.text(1);
            updatePcService();
        } else {
            $wrapper.removeClass('is-fixed is-bottom');
            $slides.removeClass('active').eq(0).addClass('active');
            $current.text(1);
        }
    }

    $window.on('scroll', function () {
        updatePcService();
    });

    $contentWrap.on('scroll', function () {
        updateMobileServicePagination();
    });

    $window.on('load resize', function () {
        resetServiceMode();
    });

    resetServiceMode();
})();






document.addEventListener("DOMContentLoaded", function () {
    const esgSlides = document.querySelectorAll(".esg-slide");
    const esgPageBtns = document.querySelectorAll(".esg-page-btn");
    const esgSideBtns = document.querySelectorAll(".side-bar-item");

    function changeESGSlide(index) {
        esgSlides.forEach((slide, i) => {
            slide.classList.toggle("active", i === index);
        });

        esgPageBtns.forEach((btn, i) => {
            btn.classList.toggle("active", i === index);
        });
    }

    esgPageBtns.forEach((btn) => {
        btn.addEventListener("click", function (e) {
            e.preventDefault();
            const target = Number(this.dataset.target);
            changeESGSlide(target);
        });
    });

    esgSideBtns.forEach((btn) => {
        btn.addEventListener("click", function (e) {
            e.preventDefault();
            const target = Number(this.dataset.target);
            changeESGSlide(target);
        });
    });
});