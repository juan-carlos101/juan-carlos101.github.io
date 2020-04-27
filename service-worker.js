const Url_Files = [
    'index.html',
    'lightblue.jpg',
    'lightgold.jpg',
    'webmanifest.manifest'
];
//the event needed for this service worker would be the install to be able to work alongside the manifest offline

self.addEventListener('install', function(event) {
    event.waitUntil(
        caches.open(Url_Files).then(cache => cache.addAll(Url_Files)).then(self.skipWaiting())
    );
});

//the fetch event should allow for resorces to be 'fetched' when offline such as the index file and the contents of the manifest.
self.addEventListener("fetch", function(event) 
{
   event.respondWith(caches.match(event.request).then(function(cached) {
 var networked = fetch(event.request).then(fetchedFromNetwork, unableToResolve.catch(unableToResolve);
   return cached || networked;