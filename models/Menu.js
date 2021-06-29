export default class Menu{

constructor(){

this.menu = document.querySelector('#mainUser');
    
btnMenu.addEventListener('click', () => {this.mostrarMenu(this.menu)}); 

}

mostrarMenu(menu) {
     

if (menu.style.display === 'flex'){

menu.style.display = 'none';

}else{

menu.style.display = 'flex';    
}

}

}