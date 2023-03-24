let ViewModes = { Desktop:"desktop", Tablet:"tablet", Mobile:"mobile" }

/* Navbar */
let navbar = document.querySelector('.navbar');
let nav_menu = navbar.querySelector('.nav-menu');
let menu_icon = navbar.querySelector('.menu-icon');
let menu_open_icon = menu_icon.querySelector('.menu-open');
let menu_close_icon = menu_icon.querySelector('.menu-close');
let nav_menu_links = nav_menu.querySelectorAll('a');

menu_open_icon.addEventListener('click', openMenu);

menu_close_icon.addEventListener('click', closeMenu);

nav_menu_links.forEach((link) => {
    link.addEventListener('click', closeMenu);
});

function openMenu() {
    if(!isOpen(navbar)) {
        navbar.classList.toggle('open');
    }
}

function closeMenu() {
    if(isOpen(navbar)) {
        navbar.classList.toggle('open');
    }
}

function isOpen(elem) {
    return elem.classList.contains('open');
}

/* General */
window.addEventListener('resize', () =>{
    setTimeout(onResize, 1);
});

function onResize() {
    closeMenu();
}

function getViewMode() {
    return getComputedStyle(document.documentElement)
    .getPropertyValue('--view-mode');
}