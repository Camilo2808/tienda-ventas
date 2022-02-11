import { AbstractControl } from "@angular/forms";



export class MyValidators {

 static  priceValid(control: AbstractControl){
      const value = control.value;
      console.log(value);
      if(value > 10000){
        return {precio_invalido: true}
      }
      return null;
  }

}

/*
const firebaseConfig = {
  apiKey: "AIzaSyBFIve0_7s-dN5sYuB4-2jOpAraC14CcdE",
  authDomain: "store-shop-3cf5a.firebaseapp.com",
  projectId: "store-shop-3cf5a",
  storageBucket: "store-shop-3cf5a.appspot.com",
  messagingSenderId: "826532352738",
  appId: "1:826532352738:web:74cfbaf50a0cb326f104bb"
};
*/
