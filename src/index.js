import 'normalize.css';
import './styles/style.scss';

const navbar = document.getElementById('navbar');
const goToTopButton = document.getElementById('go-to-top-button');
const menuButton = document.getElementById('menu-button');

const removeCurrentActiveLink = () => {
  const currentActiveLink = navbar.querySelector('a.active');
  if (currentActiveLink) currentActiveLink.classList.remove('active');
};

const handleLinkClick = (e) => {
  e.preventDefault();
  removeCurrentActiveLink();
  navbar.classList.remove('is-showing');
  menuButton.classList.remove('is-showing');
  e.currentTarget.classList.add('active');

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
    for (const entry of entries) {
      if (entry.isIntersecting) {
        /*        if ('#' + entry.target.id != location.hash) {
          history.pushState(null, null, '#' + entry.target.id);
          removeCurrentActiveLink();
          navbar.querySelector(`a[href="${location.hash}"]`)?.classList.add('active');
        } */
        removeCurrentActiveLink();
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

observer.observe(document.getElementById('inicio'));
observer.observe(document.getElementById('nosotros'));
observer.observe(document.getElementById('servicios'));
