// BioGuide App Logic

const STORAGE_KEY = 'bioguide_learned';

// ── State ──────────────────────────────────────────────────────────────────
let learnedIds = new Set(JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]'));
let currentSection = null;
let searchQuery = '';

// ── DOM refs ───────────────────────────────────────────────────────────────
const mainEl = document.getElementById('main');
const sidebarEl = document.getElementById('sidebar');
const searchInput = document.getElementById('search');
const progressPill = document.getElementById('progressPill');
const menuBtn = document.getElementById('menuBtn');

// ── Connections map state ─────────────────────────────────────────────────
let graphNodes = null;
let graphEdges = null;
let graphNodeById = null;
let graphSelected = null;
let graphSelectedNeighbors = new Set();
let graphHiddenTags = new Set();
let graphSearchMatch = null;
let graphRafId = null;
let graphResizeObserver = null;
let graphWindowHandlers = null;

// ── Init ───────────────────────────────────────────────────────────────────
function init() {
  buildSidebar();
  if (location.hash === '#today') {
    currentSection = 'today';
    renderToday();
    setSidebarActive('today');
  } else {
    renderHome();
  }
  updateProgressPill();

  searchInput.addEventListener('input', (e) => {
    const q = e.target.value.trim();
    if (q.length > 1) {
      searchQuery = q;
      renderSearch(q);
    } else if (q.length === 0) {
      searchQuery = '';
      if (currentSection) renderSection(currentSection);
      else renderHome();
    }
  });

  menuBtn.addEventListener('click', () => {
    sidebarEl.classList.toggle('open');
  });

  mainEl.addEventListener('click', (e) => {
    if (sidebarEl.classList.contains('open') && !sidebarEl.contains(e.target) && e.target !== menuBtn) {
      sidebarEl.classList.remove('open');
    }
  });
}

// ── Sidebar ────────────────────────────────────────────────────────────────
function buildSidebar() {
  sidebarEl.innerHTML = '';

  const homeLink = el('div', { class: 'sidebar-item active' }, '🏠 Home');
  homeLink.dataset.section = 'home';
  homeLink.addEventListener('click', () => {
    currentSection = null;
    searchInput.value = '';
    renderHome();
    setSidebarActive('home');
    sidebarEl.classList.remove('open');
  });

  const todayLink = el('div', { class: 'sidebar-item' }, '📅 Today');
  todayLink.dataset.section = 'today';
  todayLink.addEventListener('click', () => {
    currentSection = 'today';
    searchInput.value = '';
    location.hash = 'today';
    renderToday();
    setSidebarActive('today');
    sidebarEl.classList.remove('open');
  });

  const connLink = el('div', { class: 'sidebar-item' }, '🕸️ Connections');
  connLink.dataset.section = 'connections';
  connLink.addEventListener('click', () => {
    currentSection = 'connections';
    searchInput.value = '';
    renderConnections();
    setSidebarActive('connections');
    sidebarEl.classList.remove('open');
  });

  const homeSection = el('div', { class: 'sidebar-section open' });
  const homeItems = el('div', { class: 'sidebar-items' });
  homeItems.appendChild(homeLink);
  homeItems.appendChild(todayLink);
  homeItems.appendChild(connLink);
  homeSection.appendChild(homeItems);
  sidebarEl.appendChild(homeSection);

  SECTIONS.forEach(section => {
    const sec = el('div', { class: 'sidebar-section open' });

    const header = el('div', { class: 'sidebar-section-header' });
    header.innerHTML = `${section.icon} ${section.title} <span class="sidebar-chevron">▶</span>`;
    header.addEventListener('click', () => sec.classList.toggle('open'));

    const items = el('div', { class: 'sidebar-items' });

    section.concepts.forEach(concept => {
      const item = el('div', { class: 'sidebar-item' });
      item.dataset.conceptId = concept.id;
      item.dataset.section = section.id;
      item.innerHTML = `
        <span>${concept.title}</span>
        <span class="cert-badge tag tag-${concept.tags[0]}">${tagLabel(concept.tags[0])}</span>
      `;
      if (learnedIds.has(concept.id)) {
        item.style.opacity = '0.6';
        item.innerHTML = `<span>✓ ${concept.title}</span><span class="cert-badge tag tag-${concept.tags[0]}">${tagLabel(concept.tags[0])}</span>`;
      }
      item.addEventListener('click', () => {
        currentSection = section.id;
        searchInput.value = '';
        renderSection(section.id, concept.id);
        setSidebarActive(section.id);
        sidebarEl.classList.remove('open');
      });
      items.appendChild(item);
    });

    sec.appendChild(header);
    sec.appendChild(items);
    sidebarEl.appendChild(sec);
  });
}

function setSidebarActive(sectionId) {
  sidebarEl.querySelectorAll('.sidebar-item').forEach(item => {
    item.classList.toggle('active', item.dataset.section === sectionId);
  });
}

