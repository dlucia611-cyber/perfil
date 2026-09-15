const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');

if (navToggle && navMenu) {
  navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('open');
  });
}

const filterButtons = Array.from(document.querySelectorAll('.filter-btn'));
const projectCards = Array.from(document.querySelectorAll('.project-card'));

filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    const filter = button.dataset.filter;

    filterButtons.forEach(item => item.classList.toggle('active', item === button));

    projectCards.forEach(card => {
      const categories = card.dataset.category ? card.dataset.category.split(' ') : [];
      const isVisible = filter === 'all' || categories.includes(filter);
      card.classList.toggle('hidden', !isVisible);
    });
  });
});

const contactForm = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');

if (contactForm && formMessage) {
  contactForm.addEventListener('submit', event => {
    event.preventDefault();
    const data = new FormData(contactForm);
    const name = data.get('name') || 'muchas gracias';

    formMessage.textContent = 'Gracias ' + name + '. Tu mensaje ha sido enviado.';
    formMessage.classList.add('visible');
    contactForm.reset();
  });
}
