import 'normalize.css';
import './styles/style.scss';

const navbar = document.getElementById('navbar');
const goToTopButton = document.getElementById('go-to-top-button');
const menuButton = document.getElementById('menu-button');

const handleLinkClick = (e) => {
  e.preventDefault();
  navbar.classList.remove('is-showing');
  menuButton.classList.remove('is-showing');

  const section = document.getElementById(e.currentTarget.dataset.target);
  section?.scrollIntoView();
};

for (const navbarLink of navbar.querySelectorAll('#navbar .nav__link')) {
  navbarLink.addEventListener('click', handleLinkClick);
}

const handleMenuClick = () => {
  navbar.classList.toggle('is-showing');
  menuButton.classList.toggle('is-showing');
};
menuButton.addEventListener('click', handleMenuClick);

const handleGoToTopClick = () => {
  window.scrollTo(0, 0);
};
goToTopButton.addEventListener('click', handleGoToTopClick);

let observer = new IntersectionObserver(
  (entries) => {
    console.log(observer);
    for (const entry of entries) {
      if (entry.isIntersecting) {
        navbar.querySelector('a.active')?.classList.remove('active');

        navbar.querySelector(`a[data-target=${entry.target.id}]`)?.classList.add('active');

        if (entry.target.id != 'inicio') {
          goToTopButton.style.opacity = '1';
          goToTopButton.style.visibility = 'visible';
        } else {
          goToTopButton.style.opacity = '0';
          goToTopButton.style.visibility = 'hidden';
        }
      }
    }
  },

  { threshold: 0.5 }
);

setTimeout(() => {
  observer.observe(document.getElementById('inicio'));
  observer.observe(document.getElementById('nosotros'));
  observer.observe(document.getElementById('servicios'));
}, 100);
