const CACHE_NAME = 'cache-v1.0.0';

self.addEventListener('install', e => {

const instalacion = caches.open(CACHE_NAME)
 
.then(objeto => {

return objeto.addAll([
    
'./index.html',
'./estilos.css',
'./controller.js',
'./img/logo2021.png',
'./manifest.json',
'./img/logo_appx165.png'


]);

});

e.waitUntil(instalacion);

});


self.addEventListener('activate', e => {

const CACHE_UPGRADE = [CACHE_NAME];

e.waitUntil(

caches.keys().then(keys =>{

keys.map(keys=>{

if (CACHE_UPGRADE.indexOf(keys) === -1){

return caches.delete(keys)

}


})    

})

.then(() => self.clients.claim())

)

});


self.addEventListener('fetch', e => {

e.respondWith(

caches.match(e.request).then(res=> {

if (res){

return res;
}

return fetch(e.request);

})    

)


});

self.addEventListener('push', e => {
    if (!(self.Notification && self.Notification.permission === 'granted')) {
        return;
    }

    const sendNotification = body => {
        // you could refresh a notification badge here with postMessage API
        const title = "Hommer";

        return self.registration.showNotification(title, {
            body,
        });
    };

    if (e.data) {
        const message = e.data.text();
        e.waitUntil(sendNotification(message));
    }
});


