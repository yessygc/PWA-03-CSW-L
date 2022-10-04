
// Ciclo de vida del SW

self.addEventListener('install', event => {

    //DESCARGAR ASSETS
    //Creamos un cache
    console.log('SW: Instalando SW!');


});


//Cuando el SW toma el control de la APP
self.addEventListener('activate', event => {

    // Borrar cache viejo

    console.log('SW2: Activo y Listo para controlar la app');
});