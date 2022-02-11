import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/core/model/producto.model';
import { ProductoService } from 'src/app/core/services/producto.service';

@Component({
  selector: 'app-lista-productos',
  templateUrl: './lista-productos.component.html',
  styleUrls: ['./lista-productos.component.scss']
})
export class ListaProductosComponent implements OnInit {
  
  productos: Producto[];
  
  displayedColumns:string[] = ['id', 'name', 'price', 'actions' ];

  constructor(private productoService: ProductoService) { }

  ngOnInit(){
    this.fetchProductos();
  }

  fetchProductos(){
    this.productoService.getAllProductos()
    .subscribe(productos => {
      this.productos = productos;
    });
  }

  borrarProducto(id: string){
    this.productoService.borrarProducto(id)
    .subscribe(rta => {
      this.fetchProductos();
    });
  }
}
