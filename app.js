const navbarToggle = document.querySelector('.nav-toggle');
const menuBar = document.querySelector('.nav-menu');

navbarToggle.addEventListener('click', () => {
    menuBar.classList.toggle('active');

});

