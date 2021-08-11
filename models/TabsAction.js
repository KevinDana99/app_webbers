import Cotizacion from "./Cotizacion.js";

export default class TabsAction{

constructor(estado){

this.estado = estado;   
this.tabs = document.querySelectorAll('.btn_nav');
this.planes = [];

//establece estado grafico inicial de las tabs

this.tabs[0].style.backgroundColor = 'white';
this.tabs[0].style.color = '#0492FF';


for (let i=0; i < this.tabs.length; i++){

this.tabs[i].addEventListener('click', this.startTab);

}

}

startTab = (e) =>{

const cotizacion = new Cotizacion();

//establece estados graficos de tabs

for (let i = 0; i < this.tabs.length; i++){

    if (e.target == this.tabs[i]){
     
     this.tabs[i].style.backgroundColor = 'white';
     this.tabs[i].style.color = '#0492FF';
 
    }else {  
     
     this.tabs[i].style.backgroundColor = '#4FA1E1';
     this.tabs[i].style.color = 'white';
    }
 
            
 }

if (this.estado == 'facturas'){

// code in facture    

}else if (this.estado == 'cotizacion'){



if (e.target.innerText == 'Plan basico'){

this.planes.push(2500)

cotizacion.sumaCotizacion({ precio : 2500, plan : this.planes});

}else if (e.target.innerText == 'Plan medio'){

this.planes.push(4500)

cotizacion.sumaCotizacion({ precio : 4500, plan : this.planes});

    
}else if (e.target.innerText == 'Plan premium'){

this.planes.push(6500)

cotizacion.sumaCotizacion({ precio : 6500, plan : this.planes});
    
}

}else {

 // code in actualization   
}


}


}