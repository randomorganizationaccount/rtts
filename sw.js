var cacheName = 'Reddit TTS Generator';
var filesToCache = [
  '/RedditTTSGenerator/',
  '/RedditTTSGenerator/index.html',
  '/RedditTTSGenerator/css/style.css',
  '/RedditTTSGenerator/js/reddittts.js', 
];

/* Start the service worker and cache all of the app's content */
self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open(cacheName).then(function(cache) {
      console.log('installing cache : ' + cacheName)
      return cache.addAll(filesToCache);
    })
  );
});

/* Serve cached content when offline */
self.addEventListener('fetch', function(e) {
  console.log('fetch request : ' + e.request.url)
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
});
