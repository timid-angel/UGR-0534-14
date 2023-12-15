const nav = document.querySelector('.header__nav');
const navUl = document.querySelector('.header__nav-ul');
const button = document.querySelector('.header__button');
let buttonActive = false;

// event listener and handler for the nav button
function clickHandler() {
    if (!buttonActive) {
        nav.setAttribute('style', 'display: static;');
        navUl.classList.add('header__nav-ul--menu');
        buttonActive = true;
    } else {
        nav.setAttribute('style', 'display: none;');
        navUl.classList.remove('header__nav-ul--menu');
        buttonActive = false;
    }
}

button.addEventListener('click', clickHandler);

// the setInterval method is used to test the design with WebDev tools
setInterval(() => {
    if (window.innerWidth < 450 && !buttonActive) {
        nav.setAttribute("style", "display: none;");
        button.setAttribute("style", "display: block;");
    } else if (window.innerWidth < 450 && buttonActive) {
        nav.setAttribute("style", "display: block;");
        button.setAttribute("style", "display: block;");
    } else {
        nav.setAttribute("style", "display: block;");
        button.setAttribute("style", "display: none;");
        navUl.classList.remove('header__nav-ul--menu');
        buttonActive = false;
    }
}, 100);