// MENU DESPEGABLE
var menuToggle = document.querySelector('.menu-toggle');
var navList = document.querySelector('.nav-list');

menuToggle.addEventListener('click', function() {
  navList.classList.toggle('activo');
  menuToggle.classList.toggle('abierto');
});
document.addEventListener('click', function(e) {
  if (!navList.contains(e.target) && !menuToggle.contains(e.target)) {
    navList.classList.remove('activo');
    menuToggle.classList.remove('abierto');
  }
});
document.querySelectorAll('.nav-list a').forEach(function(link) {
  link.addEventListener('click', function() {
    navList.classList.remove('activo');
  });
});



// CARPETA DESKTOP
var carpeta = document.querySelector(".carpeta-container");
var x = 1;
function abrirCarpeta() {
  if (x == 1) {
    carpeta.classList.add("abierta");
    x = 2;
  } else {
    carpeta.classList.remove("abierta");
    x = 1;
  }
}

// CARPETA MÓVIL
var slideActual = 0;
var slides = document.querySelectorAll(".carrusel-slide");
var dotsSlide = document.querySelectorAll(".carrusel-dot");
var track = document.querySelector(".carrusel-track");

function siguienteSlide() {
  slideActual = (slideActual + 1) % slides.length;
  track.style.transform = "translateX(-" + (slideActual * 100) + "%)";
  dotsSlide.forEach(function(d) { d.classList.remove("activo"); });
  dotsSlide[slideActual].classList.add("activo");
}

function anteriorSlide() {
  slideActual = (slideActual - 1 + slides.length) % slides.length;
  track.style.transform = "translateX(-" + (slideActual * 100) + "%)";
  dotsSlide.forEach(function(d) { d.classList.remove("activo"); });
  dotsSlide[slideActual].classList.add("activo");
}

// SWIPE TÁCTIL CARRUSEL
if (track) {
  var startX = 0;

  track.addEventListener('touchstart', function(e) {
    startX = e.touches[0].clientX;
  }, { passive: true });

  track.addEventListener('touchend', function(e) {
    var diff = startX - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        siguienteSlide();
      } else {
        anteriorSlide();
      }
    }
  }, { passive: true });
}




// ID CARD
const card = document.getElementById("card");
card.addEventListener("click", () => {
  card.classList.toggle("flipped");
});

// HEADER SCROLL
const header = document.querySelector('header');
window.addEventListener('scroll', () => {
  if (window.scrollY > 10) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

// FORMULARIO
document.getElementById('contacto-form').addEventListener('submit', function(e) {
  e.preventDefault();
  this.style.display = 'none';
  document.getElementById('form-success').style.display = 'flex';
});

// SCROLL REVEAL
const reveals = document.querySelectorAll(
  '#sobre-mi img, .sobre-right, .card-info, #skills, ' +
  '.carpeta-container, .card-proyecto, ' +
  '#experiencia .titulos, #que-hago .titulos, ' +
  '#proyectos .titulos, #contacto .contacto-left, ' +
  '.contacto-right'
);
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => {
        entry.target.classList.add('visible');
      }, i * 80);
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });
reveals.forEach(el => observer.observe(el));


// CARDS TABLET Y MOVIL

function cambiarTab(tab, event) {
  document.querySelectorAll('.tab-panel').forEach(function(p) {
    p.classList.add('oculto');
  });
  document.querySelectorAll('.tab-btn').forEach(function(b) {
    b.classList.remove('activo');
  });
  document.getElementById('tab-' + tab).classList.remove('oculto');
  event.target.classList.add('activo');
}

