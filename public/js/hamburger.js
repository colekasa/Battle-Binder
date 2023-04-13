// JavaScript to toggle display of navigation options when hamburger icon is clicked
const hamburger = document.querySelector('.navbar-burger');
const nav = document.querySelector('.navbar-menu');

hamburger.addEventListener('click', () => {
  nav.classList.toggle('nav-active');
});