/* Navbar */
let navbar = document.querySelector('.navbar');
let nav_menu = navbar.querySelector('.nav-menu');
let menu_icon = navbar.querySelector('.menu-icon');
let menu_open_icon = menu_icon.querySelector('.menu-open');
let menu_close_icon = menu_icon.querySelector('.menu-close');

menu_open_icon.addEventListener('click', openMenu);

menu_close_icon.addEventListener('click', closeMenu);

function openMenu() {
    menu_open_icon.style.display = 'none';
    menu_close_icon.style.display = 'block';

    nav_menu.style.display = 'flex';
}

function closeMenu() {
    menu_close_icon.style.display = 'none';
    menu_open_icon.style.display = 'block';

    nav_menu.style.display = 'none';
}