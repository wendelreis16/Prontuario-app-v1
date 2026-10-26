/* Service worker: guarda o app e o motor OCR para uso offline após a 1ª visita.
   Ao publicar uma versão nova do index.html, aumente VERSION. */
const VERSION = 'v1';
const CACHE = 'piloto-prontuarios-' + VERSION;
const FILES = ['./', 'index.html', 'manifest.webmanifest', 'icons/icon-192.png', 'icons/icon-512.png',
  'ocr/tesseract.min.js', 'ocr/worker.min.js', 'ocr/core/tesseract-core-lstm.wasm.js', 'ocr/core/tesseract-core-simd-lstm.wasm.js', 'ocr/lang/por.traineddata.gz'];
self.addEventListener('install', e => { e.waitUntil(caches.open(CACHE).then(c => c.addAll(FILES)).then(() => self.skipWaiting())); });
self.addEventListener('activate', e => { e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim())); });
self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET' || new URL(e.request.url).origin !== location.origin) return;
  e.respondWith(caches.match(e.request, { ignoreSearch: true }).then(hit => hit || fetch(e.request)));
});
