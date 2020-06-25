// Functionality of changing the nav
// When the user starts scrolling, the quatation disapears and the nav changes color

function changeNav() {

    console.log("Function called!");

    const scrollSize = window.scrollY;
    const windowWidth = window.innerWidth;

    console.log(scrollSize, windowWidth);

    const nav = document.querySelector("nav.main");

    // Functionality only on desktops 

    if (windowWidth > 1024) {

        // This conditions could be written differently

        if (scrollSize > 300) {

            nav.classList.add("active");

        } else {

            nav.classList.remove("active")

        }
    }
}

window.addEventListener('scroll', changeNav);