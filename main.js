// // Smooth scroll to section with offset for fixed navbar

document.addEventListener("DOMContentLoaded", function () {
  const navbar = document.querySelector("header");

  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      const targetId = this.getAttribute("href").substring(1);
      const targetElement = document.getElementById(targetId);

      if (!targetElement) return;

      e.preventDefault();

      const navbarHeight = navbar.offsetHeight;
      const targetPosition =
        targetElement.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = targetPosition - navbarHeight - 20;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    });
  });
});

// js object for translations
const translations = {
  en: {
    "translate-text": "ES",
  },
  es: {
    "page-title": "Boda de Denise y Ryan",
    "translate-text": "EN",
    "nav-home": "Inicio",
    "nav-location": "Ubicación",
    "nav-program": "Programa",
    "nav-accommodations": "Alojamiento",
    "nav-gifts": "Regalos",
    "nav-rsvp": "Confirmar Asistencia",

    "landing-title": "Bienvenido",

    "location-title": "Ubicación",
    "location-text": `
      La ceremonia y la recepción se llevarán a cabo en
      <a href="https://lacanadita.com/">La Cañadita</a>, ubicada en la
      ciudad de Cuernavaca, Morelos, donde daremos la bienvenida a la primavera juntos y
      celebraremos rodeados de la naturaleza.
    `,

    directions: "Cómo llegar",
    "directions-intro": `
      Sabemos que muchos de ustedes viajarán desde fuera de la ciudad, así que aquí
      tienen algunas indicaciones para llegar a Cuernavaca y al lugar del evento.
    `,
    "from-airport-title":
      "Del Aeropuerto Internacional de la Ciudad de México (AICM) a Cuernavaca",
    "direct-bus-title": "Autobús directo desde el aeropuerto",
    "direct-bus-desc": `
      La línea de autobuses Pullman de Morelos ofrece servicio directo desde
      la Terminal 1 del AICM hasta la Terminal Casino de la Selva en
      Cuernavaca. Los boletos pueden comprarse en el aeropuerto o en línea.
      <a href="https://pullman.mx/" target="_blank" rel="noopener noreferrer">https://pullman.mx/</a>
    `,
    "bus-time": "Tiempo aproximado de viaje: 1.5 horas.",
    "from-bus-station-title":
      "Desde la estación de autobuses de Cuernavaca hasta el lugar del evento",
    "from-bus-station-desc": `
      Una vez que lleguen a Cuernavaca, pueden tomar un taxi o usar una
      aplicación de transporte para llegar al lugar. Recomendamos usar Didi o
      Uber. El viaje es corto (aproximadamente 15-20 minutos, según el tráfico).
    `,
    "map-link-text": "Ve la ubicación exacta aquí:",

    "program-title": "Programa",
    "program-intro": `
      ¡Prepárate para celebrar con nosotros todo el día! Aquí está el itinerario para
      que puedas planear y disfrutar el evento sin estrés.
    `,
    "program-schedule": "Próximamente",

    "dresscode-title": "Código de vestimenta",
    "dresscode-intro": `
      Nos encantaría que todos se vistieran de una manera que refleje la cálida
      y natural atmósfera de Cuernavaca en primavera. A continuación algunas
      sugerencias, pero sobre todo queremos que te sientas cómodo y listo para celebrar.
    `,
    "dresscode-women-title": "Para mujeres",
    "dresscode-women": `
      Vestidos tipo cóctel o atuendos formales de primavera/verano. Colores claros,
      telas ligeras y detalles alegres son más que bienvenidos.
    `,
    "dresscode-men-title": "Para hombres",
    "dresscode-men-intro":
      "Sugerimos opciones frescas pero formales como el Barong Tagalog o la guayabera mexicana.",
    "dresscode-men-list": `
      <li><strong>Barong Tagalog</strong> — una prenda tradicional filipina hecha de tela ligera con bordados finos, perfecta para climas cálidos.</li>
      <li><strong>Guayabera</strong> — una camisa de lino o algodón, a menudo bordada, y también una excelente opción para un evento formal al aire libre.</li>
    `,
    "dresscode-pinterest": "Para obtener más ideas e inspiración para atuendos, no dudes en consultar esto",

    "accommodations-title": "Alojamiento",
    "accommodations-intro": `
      Hemos preparado una selección de hoteles recomendados para tu estadía
      en Cuernavaca, todos ofreciendo tarifas especiales para nuestros invitados de boda.
      El transporte al lugar también estará disponible desde estas
      ubicaciones — ¡no olvides preguntar por ello al hacer el check‑in!
    `,
    "hotel-cala-blanca-desc":
      "Este hotel boutique está más cerca del lugar — a solo 5 minutos caminando.",
    "hotel-cala-blanca-discount":
      "<strong>Código de descuento:</strong> [por confirmar]",

    "hotel-casa-azul-desc":
      "Ubicado en el centro de Cuernavaca, rodeado de atracciones turísticas y a unos 10 minutos del lugar.",
    "hotel-casa-azul-discount":
      "<strong>Código de descuento:</strong> [por confirmar]",

    "las-casas-bb-desc": "También ubicado en el centro y cerca del lugar.",
    "las-casas-bb-discount":
      "<strong>Código de descuento:</strong> [por confirmar]",

    "hotel-racquet-club-desc":
      "Este hotel tiene más habitaciones. Está más lejos del centro, pero a solo 10 minutos del lugar.",
    "hotel-racquet-club-discount":
      "<strong>Código de descuento:</strong> [por confirmar]",

    "gifts-title": "Regalos",
    "gifts-intro": `
      Tu presencia en nuestra boda es el mejor regalo de todos.<br />
      Pero si deseas apoyarnos en esta nueva etapa, hemos creado dos opciones:
    `,
    "gift-amazon": `
      <strong>Lista de regalos en Amazon</strong><br />
      Hemos seleccionado algunos artículos que nos ayudarán a construir nuestro nuevo hogar juntos.<br />
      <a href="#" target="_blank" rel="noopener noreferrer">Ver nuestra lista de regalos en Amazon aquí</a>
    `,
    "gift-honeymoon": `
      <strong>Fondo para luna de miel</strong><br />
      Si prefieres, puedes contribuir a nuestra aventura de luna de miel y
      ayudarnos a crear recuerdos inolvidables.<br />
      <a href="#" target="_blank" rel="noopener noreferrer">Contribuye a nuestro fondo para luna de miel aquí</a>
    `,
    "gifts-thanks":
      "Gracias por tu amor y apoyo — nos sentimos muy afortunados de celebrar este momento contigo.",

    "rsvp-title": "Confirmación de asistencia",
    "rsvp-excited": "¡Estamos emocionados de celebrar contigo!",
    "rsvp-intro": `
      Para ayudarnos con la organización del evento, agradeceríamos mucho si
      pudieras confirmar tu asistencia haciendo clic en el enlace a continuación:
    `,
    "rsvp-link": "Confirma tu asistencia aquí",
    "rsvp-deadline":
      "<strong>Por favor confirma antes de enero de 2026</strong>",
    "rsvp-thanks": "Gracias, ¡y estamos deseando verte!",
  },
};

