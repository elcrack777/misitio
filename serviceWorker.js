var url =  window.location.href;
var swLocation = '/misitio/serviceWorker.js'

if( navigator.serviceWorker) {
  if(url.includes('localhost')) {
    swLocation = '/serviceWorker.js';
  }
  navigator.serviceWorker.register( swlocation);
}


// if( navigator.serviceWorker) {
//   navigator.serviceWorker.register( '/serviceWorker.js' );
// }
const staticDevCoffee = "misitio"
const assets = [
  //"/",
  "index.html",
  "pages/index-offline.html",
  "css/style.css",
  "js/app.js",
  "icon-512x512.png",
  "serviceWorker.js",
]

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(staticDevCoffee).then(cache => {
      return cache.addAll(assets)
    })
  )
})
self.addEventListener("fetch", function(event) {
  console.log(event);
  event.respondWith(
    fetch(event.request).catch(function() {
      console.log('fallado el cargado');
      return caches.match("/pages/index-offline.html");
    })
  );
});
