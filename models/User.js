import { RUTA_SERVER } from './Rutas.js';
import {loginConfig} from "../controller.js";

export default class User{


constructor(){

this.user;
this.pass;
this.session;
this.status = '';
}

compruebaLogin = async () =>{

const consulta = await fetch(`${RUTA_SERVER}?comprobar=1`,{

  credentials: "include"

});
const respuesta = await consulta.text();


return parseInt(respuesta);
}

//consulta por el user a la database

autenticacion = async (user,pass) => {

const consulta = await fetch(`${RUTA_SERVER}?AUTH=1&pass=${pass}&user=${user}`,{

credentials: "include" 

});

const respuesta = await consulta.json();

if (respuesta.status[0] == 200){

return true;
}else{

this.status = respuesta.status[0]; 

this.logout();

} 



}


login = async (session) =>{

const usuario = await this.getUser(session);

this.renderHome(usuario);  

}

logout = async () =>{
  
const consulta = await fetch(`${RUTA_SERVER}?logout=1`, {

credentials: "include"

});

const respuesta = await consulta.text();

console.log(respuesta);

this.renderLogin();

loginConfig();

}

renderLogin(){


app.innerHTML = `

<div class="logo_webbers">

<img src="img/logo2021.png" class="logo">

</div>

<div class="form">

<div class="item_login"><i class="fas fa-user"></i><input type="text" class="input_login" id="user"></div>
<div class="item_login"><i class="fas fa-lock"></i><input type="text" class="input_login" id="pass"></div>

<div class="estado">${this.status}</div>

<button class="btn_login" id="btnLogin">Acceder</button>

</div>

`;

this.status = '';

}

getUser = async(session) =>{

  const consulta = await fetch(`${RUTA_SERVER}?get_user=1&id_user=${session}`);
    const respuesta = await consulta.json();
  
    return respuesta.usuario[0];

}


renderHome = (usuario) =>{


 app.innerHTML = `<div class="header"><div class="mitad_header"><div class="box_user"><div class="box_ico_user"><i class="fas fa-user"></i></div><div class="box_info_user">${usuario}</div><div class="box_main_user"><i class="fas fa-ellipsis-v ico_menu" id="btnMenu"></i></div><div class="main_user" id="mainUser"><div class="item_main"><i class="fas fa-home ico_main"></i><div>Inicio</div></div><div class="item_main"><i class="fas fa-wrench ico_main"></i><div>Soporte</div></div><div class="item_main"><i class="fas fa-cog ico_main"></i><div>Ajustes</div></div><div class="item_main item_main_final" id="btnSalir"><i class="fas fa-sign-in-alt ico_main"></i><div>Salir</div></div></div></div></div></div><div class="header_2"><div class="nav" id="nav"><div class="btn_nav">Pendientes</div><div class="btn_nav">Abonadas</div><div class="btn_nav">Todas</div></div></div><div class="section" id="section"></div><div class="footer"><div class="box_ico"><img src="./img/ico_finance.png" class="ico_finance itemFooter"></div><i class="fas fa-file-invoice-dollar ico_footer itemFooter"></i><i class="fas fa-comments-alt ico_footer itemFooter"></i></div>`;


}


}