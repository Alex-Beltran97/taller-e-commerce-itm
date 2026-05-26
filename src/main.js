import './style.css';
import 'material-icons/iconfont/material-icons.css';

const URL_PATH = window.location.href;
const urlObj = new URL(URL_PATH);
const segments = urlObj.pathname.split('/').filter(Boolean);

const pathBase = segments[0] ? String(segments[0]).toLowerCase() : 'home';

const navigator = document.querySelectorAll('header nav a');

import initPageNotFoundModule from './modules/page-not-found';
import initProductsListModule from './modules/products-list';
import initDetailProductModule from './modules/detail-product';

const paths = {
  "home": "/",
  "home": "home",
  "product": "product",
  "about": "about-us",
  "contact": "contact-us",
};

switch (pathBase) {
  case paths.home:
    handleNavigation("inicio");
    await initProductsListModule();
    break;
  case paths.product:
    await initDetailProductModule(); 
    break;
  case paths.about:
    handleNavigation("¿quiénes somos?");
    break;
  case paths.contact:
    handleNavigation("contactanos");
    break;
  default:
    initPageNotFoundModule();
    break;
};

function handleNavigation(tabName) {  
  const tab = Array.from(navigator).find(element => element.innerHTML.toLowerCase().includes(tabName));
  if (!tab?.classList) return;
  tab.classList.add('navigator__item--active');
};