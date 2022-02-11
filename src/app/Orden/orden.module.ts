import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';
import { SharedModule } from '../shared/shared.module';
import { DetalleCompraComponent } from './componentes/detalle-compra/detalle-compra.component';
import { FormularioOrdenComponent } from './componentes/formulario-orden/formulario-orden.component';
import { OrdenComponent } from './componentes/orden.componentes';
import { OrdenRoutingModule } from './orden-routing.module';

@NgModule({
  declarations:[
     OrdenComponent,
    FormularioOrdenComponent,
    DetalleCompraComponent
    ],

  imports: [
    CommonModule,
     OrdenRoutingModule,
      MaterialModule,
      SharedModule,
      FormsModule
    ],

  exports: [],
})
export class OrdenModule {}
