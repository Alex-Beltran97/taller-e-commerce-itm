import './style.css';

const URL_PATH = window.location.href;
const urlObj = new URL(URL_PATH);
const segments = urlObj.pathname.split('/').filter(Boolean);

const pathBase = segments[0] ? String(segments[0]).toLowerCase() : 'home';

const paths = {
  "home": "/",
  "home": "home",
  "product": "product",
  "about": "about-us",
  "contact": "contact-us",
};

switch (pathBase) {
  case paths.home:
    console.log('Home page');
    break;
  case paths.product:
    console.log('Product page');
    break;
  case paths.about:
    console.log('About page');
    break;
  case paths.contact:
    console.log('Contact page');
    break;
  default:
    console.log('404 - Page not found');
    break;
}