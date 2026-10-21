const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav-links');
menuButton.addEventListener('click', () => {
  const expanded = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', String(!expanded));
  nav.classList.toggle('open', !expanded);
});
nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  menuButton.setAttribute('aria-expanded', 'false');
  nav.classList.remove('open');
}));

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach(element => observer.observe(element));

document.querySelector('#message-form').addEventListener('submit', event => {
  event.preventDefault();
  const form = new FormData(event.currentTarget);
  const subject = encodeURIComponent(`Pesan untuk Kanna — ${form.get('name')}`);
  const body = encodeURIComponent(`Nama: ${form.get('name')}\nEmail: ${form.get('email')}\n\n${form.get('message')}`);
  document.querySelector('#form-note').textContent = 'Aplikasi email Anda akan dibuka dengan pesan yang sudah disiapkan.';
  window.location.href = `mailto:kannaprastiwii28@gmail.com?subject=${subject}&body=${body}`;
});
