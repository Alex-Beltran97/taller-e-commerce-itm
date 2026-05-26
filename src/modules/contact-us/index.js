import './index.css';
import alertifyjs from "alertifyjs";
import "alertifyjs/build/css/alertify.css";

function renderContactUsModule() {
  return `
    <section class="container contact-us">
      <article class="contact-us__item contact-us__item--info">
        <h1 class="info__item info__item--title">Envianos un mensaje</h1>
        <p class="info__item info__item--description">Tanto si tienes alguna pregunta sobre nuestros productos básicos de alta calidad o sobre los envíos, como si simplemente quieres saludarnos, estamos aquí para ayudarte. Nuestro equipo suele responder en un plazo de 24 horas.</p>
        <div class="info__item info__item--email">
          <span class="material-icons">email</span>
          <p class="email__item email__item--info"><b>EMAIL </b> concierge@luxe.com</p>
        </div>
        <div class="info__item info__item--address">
          <span class="material-icons">location_on</span>
          <p class="address__item address__item--info"><b>STUDIO </b> 100 Minimalist Way - Design District, NY 10001</p>
        </div>
      </article>
      <form class="contact-us__item contact-us__item--form">
        <div class="form__item form__item--name">
          <label for="name">Nombre completo</label>
          <input type="text" id="name" name="name" placeholder="Jane Doe" required>
        </div>
        <div class="form__item form__item--email">
          <label for="email">Correo electrónico</label>
          <input type="email" id="email" name="email" placeholder="jane.doe@example.com" required>
        </div>
        <div class="form__item form__item--subject">
          <label for="subject">Asunto (Opcional)</label>
          <input type="text" id="subject" name="subject" placeholder="Consulta sobre un pedido">
        </div>
        <div class="form__item form__item--message">
          <label for="message">Mensaje</label>
          <textarea id="message" name="message" placeholder="Escribe tu mensaje aquí..." required></textarea>
        </div>
        <div class="form__item form__item--submit">
          <p>Tus datos están seguros y se tratan con cuidado.</p>
          <button type="submit">
            Enviar mensaje
            <span class="material-icons">arrow_right_alt</span>            
          </button>
        </div>
      </form>
    </section>
  `;
};

function initContactUsModule() {
  const html = renderContactUsModule();  
  document.querySelector('#app').innerHTML = html;

  const form = document.querySelector('.contact-us__item--form');
  form.addEventListener('submit', handleSubmit);
};

function handleSubmit(event) {
  event.preventDefault();
  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData.entries());

  alertifyjs.success("Mensaje enviado correctamente");

  const body = `Nombre: ${data.name}\nCorreo: ${data.email}\nAsunto: ${data.subject}\nMensaje: ${data.message}`;
  const mailtoLink = `mailto:raffriff097@gmail.com?subject=${encodeURIComponent(data.subject)}&body=${encodeURIComponent(body)}`;
  window.location.href = mailtoLink;
};

export default initContactUsModule;