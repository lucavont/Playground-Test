let accordionButton1 = document.querySelector('.accordion-button-1');
let accordionButton2 = document.querySelector('.accordion-button-2');
let accordionButton3 = document.querySelector('.accordion-button-3');
let accordionText = document.querySelector('.accordion-text-p');

accordionButton1.addEventListener('click', () => {
    accordionButton1.classList.add('active');
    accordionButton2.classList.remove('active');
    accordionButton3.classList.remove('active');
})
accordionButton2.addEventListener('click', () => {
    accordionButton1.classList.remove('active');
    accordionButton2.classList.add('active');
    accordionButton3.classList.remove('active');
})
accordionButton3.addEventListener('click', () => {
    accordionButton1.classList.remove('active');
    accordionButton2.classList.remove('active');
    accordionButton3.classList.add('active');
})