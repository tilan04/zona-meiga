const navToggle = document.querySelector('.nav-toggle');
const navList = document.querySelector('#main-menu');

if (navToggle && navList) {
  navToggle.addEventListener('click', () => {
    const isOpen = navToggle.getAttribute('aria-expanded') === 'true';

    navToggle.setAttribute('aria-expanded', String(!isOpen));
    navList.classList.toggle('is-open', !isOpen);
  });
}

const staticForms = document.querySelectorAll('[data-static-form]');

staticForms.forEach((form) => {
  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const message = form.querySelector('.form-message');

    if (message) {
      message.classList.add('is-visible');
      message.focus?.();
    }
  });
});
