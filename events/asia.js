/* ─────────────────────────────────────────
   Micro Viaggi del Tempo — asia.js
   Pagina dedicata: percorso Asia (v3.0)
   Pagina indipendente: non carica main.js, per evitare che le
   traduzioni della home (stesse chiavi data-i18n, testi diversi)
   sovrascrivano quelle di questa pagina.
   ───────────────────────────────────────── */

// ─── TRIPS (percorso Asia, ordine cronologico) ───
const ASIA_TRIPS = [
  { img: 'm17_amaterasu',    isNew: true,  year: { it: 'Epoca mitica',      en: 'Mythical age' },      title: { it: 'Amaterasu e la Grotta Celeste',      en: 'Amaterasu and the Heavenly Cave' },     place: { it: 'Takamagahara, Giappone mitico', en: 'Takamagahara, mythical Japan' } },
  { img: 'm18_sun_wukong',   isNew: true,  year: { it: 'Epoca mitica',      en: 'Mythical age' },      title: { it: 'Sun Wukong, il Re Scimmia',          en: 'Sun Wukong, the Monkey King' },          place: { it: 'Montagna dei Fiori e dei Frutti, Cina mitica', en: 'Mountain of Flowers and Fruit, mythical China' } },
  { img: 'a07_buddha',       isNew: true,  year: { it: 'V secolo a.C.',     en: 'c. 5th century BC' }, title: { it: "Il Buddha sotto l'albero della Bodhi", en: 'The Buddha under the Bodhi Tree' },     place: { it: 'Bodh Gaya, India',               en: 'Bodh Gaya, India' } },
  { img: 'a08_qin_shi_huang',isNew: true,  year: { it: '221 a.C.',          en: '221 BC' },             title: { it: "Qin Shi Huang e l'Esercito di Terracotta", en: 'Qin Shi Huang and the Terracotta Army' }, place: { it: "Xi'an, Cina",                    en: "Xi'an, China" } },
  { img: 'me07_via_della_seta', isNew: true, year: { it: 'VII–VIII secolo', en: '7th–8th century' },   title: { it: 'La Via della Seta',                  en: 'The Silk Road' },                        place: { it: "Chang'an, Cina — Samarcanda",    en: "Chang'an, China — Samarkand" } },
  { img: 'me08_gengis_khan', isNew: true,  year: { it: '1206',              en: '1206' },               title: { it: 'Gengis Khan unisce i Mongoli',       en: 'Genghis Khan Unites the Mongols' },      place: { it: 'Fiume Onon, Mongolia',           en: 'Onon River, Mongolia' } },
  { img: 'me09_kamikaze',    isNew: true,  year: { it: '1274 · 1281',       en: '1274 · 1281' },        title: { it: 'Il vento divino contro Kublai Khan', en: 'The Divine Wind Against Kublai Khan' },  place: { it: 'Baia di Hakata, Kyushu, Giappone', en: 'Hakata Bay, Kyushu, Japan' } },
  { img: 'mo05_sekigahara',  isNew: true,  year: { it: '1600',              en: '1600' },               title: { it: 'La battaglia di Sekigahara',         en: 'The Battle of Sekigahara' },             place: { it: 'Sekigahara, Giappone',           en: 'Sekigahara, Japan' } },
  { img: 'mo06_navi_nere',   isNew: true,  year: { it: '1853',              en: '1853' },               title: { it: 'Le Navi Nere del commodoro Perry',   en: "Commodore Perry's Black Ships" },        place: { it: 'Uraga, baia di Edo, Giappone',   en: 'Uraga, Edo Bay, Japan' } },
  { img: 'co04_hiroshima',   isNew: false, year: { it: '1945',              en: '1945' },               title: { it: 'Hiroshima',                          en: 'Hiroshima' },                            place: { it: 'Hiroshima, Giappone',            en: 'Hiroshima, Japan' } },
  { img: 'co12_gandhi',      isNew: false, year: { it: '1915–1947',         en: '1915–1947' },          title: { it: "Gandhi e l'Indipendenza dell'India", en: "Gandhi and India's Independence" },      place: { it: 'India',                          en: 'India' } },
];

