// Functionality of changing the nav

const changeNav = () => {

    const scrollSize = window.scrollY;
    const windowWidth = window.innerWidth;

    const nav = $('nav.main');

    if (windowWidth > 1024) {

        if (scrollSize > 300) {

            nav.addClass('active');

        } else {

            nav.removeClass('active');

        }
    }
}

// Scrolling trigers this event

$(window).on("scroll", changeNav);


