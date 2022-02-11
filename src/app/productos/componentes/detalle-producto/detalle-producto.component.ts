import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ProductoService } from 'src/app/core/services/producto.service';

@Component({
  selector: 'app-detalle-producto',
  templateUrl: './detalle-producto.component.html',
  styleUrls: ['./detalle-producto.component.scss'],
})
export class DetalleProductoComponent implements OnInit {
  producto: any;
  constructor(
    private route: ActivatedRoute,
    private productoService: ProductoService
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      const id = params['id'];
      this.fetchProducto(id);
      // this.producto = this.productoService.getProductos(id);
    });
  }

  fetchProducto(id: string) {
    this.productoService.getProductos(id)
    .subscribe((producto) => {
      this.producto = producto;

    });
  }

  crearProducto(){
    const nuevoProducto = {
      id: '08',
      name: 'Cafe Nuevo',
      image:'assets/img/cafe fondo.jfif',
      description: 'Producto en Desarrollo',
      price: 15,
      cantidad: 2
    }
     this.productoService.crearProducto(nuevoProducto)
     .subscribe(producto =>{
      // this.producto = producto;
     console.log(producto);
     });

    }
    editarProducto(){
      const editarProducto = {
        id: '25',
        name: 'Cafe Nuevo',
        description: ' Editado Producto en Desarrollo',
        price: 15
      }
      this.productoService.editarProducto('28', editarProducto)
      .subscribe(producto=> {
        console.log(producto);
      });
    }

    borrarProducto(){
      this.productoService.borrarProducto('08')
      .subscribe(rta => {
        console.log(rta);
      });
    }

}
