import { Component, OnInit } from "@angular/core";
import { Producto } from "src/app/core/model/producto.model";
import { ProductoService } from "src/app/core/services/producto.service";

@Component({
  selector:'app-productos',
  templateUrl:'./productos.component.html',
  styleUrls: ['./productos.component.scss']
})
export class ProductosComponent implements OnInit {

 productos: Producto [];
  
 constructor(private productoService: ProductoService){} 

 ngOnInit(){
     this.productoService.getAllProductos()
     .subscribe( productos => {
       this.productos = productos;
     });
 }

  clickProducto(id:string){
    console.log(id);


  }
}
