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
    "page-title": "Denise & Ryan Wedding",
    "nav-home": "Home",
    "nav-location": "Location",
    "nav-program": "Program",
    "nav-accommodations": "Accommodations",
    "nav-gifts": "Gifts",
    "nav-rsvp": "RSVP",
    "landing-title": "Welcome",
    "location-title": "Location",
    "location-address": "Av. Compositores 202, Analco\n62166 Cuernavaca, Mor.\nMexico",
    "location-text": "The ceremony and reception will take place at La Cañadita, located in the city of Cuernavaca, Morelos, where we'll welcome spring together and celebrate surrounded by nature.",
    "directions": "How to get there",
    "directions-intro": "We know many of you will be traveling from out of town, so here are some directions to help you get to Cuernavaca and to the venue.",
    "from-airport-title": "From Mexico City International Airport (AICM) to Cuernavaca",
    "direct-bus-title": "Direct bus from the airport",
    "direct-bus-desc": "The Pullman de Morelos bus line offers direct service from Terminal 1 at AICM to the Casino de la Selva Terminal in Cuernavaca. Tickets can be purchased at the airport or online.",
    "pullman-link": "https://pullman.mx/",
    "bus-time": "Approximate travel time: 1.5 hours.",
    "from-bus-station-title": "From the Cuernavaca bus station to the venue",
    "from-bus-station-desc": "Once you arrive in Cuernavaca, you can take a taxi or use a ride-hailing app to get to the venue. We recommend using Didi or Uber. The ride is short (about 15–20 minutes, depending on traffic).",
    "map-link-text": "See the exact location here:",
    "program-title": "Program",
    "program-intro": "Get ready to celebrate with us all day long! Here’s the itinerary so you can plan ahead and enjoy the event without any stress.",
    "program-schedule": "coming soon",
    "dresscode-title": "Dress Code",
    "dresscode-intro": "We’d love for everyone to dress in a way that reflects the warm and natural atmosphere of Cuernavaca in the spring. Below are some suggestions, but above all, we want you to feel comfortable and ready to celebrate.",
    "dresscode-women-title": "For Women",
    "dresscode-women": "Cocktail-style dresses or formal spring/summer outfits. Light colors, breezy fabrics, and cheerful details are more than welcome.",
    "dresscode-men-title": "For Men",
    "dresscode-men-list": [
      "Barong Tagalog — a traditional Filipino garment made from lightweight fabric with fine embroidery, perfect for warm climates.",
      "Guayabera — a linen or cotton shirt, often embroidered, and also a great option for an outdoor formal event."
    ],
    "dresscode-pinterest": "For more ideas and outfit inspiration, feel free to check out this Pinterest board.",
    "accommodations-title": "Accommodations",
    "accommodations-intro": "We’ve put together a selection of recommended hotels for your stay in Cuernavaca, all offering special rates for our wedding guests. Transportation to the venue will also be available from these locations — don’t forget to ask about it at check‑in!",
    "gifts-title": "Gifts",
    "gifts-intro": "Your presence at our wedding is the greatest gift of all. But if you’d like to support us as we begin this new chapter, we’ve created two options:",
    "gift-amazon": "Amazon Gift List\nWe’ve selected a few items that will help us build our new home together.",
    "amazon-link": "View our Amazon gift list here",
    "gift-honeymoon": "Honeymoon Fund\nIf you prefer, you can contribute to our honeymoon adventure and help us create unforgettable memories.",
    "honeymoon-link": "Contribute to our honeymoon fund here",
    "gifts-thanks": "Thank you for your love and support — we feel so lucky to celebrate this moment with you.",
    "rsvp-title": "RSVP",
    "rsvp-excited": "We are excited to celebrate with you!",
    "rsvp-intro": "To help us with the organization of the event, we’d truly appreciate it if you could confirm your attendance by clicking the link below:",
    "rsvp-link": "Confirm your attendance here",
    "rsvp-deadline": "Please RSVP before January 2026",
    "rsvp-thanks": "Thank you, and we can’t wait to see you there!",
    "translate-text": "ES"
  },
  es: {
    "page-title": "Boda de Denise y Ryan",
    "nav-home": "Inicio",
    "nav-location": "Ubicación",
    "nav-program": "Programa",
    "nav-accommodations": "Alojamiento",
    "nav-gifts": "Regalos",
    "nav-rsvp": "Confirmar Asistencia",
    "landing-title": "Bienvenido",
    "location-title": "Ubicación",
    "location-address": "Av. Compositores 202, Analco\n62166 Cuernavaca, Mor.\nMéxico",
    "location-text": "La ceremonia y la recepción se llevarán a cabo en La Cañadita, ubicada en la ciudad de Cuernavaca, Morelos, donde daremos la bienvenida a la primavera juntos y celebraremos rodeados de la naturaleza.",
    "directions": "Cómo llegar",
    "directions-intro": "Sabemos que muchos de ustedes viajarán desde fuera de la ciudad, así que aquí hay algunas indicaciones para ayudarles a llegar a Cuernavaca y al lugar del evento.",
    "from-airport-title": "Del Aeropuerto Internacional de la Ciudad de México (AICM) a Cuernavaca",
    "direct-bus-title": "Autobús directo desde el aeropuerto",
    "direct-bus-desc": "La línea de autobuses Pullman de Morelos ofrece servicio directo desde la Terminal 1 del AICM hasta la Terminal Casino de la Selva en Cuernavaca. Los boletos se pueden comprar en el aeropuerto o en línea.",
    "pullman-link": "https://pullman.mx/",
    "bus-time": "Tiempo aproximado de viaje: 1.5 horas.",
    "from-bus-station-title": "Desde la estación de autobuses de Cuernavaca hasta el lugar del evento",
    "from-bus-station-desc": "Una vez que llegues a Cuernavaca, puedes tomar un taxi o usar una aplicación de transporte para llegar al lugar. Recomendamos usar Didi o Uber. El viaje es corto (unos 15–20 minutos, dependiendo del tráfico).",
    "map-link-text": "Ve la ubicación exacta aquí:",
    "program-title": "Programa",
    "program-intro": "¡Prepárate para celebrar con nosotros todo el día! Aquí está el itinerario para que puedas planificar con anticipación y disfrutar del evento sin estrés.",
    "program-schedule": "próximamente",
    "dresscode-title": "Código de vestimenta",
    "dresscode-intro": "Nos encantaría que todos se vistieran de una manera que refleje el ambiente cálido y natural de Cuernavaca en primavera. A continuación hay algunas sugerencias, pero sobre todo, queremos que te sientas cómodo y listo para celebrar.",
    "dresscode-women-title": "Para Mujeres",
    "dresscode-women": "Vestidos tipo cóctel o atuendos formales de primavera/verano. Colores claros, telas frescas y detalles alegres son más que bienvenidos.",
    "dresscode-men-title": "Para Hombres",
    "dresscode-men-list": [
      "Barong Tagalog — una prenda tradicional filipina hecha de tela ligera con bordados finos, perfecta para climas cálidos.",
      "Guayabera — una camisa de lino o algodón, a menudo bordada, y también una gran opción para un evento formal al aire libre."
    ],
    "dresscode-pinterest": "Para más ideas e inspiración de atuendos, siéntete libre de consultar este tablero de Pinterest.",
    "accommodations-title": "Alojamiento",
    "accommodations-intro": "Hemos seleccionado una lista de hoteles recomendados para tu estancia en Cuernavaca, todos ofreciendo tarifas especiales para nuestros invitados. El transporte al lugar también estará disponible desde estas ubicaciones — no olvides preguntar al hacer el check-in.",
    "gifts-title": "Regalos",
    "gifts-intro": "Tu presencia en nuestra boda es el mejor regalo de todos. Pero si deseas apoyarnos mientras comenzamos este nuevo capítulo, hemos creado dos opciones:",
    "gift-amazon": "Lista de Regalos de Amazon\nHemos seleccionado algunos artículos que nos ayudarán a construir nuestro nuevo hogar juntos.",
    "amazon-link": "Ver nuestra lista de regalos de Amazon aquí",
    "gift-honeymoon": "Fondo para la Luna de Miel\nSi prefieres, puedes contribuir a nuestra aventura de luna de miel y ayudarnos a crear recuerdos inolvidables.",
    "honeymoon-link": "Contribuye a nuestro fondo para la luna de miel aquí",
    "gifts-thanks": "Gracias por tu amor y apoyo — nos sentimos muy afortunados de celebrar este momento contigo.",
    "rsvp-title": "Confirmación de asistencia",
    "rsvp-excited": "¡Estamos emocionados de celebrar contigo!",
    "rsvp-intro": "Para ayudarnos con la organización del evento, realmente agradeceríamos que confirmaras tu asistencia haciendo clic en el siguiente enlace:",
    "rsvp-link": "Confirma tu asistencia aquí",
    "rsvp-deadline": "Por favor confirma antes de enero de 2026",
    "rsvp-thanks": "Gracias, ¡y estamos ansiosos de verte allí!",
    "translate-text": "EN"
  }
};


// js logic to translate page between english/spanish on button click

function applyTranslations(lang) {
  const entries = translations[lang];
  for (const id in entries) {
    const el = document.getElementById(id);
    if (el) {
      if (el.tagName === "TITLE") {
        document.title = entries[id];
      } else {
        el.textContent = entries[id]; // Only touch text elements
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

document.getElementById("translate-btn").addEventListener("click", () => {
  currentLang = currentLang === "en" ? "es" : "en";
  applyTranslations(currentLang);
});

document.addEventListener("DOMContentLoaded", () => {
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
