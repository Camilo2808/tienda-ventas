import { Injectable } from '@angular/core';
import {  BehaviorSubject, Observable } from 'rxjs';
import { Producto } from '../model/producto.model';

@Injectable({
  providedIn: 'root',
})
export class CarritoService {
  productos: Producto [] = [];

  constructor() {}

  private totalSubject = new BehaviorSubject<number>(0);

  private cantidadSubject = new BehaviorSubject<number>(0);

  private cartSubject = new BehaviorSubject<Producto[]>([]);


  get totalActions$(): Observable<number> {
    return this.totalSubject.asObservable();
  }
  get cantidadActions$(): Observable<number> {
    return this.cantidadSubject.asObservable();
  }
  get cartActions$(): Observable<Producto[]> {
    return this.cartSubject.asObservable();
  }


  upCart(productos: Producto){
      this.agregarCart(productos);
      this.cantidadProductos();
      this.calcularTotal();
  }



private calcularTotal(){
    const total:number = this.productos.reduce( (acc, prod:any) =>acc += (prod.price * prod.cantidad), 0 );
    this.totalSubject.next(total);
}

private cantidadProductos(){
  const cantidad = this.productos. reduce( (acc, prod:any) =>acc += prod.cantidad, 0 );
  this.cantidadSubject.next(cantidad);
}

private agregarCart(producto:Producto):void{
  const isProducto = this.productos.find( ({id}) => id ===producto.id)

  if(isProducto){
    isProducto.cantidad += 1;
  }else {
    this.productos.push({...producto,cantidad:1})
  }

  this.cartSubject.next(this.productos);
 // this.productos.push(producto);
}

eliminarProducto(producto:Producto): void{
const isItem = this.productos.find( ({id}) => id ===producto.id)

if(isItem){
  isItem.cantidad -= 1;
}else{
  console.log('Producto Eliminado del Caarrito')
}
}






 
}
