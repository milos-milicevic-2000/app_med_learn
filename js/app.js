(function () {
  'use strict';

  // ---------- Indeks sadržaja ----------

  const CATS = window.MED.categories;
  const TOPICS = new Map();   // id -> { t, cat }
  const CASES = new Map();    // id -> { c, cat }
  const QUESTIONS = [];       // { id, q, t, cat }

  CATS.forEach((cat) => {
    cat.topics.forEach((t) => {
      TOPICS.set(t.id, { t, cat });
      (t.questions || []).forEach((q, i) => QUESTIONS.push({ id: t.id + ':' + i, q, t, cat }));
    });
    (cat.cases || []).forEach((c) => CASES.set(c.id, { c, cat }));
  });

  // ---------- Stanje (čuva se na uređaju) ----------

  const KEY = 'vizita.v1';
  const EMPTY = { learned: {}, q: {}, cases: {}, days: [], last: null, name: '', theme: 'auto' };
  let S = load();

  function load() {
    try {
      return Object.assign({}, EMPTY, JSON.parse(localStorage.getItem(KEY)) || {});
    } catch (e) {
      return Object.assign({}, EMPTY);
    }
  }

  function save() {
    try {
      localStorage.setItem(KEY, JSON.stringify(S));
    } catch (e) { /* privatni režim: napredak važi samo dok je kartica otvorena */ }
  }

  const dayKey = (d) => d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0');

  function touchDay() {
    const today = dayKey(new Date());
    if (!S.days.includes(today)) S.days.push(today);
  }

  function streak() {
    const days = new Set(S.days);
    const d = new Date();
    if (!days.has(dayKey(d))) d.setDate(d.getDate() - 1);
    let n = 0;
    while (days.has(dayKey(d))) {
      n++;
      d.setDate(d.getDate() - 1);
    }
    return n;
  }

  function record(qid, ok) {
    const r = S.q[qid] || { c: 0, w: 0 };
    if (ok) r.c++; else r.w++;
    r.last = ok ? 'c' : 'w';
    S.q[qid] = r;
    touchDay();
    save();
  }

  function applyTheme() {
    if (S.theme === 'auto') document.documentElement.removeAttribute('data-theme');
    else document.documentElement.setAttribute('data-theme', S.theme);
  }

  // ---------- Pomoćne funkcije ----------

  const app = document.getElementById('app');
  const esc = (s) => String(s == null ? '' : s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const fmt = (s) => esc(s).replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
  const norm = (s) => s.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/đ/g, 'dj');
  const pct = (a, b) => (b ? Math.round((a / b) * 100) : 0);
  const LETTERS = ['A', 'B', 'C', 'D'];

  function shuffle(arr) {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  // Pitanja koja još nisu viđena ili su poslednji put pogrešena dolaze češće.
  function pickQuestions(pool, n) {
    const weight = (x) => {
      const r = S.q[x.id];
      return !r ? 3 : r.last === 'w' ? 4 : 1;
    };
    return pool
      .map((x) => ({ x, k: Math.pow(Math.random(), 1 / weight(x)) }))
      .sort((a, b) => b.k - a.k)
      .slice(0, n)
      .map((o) => o.x);
  }

  const learnedIn = (cat) => cat.topics.filter((t) => S.learned[t.id]).length;
  const mistakes = () => QUESTIONS.filter((x) => S.q[x.id] && S.q[x.id].last === 'w');

  function totals() {
    let correct = 0, attempts = 0, seen = 0;
    QUESTIONS.forEach((x) => {
      const r = S.q[x.id];
      if (!r) return;
      seen++;
      correct += r.c;
      attempts += r.c + r.w;
    });
    return { learned: [...TOPICS.keys()].filter((id) => S.learned[id]).length, seen, correct, attempts };
  }

  function ring(value, label, cls) {
    const r = 42, len = 2 * Math.PI * r;
    return `<div class="ring ${cls || ''}">
      <svg viewBox="0 0 100 100"><circle class="track" cx="50" cy="50" r="${r}"/><circle class="value" cx="50" cy="50" r="${r}" stroke-dasharray="${len}" stroke-dashoffset="${len * (1 - value / 100)}"/></svg>
      <b>${esc(label)}</b>
    </div>`;
  }

  const backBtn = (href, label) => `<a class="back" href="${href}">‹ ${esc(label)}</a>`;

  // ---------- Početna ----------

  function viewHome() {
    const t = totals();
    const hour = new Date().getHours();
    const hello = hour < 11 ? 'Dobro jutro' : hour < 18 ? 'Dobar dan' : 'Dobro veče';
    const date = new Date().toLocaleDateString('sr-Latn-RS', { weekday: 'long', day: 'numeric', month: 'long' });
    const last = S.last && TOPICS.get(S.last);
    const next = nextTopic();
    const wrong = mistakes().length;
    const cases = [...CASES.values()];
    const openCase = cases.find((x) => !S.cases[x.c.id]) || cases[0];

    return `<div class="stack-lg">
      <header class="hero">
        <div>
          <p class="eyebrow">${esc(date)}</p>
          <h1>${hello}, ${esc(S.name || 'doktorka')}</h1>
        </div>
        <div class="hero-stats">
          ${ring(pct(t.learned, TOPICS.size), pct(t.learned, TOPICS.size) + '%')}
          <div class="hero-nums">
            <div><b>${t.learned}/${TOPICS.size}</b><span>naučenih tema</span></div>
            <div><b>${t.attempts ? pct(t.correct, t.attempts) + '%' : '—'}</b><span>tačnih odgovora</span></div>
            <div><b>${streak()}</b><span>dana u nizu</span></div>
          </div>
        </div>
      </header>

      ${installPrompt ? `<button class="card row" data-act="install"><span class="cat-icon" style="--c:var(--brand)">📲</span><span class="grow"><h3>Instaliraj aplikaciju</h3><p class="small muted">Dodaj Vizitu na početni ekran, radi i bez interneta.</p></span></button>` : ''}

      ${next ? `<section>
        <div class="section-head"><h2>${last && !S.learned[last.t.id] ? 'Nastavi gde si stala' : 'Sledeća lekcija'}</h2></div>
        <a class="card item" href="#/tema/${next.t.id}" style="--c:${next.cat.color}">
          <span class="cat-icon">${next.cat.icon}</span>
          <span class="grow"><h3>${esc(next.t.title)}</h3><p>${esc(next.cat.title)}</p></span>
          <span class="chev">›</span>
        </a>
      </section>` : ''}

      <section>
        <div class="section-head"><h2>Vežbaj</h2><a href="#/provera">Sve provere</a></div>
        <div class="tiles">
          <button class="card tile" data-act="quiz" data-kind="quick"><div class="emoji">⚡</div><h3>Brzi kviz</h3><p>10 mešanih pitanja</p></button>
          <button class="card tile" data-act="quiz" data-kind="urgent"><div class="emoji">🚑</div><h3>Hitna stanja</h3><p>10 pitanja iz hitnih stanja</p></button>
          ${openCase ? `<a class="card tile" href="#/slucaj/${openCase.c.id}"><div class="emoji">🩺</div><h3>Klinički slučaj</h3><p>Korak po korak</p></a>` : ''}
          <button class="card tile" data-act="quiz" data-kind="mistakes" ${wrong ? '' : 'disabled'}><div class="emoji">🔁</div><h3>Ponovi greške</h3><p>${wrong ? wrong + ' za ponavljanje' : 'Nema grešaka'}</p></button>
        </div>
      </section>

      <section>
        <div class="section-head"><h2>Oblasti</h2><a href="#/ucenje">Sve teme</a></div>
        ${catGrid()}
      </section>
    </div>`;
  }

  function nextTopic() {
    const last = S.last && TOPICS.get(S.last);
    if (last && !S.learned[last.t.id]) return last;
    for (const cat of CATS) {
      const t = cat.topics.find((x) => !S.learned[x.id]);
      if (t) return { t, cat };
    }
    return null;
  }

  function catGrid() {
    return `<div class="cat-grid">${CATS.map((cat) => {
      const done = learnedIn(cat);
      return `<a class="card cat-card" href="#/oblast/${cat.id}" style="--c:${cat.color}">
        <div class="row"><span class="cat-icon">${cat.icon}</span><h3 class="grow">${esc(cat.title)}</h3></div>
        <div>
          <div class="bar"><i style="width:${pct(done, cat.topics.length)}%"></i></div>
          <p class="small muted" style="margin-top:6px">${done} od ${cat.topics.length} tema</p>
        </div>
      </a>`;
    }).join('')}</div>`;
  }

  // ---------- Učenje ----------

  function topicItem(t, cat, showCat) {
    return `<a class="card item" href="#/tema/${t.id}" style="--c:${cat.color}">
      <span class="state ${S.learned[t.id] ? 'on' : ''}">✓</span>
      <span class="grow">
        <h3>${esc(t.title)}${t.urgent && !cat.topics.every((x) => x.urgent) ? ' <span class="chip urgent">hitno</span>' : ''}</h3>
        <p>${esc(showCat ? cat.title : t.summary)}</p>
      </span>
      <span class="chev">›</span>
    </a>`;
  }

  function viewLearn() {
    return `<div class="stack-lg">
      <header class="stack">
        <h1>Učenje</h1>
        <input class="search" id="search" type="search" placeholder="Pretraži teme, npr. anafilaksa, hipertenzija…" autocomplete="off">
      </header>
      <div id="learn-body">${catGrid()}</div>
    </div>`;
  }

  function searchResults(term) {
    const needle = norm(term.trim());
    if (!needle) return catGrid();
    const hits = [...TOPICS.values()].filter(({ t }) => norm(t.title + ' ' + t.summary).includes(needle));
    return hits.length
      ? `<div class="list">${hits.map(({ t, cat }) => topicItem(t, cat, true)).join('')}</div>`
      : `<p class="empty">Nema teme za „${esc(term)}”.</p>`;
  }

  function viewCategory(id) {
    const cat = CATS.find((c) => c.id === id);
    if (!cat) return notFound();
    const done = learnedIn(cat);
    const cases = cat.cases || [];
    return `<div class="stack-lg" style="--c:${cat.color}">
      <header>
        ${backBtn('#/ucenje', 'Učenje')}
        <div class="cat-head"><span class="cat-icon">${cat.icon}</span><h1>${esc(cat.title)}</h1></div>
        <div class="bar" style="margin-top:14px"><i style="width:${pct(done, cat.topics.length)}%"></i></div>
        <p class="small muted" style="margin-top:6px">${done} od ${cat.topics.length} tema naučeno</p>
      </header>
      <section>
        <div class="section-head"><h2>Teme</h2></div>
        <div class="list">${cat.topics.map((t) => topicItem(t, cat)).join('')}</div>
      </section>
      ${cases.length ? `<section>
        <div class="section-head"><h2>Klinički slučajevi</h2></div>
        <div class="list">${cases.map((c) => caseItem(c, cat)).join('')}</div>
      </section>` : ''}
      <button class="btn block" data-act="quiz" data-kind="cat" data-id="${cat.id}">Kviz iz ove oblasti</button>
    </div>`;
  }

  function caseItem(c, cat) {
    const r = S.cases[c.id];
    return `<a class="card item" href="#/slucaj/${c.id}" style="--c:${cat.color}">
      <span class="cat-icon">🩺</span>
      <span class="grow">
        <h3>${esc(c.title)}</h3>
        <p>${c.steps.length} koraka${r ? ` · poslednji put ${r.score}/${r.total}` : ''}</p>
      </span>
      ${r ? '<span class="chip done">rešen</span>' : '<span class="chev">›</span>'}
    </a>`;
  }

  const SECTION_ICON = { flags: '⚠️', refer: '🏥', pearls: '💡', steps: '', drugs: '💊', list: '', text: '' };

  function renderSection(s) {
    const icon = SECTION_ICON[s.type] ? SECTION_ICON[s.type] + ' ' : '';
    let body;
    if (s.type === 'text') body = `<p>${fmt(s.body)}</p>`;
    else if (s.type === 'steps') body = `<ol>${s.items.map((i) => `<li>${fmt(i)}</li>`).join('')}</ol>`;
    else if (s.type === 'drugs') {
      body = `<div class="drugs">${s.items.map((d) => `<div class="drug">
        <b>${fmt(d.name)}</b><div class="dose">${fmt(d.dose)}</div>${d.note ? `<div class="note">${fmt(d.note)}</div>` : ''}
      </div>`).join('')}</div>`;
    } else body = `<ul>${s.items.map((i) => `<li>${fmt(i)}</li>`).join('')}</ul>`;
    return `<section class="card sec ${s.type}"><h2>${icon}${esc(s.title)}</h2>${body}</section>`;
  }

  function renderSources(sources) {
    if (!sources || !sources.length) return '';
    const links = sources.map((s) => (typeof s === 'string'
      ? esc(s)
      : `<a href="${esc(s.url)}" target="_blank" rel="noopener noreferrer">${esc(s.name)}</a>`));
    return `<p class="sources"><strong>Izvori:</strong> ${links.join(' · ')}</p>`;
  }

  function viewTopic(id) {
    const hit = TOPICS.get(id);
    if (!hit) return notFound();
    const { t, cat } = hit;
    if (S.last !== id) {
      S.last = id;
      save();
    }
    const i = cat.topics.indexOf(t);
    const prev = cat.topics[i - 1], next = cat.topics[i + 1];
    const learned = !!S.learned[id];
    const nq = (t.questions || []).length;

    return `<article class="stack" style="--c:${cat.color}">
      <header class="lesson-head">
        <div>${backBtn('#/oblast/' + cat.id, cat.title)}</div>
        <div class="row" style="flex-wrap:wrap;gap:8px">
          <span class="chip">${cat.icon} ${esc(cat.title)}</span>
          ${t.urgent ? '<span class="chip urgent">hitno stanje</span>' : ''}
          ${learned ? '<span class="chip done">✓ naučeno</span>' : ''}
        </div>
        <h1>${esc(t.title)}</h1>
        <p class="lead">${fmt(t.summary)}</p>
      </header>

      ${t.sections.map(renderSection).join('')}

      ${renderSources(t.sources)}
      <p class="notice">Sadržaj je podsetnik za učenje. Pre primene u praksi proveri dozu u sažetku karakteristika leka i važećem protokolu ustanove.</p>

      <div class="sticky-actions btn-row">
        <button class="btn ${learned ? 'ghost' : 'soft'}" data-act="learned" data-id="${id}">${learned ? '✓ Naučeno' : 'Označi kao naučeno'}</button>
        ${nq ? `<button class="btn" data-act="quiz" data-kind="topic" data-id="${id}">Proveri znanje (${nq})</button>` : ''}
      </div>

      <nav class="pager">
        ${prev ? `<a class="card" href="#/tema/${prev.id}"><span>‹ Prethodna</span>${esc(prev.title)}</a>` : '<span></span>'}
        ${next ? `<a class="card" href="#/tema/${next.id}"><span>Sledeća ›</span>${esc(next.title)}</a>` : '<span></span>'}
      </nav>
    </article>`;
  }

  // ---------- Provera znanja ----------

  function viewPractice() {
    const wrong = mistakes().length;
    const cases = [...CASES.values()];
    return `<div class="stack-lg">
      <header class="stack">
        <h1>Provera znanja</h1>
        <p class="muted">${QUESTIONS.length} pitanja i ${cases.length} kliničkih slučajeva. Pitanja koja pogrešiš vraćaju se češće.</p>
      </header>

      <div class="tiles">
        <button class="card tile" data-act="quiz" data-kind="quick"><div class="emoji">⚡</div><h3>Brzi kviz</h3><p>10 pitanja, objašnjenje odmah</p></button>
        <button class="card tile" data-act="quiz" data-kind="urgent"><div class="emoji">🚑</div><h3>Hitna stanja</h3><p>10 pitanja iz hitnih stanja</p></button>
        <button class="card tile" data-act="quiz" data-kind="exam"><div class="emoji">📝</div><h3>Ispit</h3><p>30 pitanja, rezultat na kraju</p></button>
        <button class="card tile" data-act="quiz" data-kind="mistakes" ${wrong ? '' : 'disabled'}><div class="emoji">🔁</div><h3>Ponovi greške</h3><p>${wrong ? wrong + ' za ponavljanje' : 'Nema grešaka'}</p></button>
      </div>

      <section>
        <div class="section-head"><h2>Kviz po oblasti</h2></div>
        <div class="list">${CATS.map((cat) => {
          const qs = QUESTIONS.filter((x) => x.cat === cat);
          const seen = qs.filter((x) => S.q[x.id]).length;
          return `<button class="card item" data-act="quiz" data-kind="cat" data-id="${cat.id}" style="--c:${cat.color}">
            <span class="cat-icon">${cat.icon}</span>
            <span class="grow"><h3>${esc(cat.title)}</h3><p>${seen} od ${qs.length} pitanja viđeno</p></span>
            <span class="chev">›</span>
          </button>`;
        }).join('')}</div>
      </section>

      <section>
        <div class="section-head"><h2>Klinički slučajevi</h2></div>
        <div class="list">${cases.map(({ c, cat }) => caseItem(c, cat)).join('')}</div>
      </section>
    </div>`;
  }

  let quiz = null;

  function startQuiz(kind, id) {
    let pool = QUESTIONS, n = 10, title = 'Brzi kviz', exam = false, back = '#/provera';
    if (kind === 'urgent') {
      pool = QUESTIONS.filter((x) => x.t.urgent);
      title = 'Hitna stanja';
    } else if (kind === 'exam') {
      n = 30;
      title = 'Ispit';
      exam = true;
    } else if (kind === 'mistakes') {
      pool = mistakes();
      n = 15;
      title = 'Ponavljanje grešaka';
    } else if (kind === 'cat') {
      const cat = CATS.find((c) => c.id === id);
      pool = QUESTIONS.filter((x) => x.cat === cat);
      title = cat.title;
    } else if (kind === 'topic') {
      pool = QUESTIONS.filter((x) => x.t.id === id);
      n = pool.length;
      title = TOPICS.get(id).t.title;
      back = '#/tema/' + id;
    } else if (kind === 'retry') {
      pool = quiz.items.filter((it) => !isCorrect(it)).map((it) => it.ref);
      n = pool.length;
      title = quiz.title;
      back = quiz.back;
    }
    if (!pool.length) {
      location.hash = '#/provera';
      return;
    }
    const chosen = kind === 'topic' || kind === 'retry' ? shuffle(pool) : pickQuestions(pool, n);
    quiz = {
      title, exam, back,
      kind: kind === 'retry' ? quiz.kind : kind,
      id: kind === 'retry' ? quiz.id : id,
      i: 0,
      done: false,
      items: chosen.map((ref) => ({ ref, order: shuffle([0, 1, 2, 3]), pick: null }))
    };
    if (location.hash === '#/kviz') render();
    else location.hash = '#/kviz';
  }

  const isCorrect = (it) => it.pick !== null && it.order[it.pick] === it.ref.q.answer;

  function optionButtons(order, options, answer, pick, reveal, act) {
    return `<div class="options">${order.map((orig, k) => {
      let cls = '';
      if (reveal) cls = orig === answer ? 'correct' : k === pick ? 'wrong' : 'dim';
      else if (k === pick) cls = 'selected';
      return `<button class="opt ${cls}" data-act="${act}" data-k="${k}" ${reveal ? 'disabled' : ''}>
        <span class="key">${LETTERS[k]}</span><span>${fmt(options[orig])}</span>
      </button>`;
    }).join('')}</div>`;
  }

  function viewQuiz() {
    if (!quiz) {
      location.replace('#/provera');
      return '';
    }
    if (quiz.done) return viewQuizResult();
    const it = quiz.items[quiz.i];
    const { q, t, cat } = it.ref;
    const reveal = !quiz.exam && it.pick !== null;
    const lastOne = quiz.i === quiz.items.length - 1;
    const ok = isCorrect(it);

    return `<div class="stack" style="--c:${cat.color}">
      <div class="quiz-top">
        <a class="back" href="${quiz.back}">✕</a>
        <div class="bar"><i style="width:${pct(quiz.i + (it.pick !== null ? 1 : 0), quiz.items.length)}%"></i></div>
        <span class="count">${quiz.i + 1}/${quiz.items.length}</span>
      </div>
      <div><span class="chip">${cat.icon} ${esc(quiz.exam ? cat.title : t.title)}</span></div>
      <p class="question">${fmt(q.q)}</p>
      ${optionButtons(it.order, q.options, q.answer, it.pick, reveal, 'answer')}
      ${reveal ? `<div class="feedback ${ok ? '' : 'no'}" id="feedback">
        <h3>${ok ? 'Tačno' : 'Netačno'}</h3>
        <p>${fmt(q.explain)}</p>
        <a href="#/tema/${t.id}">Otvori lekciju: ${esc(t.title)} ›</a>
      </div>` : ''}
      ${reveal || quiz.exam ? `<button class="btn block" data-act="next" ${it.pick === null ? 'disabled' : ''}>${lastOne ? 'Završi' : 'Sledeće pitanje'}</button>` : ''}
    </div>`;
  }

  function verdict(p) {
    return p >= 90 ? 'Odlično, ovo znaš.' : p >= 70 ? 'Dobro ide. Prođi još jednom kroz greške.' : p >= 50 ? 'Solidna osnova, vrati se na lekcije ispod.' : 'Vrati se na lekcije pa probaj ponovo.';
  }

  function viewQuizResult() {
    const right = quiz.items.filter(isCorrect).length;
    const total = quiz.items.length;
    const p = pct(right, total);
    const wrong = quiz.items.filter((it) => !isCorrect(it));
    return `<div class="stack-lg">
      <div class="card result">
        <p class="eyebrow">${esc(quiz.title)}</p>
        ${ring(p, right + '/' + total, 'on-surface big')}
        <h1>${p}% tačno</h1>
        <p class="muted">${verdict(p)}</p>
        <div class="btn-row">
          ${wrong.length ? '<button class="btn" data-act="quiz" data-kind="retry">Ponovi pogrešna</button>' : ''}
          <button class="btn ${wrong.length ? 'ghost' : ''}" data-act="quiz" data-kind="${esc(quiz.kind)}" data-id="${esc(quiz.id || '')}">Novi kviz</button>
          <a class="btn ghost" href="${quiz.back}">Zatvori</a>
        </div>
      </div>
      ${wrong.length ? `<section>
        <div class="section-head"><h2>Šta treba ponoviti</h2></div>
        <div class="list">${wrong.map((it) => {
          const { q, t } = it.ref;
          return `<div class="card review">
            <p class="q">${fmt(q.q)}</p>
            <p class="a no">${fmt(q.options[it.order[it.pick]])}</p>
            <p class="a ok">✓ ${fmt(q.options[q.answer])}</p>
            <p class="e">${fmt(q.explain)}</p>
            <a class="small" style="color:var(--brand);font-weight:650" href="#/tema/${t.id}">Lekcija: ${esc(t.title)} ›</a>
          </div>`;
        }).join('')}</div>
      </section>` : ''}
    </div>`;
  }

  // ---------- Klinički slučajevi ----------

  let run = null;

  function viewCase(id) {
    const hit = CASES.get(id);
    if (!hit) return notFound();
    const { c, cat } = hit;
    if (!run || run.id !== id) run = { id, i: 0, picks: [], orders: c.steps.map(() => shuffle([0, 1, 2, 3])) };
    const finished = run.i >= c.steps.length;
    const score = run.picks.filter((p, k) => run.orders[k][p] === c.steps[k].answer).length;

    const past = c.steps.slice(0, Math.min(run.i, c.steps.length)).map((s, k) => {
      const picked = run.orders[k][run.picks[k]];
      const ok = picked === s.answer;
      return `<div class="card past-step">
        <p class="q">${k + 1}. ${fmt(s.q)}</p>
        <p class="a ${ok ? 'ok' : 'no'}">${ok ? '✓' : '✕'} ${fmt(s.options[picked])}</p>
        ${ok ? '' : `<p class="a ok">✓ ${fmt(s.options[s.answer])}</p>`}
        <p class="e">${fmt(s.explain)}</p>
      </div>`;
    }).join('');

    let current = '';
    if (!finished) {
      const s = c.steps[run.i];
      const pick = run.picks[run.i];
      const reveal = pick !== undefined;
      const ok = reveal && run.orders[run.i][pick] === s.answer;
      current = `<div class="stack" id="case-step">
        <p class="eyebrow">Korak ${run.i + 1} od ${c.steps.length}</p>
        <p class="question">${fmt(s.q)}</p>
        ${optionButtons(run.orders[run.i], s.options, s.answer, reveal ? pick : null, reveal, 'case-answer')}
        ${reveal ? `<div class="feedback ${ok ? '' : 'no'}" id="feedback"><h3>${ok ? 'Tačno' : 'Netačno'}</h3><p>${fmt(s.explain)}</p></div>
        <button class="btn block" data-act="case-next">${run.i === c.steps.length - 1 ? 'Završi slučaj' : 'Dalje'}</button>` : ''}
      </div>`;
    } else {
      const p = pct(score, c.steps.length);
      current = `<div class="card result" id="case-step">
        ${ring(p, score + '/' + c.steps.length, 'on-surface big')}
        <h1>Slučaj završen</h1>
        <p class="muted">${verdict(p)}</p>
        <div class="btn-row">
          <button class="btn ghost" data-act="case-restart" data-id="${id}">Ponovi slučaj</button>
          <a class="btn" href="#/provera">Drugi slučajevi</a>
        </div>
      </div>`;
    }

    return `<div class="stack" style="--c:${cat.color}">
      <div>${backBtn('#/provera', 'Provera znanja')}</div>
      <div><span class="chip">🩺 ${esc(cat.title)}</span></div>
      <h1>${esc(c.title)}</h1>
      <div class="card case-intro"><p>${fmt(c.intro)}</p></div>
      ${past}
      ${current}
    </div>`;
  }

  // ---------- Napredak ----------

  function viewProgress() {
    const t = totals();
    const casesDone = [...CASES.keys()].filter((id) => S.cases[id]).length;
    return `<div class="stack-lg">
      <h1>Napredak</h1>

      <div class="kpis">
        <div class="card kpi"><b>${t.learned}/${TOPICS.size}</b><span>naučenih tema</span></div>
        <div class="card kpi"><b>${t.seen}/${QUESTIONS.length}</b><span>pitanja viđeno</span></div>
        <div class="card kpi"><b>${t.attempts ? pct(t.correct, t.attempts) + '%' : '—'}</b><span>tačnih odgovora</span></div>
        <div class="card kpi"><b>${casesDone}/${CASES.size}</b><span>rešenih slučajeva</span></div>
        <div class="card kpi"><b>${streak()}</b><span>dana u nizu</span></div>
      </div>

      <section class="card">
        <div class="section-head"><h2>Po oblastima</h2></div>
        ${CATS.map((cat) => {
          const qs = QUESTIONS.filter((x) => x.cat === cat);
          let c = 0, a = 0;
          qs.forEach((x) => {
            const r = S.q[x.id];
            if (r) { c += r.c; a += r.c + r.w; }
          });
          const done = learnedIn(cat);
          return `<a class="prog-row" href="#/oblast/${cat.id}" style="--c:${cat.color}">
            <div class="top"><span>${cat.icon} ${esc(cat.title)}</span><span>${done}/${cat.topics.length} · ${a ? pct(c, a) + '% tačno' : 'bez odgovora'}</span></div>
            <div class="bar"><i style="width:${pct(done, cat.topics.length)}%"></i></div>
          </a>`;
        }).join('')}
      </section>

      <section class="card stack">
        <h2>Podešavanja</h2>
        <div class="field">
          <label for="name">Kako da te zovem?</label>
          <input class="search" id="name" type="text" maxlength="30" placeholder="npr. dr Ana" value="${esc(S.name)}">
        </div>
        <div class="field">
          <label>Izgled</label>
          <div><div class="seg">
            ${[['auto', 'Automatski'], ['light', 'Svetlo'], ['dark', 'Tamno']].map(([v, l]) => `<button class="${S.theme === v ? 'on' : ''}" data-act="theme" data-v="${v}">${l}</button>`).join('')}
          </div></div>
        </div>
        <div><button class="btn danger" data-act="reset">Obriši sav napredak</button></div>
      </section>

      <p class="notice">Napredak se čuva samo na ovom uređaju. Sadržaj je edukativni podsetnik zasnovan na smernicama navedenim uz svaku temu i ne zamenjuje važeće protokole, sažetak karakteristika leka ni kliničku procenu.</p>
    </div>`;
  }

  function notFound() {
    return `<div class="empty"><p>Ova stranica ne postoji.</p><p style="margin-top:12px"><a class="btn" href="#/">Na početnu</a></p></div>`;
  }

  // ---------- Ruter ----------

  function route() {
    const [name, arg] = location.hash.replace(/^#\/?/, '').split('/');
    return { name: name || 'pocetna', arg: arg ? decodeURIComponent(arg) : '' };
  }

  const NAV = { pocetna: 'pocetna', ucenje: 'ucenje', oblast: 'ucenje', tema: 'ucenje', provera: 'provera', kviz: 'provera', slucaj: 'provera', napredak: 'napredak' };

  function render(keepScroll) {
    const { name, arg } = route();
    if (!CATS.length) {
      app.innerHTML = '<p class="empty">Sadržaj nije učitan. Proveri internet vezu i osveži stranicu.</p>';
      return;
    }
    const views = {
      pocetna: viewHome,
      ucenje: viewLearn,
      oblast: () => viewCategory(arg),
      tema: () => viewTopic(arg),
      provera: viewPractice,
      kviz: viewQuiz,
      slucaj: () => viewCase(arg),
      napredak: viewProgress
    };
    app.innerHTML = (views[name] || notFound)();
    document.querySelectorAll('.nav-link').forEach((a) => a.classList.toggle('active', a.dataset.nav === NAV[name]));
    if (!keepScroll) window.scrollTo(0, 0);
  }

  function revealFeedback() {
    const el = document.getElementById('feedback');
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }

  // ---------- Događaji ----------

  const actions = {
    quiz: (el) => startQuiz(el.dataset.kind, el.dataset.id),

    answer(el) {
      const it = quiz.items[quiz.i];
      if (!quiz.exam && it.pick !== null) return;
      it.pick = Number(el.dataset.k);
      if (!quiz.exam) record(it.ref.id, isCorrect(it));
      render(true);
      if (!quiz.exam) revealFeedback();
    },

    next() {
      if (quiz.i < quiz.items.length - 1) {
        quiz.i++;
        render();
        return;
      }
      if (quiz.exam) quiz.items.forEach((it) => record(it.ref.id, isCorrect(it)));
      quiz.done = true;
      render();
    },

    'case-answer'(el) {
      if (run.picks[run.i] !== undefined) return;
      run.picks[run.i] = Number(el.dataset.k);
      render(true);
      revealFeedback();
    },

    'case-next'() {
      const { c } = CASES.get(run.id);
      run.i++;
      if (run.i >= c.steps.length) {
        const score = run.picks.filter((p, k) => run.orders[k][p] === c.steps[k].answer).length;
        S.cases[run.id] = { score, total: c.steps.length };
        touchDay();
        save();
      }
      render(true);
      const el = document.getElementById('case-step');
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    },

    'case-restart'() {
      run = null;
      render();
    },

    learned(el) {
      const id = el.dataset.id;
      if (S.learned[id]) delete S.learned[id];
      else {
        S.learned[id] = Date.now();
        touchDay();
      }
      save();
      render(true);
    },

    theme(el) {
      S.theme = el.dataset.v;
      save();
      applyTheme();
      render(true);
    },

    reset(el) {
      if (el.dataset.armed) {
        S = Object.assign({}, EMPTY, { learned: {}, q: {}, cases: {}, days: [], name: S.name, theme: S.theme });
        save();
        render();
        return;
      }
      el.dataset.armed = '1';
      el.textContent = 'Sigurno? Klikni još jednom za brisanje';
    },

    install() {
      if (!installPrompt) return;
      installPrompt.prompt();
      installPrompt = null;
      render(true);
    }
  };

  document.addEventListener('click', (e) => {
    const el = e.target.closest('[data-act]');
    if (!el || el.disabled) return;
    const fn = actions[el.dataset.act];
    if (fn) fn(el);
  });

  document.addEventListener('input', (e) => {
    if (e.target.id === 'search') document.getElementById('learn-body').innerHTML = searchResults(e.target.value);
    if (e.target.id === 'name') {
      S.name = e.target.value.trim();
      save();
    }
  });

  // Tastatura na računaru: A–D ili 1–4 za odgovor, Enter za dalje.
  document.addEventListener('keydown', (e) => {
    if (e.target.matches('input, textarea') || e.metaKey || e.ctrlKey || e.altKey) return;
    const name = route().name;
    if (name !== 'kviz' && name !== 'slucaj') return;
    const k = '1234'.indexOf(e.key) >= 0 ? '1234'.indexOf(e.key) : 'abcd'.indexOf(e.key.toLowerCase());
    if (k >= 0) {
      const btn = app.querySelectorAll('.opt:not([disabled])')[k];
      if (btn) btn.click();
    } else if (e.key === 'Enter') {
      const btn = app.querySelector('[data-act="next"]:not([disabled]), [data-act="case-next"]');
      if (btn) {
        e.preventDefault();
        btn.click();
      }
    }
  });

  let installPrompt = null;
  window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    installPrompt = e;
    if (route().name === 'pocetna') render(true);
  });

  window.addEventListener('hashchange', () => render());

  if ('serviceWorker' in navigator && location.protocol.startsWith('http')) {
    navigator.serviceWorker.register('sw.js').catch(() => {});
  }

  applyTheme();
  render();
})();
