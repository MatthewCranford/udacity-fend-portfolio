const drawer = document.getElementById('drawer');
const hamburger = document.getElementById('hamburger');

hamburger.addEventListener('click', () => {
  if (drawer.classList.contains('open')) {
    drawer.classList.remove('open');
  } else {
    drawer.classList.add('open');
  }
});
