export default class Tabs {

constructor(estado){

this.estado = estado;
this.nav = document.querySelector('#nav');

this.renderTabs();
}

renderTabs = () =>{

if (this.estado == 'facturas'){

this.nav.innerHTML = '<div class="btn_nav">Pendientes</div><div class="btn_nav">Abonadas</div><div class="btn_nav">Todas</div>';

}else if (this.estado == 'cotizacion'){

this.nav.innerHTML = '<div class="btn_nav">Cotizacion</div>';

}else if (this.estado == 'mensajes'){

this.nav.innerHTML = '<div class="btn_nav">Actualizaciones</div>';   
section.innerHTML = 'Las actualizaciones no estan disponibles';
}

}

}