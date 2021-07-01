import User from './models/User.js';
import Menu from './models/Menu.js';
import Footer from './models/Footer.js';

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

//llamada al menu de usuarios

const menu = new Menu();

btnSalir.addEventListener('click', u.logout);


//llamada a el footer

const footer = new Footer(session);


} 

});


}


//Inicializacion del service worker

navigator.serviceWorker.register('./sw.js');





