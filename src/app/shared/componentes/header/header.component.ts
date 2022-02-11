import { Component } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Producto } from 'src/app/core/model/producto.model';
import { CarritoService } from 'src/app/core/services/carrito.service';
import { CartService } from 'src/app/core/services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent  {

    cantidad$ = this.carritoService.cantidadActions$;
    totales$ = this.carritoService.totalActions$;
    carrito$ = this.carritoService.cartActions$;


  productos: Producto[] = [];
    total$: Observable<number>;

  constructor(private cartService: CartService,
              private carritoService: CarritoService){
     this.total$ = this.cartService.cart$
    .pipe(
      map( productos => productos.length )
    );



  }

}

/*
this.cartService.cart$
.subscribe(productos =>{
  console.log(productos);
  this.total = productos.length;*/
