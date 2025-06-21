document.querySelector('.scroll-down').addEventListener('click', function(e) {
  e.preventDefault();
  window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
});