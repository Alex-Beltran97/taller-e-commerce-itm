import './index.css';
import {getProducts} from "../../api/products-service";

function renderProductsListModule(products) {
  return `
    <section class="container products-list">
      <article class="products-list__item products-list__item--intro">
        <h1 class="intro__item intro__item--title">Tenemos mucha variedad de productos</h1>
        <p class="intro__item intro__item--text">Descubre diferentes tipos de productos que ayudaran a hacer tu vida mucho mas sencilla. Encontraras elementos para el hogar, la oficina, cocina, aseo transporte... ¡Y muchos más!</p>
      </article>
      <article class="products-list__item products-list__item--catalog">
        <h3 class="catalog__item catalog__item--title">Catalogo de productos</h3>
        <div class="catalog__item catalog__item--product-container">
          ${products.map(product => productTpl(product)).join('')}
        </div>
      </article>
    </section>
  `;
};

function productTpl({id, name, price, label, description, types}) {
  const firstProduct = types[0];
  return `
    <a id="${id}" href="/product/${id}" class="product-container__item product-container__item--product">
      <figure class="product__item product__item--image">
        <img src="${firstProduct.image}" alt="${name}" />
      </figure>
      <div class="product__item product__item--details">
        <h4 class="details__item details__item--title">${name}</h4>
        <b class="details__item details__item--price">$${price}</b>
        <p class="details__item details__item--description">${label}</p>
      </div>
    </a>
  `;
}

async function initProductsListModule() {
  const products = await getProducts();  
  const html = renderProductsListModule(products);  
  document.querySelector('#app').innerHTML = html;  
};

export default initProductsListModule;