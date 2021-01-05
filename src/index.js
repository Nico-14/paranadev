import 'normalize.css';
import './styles/style.scss';

const navbar = document.getElementById('navbar');
window.handleLinkClick = function (linkElement) {
  const currentActiveLink = navbar.querySelector('a.active');
  if (currentActiveLink) currentActiveLink.classList.remove('active');
  navbar.classList.remove('show-menu');
  linkElement.classList.add('active');
};
