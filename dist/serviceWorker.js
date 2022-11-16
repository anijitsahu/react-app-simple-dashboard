const cacheName = "dashboard-page";

self.addEventListener("fetch", (fetchEvent) => {
  console.log("url of the req", fetchEvent.request.url);
  fetchEvent.respondWith(
    caches.match(fetchEvent.request).then((response) => {
      return response || fetch(fetchEvent.request);
    })
  );
});
