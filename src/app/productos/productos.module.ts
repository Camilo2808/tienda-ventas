import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { MaterialModule } from '../material/material.module';


import { ProductoComponent } from './componentes/producto/producto.component';
import { ProductoRoutingModule } from './producto-routing.module';
import { ProductosComponent } from './componentes/productos/productos.component';
import { DetalleProductoComponent } from './componentes/detalle-producto/detalle-producto.component';




@NgModule({
  declarations: [
  ProductoComponent,
  ProductosComponent,
  DetalleProductoComponent,

  ],
  imports: [
    CommonModule,
    MaterialModule,
    ProductoRoutingModule,




  ],
  exports:[
    ProductoComponent,
    ProductosComponent
  ],
})
export class   ProductosModule { }
