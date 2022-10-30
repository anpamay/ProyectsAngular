import { Component, VERSION } from '@angular/core';
import {Product} from './product.model'

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ]
})
export class AppComponent  {
  

  name= 'Nicolas';
  age =18;
  img = 'https://www.w3schools.com/howto/img_avatar.png';
  btnDisabled=true;

person = {
   name:'Nicolas Toro',
   age: 20,
   avatar: 'https://www.w3schools.com/howto/img_avatar.png'
}

toggleButton(){
    this.btnDisabled=!this.btnDisabled;

}

increaseAge(){
    this.age +=1;
}

sonScroll(event:Event){
     const element = event.target as HTMLElement;
     console.log(element.scrollTop);


}

changeName (event:Event){
  const element = event.target as HTMLInputElement;
  this.name=element.value;
}

names:String[]= ['Nico' , 'Juli', 'Santi'];
newName='';

addName(){
   this.names.push(this.newName);
   this.newName='';
}

borrarName(index:number){
   this.names.splice(index,1);

}

products:Product[] = [
    {
      name: 'EL mejor juguete',
      price: 565,
      image: './assets/images/muneco.jpg',
      category: 'all',
    },
    {
      name: 'Bicicleta casi nueva',
      price: 356,
      image: './assets/images/bike.jpg'
    },
    {
      name: 'Colleción de albumnes',
      price: 34,
      image: './assets/images/albumes.jpg'
    },
    {
      name: 'Mis libros',
      price: 23,
      image: './assets/images/books.jpg'
    },
    {
      name: 'Casa para perro',
      price: 34,
      image: './assets/images/casita.jpg'
    },
    {
      name: 'Gafas',
      price: 3434,
      image: './assets/images/gafas.jpg'
    }
  ]
}
