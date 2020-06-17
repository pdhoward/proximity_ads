// Strategic Machines Progressive Web App

// This code is used to register a service worker.
const staticAssets = [    
  ];
  
  self.addEventListener('install', async event => {
    const cache = await caches.open('static-cache');
    cache.addAll(staticAssets);
  });
  
  self.addEventListener('fetch', event => {
    const req = event.request;
    const url = new URL(req.url);
  
    if (url.origin === location.url) {      
        event.respondWith(cacheFirst(req));
    } else {      
        event.respondWith(networkFirst(req));
    }
  });
  
  async function cacheFirst(req) {
    const cachedResponse = caches.match(req);
    return cachedResponse || fetch(req);
  }
  
  async function networkFirst(req) {  
    const cache = await caches.open('dynamic-cache')
  
    try {
        const res = await fetch(req)
        // throws an error on put requests - see solution here
        // https://stackoverflow.com/questions/35270702/can-service-workers-cache-post-requests
  
        //cache.put(req, res.clone())
        return res;
    } catch (error) {
        return await cache.match(req)
    }
  }