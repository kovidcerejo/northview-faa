// Navbar scroll effect
const header = document.getElementById('site-header');
const hdrTextEls = document.querySelectorAll('.hdr-text');

function handleScroll() {
  if (window.scrollY > 20) {
    header.classList.add('bg-background/95', 'backdrop-blur-md', 'border-border', 'shadow-sm', 'py-3');
    header.classList.remove('bg-transparent', 'py-5');
    // Scrolled: let normal Tailwind text colors apply
    hdrTextEls.forEach((el) => { el.style.color = ''; });
  } else {
    header.classList.remove('bg-background/95', 'backdrop-blur-md', 'border-border', 'shadow-sm', 'py-3');
    header.classList.add('bg-transparent', 'py-5');
    // Not scrolled: force white so it's visible over the hero photo
    hdrTextEls.forEach((el) => { el.style.color = '#ffffff'; });
  }
}
window.addEventListener('scroll', handleScroll);
handleScroll();

// Mobile menu toggle
const menuBtn = document.getElementById('mobile-menu-button');
const mobileNav = document.getElementById('mobile-nav');
const menuIconOpen = document.getElementById('icon-menu');
const menuIconClose = document.getElementById('icon-close');

menuBtn.addEventListener('click', () => {
  const isHidden = mobileNav.classList.contains('hidden');
  mobileNav.classList.toggle('hidden');
  menuIconOpen.classList.toggle('hidden');
  menuIconClose.classList.toggle('hidden');
});

// Close mobile menu when a link is clicked
document.querySelectorAll('#mobile-nav a').forEach((link) => {
  link.addEventListener('click', () => {
    mobileNav.classList.add('hidden');
    menuIconOpen.classList.remove('hidden');
    menuIconClose.classList.add('hidden');
  });
});
