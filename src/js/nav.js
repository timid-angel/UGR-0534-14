const button = document.getElementById('navbutton');
const menu = document.getElementById('menu');
console.log(menu, button)
button.addEventListener('click', () => {
    menu.classList.toggle('hidden');
})