import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetalleProductoComponent } from './componentes/detalle-producto/detalle-producto.component';
import { ProductosComponent } from './componentes/productos/productos.component';



const routes: Routes =[
  {path:'',component:ProductosComponent},
   {path:':id', component:DetalleProductoComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductoRoutingModule { }
