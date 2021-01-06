import 'normalize.css';
import './styles/style.scss';

const header = document.getElementById('header');
const navbar = document.getElementById('navbar');
const menuButton = document.getElementById('menu-button');
const handleLinkClick = ({ currentTarget }) => {
  const currentActiveLink = navbar.querySelector('a.active');
  if (currentActiveLink) currentActiveLink.classList.remove('active');
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
