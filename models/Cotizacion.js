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


sumaCotizacion(e){

for (let i = 0; i < this.elementos[1].length; i++) {


  if (this.elementos[1][i] == e.target.firstChild.nextSibling.innerText){

this.totalCotizacionFinal = (this.totalCotizacionFinal + parseInt(this.elementos[4][i]));

this.totalCotizacionMensual = (this.totalCotizacionMensual + parseInt(this.elementos[5][i]));




precioFinal.innerText = this.money.format(this.totalCotizacionFinal);
precioMensual.innerText = this.money.format(this.totalCotizacionMensual);

  }else{

  }



}


}


restaCotizacion(e){

    for (let i = 0; i < this.elementos[1].length; i++) {
    
    
      if (this.elementos[1][i] == e.target.firstChild.nextSibling.innerText){
    
    this.totalCotizacionFinal = (this.totalCotizacionFinal - parseInt(this.elementos[4][i]));
    
    this.totalCotizacionMensual = (this.totalCotizacionMensual - parseInt(this.elementos[5][i]));
    
    
    
    
    precioFinal.innerText = this.money.format(this.totalCotizacionFinal);
    precioMensual.innerText = this.money.format(this.totalCotizacionMensual);
    
      }
    
    }
    
    
    }

}



