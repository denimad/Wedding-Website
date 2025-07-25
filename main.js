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
    "nav-schedule": "Schedule",
    "nav-accommodations": "Accommodations",
    "nav-gifts": "Gifts",
    "nav-rsvp": "RSVP",
    "landing-title": "Welcome",
    "location-title": "Location",
    "location-address":
      "Av. Compositores 202, Analco, 62166 Cuernavaca, Mor., Mexico",
    "schedule-title": "Schedule",
    "accommodations-title": "Accommodations",
    "accommodations-text":
      "Some random English text for the translation test. How do you write this in Spanish? Yeah no idea.",
    "gifts-title": "Gifts",
    "gifts-text":
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate tempore ipsa dolores praesentium, eligendi eum laboriosam aliquam natus tempora delectus hic, explicabo reiciendis nemo assumenda laborum optio suscipit commodi adipisci?",
    "rsvp-title": "RSVP",
    "rsvp-link": "Click here for RSVP.",
    "translate-btn": "Español",
  },
  es: {
    "page-title": "Boda de Denise y Ryan",
    "nav-home": "Inicio",
    "nav-location": "Ubicación",
    "nav-schedule": "Programa",
    "nav-accommodations": "Alojamiento",
    "nav-gifts": "Regalos",
    "nav-rsvp": "Confirmar Asistencia",
    "landing-title": "Bienvenido",
    "location-title": "Ubicación",
    "location-address":
      "Av. Compositores 202, Analco, 62166 Cuernavaca, Mor., México",
    "schedule-title": "Programa",
    "accommodations-title": "Alojamiento",
    "accommodations-text":
      "Un texto de prueba para traducir al español. ¿Cómo se dice esto en español? Ni idea.",
    "gifts-title": "Regalos",
    "gifts-text":
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate tempore ipsa dolores praesentium, eligendi eum laboriosam aliquam natus tempora delectus hic, explicabo reiciendis nemo assumenda laborum optio suscipit commodi adipisci?",
    "rsvp-title": "Confirmación de asistencia",
    "rsvp-link": "Haz clic aquí para confirmar asistencia.",
    "translate-btn": "English",
  },
};

// js logic to translate page between english/spanish on button click

function applyTranslations(lang) {
  const entries = translations[lang];
  for (const id in entries) {
    const el = document.getElementById(id);
    if (el) {
      if (el.tagName === "TITLE") {
        document.title = entries[id];
      } else if (el.tagName === "INPUT" || el.tagName === "BUTTON") {
        el.value = entries[id];
        el.textContent = entries[id]; // For <button>
      } else {
        el.textContent = entries[id];
      }
    }
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
