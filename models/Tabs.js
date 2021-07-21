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

this.nav.innerHTML = '<div class="btn_nav">Plan basico</div><div class="btn_nav">Plan medio</div><div class="btn_nav">Plan premium</div>';

}else if (this.estado == 'mensajes'){

this.nav.innerHTML = '<div class="btn_nav">Actualizaciones</div>';   
section.innerHTML = '<div style="text-align:center;color:#191919;font-size:1.2rem">Las actualizaciones no estan disponibles en tu plan actual</div>';
}

}

}