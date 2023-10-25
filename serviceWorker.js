var url =  window.location.href;
var swLocation = '/misitio/serviceWorker.js'

if( navigator.serviceWorker) {
  if(url.includes('localhost')) {
    swLocation = '/serviceWorker.js';
  }
  navigator.serviceWorker.register( swlocation);
}

const staticDevCoffee = "misitio"
const assets = [
  "/",
  "index.html",
  "css/style.css",
  "js/app.js",
  "icon-512x512.png",
]

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(staticDevCoffee).then(cache => {
      return cache.addAll(assets)
    })
  )
})
self.addEventListener("fetch", fetchEvent => {
    fetchEvent.respondWith(
      caches.match(fetchEvent.request).then(res => {
        return res || fetch(fetchEvent.request)
      })
    )
  })
