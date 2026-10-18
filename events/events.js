/* ─────────────────────────────────────────
   Micro Viaggi del Tempo — events.js
   Hub della sezione "Eventi"
   Pagina indipendente: non carica main.js, per evitare che le
   traduzioni della home (stesse chiavi data-i18n, testi diversi)
   sovrascrivano quelle di questa pagina.
   ───────────────────────────────────────── */

// ─── EVENTS (aggiungere qui i prossimi aggiornamenti a tema) ───
const EVENTS = [
  {
    href: 'asia.html',
    img: 'assets/hero-asia.jpg',
    badge: { it: 'Nuovo · v3.0', en: 'New · v3.0' },
    title: { it: 'Viaggio in Asia', en: 'Journey to Asia' },
    desc: {
      it: '9 nuovi viaggi tra Cina, Giappone e India: dal Re Scimmia ai samurai di Sekigahara.',
      en: '9 new trips across China, Japan and India: from the Monkey King to the samurai of Sekigahara.',
    },
  },
];

// ─── TRANSLATIONS ───
const i18n = {
  it: {
    navBtn:        'Scarica gratis',
    backLink:      '← Torna al sito',
    eyebrow:       'Novità',
    heroTitle1:    'Eventi',
    heroTitle2:    'in corso',
    heroSub:       'Nuovi percorsi, nuove epoche, nuove storie. Ogni aggiornamento di Micro Viaggi del Tempo ha la sua pagina dedicata.',
    footerTagline: 'Piccoli viaggi. Grandi scoperte.',
    footerCta:     'Scaricala su App Store',
    flag:          '🇮🇹',
    code:          'IT',
  },
  en: {
    navBtn:        'Download free',
    backLink:      '← Back to site',
    eyebrow:       "What's new",
    heroTitle1:    'Current',
    heroTitle2:    'events',
    heroSub:       'New journeys, new eras, new stories. Every Micro Viaggi del Tempo update gets its own dedicated page.',
    footerTagline: 'Short journeys. Big discoveries.',
    footerCta:     'Download on App Store',
    flag:          '🇬🇧',
    code:          'EN',
  },
};

// ─── RENDER EVENTS ───
function renderEvents(lang) {
  const grid = document.getElementById('eventsGrid');
  if (!grid) return;

  grid.innerHTML = EVENTS.map((ev) => `
    <a class="event-card" href="${ev.href}">
      <img src="${ev.img}" alt="${ev.title[lang]}" />
      <span class="event-arrow">→</span>
      <div class="event-card-body">
        <span class="event-badge">${ev.badge[lang]}</span>
        <div class="event-title">${ev.title[lang]}</div>
        <p class="event-desc">${ev.desc[lang]}</p>
      </div>
    </a>
  `).join('');
}

// ─── APPLY LANGUAGE ───
function applyLang(lang) {
  const t = i18n[lang] || i18n.it;

  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.getAttribute('data-i18n');
    if (t[key] !== undefined) el.innerHTML = t[key];
  });

  renderEvents(lang);

  const flagEl = document.getElementById('langFlag');
  const codeEl = document.getElementById('langCode');
  if (flagEl) flagEl.textContent = t.flag;
  if (codeEl) codeEl.textContent = t.code;

  document.querySelectorAll('.lang-option').forEach((opt) => {
    opt.classList.toggle('active', opt.getAttribute('data-lang') === lang);
  });

  document.documentElement.lang = lang;

  try { localStorage.setItem('mvdt-lang', lang); } catch (e) {}
}

// ─── LANGUAGE DETECTION ───
function detectLang() {
  let saved = null;
  try { saved = localStorage.getItem('mvdt-lang'); } catch (e) {}
  if (saved && i18n[saved]) return saved;

  const browser = (navigator.language || 'it').slice(0, 2).toLowerCase();
  if (i18n[browser]) return browser;

  return 'it';
}

// ─── LANG PICKER ───
(function initLangPicker() {
  document.addEventListener('DOMContentLoaded', () => {
    const picker = document.getElementById('langPicker');
    const btn = document.getElementById('langBtn');
    const dropdown = document.getElementById('langDropdown');
    if (!picker || !btn || !dropdown) return;

    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const open = picker.classList.toggle('open');
      btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    });

    dropdown.querySelectorAll('.lang-option').forEach((opt) => {
      opt.addEventListener('click', () => {
        applyLang(opt.getAttribute('data-lang'));
        picker.classList.remove('open');
        btn.setAttribute('aria-expanded', 'false');
      });
    });

    document.addEventListener('click', () => {
      picker.classList.remove('open');
      btn.setAttribute('aria-expanded', 'false');
    });
  });
})();

// ─── STARFIELD ───
(function initStars() {
  document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('stars');
    if (!container) return;
    const count = 80;
    for (let i = 0; i < count; i++) {
      const star = document.createElement('span');
      star.style.position = 'absolute';
      star.style.left = Math.random() * 100 + '%';
      star.style.top = Math.random() * 100 + '%';
      const size = Math.random() * 2 + 1;
      star.style.width = size + 'px';
      star.style.height = size + 'px';
      star.style.borderRadius = '50%';
      star.style.background = '#fff';
      star.style.opacity = (Math.random() * 0.6 + 0.2).toFixed(2);
      star.style.animation = `twinkle ${(Math.random() * 3 + 2).toFixed(2)}s ease-in-out ${(Math.random() * 3).toFixed(2)}s infinite`;
      container.appendChild(star);
    }
  });
})();

// ─── SCROLL REVEAL ───
(function initReveal() {
  document.addEventListener('DOMContentLoaded', () => {
    const els = document.querySelectorAll('.reveal');
    if (!els.length) return;
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });
    els.forEach((el) => observer.observe(el));
  });
})();

// ─── INIT ───
document.addEventListener('DOMContentLoaded', () => {
  applyLang(detectLang());
});
