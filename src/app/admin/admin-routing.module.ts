import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './componentes/dashboard/dashboard.component';
import { EditarProductoComponent } from './componentes/editar-producto/editar-producto.component';
import { FormularioProductosComponent } from './componentes/formulario-productos/formulario-productos.component';
import { FormularioComponent } from './componentes/formulario/formulario.component';
import { ListaProductosComponent } from './componentes/lista-productos/lista-productos.component';
import { NavComponent } from './componentes/nav/nav.component';
import { TableComponent } from './componentes/table/table.component';

const routes: Routes = [
  {
    path: '',
    component: NavComponent,
    children: [
      { path: 'crear', component: FormularioComponent },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'table', component: TableComponent },
      { path: 'producto', component: ListaProductosComponent },
      { path: 'producto/crear', component:FormularioProductosComponent },
      { path: 'producto/editar/:id', component:EditarProductoComponent},
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
