// Mobile menu toggle
const menuBtn = document.getElementById('mobile-menu-button');
const mobileNav = document.getElementById('mobile-nav');
const menuIconOpen = document.getElementById('icon-menu');
const menuIconClose = document.getElementById('icon-close');

menuBtn.addEventListener('click', () => {
  mobileNav.classList.toggle('hidden');
  menuIconOpen.classList.toggle('hidden');
  menuIconClose.classList.toggle('hidden');
});

document.querySelectorAll('#mobile-nav a').forEach((link) => {
  link.addEventListener('click', () => {
    mobileNav.classList.add('hidden');
    menuIconOpen.classList.remove('hidden');
    menuIconClose.classList.add('hidden');
  });
});