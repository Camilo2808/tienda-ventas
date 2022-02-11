import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductoService } from './services/producto.service';
import { CartService } from './services/cart.service';
import { CarritoService } from './services/carrito.service';
import { EstadoService } from './services/estado.service';
import { HttpClientModule } from '@angular/common/http';
import { CiudadService } from './services/ciudad.service';
import {  OrdenService } from './services/orden.service';
import { PedidosService } from './services/pedidos.services';

@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    HttpClientModule,


  ],
  exports:[],
  providers:[
    ProductoService,
    CartService,
    CarritoService,
    EstadoService,
    CiudadService,
    PedidosService,
    OrdenService,
  ]
})
export class CoreModule { }
