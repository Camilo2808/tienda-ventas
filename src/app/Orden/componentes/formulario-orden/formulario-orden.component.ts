import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { tap } from 'rxjs';
import { Ciudad } from 'src/app/core/model/ciudad.model';
import { Estado } from 'src/app/core/model/estado.model';
import { Detalle, Orden } from 'src/app/core/model/orden.model';
import { Pedido } from 'src/app/core/model/pedidos.model';
import { Producto } from 'src/app/core/model/producto.model';
import { CarritoService } from 'src/app/core/services/carrito.service';
import { CiudadService } from 'src/app/core/services/ciudad.service';
import { EstadoService } from 'src/app/core/services/estado.service';
import { OrdenService } from 'src/app/core/services/orden.service';
import { PedidosService } from 'src/app/core/services/pedidos.services';

@Component({
  selector: 'app-formulario-orden',
  templateUrl: './formulario-orden.component.html',
  styleUrls: ['./formulario-orden.component.scss'],
})
export class FormularioOrdenComponent implements OnInit {
  estados: Estado[] = [];
  ciudades: Ciudad[] = [];
  pedidos: Pedido[] = [];
  cart: Producto[] = [];
  producto: Producto[] = [];
  modelo = {
    nombre: '',
    apellido: '',
    correo: '',
    estado: '',
    ciudad: '',
    ciudades: '',
    estados: '',
    pedidos: '',
  };

  constructor(
    private estadoService: EstadoService,
    private ciudadService: CiudadService,
    private pedidosService: PedidosService,
    private ordenService: OrdenService,
    private carritoService: CarritoService,
    private router: Router
  ) {}

  ngOnInit() {
    this.getEstados();
    this.getCiudadaes();
    this.getPedidos();
    this.getDataCart();
    this.prepararDetalle();
  }

  delivery() {
    console.log('Pedido Delivery');
  }
  tienda() {
    console.log('Pedido Tienda');
  }
  //guardar formulario de pagos
  onSubmit({ value: formData }: NgForm): void {
    console.log('Guardar', formData);
    const data: Orden = { ...formData };

    this.ordenService.guardarOden(data).subscribe();
    this.router.navigate(['/home']);
  }

  

  private prepararDetalle(): Detalle[] {
    const detalle: Detalle[] = [];
    this.cart.forEach((producto: Producto) => {
      const { id, name, cantidad } = producto;
      //detalle.push();
    });
    return detalle;
  }

  private getEstados() {
    this.estadoService
      .getEstados()
      .pipe(tap((estados: Estado[]) => (this.estados = estados)))
      .subscribe();
  }

  private getCiudadaes() {
    this.ciudadService
      .getCiudades()
      .pipe(tap((ciudades: Ciudad[]) => (this.ciudades = ciudades)))
      .subscribe();
  }

  private getPedidos() {
    this.pedidosService
      .getPedidos()
      .pipe(tap((pedidos: Pedido[]) => (this.pedidos = pedidos)))
      .subscribe();
  }

  private getDataCart(): void {
    this.carritoService.cartActions$.pipe(
      tap((productos: Producto[]) => (this.cart = productos))
    ).subscribe;
  }
}

/* this.ordenService
    // date: this.getCurrentDay(),
      .guardarOden(data)
      .pipe(
        tap((res) => console.log('orden=>', res)),
        switchMap((order) => {
          const ordenId = order.nombre;
          const detalle = this.prepararDetalle();
          return this.ordenService.guardarDetalleOrden({ detalle, ordenId });
        }),
        tap((res) => console.log('fin=>', res))
      )
      .subscribe();*/
/*
  guardarProducto(event: Event){
    event.preventDefault();
    if(this.form.valid){
      const producto = this.form.value;
      this.productoService.editarProducto(this.id,producto)
      .subscribe( (newProducto) => {
      console.log(newProducto);
      this.router.navigate(['admin/producto']);
      } )
    }
    console.log(this.form.value);
  }
*/
