const menuToggle = document.getElementById('menu-toggle');
const menuIcon = document.getElementById('menu-icon');
const sideMenu = document.getElementById('side-menu');
let menuOpen = false;


menuToggle.addEventListener('click', () => {
  menuOpen = !menuOpen;
  if (menuOpen) {
    menuIcon.classList.remove('ph-list');
    menuIcon.classList.add('ph-x');
  } else {
    menuIcon.classList.remove('ph-x');
    menuIcon.classList.add('ph-list');
  }

  sideMenu.style.display = menuOpen ? 'flex' : 'none';
});
