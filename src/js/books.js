const bookFigEl = document.querySelectorAll('.books__container-figure');
const bookDesc = document.querySelectorAll('.books__description');
const bookImg = document.querySelectorAll('.books__container-figure-img');

bookFigEl.forEach((bookFig, index) => {
    console.log('d')
    bookDesc[index].addEventListener('mouseover', () => {
        bookDesc[index].classList.add('fadeInAnim');
        bookDesc[index].style.opacity = 1;
    })

    bookDesc[index].addEventListener('mouseout', () => {
        bookDesc[index].classList.remove('fadeInAnim');
        bookDesc[index].style.opacity = 0;
    })
})