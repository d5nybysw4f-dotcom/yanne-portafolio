// ── HEADER SCROLL ────────────────────────────
const header = document.querySelector('header');
window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 10);
});

// ── SCROLL REVEAL ────────────────────────────
const reveals = document.querySelectorAll(
  '.caso-seccion, .insight-card, .propuesta-item, .wireframe-item, .pantalla-item, .reflexion-item, .estado-item'
);

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      // stagger children si los tiene
    }
  });
}, { threshold: 0.1 });

reveals.forEach(el => {
  el.classList.add('reveal');
  observer.observe(el);
});

// ── STAGGER CARDS ────────────────────────────
const staggerGroups = [
  '.insight-cards',
  '.propuesta-grid',
  '.wireframes-grid',
  '.reflexion-grid',
  '.estados-grid'
];

staggerGroups.forEach(selector => {
  const container = document.querySelector(selector);
  if (!container) return;
  const children = container.querySelectorAll(':scope > *');
  children.forEach((child, i) => {
    child.style.transitionDelay = `${i * 0.1}s`;
  });
});

// ── PANTALLAS HOVER ───────────────────────────
const pantallas = document.querySelectorAll('.pantalla-item');
pantallas.forEach(p => {
  p.addEventListener('mouseenter', () => {
    p.style.transform = 'translateY(-8px)';
    p.style.transition = 'transform 0.3s ease';
  });
  p.addEventListener('mouseleave', () => {
    p.style.transform = '';
  });
});

// ── SMOOTH PROGRESS BAR ───────────────────────
// Barra de lectura en la parte superior
const progressBar = document.createElement('div');
progressBar.style.cssText = `
  position: fixed;
  top: 0;
  left: 0;
  height: 2px;
  background: linear-gradient(90deg, #811634, #DD7A8C);
  z-index: 9999;
  transition: width 0.1s linear;
  width: 0%;
`;
document.body.appendChild(progressBar);

window.addEventListener('scroll', () => {
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const progress = (scrollTop / docHeight) * 100;
  progressBar.style.width = `${progress}%`;
});

