$('nav a').on('click', function () {

    const windowVariable = $(window);
    const windowWidth = windowVariable.width();
    const page = $("body, html")

    const goToSection = '[data-section=' + $(this).attr('data-nav') + ']';

    // Different behaviour on mobile and desktop

    if (windowWidth <= 1024) {

        page.animate({

            scrollTop: $(goToSection).offset().top

        }, 1500);

    } else {

        page.animate({

            scrollTop: $(goToSection).offset().top + 70

        }, 500);
    }
})