const navLink = document.getElementById("nav-link");
const navIcon = document.getElementById("nav-button");

navIcon.addEventListener('click', (event) => {
    navLink.classList.toggle('is-active');
    navLink.classList.toggle('has-background-grey-darker');
    navLink.classList.toggle("has-text-centered");
})

window.addEventListener('resize', (event) => {
    navLink.classList.remove('is-active');
    navLink.classList.remove('has-background-grey-darker');
    navLink.classList.remove("has-text-centered");
})