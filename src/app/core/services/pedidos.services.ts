

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pedido } from '../model/pedidos.model';



@Injectable({
  providedIn: 'root',
})
export class PedidosService {
private apiUrl2 ='http://localhost:4000';


  constructor( private http: HttpClient) {}

  getPedidos(): Observable<Pedido[]>{
    return this.http.get<Pedido[]>(`${this.apiUrl2}/pedidos`)
  }
}


