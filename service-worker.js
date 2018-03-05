let staticCacheName = 'restaurant-cache-v1';

self.addEventListener('install', function(event) {
  let urlsToCache = [
    '/',
    'css/styles.css',
    'img/1.jpg',
    'img/2.jpg',
    'img/3.jpg',
    'img/4.jpg',
    'img/5.jpg',
    'img/6.jpg',
    'img/7.jpg',
    'img/8.jpg',
    'img/9.jpg',
    'img/10.jpg',
    'js/dbhelper.js',
    'js/main.js',
    'js/restaurant_info.js',
    'index.html',
    'data/restaurants.json'
  ];
  event.waitUntil(
    caches.open(staticCacheName).then(function(cache) {
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      if (response) {
        return response;
      }
      return fetch(event.request).then(function(response) {
        if (response.status !== 404) {
          return caches.open(staticCacheName).then(function(cache) {
            if (event.request.url.indexOf('img') < 0) {
              cache.put(event.request.url, response.clone());
            }
            return response;
          });
        }
      });
    })
  );
});
