$('nav a').on('click', function () {

    const windowVariable = $(window);
    const nav = $("nav.main div.wrapper");
    const page = $("body, html")

    const goToSection = '[data-section=' + $(this).attr('data-nav') + ']';

    const windowWidth = windowVariable.width();
    const navHeight = nav.outerHeight();

    // Different behaviour on mobile and desktop

    if (windowWidth <= 1024) {

        page.animate({

            scrollTop: $(goToSection).offset().top

        }, 1500);

    } else {

        page.animate({

            scrollTop: $(goToSection).offset().top - navHeight

        }, 500);
    }
})