// ── Home ───────────────────────────────────────────────────────────────────
function renderHome() {
  stopGraphLoop();
  const total = ALL_CONCEPTS.length;
  const learned = learnedIds.size;

  mainEl.innerHTML = '';
  const hero = el('div', { class: 'hero' });

  hero.innerHTML = `
    <div class="hero-kicker">BIOLOGY <span>×</span> CHEMISTRY</div>
    <h1>Your path to <span>Biochemistry</span></h1>
    <p class="hero-sub">One concept at a time. Biology is just connected chemistry — and once you see where they collide, it clicks. Short, real, no fluff. Built for your brain.</p>
    <div class="hero-cta-row">
      <button class="hero-connections-btn" id="heroTodayBtn">📅 Today: ${getTodayConcept().title} →</button>
      <button class="hero-connections-btn" id="heroConnBtn">🕸️ See how it all connects →</button>
    </div>
    <div class="path-cards" id="pathCards"></div>
    <div style="margin-bottom:16px">
      <div class="detail-label">Your progress</div>
      <div class="section-progress-bar" style="margin-bottom:8px">
        <div class="section-progress-fill" style="width:${total ? Math.round(learned/total*100) : 0}%"></div>
      </div>
      <div style="font-size:13px;color:var(--text-muted)">${learned} of ${total} concepts marked as learned</div>
    </div>
    <div class="roadmap-card">
      <div class="detail-label">The Biochemistry Path</div>
      <div style="font-size:13px;color:var(--text-muted);line-height:1.8">
        <strong style="color:var(--text)">1. Chemistry Foundations</strong> → Atoms, bonds, molecules, pH<br>
        <strong style="color:var(--text)">2. General &amp; Physical Chemistry</strong> → Thermodynamics, equilibrium, redox<br>
        <strong style="color:var(--text)">3. Organic Chemistry</strong> → Hydrocarbons, isomers, functional groups<br>
        <strong style="color:var(--text)">4. Cell Biology</strong> → Cells, membranes, organelles, energy<br>
        <strong style="color:var(--text)">5. DNA &amp; RNA</strong> → Structure, replication, transcription<br>
        <strong style="color:var(--text)">6. Proteins</strong> → Amino acids, folding, enzymes<br>
        <strong style="color:var(--text)">7. Genetics</strong> → Genes, inheritance, mutations<br>
        <strong style="color:var(--text)">8. Molecular Biology</strong> → PCR, CRISPR, sequencing<br>
        <strong style="color:var(--accent2)">9. Where Chemistry Meets Biology</strong> → The crossover points, explained<br>
        <strong style="color:var(--text)">10. Quick Reference</strong> → Glossary, amino acids, key terms
      </div>
    </div>
  `;

  hero.querySelector('#heroTodayBtn').addEventListener('click', () => {
    currentSection = 'today';
    location.hash = 'today';
    renderToday();
    setSidebarActive('today');
  });

  hero.querySelector('#heroConnBtn').addEventListener('click', () => {
    currentSection = 'connections';
    renderConnections();
    setSidebarActive('connections');
  });

  const cards = hero.querySelector('#pathCards');
  SECTIONS.forEach(section => {
    const total = section.concepts.length;
    const done = section.concepts.filter(c => learnedIds.has(c.id)).length;
    const pct = total ? Math.round(done / total * 100) : 0;

    const card = el('div', { class: 'path-card' });
    card.innerHTML = `
      <span class="path-card-icon">${section.icon}</span>
      <h3>${section.title}</h3>
      <p>${section.subtitle}</p>
      <div class="path-card-progress">
        <div class="path-card-bar" style="width:${pct}%"></div>
      </div>
      <div class="path-card-count">${done}/${total} concepts · ${pct}%</div>
    `;
    card.addEventListener('click', () => {
      currentSection = section.id;
      renderSection(section.id);
      setSidebarActive(section.id);
    });
    cards.appendChild(card);
  });

  mainEl.appendChild(hero);
}

// ── Section View ───────────────────────────────────────────────────────────
function renderSection(sectionId, scrollToId = null) {
  stopGraphLoop();
  const section = SECTIONS.find(s => s.id === sectionId);
  if (!section) return;

  const total = section.concepts.length;
  const done = section.concepts.filter(c => learnedIds.has(c.id)).length;
  const pct = total ? Math.round(done / total * 100) : 0;

  mainEl.innerHTML = '';
  const view = el('div', { class: 'section-view' });

  view.innerHTML = `
    <div class="section-view-header">
      <span class="section-view-icon">${section.icon}</span>
      <h2>${section.title}</h2>
    </div>
    <p class="section-view-meta">${section.subtitle}</p>
    <div class="section-progress-bar">
      <div class="section-progress-fill" id="secProgressFill" style="width:${pct}%"></div>
    </div>
    <div class="section-progress-label" id="secProgressLabel">${done}/${total} concepts learned (${pct}%)</div>
    <div id="conceptList"></div>
  `;

  mainEl.appendChild(view);

  const list = view.querySelector('#conceptList');
  section.concepts.forEach((concept, i) => {
    const card = buildConceptCard(concept, i);
    list.appendChild(card);
  });

  if (scrollToId) {
    requestAnimationFrame(() => {
      const target = document.getElementById('card-' + scrollToId);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        target.classList.add('expanded');
      }
    });
  }
}

