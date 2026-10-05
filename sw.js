// Offline podrška: mreža ima prednost (da izmene sadržaja odmah stignu), keš je rezerva.
const CACHE = 'vizita-v1';
const SHELL = [
  './',
  'index.html',
  'css/style.css',
  'js/core.js',
  'js/app.js',
  'js/data/hitna-kardio.js',
  'js/data/hitna-ostalo.js',
  'js/data/pedijatrija.js',
  'js/data/kardio.js',
  'js/data/respiratorno.js',
  'js/data/endokrino.js',
  'js/data/git.js',
  'js/data/urogenitalno.js',
  'js/data/neuro-psih.js',
  'js/data/lokomotorni.js',
  'js/data/koza-infekcije.js',
  'js/data/prevencija.js',
  'manifest.webmanifest',
  'icons/icon-192.png',
  'icons/icon-512.png'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE)
      .then((cache) => Promise.allSettled(SHELL.map((url) => cache.add(url))))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  const req = event.request;
  if (req.method !== 'GET' || new URL(req.url).origin !== self.location.origin) return;

  event.respondWith((async () => {
    const cache = await caches.open(CACHE);
    const cached = await cache.match(req, { ignoreSearch: true });
    const network = fetch(req).then((res) => {
      if (res.ok) cache.put(req, res.clone());
      return res;
    });
    if (!cached) return network;
    // Spora veza: posle 2,5 s prikaži keširanu verziju, a osvežavanje se nastavlja u pozadini.
    const timeout = new Promise((resolve) => setTimeout(() => resolve(cached), 2500));
    return Promise.race([network.catch(() => cached), timeout]);
  })());
});
