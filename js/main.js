$(function () {
    const $win = $(window);
    const $section = $('#service-section');
    const $wrapper = $('.service-fixed-wrapper');
    const $contentWrap = $('.service-content-wrap');
    const $track = $('.service-track');
    const $slides = $('.service-slide');
    const $current = $('.service-page-num .current');
    const $total = $('.service-page-num .total');
    const $prev = $('.service-prev');
    const $next = $('.service-next');

    const total = $slides.length;
    let currentIndex = 0;

    if (!$section.length || !$slides.length) return;

    $total.text(total);

    function setPagination(index) {
        const safeIndex = isNaN(index) ? 0 : index;
        $current.text(safeIndex + 1);
    }

    function setButtons(index) {
        if (window.innerWidth >= 1280) return;
        $prev.prop('disabled', index <= 0);
        $next.prop('disabled', index >= total - 1);
    }

    function setPcSlide(index) {
        const safeIndex = Math.max(0, Math.min(index, total - 1));
        currentIndex = safeIndex;
        $slides.removeClass('active').eq(currentIndex).addClass('active');
        setPagination(currentIndex);
    }

    function setMobileSlide(index) {
        const safeIndex = Math.max(0, Math.min(index, total - 1));
        currentIndex = safeIndex;

        const wrapWidth = $contentWrap.innerWidth();
        $track.css('transform', 'translateX(-' + (currentIndex * wrapWidth) + 'px)');

        setPagination(currentIndex);
        setButtons(currentIndex);
    }

    function updatePcScroll() {
        if (window.innerWidth < 1280) {
            $wrapper.removeClass('is-fixed is-bottom');
            return;
        }

        const sectionTop = $section.offset().top;
        const sectionHeight = $section.outerHeight();
        const winHeight = $win.height();
        const scrollTop = $win.scrollTop();
        const scrollRange = sectionHeight - winHeight;

        if (scrollTop >= sectionTop && scrollTop < sectionTop + scrollRange) {
            $wrapper.addClass('is-fixed').removeClass('is-bottom');
        } else if (scrollTop >= sectionTop + scrollRange) {
            $wrapper.removeClass('is-fixed').addClass('is-bottom');
        } else {
            $wrapper.removeClass('is-fixed is-bottom');
        }

        if (scrollRange <= 0) {
            setPcSlide(0);
            return;
        }

        let progress = (scrollTop - sectionTop) / scrollRange;
        progress = Math.max(0, Math.min(1, progress));

        const index = Math.min(Math.floor(progress * total), total - 1);
        setPcSlide(index);
    }

    function resetMobileLayout() {
        if (window.innerWidth >= 1280) return;

        const wrapWidth = $contentWrap.innerWidth();
        $track.css('width', (wrapWidth * total) + 'px');
        $slides.css({
            width: wrapWidth + 'px',
            flex: '0 0 ' + wrapWidth + 'px'
        });

        setMobileSlide(currentIndex);
    }

    function resetPcLayout() {
        if (window.innerWidth < 1280) return;

        $track.css({
            width: '',
            transform: 'none'
        });

        $slides.attr('style', '');
        setPcSlide(0);
        updatePcScroll();
    }

    $prev.on('click', function () {
        if (window.innerWidth >= 1280) return;
        setMobileSlide(currentIndex - 1);
    });

    $next.on('click', function () {
        if (window.innerWidth >= 1280) return;
        setMobileSlide(currentIndex + 1);
    });

    $win.on('scroll', function () {
        updatePcScroll();
    });

    $win.on('load resize', function () {
        if (window.innerWidth >= 1280) {
            resetPcLayout();
        } else {
            currentIndex = 0;
            resetMobileLayout();
        }
    });

    if (window.innerWidth >= 1280) {
        resetPcLayout();
    } else {
        resetMobileLayout();
    }

    
});


//지속가능경영
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
