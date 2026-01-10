self.addEventListener('install', (event) => {
    self.skipWaiting();
});

self.addEventListener('fetch', (event) => {
    // Simple pass-through, required for PWA installability
    event.respondWith(fetch(event.request));
});
