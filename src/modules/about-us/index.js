import './index.css';

function renderAboutUsModule() {
  return `
    <section class="container about-us">
      <article class="about-us__item about-us__item--intro">
        <h1 class="intro__item intro__item--title">¿Quienes somos?</h1>
        <p class="intro__item intro__item--text">Creemos que la verdadera elegancia reside en la sencillez. Nuestro proceso de selección elimina todo lo superfluo, dejando solo productos de una calidad excepcional, con un diseño funcional y un valor duradero.</p>
      </article>
      <figure class="about-us__item about-us__item--hero">
        <img src="./src/assets/hero.svg" alt="Imagen de la empresa" />
      </figure>
      <article class="about-us__item about-us__item--description">
        <div class="description__item description__item--philosophy">
          <h2 class="philosophy__item philosophy__item--title">Nuestra filosofia</h2>
          <hr class="philosophy__item philosophy__item--divider" />
          <p class="philosophy__item philosophy__item--p1">En LA TIENDITA, no consideramos el consumo como un acto pasivo, sino como una serie de decisiones conscientes. Colaboramos exclusivamente con artesanos y fabricantes que comparten nuestro compromiso con las prácticas sostenibles y el abastecimiento transparente. Cada artículo de nuestro catálogo se somete a rigurosas pruebas tanto de durabilidad estética como de resistencia funcional, lo que garantiza que merezca un lugar en tu vida cuidadosamente seleccionada.</p>
          <br />
          <p class="philosophy__item philosophy__item--p2">Rechazamos el ciclo de las modas pasajeras. En su lugar, nos centramos en los elementos fundamentales de la vida moderna: objetos que, discretamente, mejoran tus rutinas diarias sin exigir una atención constante.</p>
        </div>        
        <div class="description__item description__item--selection">
          <h2 class="selection__item selection__item--title">El proceso de selección</h2>
          <hr class="selection__item selection__item--divider" />
          <p class="selection__item selection__item--text">Encontrar el básico perfecto requiere paciencia. Nuestro equipo dedica meses a evaluar los materiales, examinar las costuras y conocer la cadena de suministro que hay detrás de cada posible incorporación a nuestra colección. Nosotros hacemos las preguntas difíciles para que tú no tengas que hacerlo.</p>
          <br />
          <ul class="selection__item selection__item--list">
            <li class="list__item list__item--ethical">
              <span class="material-icons-outlined">check_circle</span>
              <span>Normas de producción éticas en todos los socios.</span>
            </li>
            <li class="list__item list__item--quality">
              <span class="material-icons-outlined">check_circle</span>
              <span>Materiales de primera calidad y duraderos, diseñados para envejecer con elegancia.</span>
            </li>
            <li class="list__item list__item--timeless">
              <span class="material-icons-outlined">check_circle</span>
              <span>Una estética atemporal que no se ve afectada por las modas pasajeras de cada temporada.</span>
            </li>
          </ul>
        </div>        
      </article>
    </section>
  `;
};

function initAboutUsModule() {
  const html = renderAboutUsModule();  
  document.querySelector('#app').innerHTML = html;  
};

export default initAboutUsModule;