// ── Search ─────────────────────────────────────────────────────────────────
function renderSearch(query) {
  stopGraphLoop();
  const q = query.toLowerCase();
  const results = ALL_CONCEPTS.filter(c =>
    c.title.toLowerCase().includes(q) ||
    c.blurb.toLowerCase().includes(q) ||
    c.chain.some(step => step.toLowerCase().includes(q)) ||
    (c.facts || []).some(f => f.toLowerCase().includes(q)) ||
    c.detail.toLowerCase().includes(q)
  );

  mainEl.innerHTML = '';
  const view = el('div', { class: 'search-view' });
  view.innerHTML = `<h2>Search: "${query}" — ${results.length} result${results.length !== 1 ? 's' : ''}</h2>`;

  if (results.length === 0) {
    view.innerHTML += `<div class="search-empty">No concepts found for "${query}". Try a shorter or different term.</div>`;
  } else {
    const list = el('div');
    results.forEach((concept, i) => {
      list.appendChild(buildConceptCard(concept, i));
    });
    view.appendChild(list);
  }

  mainEl.appendChild(view);
}

// ── Today (deterministic daily concept) ───────────────────────────────────
// SHARED BLOCK — this exact logic also lives in lib/today.js (server side,
// pinned to a fixed timezone for the push-notification sender). Keep the two
// byte-for-byte identical; only how year/month/day get resolved should differ.
const TODAY_EPOCH_UTC = Date.UTC(2026, 7, 10); // 2026-08-10 = day 0 = ALL_CONCEPTS[0]

function conceptIndexForDate(year, month, day, n) {
  const dateUTC = Date.UTC(year, month, day);
  const daysSinceEpoch = Math.round((dateUTC - TODAY_EPOCH_UTC) / 86400000);
  return ((daysSinceEpoch % n) + n) % n;
}
// ── end shared block ──

function getTodayConcept() {
  const now = new Date();
  const idx = conceptIndexForDate(now.getFullYear(), now.getMonth(), now.getDate(), ALL_CONCEPTS.length);
  return ALL_CONCEPTS[idx];
}

function seededRandom(seed) {
  let s = seed % 2147483647;
  if (s <= 0) s += 2147483646;
  return function () {
    s = (s * 16807) % 2147483647;
    return (s - 1) / 2147483646;
  };
}

function todaySeed() {
  const now = new Date();
  return now.getFullYear() * 10000 + (now.getMonth() + 1) * 100 + now.getDate();
}

// Related concept: (1) an explicit "Concept Title" card cross-reference in the
// content, if that convention is ever used; (2) a plain-text mention of another
// concept's title, multi-word only (single-word titles like "Work" or "Energy"
// are too common and produce false positives); (3) a same-section neighbor.
function findRelatedConcept(concept) {
  const cardRefRe = /"([^"]+)"\s+card/i;
  const cardRefMatch = (concept.detail + ' ' + concept.blurb).match(cardRefRe);
  if (cardRefMatch) {
    const named = ALL_CONCEPTS.find(c => c.title.toLowerCase() === cardRefMatch[1].toLowerCase());
    if (named) return named;
  }

  const text = (concept.blurb + ' ' + concept.detail).toLowerCase();
  const candidates = ALL_CONCEPTS.filter(c => c.id !== concept.id);
  for (const c of candidates) {
    const phrase = c.title.split(/[—:]/)[0].trim();
    if (phrase.split(/\s+/).filter(Boolean).length < 2) continue;
    const re = new RegExp('\\b' + phrase.replace(/[.*+?^${}()|[\]\\]/g, '\\$&').toLowerCase() + '\\b');
    if (re.test(text)) return c;
  }

  const section = SECTIONS.find(s => s.id === concept.sectionId);
  if (section) {
    const i = section.concepts.findIndex(c => c.id === concept.id);
    const neighbor = section.concepts[i + 1] || section.concepts[i - 1];
    if (neighbor) return { ...neighbor, sectionId: section.id, sectionTitle: section.title };
  }
  return null;
}

function buildDailyQuiz(concept) {
  const rand = seededRandom(todaySeed());

  const realFact = concept.facts[Math.floor(rand() * concept.facts.length)];

  const others = ALL_CONCEPTS.filter(c => c.id !== concept.id && c.facts && c.facts.length);
  for (let i = others.length - 1; i > 0; i--) {
    const j = Math.floor(rand() * (i + 1));
    [others[i], others[j]] = [others[j], others[i]];
  }
  const decoys = others.slice(0, 2).map(c => c.facts[Math.floor(rand() * c.facts.length)]);

  const options = [
    { text: realFact, correct: true },
    { text: decoys[0], correct: false },
    { text: decoys[1], correct: false }
  ];
  for (let i = options.length - 1; i > 0; i--) {
    const j = Math.floor(rand() * (i + 1));
    [options[i], options[j]] = [options[j], options[i]];
  }

  return { question: `Which of these is actually true about "${concept.title}"?`, options };
}

