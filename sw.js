const cacheName = "cache:v1"
const resPrecache = [
    '/',
    'index.html',
    'js/app.js',
    'setting.json',
    'js/chunk-vendors.js'
]

self.addEventListener("install", e => {
    console.log(e)
    e.waitUntil(
        caches.open(cacheName).then(cache => {
            return cache.addAll(resPrecache)
        })
    )
})

self.addEventListener("activate", e => {
    //e
})

self.addEventListener("fetch", e => {
    e.respondWith(caches.match(e.request).then(cacheRes => {
        return cacheRes || fetch(e.request)
    }))
});


