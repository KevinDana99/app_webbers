import { RUTA_SERVER } from "./Rutas.js";

export default class Pagos {

constructor (){

this.datos2 = window.location.href.substr(30);
this.datos = this.datos2.split('&');
this.array = [];

this.datos.forEach(e => {

this.get_params(e);

});
    
}

get_params = (params) =>{

const parametros = params.split('=');

this.array.push(parametros);

}

verify_payment = async() =>{

const consulta = await fetch(RUTA_SERVER + '?' + this.datos2);
const respuesta = await consulta.text();
        
console.log(respuesta)
debugger


if (this.array.length > 5){

window.location.href = (window.location.origin + window.location.pathname)

}else {

    console.log('no redirect')
}


}



}