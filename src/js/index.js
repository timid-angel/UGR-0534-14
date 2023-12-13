const header = document.querySelector('.header');
const nav = document.querySelector('.header__nav');
const navUl = document.querySelector('.header__nav-ul');
const menu = document.querySelector('.header__menu');
const button = document.querySelector('.header__button');

function clickHandler() {
    if (menu.style.display == "none") {
        return;
    }

    function clickListener() {
        menu.classList.add('header__nav-ul--menu');
    }

}

setInterval(() => {
    if (window.innerWidth < 450) {
        nav.setAttribute("style", "display: none;");
        menu.setAttribute("style", "display: block;")
    } else {
        nav.setAttribute("style", "display: block;");
        menu.setAttribute("style", "display: none;");
    }
}, 100);