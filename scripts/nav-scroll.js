const menuToggle = document.querySelector('.menu-toggle input');
const nav1 = document.querySelector('nav .right-section ul li');

menuToggle.addEventListener('click', function() {
    nav1.classList.toggle('slide');
})