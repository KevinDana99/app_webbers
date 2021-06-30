
import { RUTA_SERVER } from './Rutas.js';
import Tabs from './Tabs.js';
import View from './View.js';


export default class Footer{


 constructor (session){

this.estado;
this.item = document.querySelectorAll('.itemFooter');
this.session = session;
for (this.i = 0; this.i < this.item.length; this.i++){


 this.item[this.i].addEventListener('click',this.seleccionPagina);

}


this.seleccionPagina(this.item[1]);

}


seleccionPagina = (e) => {


this.item.forEach(element => {
    
if (e.target == element || e == element){

    element.style.color = '#0492FF';
    element.setAttribute('src', './img/ico_finance_2.png');
}else {

    element.style.color = 'grey';
    element.setAttribute('src', './img/ico_finance.png');

}

});    

if (e.target == this.item[0]){
   
this.estado = 'cotizacion'; 

}else if (e.target == this.item[1] || e == this.item[1]){

this.estado = 'facturas';  

}else if (e.target == this.item[2]){

this.estado = 'mensajes';    

}

const tabs = new Tabs(this.estado);

this.renderPage();

}

renderPage = async () =>{

const consulta = await this.requestApi(this.estado);

const view = new View(consulta);

view.renderView();


}


requestApi = async (pagina) =>{

    console.log(this.session);
const constulta = await fetch(`${RUTA_SERVER}?page=${pagina}&id_user=${this.session}`);

const consulta = await constulta.json();


return consulta;


} 


}