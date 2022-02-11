import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { AdminRoutingModule } from './admin-routing.module';
import { FormularioComponent } from './componentes/formulario/formulario.component';
import { NavComponent } from './componentes/nav/nav.component';
import { TableComponent } from './componentes/table/table.component';
import { DashboardComponent } from './componentes/dashboard/dashboard.component';
import { MaterialModule } from '../material/material.module';
import { ListaProductosComponent } from './componentes/lista-productos/lista-productos.component';
import { FormularioProductosComponent } from './componentes/formulario-productos/formulario-productos.component';
import { EditarProductoComponent } from './componentes/editar-producto/editar-producto.component';



@NgModule({
  declarations: [FormularioComponent, NavComponent, TableComponent, DashboardComponent, ListaProductosComponent, FormularioProductosComponent, EditarProductoComponent],
  imports: [
    ReactiveFormsModule,
    AdminRoutingModule,
    CommonModule,
    MaterialModule

  ]
})
export class AdminModule { }
