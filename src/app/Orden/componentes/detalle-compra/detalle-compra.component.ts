import { Component, OnInit } from '@angular/core';
import { CarritoService } from 'src/app/core/services/carrito.service';

@Component({
  selector: 'app-detalle-compra',
  templateUrl: './detalle-compra.component.html',
  styleUrls: ['./detalle-compra.component.scss'],
})
export class DetalleCompraComponent implements OnInit {
  total$ = this.carritoService.totalActions$;
  carro$ = this.carritoService.cartActions$;

  displayedColumns: string[] = ['name', 'cantidad', 'price'];

  displayedColumnsa: string[] = ['total'];
  
  constructor(private carritoService: CarritoService) {}

  ngOnInit() {}
}
