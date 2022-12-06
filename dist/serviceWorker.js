const cacheName = "dashboard-page";
const itemToCache = [
  "/",
  "main.js",
  "main.css",
  "/images/1.jpg",
  "/images/2.jpg",
  "/images/3.jpg",
  "/images/4.jpg",
  "/images/5.jpg",
  "/images/favicon.ico",
  "/images/icons/icon-512x512.png",
  "/images/icons/icon-192x192.png",
];

// async function installEventHandler() {
//   let cachedVal = await caches.open(cacheName);
//   return cachedVal.addAll(itemToCache);
// }
// install event
self.addEventListener("install", (installEvent) => {
  installEvent.waitUntil(async () => {
    let cachedVal = await caches.open(cacheName);
    return cachedVal.addAll(itemToCache);
  });
});

self.addEventListener("fetch", (fetchEvent) => {
  console.log("url of the req", fetchEvent.request.url);
  fetchEvent.respondWith(
    caches.match(fetchEvent.request).then((response) => {
      return response || fetch(fetchEvent.request);
    })
  );
});
