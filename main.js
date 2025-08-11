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
    
    "program-title": "Program",
    "accommodations-title": "Accommodations",
    
    "gifts-title": "Gifts",
    
    "rsvp-title": "RSVP",
    "rsvp-link": "Confirm your attendance here",
    "translate-text": "ES",
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
    
    "program-title": "Programa",
    "accommodations-title": "Alojamiento",
    
    "gifts-title": "Regalos",
    
    "rsvp-title": "Confirmación de asistencia",
    "rsvp-link": "Haz clic aquí para confirmar asistencia.",
    "translate-text": "EN",
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
