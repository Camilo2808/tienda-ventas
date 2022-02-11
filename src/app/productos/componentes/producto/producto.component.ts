import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from "@angular/core";
import { Producto } from "src/app/core/model/producto.model";
import { CarritoService } from "src/app/core/services/carrito.service";
import { CartService } from "src/app/core/services/cart.service";

@Component({
  selector:'app-producto',
  templateUrl:'./producto.component.html',
  styleUrls: ['./producto.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductoComponent {
  @Input() productos: Producto ;
  @Output() addCarts: EventEmitter<any> = new EventEmitter();

  constructor( private cartService: CartService,
                private carritoService:CarritoService){}

  agregarAlCarrito(productos:Producto){
    console.log('Producto nuevo en carrito');
    this.addCarts.emit(this.productos.id + ' ' + this.productos.name);
    this.cartService.agregarProductoCarrito(this.productos);
this.carritoService.upCart(productos);
  }

  }
