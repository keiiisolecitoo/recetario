
document.addEventListener('DOMContentLoaded', (event) => {
  const toggleButton = document.getElementById('toggleButton');
  const aside = document.querySelector('aside');

  toggleButton.addEventListener('click', () => {
    aside.classList.toggle('active');
  });
});




