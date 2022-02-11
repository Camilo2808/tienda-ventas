import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Producto } from '../model/producto.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private  productos: Producto[] = [];
  private cart = new BehaviorSubject<Producto[]>( [] );

  cart$ = this.cart.asObservable();
  constructor() { }

agregarProductoCarrito(producto: Producto){
    this.productos = [...this.productos,producto];
    this.cart.next(this.productos);
}

}