const originalText = {};

// Save original English text content on page load
function cacheOriginalText() {
  const allIds = Array.from(
    new Set([...Object.keys(translations.en), ...Object.keys(translations.es)])
  ); // all translatable element IDs
  allIds.forEach((id) => {
    const el = document.getElementById(id);
    if (el) {
      if (el.tagName === "TITLE") {
        originalText[id] = document.title;
      } else {
        originalText[id] = el.innerHTML; // save with innerHTML to preserve lists, links, formatting
      }
    }
  });
}

function applyTranslations(lang) {
  if (lang === "es") {
    // Apply Spanish translations
    const entries = translations.es;
    for (const id in entries) {
      const el = document.getElementById(id);
      if (el) {
        if (el.tagName === "TITLE") {
          document.title = entries[id];
        } else {
          el.innerHTML = entries[id]; // use innerHTML for all to preserve markup (works with plain text too)
        }
      }
    }
  } else {
    // Revert to original English from cached values
    for (const id in originalText) {
      const el = document.getElementById(id);
      if (el) {
        if (el.tagName === "TITLE") {
          document.title = originalText[id];
        } else {
          el.innerHTML = originalText[id];
        }
      }
    }
  }

  // Swap the flag icon
  const flagIcon = document.getElementById("flag-icon");
  if (flagIcon) {
    const nextLang = lang === "en" ? "es" : "en";
    flagIcon.src = nextLang === "en" ? "images/us.png" : "images/mx.png";
    flagIcon.alt = nextLang === "en" ? "US Flag" : "Mexican Flag";
  }
}

let currentLang = "en";

document.addEventListener("DOMContentLoaded", () => {
  cacheOriginalText(); // Cache English text at start
  applyTranslations(currentLang);
});

document.getElementById("translate-btn").addEventListener("click", () => {
  currentLang = currentLang === "en" ? "es" : "en";
  applyTranslations(currentLang);
});

// hamburger menu

document.addEventListener("DOMContentLoaded", function () {
  const toggleBtn = document.getElementById("nav-toggle");
  const navList = document.querySelector(".nav__list--primary");

  if (toggleBtn && navList) {
    toggleBtn.addEventListener("click", () => {
      navList.classList.toggle("show");
    });

    // Close menu when nav link is clicked (only after navList is confirmed)

    const navLinks = navList.querySelectorAll("a");
    navLinks.forEach((link) => {
      link.addEventListener("click", () => {
        navList.classList.remove("show");
      });
    });

    //  Close menu when clicking outside

    document.addEventListener("click", (event) => {
      const isClickInsideMenu = navList.contains(event.target);
      const isClickOnToggle = toggleBtn.contains(event.target);

      if (!isClickInsideMenu && !isClickOnToggle) {
        navList.classList.remove("show");
      }
    });
  }
});

// animation for landing page

document.addEventListener('DOMContentLoaded', () => {
  const hero = document.querySelector('.hero-container');
  const navbar = document.querySelector('header');

  // // Step 1: Fade in BW over sketch
  // setTimeout(() => {
  //   hero.classList.add('step-bw');
  // }, 300); // start after small delay

  // Step 2: Fade to color
  setTimeout(() => {
    hero.classList.add('step-color');
  }, 300); // ~2s after BW fade starts

  // Navbar show/hide on scroll
  const updateNavbar = () => {
    if (window.scrollY > 0) {
      navbar.classList.remove('hidden');
    } else {
      navbar.classList.add('hidden');
    }
  };

  window.addEventListener('scroll', updateNavbar);
  updateNavbar(); // initial check on page load
});

