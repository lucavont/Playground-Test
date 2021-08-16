let panelOpener = document.querySelector('#panel-opener');

let mobileMenu = document.querySelector('.modal');

panelOpener.addEventListener('click', () => {
    mobileMenu.classList.toggle('overlay-animation');
})