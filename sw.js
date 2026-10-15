// Service Worker mínimo para habilitar la instalación PWA en Android.
// NO cachea nada: deja pasar todas las peticiones a la red.

self.addEventListener('install', function(event) {
    self.skipWaiting();
});

self.addEventListener('activate', function(event) {
    event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', function(event) {
    // Handler vacío: todas las peticiones van a la red como siempre.
    // No hay caché, no hay datos viejos.
});
