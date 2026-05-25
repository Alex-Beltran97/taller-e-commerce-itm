import './index.css';

function renderPageNotFoundModule() {
  return `
    <section class="container page-not-found">
      <h1 class="page-not-found__item page-not-found__item--title">Page Not Found</h1>
      <h2 class="page-not-found__item page-not-found__item--subtitle">Error 404</h2>
    </section>
  `;
};

function initPageNotFoundModule() {
  const html = renderPageNotFoundModule();  
  document.querySelector('#app').innerHTML = html;  
};

export default initPageNotFoundModule;