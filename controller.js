import User from './models/User.js';
import Menu from './models/Menu.js';
import Footer from './models/Footer.js';
import { RUTA_SERVER } from './models/Rutas.js';
//llamada al modulo de login

const u = new User();

async function comprobar(){

const session = await u.compruebaLogin();

if (session > 0){

await notifications();

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

//llamada al menu de usuarios

const menu = new Menu();

btnSalir.addEventListener('click', u.logout);


//llamada a el footer

const footer = new Footer(session);


} 

});


}



//SERVICE WORKER Y NOTIFICATIONS INITIALIZE




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



async function notifications(){

  if (navigator.serviceWorker){

  const res = await navigator.serviceWorker.register('sw.js');

      if (window.Notification){
  
   const status = await window.Notification.requestPermission();
        
        if (status == 'granted'){
      
        
     const getSubscription = await res.pushManager.getSubscription();
        
        if (getSubscription == null){
        
          const convertedKey = convertUint8Array(PUBLIC_KEY);  
        
       const subscripcion =  res.pushManager.subscribe({
        
            userVisibleOnly: true,
            applicationServerKey: convertedKey
            
            });
            
        await sendSuscription(subscripcion);
            
         
            console.log('Se ha generado una nueva suscripcion');
        
        
        }else{
        
          console.warn('La subscripcion no se pudo generar, ya que hay una subscripcion vigente');
        }
      
        
        
        }else{
        
          console.error('Has denegado el permiso a notificaciones');
        }
        

        
        }
      
  
    }
  
  
}


async function sendSuscription(subscripcion){

 
   const consulta = await fetch(RUTA_SERVER, {
   
 
   credentials : 'include',  
   method : 'POST',
   body :  JSON.stringify(subscripcion),
   headers : {
   
   "Content-Type" : "application/json"
   
   }
   
   });
   
   }
 