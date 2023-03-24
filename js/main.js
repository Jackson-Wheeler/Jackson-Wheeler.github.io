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
    menu_open_icon.style.display = 'none';
    menu_close_icon.style.display = 'block';

    nav_menu.style.display = 'flex';
}

function closeMenu() {
    // Close the mobile if currently in mobile or tablet view
    let viewMode = getViewMode();
    if (viewMode == ViewModes.Mobile || viewMode == ViewModes.Tablet) {
        menu_close_icon.style.display = 'none';
        menu_open_icon.style.display = 'block';
        nav_menu.style.display = 'none';
    }
}

/* General */
function getViewMode() {
    return getComputedStyle(document.documentElement)
    .getPropertyValue('--view-mode');
}