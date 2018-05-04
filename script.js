const drawer = document.getElementById('drawer');
const menu = document.getElementById('menu');

menu.addEventListener('click', () => {
  if (drawer.classList.contains('open')) {
    drawer.classList.remove('open');
  } else {
    drawer.classList.add('open');
  }
});
