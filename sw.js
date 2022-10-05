
// Ciclo de vida del SW

self.addEventListener('install', event => {

    //DESCARGAR ASSETS
    //Creamos un cache
    console.log('SW: Instalando SW!');

    const instalacion = new Promise( (resolve, reject) => {
        setTimeout(() => {
            console.log('SW: Instalaciones terminadas');
            self.skipWaiting();
            resolve();
        }, 1 );
    });


    event.waitUntill( instalacion );
});


//Cuando el SW toma el control de la APP
self.addEventListener('activate', event => {

    // Borrar cache viejo

    console.log('SW2: Activo y Listo para controlar la app');
});

// FETCH: Manejo de peticiones HTTP
self.addEventListener('fetch', event => {

    // Aplicar estrategias del cache
    console.log('SW:', event.request.url);

    if ( event.request.url.includes('https://reqres.in/') ) {

        const resp = new Response(`{ ok: false, mensaje: 'jajaja' }`);

        event.respondWith( resp );
    }

})