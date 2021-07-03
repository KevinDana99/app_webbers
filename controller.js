import User from './models/User.js';
import Menu from './models/Menu.js';
import Footer from './models/Footer.js';
import { RUTA_SERVER } from './models/Rutas.js';
//llamada al modulo de login

const u = new User();

async function comprobar(){

const session = await u.compruebaLogin();


if (session > 0){

const usuario = await u.getUser(session);

u.renderHome(usuario);


const menu = new Menu();

const footer = new Footer(session);

btnSalir.addEventListener('click', u.logout);

}else{

    u.renderLogin();

    loginConfig();
}

}

comprobar();

export function loginConfig(){

btnLogin.addEventListener('click', async () => {

const AUTH = await u.autenticacion(user.value,pass.value);

if (AUTH == true){

const session = await u.compruebaLogin();

await u.login(session);

activeNotifications(session);

//llamada al menu de usuarios

const menu = new Menu();

btnSalir.addEventListener('click', u.logout);


//llamada a el footer

const footer = new Footer(session);


} 

});


}

let res;

if (navigator.serviceWorker){

 navigator.serviceWorker.register('sw.js').then( (respond) =>{

res = respond;

 });



}

function activeNotifications(session){

const PUBLIC_KEY = 'BMBlr6YznhYMX3NgcWIDRxZXs0sh7tCv7_YCsWcww0ZCv9WGg-tRCXfMEHTiBPCksSqeve1twlbmVAZFv7GSuj0';


function convertUint8Array(base64String) {

  const padding = '='.repeat((4 - (base64String.length % 4)) % 4);
  const base64 = (base64String + padding).replace(/-/g, '+').replace(/_/g, '/');
  const rawData = atob(base64);
  const outputArray = new Uint8Array(rawData.length);

  for (let i = 0; i < rawData.length; i += 1) {
    outputArray[i] = rawData.charCodeAt(i);
  }
  return outputArray;
};


if (window.Notification){

window.Notification.requestPermission().then(status =>{

if (status == 'granted'){

//Pregunta por la subscripcion

res.pushManager.getSubscription().then(getSubscription =>{

if (getSubscription == null){

  const convertedKey = convertUint8Array(PUBLIC_KEY);  

  res.pushManager.subscribe({

    userVisibleOnly: true,
    applicationServerKey: convertedKey
    
    }).then(suscripcion => {
    
    sendSuscription(suscripcion,session);
    
    })


    console.log('Se ha generado una nueva suscripcion');


}else{

  console.warn('La subscripcion no se pudo generar, ya que hay una subscripcion vigente');
}

})


}else{

  console.error('Has denegado el permiso a notificaciones');
}

  
});

}





async function sendSuscription(suscripcion,session){


const json = JSON.stringify({data : suscripcion, idUser : session});

console.log(json);
fetch(RUTA_SERVER,{

  method: 'POST',
  headers: {

    'Content-Type' : 'application/X-WWW-form-urlencoded'
  },

  body: json

}).then(res => res.text())
.then(data => console.log(data));
}

}

