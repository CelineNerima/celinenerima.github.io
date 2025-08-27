const toggle = document.getElementById('darkToggle');
const body = document.body;

toggle.addEventListener('click', () => {
  body.classList.toggle('light');
  toggle.textContent = body.classList.contains('light') ? '☀️' : '🌙';
});
