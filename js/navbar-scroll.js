let navbar = document.querySelector('.nav');
const scrollTop = 0;

window.addEventListener('scroll', () => {
    let actualScroll = window.scrollY;

    if (scrollTop < actualScroll) {
        navbar.classList.add('scrolling')
    }
    else if (scrollTop === actualScroll) {
        navbar.classList.remove('scrolling')
    }
})