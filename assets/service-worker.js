
const CACHE_NAME = 'image-cache';
const imageUrlsToCache = [

  //Carousel
  "./assets/images/slider/green_slider.webp",
  "./assets/images/slider/green_slider.jpg",
  // Gallery

  //Diver
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(imageUrlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});