// ─── TRANSLATIONS ───
const i18n = {
  it: {
    navBtn:        'Scarica gratis',
    backLink:      '← Tutti gli eventi',
    eyebrow:       'Nuovo aggiornamento',
    heroTitle1:    'Viaggio',
    heroTitle2:    'in Asia',
    heroSub:       '9 nuovi viaggi tra Cina, Giappone e India. Dal Re Scimmia ai samurai di Sekigahara.',
    ctaBtn:        'Scarica su App Store',
    ctaNote:       'Gratis · Solo iOS · 11 viaggi nel percorso Asia',
    introLabel:    'Il nuovo percorso',
    introTitle:    'Undici tappe, duemila anni, un solo continente.',
    introText:     "Dalla grotta in cui il sole si nascose al mondo, alla tempesta che salvò il Giappone da Kublai Khan, fino alle navi nere che costrinsero un paese chiuso ad aprirsi. Il percorso Asia raccoglie miti, imperi e battaglie in un unico filo narrativo, da esplorare in ordine cronologico.",
    newBadge:      'Nuovo',
    echoesTag:     'Modalità Echoes',
    echoesTitle1:  'Non leggere',
    echoesTitle2:  'la storia.',
    echoesTitle3:  'Vivila.',
    echoesDesc:    'Nel percorso Asia, Echoes Mode ti porta dentro la danza che fece uscire il sole dalla grotta, sotto la montagna dove Sun Wukong resta imprigionato per cinquecento anni, sulla collina di Sekigahara nel momento esatto in cui un giovane comandante deve scegliere da che parte stare.',
    echo1:         '«Rovescio una tinozza davanti alla pietra e ci salgo sopra. Il legno rimbomba sotto i miei piedi come un tamburo...»',
    echo2:         '«Sono sotto una montagna. Fuori resta solo la testa e una mano. Sono immortale: non posso nemmeno morire per noia...»',
    echo3:         '«Ho quindicimila uomini sotto di me. In una cassetta, sotto la mia armatura, ho una lettera di Tokugawa Ieyasu...»',
    footerTagline: 'Piccoli viaggi. Grandi scoperte.',
    footerCta:     'Scaricala su App Store',
    flag:          '🇮🇹',
    code:          'IT',
  },
  en: {
    navBtn:        'Download free',
    backLink:      '← All events',
    eyebrow:       'New update',
    heroTitle1:    'Journey',
    heroTitle2:    'to Asia',
    heroSub:       '9 new trips across China, Japan and India. From the Monkey King to the samurai of Sekigahara.',
    ctaBtn:        'Download on App Store',
    ctaNote:       'Free · iOS only · 11 trips in the Asia journey',
    introLabel:    'The new journey',
    introTitle:    'Eleven stops, two thousand years, one continent.',
    introText:     'From the cave where the sun hid from the world, to the storm that saved Japan from Kublai Khan, to the black ships that forced a closed country open. The Asia journey gathers myths, empires and battles into a single narrative thread, to explore in chronological order.',
    newBadge:      'New',
    echoesTag:     'Echoes Mode',
    echoesTitle1:  "Don't read",
    echoesTitle2:  'history.',
    echoesTitle3:  'Live it.',
    echoesDesc:    'In the Asia journey, Echoes Mode puts you inside the dance that drew the sun out of the cave, under the mountain where Sun Wukong stays trapped for five hundred years, on the hill at Sekigahara at the exact moment a young commander has to choose a side.',
    echo1:         '«I overturn a tub in front of the rock and climb onto it. The wood booms under my feet like a drum...»',
    echo2:         '«I am under a mountain. Only my head and one hand stick out. I am immortal: I cannot even die of boredom...»',
    echo3:         '«I have fifteen thousand men under me. In a box, under my armor, I have a letter from Tokugawa Ieyasu...»',
    footerTagline: 'Short journeys. Big discoveries.',
    footerCta:     'Download on App Store',
    flag:          '🇬🇧',
    code:          'EN',
  },
};

// ─── RENDER TRIPS ───
function renderTrips(lang) {
  const grid = document.getElementById('tripsGrid');
  if (!grid) return;
  const t = i18n[lang];

  grid.innerHTML = ASIA_TRIPS.map((trip) => `
    <div class="trip-card${trip.isNew ? '' : ' existing'}">
      <img src="assets/trips/${trip.img}.jpg" alt="${trip.title[lang]}" />
      <div class="trip-card-body">
        <span class="trip-year">${trip.isNew ? t.newBadge + ' · ' : ''}${trip.year[lang]}</span>
        <div class="trip-title">${trip.title[lang]}</div>
        <div class="trip-place">${trip.place[lang]}</div>
      </div>
    </div>
  `).join('');
}

// ─── APPLY LANGUAGE ───
function applyLang(lang) {
  const t = i18n[lang];
  if (!t) return;

  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.dataset.i18n;
    if (t[key] !== undefined) el.innerHTML = t[key];
  });

  renderTrips(lang);

  document.getElementById('langFlag').textContent = t.flag;
  document.getElementById('langCode').textContent = t.code;
  document.documentElement.lang = lang;

  document.querySelectorAll('.lang-option').forEach((opt) => {
    opt.classList.toggle('active', opt.dataset.lang === lang);
  });

  localStorage.setItem('mvdt-lang', lang);
}

// ─── LANGUAGE PICKER ───
(function initLangPicker() {
  const btn      = document.getElementById('langBtn');
  const dropdown = document.getElementById('langDropdown');
  if (!btn || !dropdown) return;

  btn.addEventListener('click', (e) => {
    e.stopPropagation();
    const open = dropdown.classList.toggle('open');
    btn.setAttribute('aria-expanded', open);
  });

  dropdown.addEventListener('click', (e) => {
    const opt = e.target.closest('.lang-option');
    if (!opt) return;
    applyLang(opt.dataset.lang);
    dropdown.classList.remove('open');
    btn.setAttribute('aria-expanded', 'false');
  });

  document.addEventListener('click', () => {
    dropdown.classList.remove('open');
    btn.setAttribute('aria-expanded', 'false');
  });

  // Il percorso Asia ha contenuti solo in IT/EN: se la lingua salvata dal
  // resto del sito e' una delle altre 3 (fr/es/nl), si ricade su EN.
  const saved    = localStorage.getItem('mvdt-lang');
  const browser  = navigator.language?.slice(0, 2).toLowerCase();
  const detected = i18n[saved] ? saved : (i18n[browser] ? browser : 'it');
  applyLang(detected);
})();

// ─── STARS ───
(function initStars() {
  const container = document.getElementById('stars');
  if (!container) return;

  for (let i = 0; i < 120; i++) {
    const star = document.createElement('span');
    const size = Math.random() * 2 + 0.5;
    star.style.cssText = `
      width: ${size}px;
      height: ${size}px;
      left: ${Math.random() * 100}%;
      top: ${Math.random() * 100}%;
      --d: ${3 + Math.random() * 5}s;
      --delay: ${Math.random() * 6}s;
      --op: ${0.2 + Math.random() * 0.6};
    `;
    container.appendChild(star);
  }
})();

// ─── SCROLL REVEAL ───
(function initReveal() {
  const reveals = document.querySelectorAll('.reveal');
  if (!reveals.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  reveals.forEach((el) => observer.observe(el));
})();
