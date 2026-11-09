/* Cevher Hesap Aracı – çevrimdışı önbellek. VERSION her yayında build-site.sh tarafından güncellenir. */
var VERSION='20261109-2213';
var CACHE='cevher-hesap-'+VERSION;
var CORE=['./','./index.html','./manifest.webmanifest','./icon.svg','./icon-192.png','./icon-512.png','./icon-maskable-512.png'];
self.addEventListener('install',function(e){
  e.waitUntil(caches.open(CACHE).then(function(c){return c.addAll(CORE);}).then(function(){return self.skipWaiting();}));
});
self.addEventListener('activate',function(e){
  e.waitUntil(caches.keys().then(function(keys){
    return Promise.all(keys.filter(function(k){return k.indexOf('cevher-hesap-')===0&&k!==CACHE;}).map(function(k){return caches.delete(k);}));
  }).then(function(){return self.clients.claim();}));
});
self.addEventListener('fetch',function(e){
  var req=e.request;
  if(req.method!=='GET')return;
  var url=new URL(req.url);
  var same=url.origin===self.location.origin;
  var fonts=url.hostname==='fonts.googleapis.com'||url.hostname==='fonts.gstatic.com';
  if(!same&&!fonts)return;
  e.respondWith(caches.open(CACHE).then(function(cache){
    return cache.match(req,{ignoreSearch:same}).then(function(cached){
      var network=fetch(req).then(function(res){
        if(res&&(res.ok||res.type==='opaque'))cache.put(req,res.clone());
        return res;
      }).catch(function(){return null;});
      if(cached){e.waitUntil(network);return cached;}
      return network.then(function(res){
        if(res)return res;
        if(req.mode==='navigate')return cache.match('./index.html');
        return new Response('',{status:504,statusText:'offline'});
      });
    });
  }));
});
