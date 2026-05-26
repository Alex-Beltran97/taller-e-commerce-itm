import { getProductById } from '../../api/products-service';
import './index.css';
import alertifyjs from "alertifyjs";
import "alertifyjs/build/css/alertify.css";

function renderDetailProductModule({types, name, price, description}) {
  const firstProduct = types[0];
  return `
    <section class="detail-product">
      <figure class="detail-product__item detail-product__item--image">
        <img src="${firstProduct.image}" alt="${firstProduct.name}" />
      </figure>
      <article class="detail-product__item detail-product__item--description">
        <h1 class="description__item description__item--title">${name}</h1>
        <h2 class="description__item description__item--price">$${price}</h2>
        <p class="description__item description__item--description">${description}</p>
        <p class="description__item description__item--color-label"><b>Color: </b>${firstProduct.color}</p>
        <div class="description__item description__item--color-options">
          ${types.map(type => `
            <div 
              class="color-options__item color-options__item--${type.color}"
              style="background-color: ${type["hex-value"]}"
            ></div>
          `).join('')}
        </div>
        <hr class="description__item description__item--divider" />
        <p class="description__item description__item--shipping">
          <span class="material-icons-outlined">
            local_shipping
          </span>
          Free shipping. Delivers in 3-5 business days.
        </p>
        <div class="description__item description__item--actions">
          <button class="actions__item actions__item--add-to-cart">Añadir al carrito</button>
          <button class="actions__item actions__item--add-to-favorites">
            <span class="material-icons-outlined">
              favorite
            </span>
            Agregar a favoritos
          </button>
        </div>
      </article>
    </section>
  `;
};

async function initDetailProductModule() {
  const productId = window.location.pathname.split('/').filter(Boolean)[1];
  const product = await getProductById(productId);  
  const html = renderDetailProductModule(product);  
  document.querySelector('#app').innerHTML = html;

  handleColorSection(product);
  handleAtionButtons();
};

function handleColorSection({types}) {
  let colorOptions = document.querySelectorAll('.color-options__item');
  let colorLabels = document.querySelector('.description__item--color-label');
  let productImage = document.querySelector('.detail-product__item--image img');
  colorOptions = Array.from(colorOptions);
  colorOptions.forEach(colorOption => {
    colorOption.addEventListener('click', () => {
      const selectedColor = colorOption.className.split('--')[1];
      colorLabels.innerHTML = `<b>Color: </b>${selectedColor.charAt(0).toUpperCase() + selectedColor.slice(1)}`;
      const productType = types.find(type => type.color.toLowerCase() === selectedColor.toLowerCase());
      productImage.src = productType.image;
    });
  });
};

function handleAtionButtons() {
  let buttons = document.querySelectorAll('.actions__item');
  buttons = Array.from(buttons);  
  buttons.forEach(button => {    
    button.addEventListener('click', () => {
      if (button.classList.contains('actions__item--add-to-cart')) {
        alertifyjs.success("Producto añadido al carrito");
      } else if (button.classList.contains('actions__item--add-to-favorites')) {
        alertifyjs.success("Producto añadido a favoritos");
      };      
    });
  });
}

export default initDetailProductModule;