function renderToday() {
  stopGraphLoop();
  searchInput.value = '';

  const concept = getTodayConcept();
  const dateLabel = new Date().toLocaleDateString(undefined, { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
  const ytUrl = 'https://www.youtube.com/results?search_query=' + encodeURIComponent(concept.title + ' biochemistry');

  mainEl.innerHTML = '';
  const view = el('div', { class: 'section-view today-view' });
  view.innerHTML = `
    <div class="section-view-header">
      <span class="section-view-icon">📅</span>
      <h2>Today's Concept</h2>
    </div>
    <p class="section-view-meta">One new concept a day, walked through the curriculum in order. ${dateLabel}.</p>
    <div id="todayCard"></div>
  `;
  mainEl.appendChild(view);

  const card = buildConceptCard(concept, 0);
  card.classList.add('expanded');
  view.querySelector('#todayCard').appendChild(card);

  const related = findRelatedConcept(concept);
  const learnMore = el('div', { class: 'today-panel' });
  learnMore.innerHTML = `
    <div class="detail-label">Learn more</div>
    <div class="today-links">
      <a class="today-link" href="${ytUrl}" target="_blank" rel="noopener">▶ Watch on YouTube</a>
      ${related ? `<span class="today-link today-link-related" data-id="${related.id}" data-section="${related.sectionId}">🔗 Related: ${related.title}</span>` : ''}
    </div>
  `;
  view.appendChild(learnMore);
  const relatedLink = learnMore.querySelector('.today-link-related');
  if (relatedLink) {
    relatedLink.addEventListener('click', () => {
      currentSection = relatedLink.dataset.section;
      renderSection(relatedLink.dataset.section, relatedLink.dataset.id);
      setSidebarActive(relatedLink.dataset.section);
    });
  }

  if (concept.facts && concept.facts.length) {
    const quiz = buildDailyQuiz(concept);
    const quizPanel = el('div', { class: 'today-panel' });
    quizPanel.innerHTML = `
      <div class="detail-label">Today's quiz</div>
      <div class="quiz-question">${quiz.question}</div>
      <div class="quiz-options" id="quizOptions"></div>
      <div class="quiz-reveal" id="quizReveal" style="display:none"></div>
    `;
    view.appendChild(quizPanel);

    const optsEl = quizPanel.querySelector('#quizOptions');
    const revealEl = quizPanel.querySelector('#quizReveal');
    quiz.options.forEach(opt => {
      const btn = el('button', { class: 'quiz-option' }, opt.text);
      btn.addEventListener('click', () => {
        [...optsEl.children].forEach((b, i) => {
          b.disabled = true;
          if (quiz.options[i].correct) b.classList.add('correct');
        });
        if (!opt.correct) btn.classList.add('incorrect');

        revealEl.style.display = 'block';
        revealEl.innerHTML = `
          <div class="detail-label">${opt.correct ? '✓ Correct' : '✗ Not quite'}</div>
          <div class="concept-blurb">${concept.blurb}</div>
          <a class="today-link" href="${ytUrl}" target="_blank" rel="noopener">▶ Watch on YouTube</a>
        `;
      });
      optsEl.appendChild(btn);
    });
  }
}

// ── Concept Card ───────────────────────────────────────────────────────────
function buildConceptCard(concept, index) {
  const isLearned = learnedIds.has(concept.id);
  const card = el('div', { class: `concept-card${isLearned ? ' learned' : ''}`, id: `card-${concept.id}` });
  card.style.animationDelay = `${Math.min(index * 0.04, 0.3)}s`;

  const tagsHtml = concept.tags.map(t => `<span class="tag tag-${t}">${tagLabel(t)}</span>`).join('');

  const chainHtml = concept.chain.map((step, i) =>
    `<span class="chain-node" title="${step}">${step}</span>${i < concept.chain.length - 1 ? '<span class="chain-arrow">→</span>' : ''}`
  ).join('');

  const factsHtml = concept.facts && concept.facts.length
    ? concept.facts.map(f => `<span class="fact-pill">${f}</span>`).join('')
    : '';

  const detailHtml = concept.detail
    .split('\n')
    .map(line => {
      if (line.startsWith('•')) return `<div style="margin:3px 0 3px 12px;font-size:14px;color:var(--text)">${line}</div>`;
      if (line.trim() === '') return '<div style="height:8px"></div>';
      return `<div style="font-size:14px;margin:2px 0">${line}</div>`;
    })
    .join('');

  card.innerHTML = `
    <div class="concept-card-top">
      <div class="concept-check" title="Mark as learned">✓</div>
      <div class="concept-card-header">
        <div class="concept-title-row">
          <span class="concept-title">${concept.title}</span>
          ${tagsHtml}
        </div>
        <div class="chain">${chainHtml}</div>
        <div class="concept-blurb">${concept.blurb}</div>
      </div>
      <span class="concept-card-expand-icon">▼</span>
    </div>
    <div class="concept-card-body">
      <div class="detail-section">
        <div class="detail-label">How it works</div>
        <div class="detail-text">${detailHtml}</div>
      </div>
      ${concept.memory ? `
      <div class="detail-section">
        <div class="detail-label">Remember it as</div>
        <div class="memory-tip"><span class="memory-tip-icon">💡</span>${concept.memory.replace(/\n/g, '<br>')}</div>
      </div>` : ''}
      ${concept.examTip ? `
      <div class="detail-section">
        <div class="detail-label">Key insight</div>
        <div class="exam-tip">🧬 ${concept.examTip}</div>
      </div>` : ''}
      ${factsHtml ? `
      <div class="detail-section">
        <div class="detail-label">Quick facts</div>
        <div class="key-facts">${factsHtml}</div>
      </div>` : ''}
      <button class="learn-btn" data-id="${concept.id}">
        ${isLearned ? '✓ Marked as learned' : '○ Mark as learned'}
      </button>
    </div>
  `;

  card.querySelector('.concept-card-top').addEventListener('click', (e) => {
    if (e.target.classList.contains('concept-check')) return;
    card.classList.toggle('expanded');
  });

  card.querySelector('.concept-check').addEventListener('click', (e) => {
    e.stopPropagation();
    toggleLearned(concept.id, card);
  });

  card.querySelector('.learn-btn').addEventListener('click', () => {
    toggleLearned(concept.id, card);
  });

  return card;
}

// ── Learned toggle ─────────────────────────────────────────────────────────
function toggleLearned(conceptId, cardEl) {
  if (learnedIds.has(conceptId)) {
    learnedIds.delete(conceptId);
    cardEl.classList.remove('learned');
    const btn = cardEl.querySelector('.learn-btn');
    if (btn) btn.textContent = '○ Mark as learned';
  } else {
    learnedIds.add(conceptId);
    cardEl.classList.add('learned');
    const btn = cardEl.querySelector('.learn-btn');
    if (btn) btn.textContent = '✓ Marked as learned';
  }
  saveLearned();
  updateProgressPill();
  updateSectionProgress();
  rebuildSidebarItems();
}

function saveLearned() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify([...learnedIds]));
}

