const cacheName = "dashboard-page";

async function installEventHandler() {
  let cachedVal = await caches.open(cacheName);
  return cachedVal.addAll(["/"]);
}
// install event
self.addEventListener("install", async (installEvent) => {
  installEvent.waitUntil(installEventHandler());
});

self.addEventListener("fetch", (fetchEvent) => {
  console.log("url of the req", fetchEvent.request.url);
  fetchEvent.respondWith(
    caches.match(fetchEvent.request).then((response) => {
      return response || fetch(fetchEvent.request);
    })
  );
});
