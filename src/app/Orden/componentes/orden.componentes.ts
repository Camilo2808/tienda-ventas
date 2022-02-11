import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Producto } from 'src/app/core/model/producto.model';
import { CarritoService } from 'src/app/core/services/carrito.service';
import { CartService } from 'src/app/core/services/cart.service';

@Component({
  selector: 'app-orden',
  templateUrl: './orden.component.html',
  styleUrls: ['./orden.component.scss'],
})
export class OrdenComponent implements OnInit {

  productos$: Observable<Producto[]>;

  constructor(private cartService: CartService,
                private carritoService:CarritoService) {
    this.productos$ = this.cartService.cart$;
  }
  ngOnInit() {}




}

/*
 eliminarItem(id:any):void{
    this.carritoService.eliminarProducto(id);
    console.log(id);

  }
*/