function updateProgressPill() {
  const total = ALL_CONCEPTS.length;
  const done = learnedIds.size;
  progressPill.innerHTML = `<strong>${done}</strong>/${total} learned`;
}

function updateSectionProgress() {
  const fillEl = document.getElementById('secProgressFill');
  const labelEl = document.getElementById('secProgressLabel');
  if (!fillEl || !currentSection) return;
  const section = SECTIONS.find(s => s.id === currentSection);
  if (!section) return;
  const total = section.concepts.length;
  const done = section.concepts.filter(c => learnedIds.has(c.id)).length;
  const pct = total ? Math.round(done / total * 100) : 0;
  fillEl.style.width = pct + '%';
  if (labelEl) labelEl.textContent = `${done}/${total} concepts learned (${pct}%)`;
}

function rebuildSidebarItems() {
  sidebarEl.querySelectorAll('.sidebar-item[data-concept-id]').forEach(item => {
    const id = item.dataset.conceptId;
    const concept = ALL_CONCEPTS.find(c => c.id === id);
    if (!concept) return;
    if (learnedIds.has(id)) {
      item.style.opacity = '0.6';
      item.innerHTML = `<span>✓ ${concept.title}</span><span class="cert-badge tag tag-${concept.tags[0]}">${tagLabel(concept.tags[0])}</span>`;
    } else {
      item.style.opacity = '';
      item.innerHTML = `<span>${concept.title}</span><span class="cert-badge tag tag-${concept.tags[0]}">${tagLabel(concept.tags[0])}</span>`;
    }
  });
}

// ── Helpers ────────────────────────────────────────────────────────────────
function el(tag, attrs = {}, text = '') {
  const e = document.createElement(tag);
  Object.entries(attrs).forEach(([k, v]) => {
    if (k === 'class') e.className = v;
    else e.setAttribute(k, v);
  });
  if (text) e.textContent = text;
  return e;
}

function tagLabel(tag) {
  return {
    chem: 'Chem',
    org:  'Organic',
    bridge: 'Bio × Chem',
    cell: 'Cell Bio',
    dna:  'DNA/RNA',
    prot: 'Protein',
    gene: 'Genetics',
    mol:  'Mol Bio',
    ref:  'Ref'
  }[tag] || tag;
}

