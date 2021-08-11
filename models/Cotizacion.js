import {RUTA_SERVER} from './Rutas.js';
import TabsAction from './TabsAction.js';

export default class Cotizacion{

constructor(elementos){


this.money = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 0
 })    

this.modulos = document.querySelectorAll('.box_cotizacion');    
this.contenido = document.querySelectorAll('.contenido_cotizacion');  
this.texto = document.querySelectorAll('.box_text_cotizacion'); 
this.boxIcon = document.querySelectorAll('.box_icon_cotizacion'); 
this.totalCotizacionFinal = 0;
this.totalCotizacionMensual = 0;
this.elementos = elementos;
this.partesPagina = document.querySelectorAll('.partes_pagina');
this.precioPlan = 0;
this.plan;
this.tabs = document.querySelectorAll('.btn_nav');
this.precioInicial = async() => {
  
const consulta = await fetch(`${RUTA_SERVER}?planes=get`);
const resultado = await consulta.json();

for (let i = 0; i < this.tabs.length; i++){

if (this.tabs[i].innerText == 'Plan basico'){

  return await resultado[0];

}else if (this.tabs[i].innerText == 'Plan medio'){

  return await resultado[1];
}else{

  return await resultado[2];
}

}
};
}


loadEvents(){

for (let i=0;i<this.modulos.length;i++){

this.modulos[i].addEventListener('click', this.selectModel);
}

}

selectModel = (e) =>{

for (let i = 0; i < this.modulos.length; i++){

if (e.target == this.modulos[i]){


if (this.modulos[i].style.backgroundColor == 'white' || this.modulos[i].style.backgroundColor == ''){

    this.modulos[i].style.backgroundColor = '#0492FF';
    this.modulos[i].style.color = 'white';
    this.texto[i].style.color = 'white';
    this.boxIcon[i].style.color = 'white';  

this.sumaCotizacion(e);

}else{

    this.modulos[i].style.backgroundColor = 'white';
    this.modulos[i].style.color = '#0492FF';
    this.texto[i].style.color = '#9B9B9B';
    this.boxIcon[i].style.color = '#9B9B9B';

    
this.restaCotizacion(e);

}

}

}

}

obtenerPrecioBase = async () =>{

let cadena = precioMensual.innerText.substring(1);
let precioBase;

if (cadena.length > 3 ){

cadena = cadena.split(',');

cadena = cadena[0] + cadena[1];

}else if (cadena.length == 0){


  cadena = await this.precioInicial();

}


precioBase = parseInt(cadena);


return precioBase;

}

sumaCotizacion = async(e)=>{

if (e.target) {

for (let i = 0; i < this.elementos[1].length; i++) {


  if (this.elementos[1][i] == e.target.firstChild.nextSibling.innerText){

this.totalCotizacionFinal = (this.totalCotizacionFinal + parseInt(this.elementos[4][i]));

this.totalCotizacionMensual = (await this.obtenerPrecioBase() + parseInt(this.elementos[5][i]));


precioFinal.innerText = this.money.format(this.totalCotizacionFinal);

precioMensual.innerText = this.money.format(this.totalCotizacionMensual);

  }
  
}

}else {

  //e == parametro de tabs

if (e.plan.length > 1){

this.plan = [e.plan[e.plan.length -2], e.plan[e.plan.length -1]];

console.log("valor actual : " + await this.obtenerPrecioBase(), "valor nuevo : " + [this.plan[1]], "valor viejo : " + [this.plan[0]])

this.precioPlan = this.money.format(await this.obtenerPrecioBase() + this.plan[1] - this.plan[0]);

  precioMensual.innerText = this.precioPlan;

}

}


}


restaCotizacion = async(e)=>{


    for (let i = 0; i < this.elementos[1].length; i++) {
    
    
      if (this.elementos[1][i] == e.target.firstChild.nextSibling.innerText){
    
    this.totalCotizacionFinal = (this.totalCotizacionFinal - parseInt(this.elementos[4][i]));
    this.totalCotizacionMensual = (await this.obtenerPrecioBase() - parseInt(this.elementos[5][i]));
    
    
  
    precioFinal.innerText = this.money.format(this.totalCotizacionFinal);
    precioMensual.innerText = this.money.format(this.totalCotizacionMensual);
    
      }
    
    }
  
    
    }

}



