// burger icon functionality
const button = document.getElementById('navbutton');
const menu = document.getElementById('menu');

button.addEventListener('click', () => {
    menu.classList.toggle('d-none');
})

// li anchor
const liList = document.querySelectorAll('nav ul li');

liList.forEach(li => {
    let innerAnchor = li.childNodes[0];
    if (innerAnchor.nodeType === 3) {
        innerAnchor = li.childNodes[1];
    }
    li.addEventListener('click', () => {
        innerAnchor.click();
    })

    li.addEventListener('mouseover', () => {
        li.classList.add('bg-success');
    })

    li.addEventListener('mouseout', () => {
        li.classList.remove('bg-success');
    })
})