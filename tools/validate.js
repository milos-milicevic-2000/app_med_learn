#!/usr/bin/env node
// Proverava fajlove sa sadržajem (js/data/*.js). Upotreba: node tools/validate.js [fajl ...]
const fs = require('fs');
const path = require('path');
const vm = require('vm');

const dataDir = path.join(__dirname, '..', 'js', 'data');
const files = process.argv.slice(2).length
  ? process.argv.slice(2)
  : fs.readdirSync(dataDir).filter((f) => f.endsWith('.js')).map((f) => path.join(dataDir, f));

const SECTION_TYPES = ['text', 'list', 'flags', 'steps', 'drugs', 'refer', 'pearls'];
const errors = [];
const warnings = [];
const seenIds = new Map();
let totals = { categories: 0, topics: 0, questions: 0, cases: 0, steps: 0 };

const isStr = (v) => typeof v === 'string' && v.trim().length > 0;

function uniqueId(id, where) {
  if (!isStr(id) || !/^[a-z0-9-]+$/.test(id)) errors.push(`${where}: neispravan id "${id}"`);
  else if (seenIds.has(id)) errors.push(`${where}: id "${id}" već postoji (${seenIds.get(id)})`);
  else seenIds.set(id, where);
}

function checkQuestion(q, where) {
  if (!isStr(q.q)) errors.push(`${where}: nedostaje q`);
  if (!Array.isArray(q.options) || q.options.length !== 4 || !q.options.every(isStr))
    errors.push(`${where}: potrebne su tačno 4 opcije`);
  else if (new Set(q.options).size !== 4) errors.push(`${where}: opcije se ponavljaju`);
  if (!Number.isInteger(q.answer) || q.answer < 0 || q.answer > 3)
    errors.push(`${where}: answer mora biti 0–3`);
  if (!isStr(q.explain)) errors.push(`${where}: nedostaje explain`);
}

function checkCategory(cat, file) {
  const w = path.basename(file);
  totals.categories++;
  uniqueId(cat.id, w);
  for (const k of ['title', 'icon', 'color']) if (!isStr(cat[k])) errors.push(`${w}: nedostaje ${k}`);
  if (!Array.isArray(cat.topics) || !cat.topics.length) errors.push(`${w}: nema tema`);
  const answers = [0, 0, 0, 0];

  for (const t of cat.topics || []) {
    const tw = `${w} > ${t.id}`;
    totals.topics++;
    uniqueId(t.id, tw);
    if (!isStr(t.title)) errors.push(`${tw}: nedostaje title`);
    if (!isStr(t.summary)) errors.push(`${tw}: nedostaje summary`);
    if (!Array.isArray(t.sections) || t.sections.length < 3) errors.push(`${tw}: premalo sekcija`);
    for (const [i, s] of (t.sections || []).entries()) {
      const sw = `${tw} > sekcija ${i + 1}`;
      if (!SECTION_TYPES.includes(s.type)) errors.push(`${sw}: nepoznat type "${s.type}"`);
      if (!isStr(s.title)) errors.push(`${sw}: nedostaje title`);
      if (s.type === 'text') {
        if (!isStr(s.body)) errors.push(`${sw}: nedostaje body`);
      } else if (!Array.isArray(s.items) || !s.items.length) {
        errors.push(`${sw}: nedostaju items`);
      } else if (s.type === 'drugs') {
        for (const d of s.items)
          if (!d || !isStr(d.name) || !isStr(d.dose)) errors.push(`${sw}: lek mora imati name i dose`);
      } else if (!s.items.every(isStr)) {
        errors.push(`${sw}: items moraju biti stringovi`);
      }
    }
    if (!Array.isArray(t.sources) || !t.sources.length) warnings.push(`${tw}: nema izvora`);
    for (const src of t.sources || []) {
      if (typeof src === 'string') warnings.push(`${tw}: izvor "${src}" nema link`);
      else if (!src || !isStr(src.name) || !/^https:\/\//.test(src.url || '')) errors.push(`${tw}: izvor mora imati name i https url`);
    }
    if (!Array.isArray(t.questions) || t.questions.length < 2) errors.push(`${tw}: premalo pitanja`);
    for (const [i, q] of (t.questions || []).entries()) {
      totals.questions++;
      checkQuestion(q, `${tw} > pitanje ${i + 1}`);
      if (Number.isInteger(q.answer)) answers[q.answer]++;
    }
  }

  for (const c of cat.cases || []) {
    const cw = `${w} > ${c.id}`;
    totals.cases++;
    uniqueId(c.id, cw);
    if (!isStr(c.title)) errors.push(`${cw}: nedostaje title`);
    if (!isStr(c.intro)) errors.push(`${cw}: nedostaje intro`);
    if (!Array.isArray(c.steps) || c.steps.length < 2) errors.push(`${cw}: premalo koraka`);
    for (const [i, s] of (c.steps || []).entries()) {
      totals.steps++;
      checkQuestion(s, `${cw} > korak ${i + 1}`);
      if (Number.isInteger(s.answer)) answers[s.answer]++;
    }
  }

  const sum = answers.reduce((a, b) => a + b, 0);
  if (sum >= 12 && Math.max(...answers) / sum > 0.4)
    warnings.push(`${w}: tačni odgovori su neravnomerno raspoređeni (${answers.join('/')})`);
}

for (const file of files) {
  const registered = [];
  try {
    vm.runInNewContext(fs.readFileSync(file, 'utf8'), { MED: { register: (c) => registered.push(c) } }, { filename: file });
  } catch (e) {
    errors.push(`${path.basename(file)}: greška u sintaksi — ${e.message}`);
    continue;
  }
  if (!registered.length) errors.push(`${path.basename(file)}: nema poziva MED.register`);
  registered.forEach((c) => checkCategory(c, file));
}

warnings.forEach((w) => console.log('UPOZORENJE  ' + w));
errors.forEach((e) => console.log('GREŠKA      ' + e));
console.log(
  `\n${totals.categories} kategorija, ${totals.topics} tema, ${totals.questions} pitanja, ` +
    `${totals.cases} slučajeva (${totals.steps} koraka) — ${errors.length} grešaka, ${warnings.length} upozorenja`
);
process.exit(errors.length ? 1 : 0);