// ── Connections Map ────────────────────────────────────────────────────────
// Cross-references are detected automatically by scanning each concept's own
// text for other concepts' titles — a title only counts as a match if it's
// multi-word, or a short all-caps/long acronym (PCR, DNA, CRISPR-Cas9). Single
// common words are excluded so ordinary language doesn't produce false links.
function escapeRegExp(s) {
  return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function conceptMatchPhrase(title) {
  return title.split(/[—:]/)[0].trim();
}

function isSafeMatchPhrase(phrase) {
  const words = phrase.split(/\s+/).filter(Boolean);
  if (words.length >= 2) return true;
  const w = words[0] || '';
  return (w.length >= 3 && w === w.toUpperCase()) || w.length >= 6;
}

function tagColor(tag) {
  return {
    chem: '#ffa657', org: '#2dd4bf', bridge: '#e6ff3c', cell: '#7ee787',
    dna: '#79c0ff', prot: '#d2a8ff', gene: '#ffa198', mol: '#67e8f9', ref: '#c9d1d9'
  }[tag] || '#eafbea';
}

function buildGraphData() {
  if (graphNodes) return;

  const stripHtml = s => (s || '').replace(/<[^>]+>/g, ' ');
  const textOf = c => (stripHtml(c.blurb) + ' ' + stripHtml(c.detail)).toLowerCase();

  const nodes = ALL_CONCEPTS.map(c => ({
    id: c.id,
    title: c.title,
    sectionId: c.sectionId,
    sectionTitle: c.sectionTitle,
    tag: c.tags[0],
    blurb: c.blurb,
    text: textOf(c),
    x: (Math.random() - 0.5) * 900,
    y: (Math.random() - 0.5) * 900,
    vx: 0, vy: 0,
    pinned: false,
    degree: 0
  }));
  const byId = new Map(nodes.map(n => [n.id, n]));

  const matchTargets = nodes
    .map(n => ({ id: n.id, phrase: conceptMatchPhrase(n.title) }))
    .filter(m => isSafeMatchPhrase(m.phrase))
    .map(m => ({ id: m.id, re: new RegExp('\\b' + escapeRegExp(m.phrase.toLowerCase()) + '\\b') }));

  const edgeMap = new Map();
  nodes.forEach(a => {
    matchTargets.forEach(m => {
      if (m.id === a.id) return;
      if (m.re.test(a.text)) {
        const key = [a.id, m.id].sort().join('|');
        edgeMap.set(key, (edgeMap.get(key) || 0) + 1);
      }
    });
  });

  const edges = [...edgeMap.entries()].map(([key, weight]) => {
    const [a, b] = key.split('|');
    byId.get(a).degree++;
    byId.get(b).degree++;
    return { a, b, weight, cross: byId.get(a).tag !== byId.get(b).tag };
  });

  nodes.forEach(n => { delete n.text; });

  graphNodes = nodes;
  graphEdges = edges;
  graphNodeById = byId;
}

function stopGraphLoop() {
  if (graphRafId) { cancelAnimationFrame(graphRafId); graphRafId = null; }
  if (graphResizeObserver) { graphResizeObserver.disconnect(); graphResizeObserver = null; }
  if (graphWindowHandlers) {
    window.removeEventListener('pointermove', graphWindowHandlers.move);
    window.removeEventListener('pointerup', graphWindowHandlers.up);
    graphWindowHandlers = null;
  }
}

function renderConnections() {
  buildGraphData();
  stopGraphLoop();
  searchInput.value = '';

  mainEl.innerHTML = '';
  const view = el('div', { class: 'connections-view' });

  const crossCount = graphEdges.filter(e => e.cross).length;

  view.innerHTML = `
    <div class="section-view-header">
      <span class="section-view-icon">🕸️</span>
      <h2>How It All Connects</h2>
    </div>
    <p class="section-view-meta">
      ${graphNodes.length} concepts, ${graphEdges.length} connections found automatically by scanning each
      concept's own text for mentions of other concepts — ${crossCount} of them cross between different
      fields (the brighter lines). Drag nodes around, click one to see what it links to, or search below.
    </p>
    <div class="graph-toolbar">
      <input type="search" id="graphSearch" class="graph-search" placeholder="Find a concept in the map...">
      <div class="graph-legend" id="graphLegend"></div>
    </div>
    <div class="graph-wrap">
      <canvas id="graphCanvas"></canvas>
      <div class="graph-info" id="graphInfo">
        <div class="graph-info-empty">Click any node to see how it connects to the rest of the map. Cross-discipline links (a different color meeting a different color) are outlined in green in the list.</div>
      </div>
    </div>
  `;
  mainEl.appendChild(view);

  graphSelected = null;
  graphSelectedNeighbors = new Set();
  graphHiddenTags = new Set();
  graphSearchMatch = null;

  const legend = view.querySelector('#graphLegend');
  const tagsPresent = [...new Set(graphNodes.map(n => n.tag))];
  tagsPresent.forEach(t => {
    const item = el('span', { class: 'graph-legend-item tag tag-' + t }, tagLabel(t));
    item.dataset.tag = t;
    item.addEventListener('click', () => {
      item.classList.toggle('off');
      graphHiddenTags = new Set(
        [...legend.querySelectorAll('.graph-legend-item.off')].map(i => i.dataset.tag)
      );
    });
    legend.appendChild(item);
  });

  view.querySelector('#graphSearch').addEventListener('input', (e) => {
    const q = e.target.value.trim().toLowerCase();
    graphSearchMatch = q.length > 1
      ? new Set(graphNodes.filter(n => n.title.toLowerCase().includes(q)).map(n => n.id))
      : null;
  });

  initGraphCanvas(view);
}

function nodeRadius(n) {
  return 5 + Math.min(n.degree, 10) * 1.1;
}

function showGraphInfo(n, infoEl) {
  const neighborIds = graphEdges
    .filter(e => e.a === n.id || e.b === n.id)
    .map(e => (e.a === n.id ? e.b : e.a));
  graphSelectedNeighbors = new Set(neighborIds);

  const neighbors = neighborIds
    .map(id => graphNodeById.get(id))
    .sort((x, y) => (x.tag === n.tag ? 1 : 0) - (y.tag === n.tag ? 1 : 0));

  infoEl.innerHTML = `
    <div class="graph-info-title">
      <span class="tag tag-${n.tag}">${tagLabel(n.tag)}</span>
      ${n.title}
    </div>
    <div class="graph-info-blurb">${n.blurb}</div>
    <button class="graph-info-open" data-id="${n.id}">Open concept card →</button>
    <div class="graph-info-label">${neighbors.length ? `Connects to ${neighbors.length}` : 'No detected connections yet'}</div>
    <div class="graph-info-links">
      ${neighbors.map(nb => `<div class="graph-info-link${nb.tag !== n.tag ? ' cross' : ''}" data-id="${nb.id}">
        <span class="tag tag-${nb.tag}">${tagLabel(nb.tag)}</span> ${nb.title}
      </div>`).join('')}
    </div>
  `;

  infoEl.querySelector('.graph-info-open').addEventListener('click', () => openGraphNode(n));
  infoEl.querySelectorAll('.graph-info-link').forEach(linkEl => {
    linkEl.addEventListener('click', () => {
      const target = graphNodeById.get(linkEl.dataset.id);
      graphSelected = target.id;
      showGraphInfo(target, infoEl);
    });
  });
}

function openGraphNode(n) {
  stopGraphLoop();
  currentSection = n.sectionId;
  renderSection(n.sectionId, n.id);
  setSidebarActive(n.sectionId);
}

function initGraphCanvas(view) {
  const canvas = view.querySelector('#graphCanvas');
  const infoEl = view.querySelector('#graphInfo');
  const ctx = canvas.getContext('2d');

  let width, height, panX, panY;
  function resize() {
    const rect = canvas.parentElement.getBoundingClientRect();
    width = canvas.width = rect.width;
    height = canvas.height = rect.height;
    if (panX === undefined) { panX = width / 2; panY = height / 2; }
  }
  resize();

  let dragNode = null;
  let hoverNode = null;
  let panDrag = null;

  const toScreen = n => ({ x: n.x + panX, y: n.y + panY });

  function nodeAt(mx, my) {
    let found = null;
    for (const n of graphNodes) {
      if (graphHiddenTags.has(n.tag)) continue;
      const p = toScreen(n);
      const r = nodeRadius(n) + 4;
      const dx = mx - p.x, dy = my - p.y;
      if (dx * dx + dy * dy <= r * r) found = n;
    }
    return found;
  }

  canvas.addEventListener('pointerdown', (e) => {
    const rect = canvas.getBoundingClientRect();
    const mx = e.clientX - rect.left, my = e.clientY - rect.top;
    const n = nodeAt(mx, my);
    if (n) { dragNode = n; n.pinned = true; }
    else { panDrag = { x: e.clientX, y: e.clientY, panX, panY }; }
  });

  const onMove = (e) => {
    const rect = canvas.getBoundingClientRect();
    const mx = e.clientX - rect.left, my = e.clientY - rect.top;
    if (dragNode) {
      dragNode.x = mx - panX;
      dragNode.y = my - panY;
      dragNode.vx = 0; dragNode.vy = 0;
    } else if (panDrag) {
      panX = panDrag.panX + (e.clientX - panDrag.x);
      panY = panDrag.panY + (e.clientY - panDrag.y);
    } else if (mx >= 0 && mx <= width && my >= 0 && my <= height) {
      hoverNode = nodeAt(mx, my);
      canvas.style.cursor = hoverNode ? 'pointer' : 'grab';
    }
  };
  const onUp = () => { dragNode = null; panDrag = null; };

  window.addEventListener('pointermove', onMove);
  window.addEventListener('pointerup', onUp);
  graphWindowHandlers = { move: onMove, up: onUp };

  canvas.addEventListener('click', (e) => {
    const rect = canvas.getBoundingClientRect();
    const mx = e.clientX - rect.left, my = e.clientY - rect.top;
    const n = nodeAt(mx, my);
    if (n) {
      graphSelected = n.id;
      showGraphInfo(n, infoEl);
    }
  });

  canvas.addEventListener('dblclick', (e) => {
    const rect = canvas.getBoundingClientRect();
    const mx = e.clientX - rect.left, my = e.clientY - rect.top;
    const n = nodeAt(mx, my);
    if (n) openGraphNode(n);
  });

  graphResizeObserver = new ResizeObserver(resize);
  graphResizeObserver.observe(canvas.parentElement);

  const fontStack = getComputedStyle(document.documentElement).getPropertyValue('--font').trim();
  const REPEL = 2600, SPRING = 0.012, SPRING_LEN = 70, CENTER = 0.0025, DAMPING = 0.86;

  function step() {
    for (let i = 0; i < graphNodes.length; i++) {
      const a = graphNodes[i];
      if (a.pinned) continue;
      let fx = -a.x * CENTER, fy = -a.y * CENTER;
      for (let j = 0; j < graphNodes.length; j++) {
        if (i === j) continue;
        const b = graphNodes[j];
        const dx = a.x - b.x, dy = a.y - b.y;
        const d2 = dx * dx + dy * dy || 0.01;
        const d = Math.sqrt(d2);
        const f = REPEL / d2;
        fx += (dx / d) * f;
        fy += (dy / d) * f;
      }
      a.vx = (a.vx + fx) * DAMPING;
      a.vy = (a.vy + fy) * DAMPING;
    }

    graphEdges.forEach(e => {
      const a = graphNodeById.get(e.a), b = graphNodeById.get(e.b);
      const dx = b.x - a.x, dy = b.y - a.y;
      const d = Math.sqrt(dx * dx + dy * dy) || 0.01;
      const diff = (d - SPRING_LEN) * SPRING;
      const fx = (dx / d) * diff, fy = (dy / d) * diff;
      if (!a.pinned) { a.vx += fx; a.vy += fy; }
      if (!b.pinned) { b.vx -= fx; b.vy -= fy; }
    });

    graphNodes.forEach(n => {
      if (!n.pinned) { n.x += n.vx; n.y += n.vy; }
    });

    draw();
    graphRafId = requestAnimationFrame(step);
  }

  function draw() {
    ctx.clearRect(0, 0, width, height);

    graphEdges.forEach(e => {
      const a = graphNodeById.get(e.a), b = graphNodeById.get(e.b);
      if (graphHiddenTags.has(a.tag) || graphHiddenTags.has(b.tag)) return;
      const pa = toScreen(a), pb = toScreen(b);
      const isSelectedEdge = graphSelected && (e.a === graphSelected || e.b === graphSelected);
      ctx.beginPath();
      ctx.moveTo(pa.x, pa.y);
      ctx.lineTo(pb.x, pb.y);
      if (graphSelected) {
        ctx.strokeStyle = isSelectedEdge ? (e.cross ? '#39ff6a' : 'rgba(234,251,234,.4)') : 'rgba(234,251,234,.03)';
        ctx.lineWidth = isSelectedEdge ? 1.6 : 1;
      } else {
        ctx.strokeStyle = e.cross ? 'rgba(57,255,106,.4)' : 'rgba(234,251,234,.08)';
        ctx.lineWidth = e.cross ? 1.3 : 1;
      }
      ctx.stroke();
    });

    graphNodes.forEach(n => {
      if (graphHiddenTags.has(n.tag)) return;
      const p = toScreen(n);
      const r = nodeRadius(n);
      const dimmed = graphSelected && graphSelected !== n.id && !graphSelectedNeighbors.has(n.id);
      const isMatch = !graphSearchMatch || graphSearchMatch.has(n.id);

      ctx.globalAlpha = dimmed || !isMatch ? 0.18 : 1;
      ctx.beginPath();
      ctx.arc(p.x, p.y, r, 0, Math.PI * 2);
      ctx.fillStyle = tagColor(n.tag);
      ctx.fill();
      if (n.id === graphSelected || n.id === (hoverNode && hoverNode.id)) {
        ctx.lineWidth = 2;
        ctx.strokeStyle = '#eafbea';
        ctx.stroke();
      }
      ctx.globalAlpha = 1;

      const showLabel = n.id === graphSelected || (hoverNode && hoverNode.id === n.id) ||
        n.degree >= 6 || (graphSearchMatch && graphSearchMatch.has(n.id));
      if (showLabel) {
        ctx.font = '11px ' + fontStack;
        ctx.fillStyle = dimmed ? 'rgba(234,251,234,.25)' : '#eafbea';
        ctx.textAlign = 'center';
        ctx.fillText(n.title, p.x, p.y - r - 6);
      }
    });
  }

  graphRafId = requestAnimationFrame(step);
}

// ── Boot ───────────────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', init);
