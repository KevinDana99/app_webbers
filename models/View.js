import Cotizacion from './Cotizacion.js';

export default class View {

constructor(json){

this.view = json; 
this.elementos = Object.values(this.view); 
this.clase;  
this.nodos = '';
this.icoStatus;
this.icoFactura = '<i class="fas fa-file-alt"></i>';


if (this.view.page == 'cotizacion'){

this.count = this.elementos[1];

}else if (this.view.page == 'facturas'){

this.count = this.elementos[2];    

}else if (this.view.page == 'mensajes'){

this.count = this.elementos[3];   
}

}

renderView(){


for(let e = 0; e < this.count.length; e++){
            
if (this.elementos[0][e] != this.view.page){

if (this.view.page == 'cotizacion'){
    
this.nodos = this.nodos + 

`<div class="box_cotizacion">

<div class="partes_pagina">${this.elementos[1][e]}</div>

<div class="contenido_cotizacion"><div class="box_text_cotizacion">${this.elementos[2][e]}</div><div class="box_icon_cotizacion">${this.elementos[3][e]}</div></div>

</div>

`;

}else if (this.view.page == 'facturas'){

if (this.elementos[4][e] == 'PENDIENTE'){

this.clase = 'factura_pendiente';
this.icoStatus = '<i class="fas fa-clock"></i>';

}else if (this.elementos[4][e] == 'PAGADO'){

this.clase = 'factura_pagada';
this.icoStatus = '<i class="fas fa-check-circle"></i>';
   
}else if (this.elementos[4][e] == 'VENCIDO'){

this.clase = 'factura_vencida';
this.icoStatus = '<i class="fas fa-times-circle"></i>';
}

this.nodos = this.nodos + 

`<div class="box_factura ${this.clase}">

<div class="contenido_box_factura">

<div class="box_vencimiento_factura">

<div class="vencimiento_factura">

${this.icoFactura}

<div class="fecha_vencimiento_factura">VTO ${this.elementos[3][e]}</div>

</div>

</div>

<div class="box_precio_factura">

$${this.elementos[2][e]}

</div>

<div class="box_status_factura">

<div class="status_factura">

${this.icoStatus}

${this.elementos[4][e]}


</div>

</div>

</div>`;

if (this.elementos[4][e] == 'PENDIENTE' || this.elementos[4][e] == 'VENCIDO'){
 
this.nodos = this.nodos + '<button class="btn_pagar_factura">Pagar</button>'; 

}

this.nodos = this.nodos + '</div>';


}else if (this.view.page == 'mensajes'){

this.nodos = this.nodos + 


`<div class="box_mensaje">

${this.elementos[e]}

</div>`;

}

}else{

   return e;
}    

}             
        
if (this.view.page == 'cotizacion'){

section.innerHTML = this.nodos + '<div class="box_total_cotizacion"><div class="total">Total mensual <div class="precio" id="precioMensual"></div></div><div class="total">Total instalacion <div class="precio" id="precioFinal"></div></div></div>';

}else if (this.view.page == 'facturas'){

section.innerHTML = this.nodos;   

}else if (this.view.page == 'mensajes'){

section.innerHTML = this.nodos + '<div class="box_input_mensaje"><input type="text"> <button><i class="fas fa-paper-plane"></i></button></div>';   

}

const cotizacion = new Cotizacion(this.elementos);

cotizacion.loadEvents();

}




}