import 'normalize.css';
import './styles/style.scss';

const navbar = document.getElementById('navbar');
const goToTopButton = document.getElementById('go-to-top-button');
const menuButton = document.getElementById('menu-button');

const removeCurrentActiveLink = () => {
  const currentActiveLink = navbar.querySelector('a.active');
  if (currentActiveLink) currentActiveLink.classList.remove('active');
};

const handleLinkClick = ({ currentTarget }) => {
  removeCurrentActiveLink();
  navbar.classList.remove('is-showing');
  menuButton.classList.remove('is-showing');
  currentTarget.classList.add('active');
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
  removeCurrentActiveLink();
  navbar.children[0].classList.add('active');
  window.scrollTo(0, 0);
  location.hash = 'inicio';
};
goToTopButton.addEventListener('click', handleGoToTopClick);

addEventListener('scroll', () => {
  if (window.scrollY > 200) {
    goToTopButton.style.opacity = '1';
    goToTopButton.style.visibility = 'visible';
  } else {
    goToTopButton.style.opacity = '0';
    goToTopButton.style.visibility = 'hidden';
  }
});
