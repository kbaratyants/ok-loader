importScripts("/alias-map.js");

self.addEventListener("fetch", (event) => {
  const url = new URL(event.request.url);

  if (url.origin !== location.origin || !url.pathname.startsWith("/alias/"))
    return;

  const real = self.ALIAS[url.pathname] ?? null;
  if (!real) return;

  event.respondWith(fetch(real));
});
