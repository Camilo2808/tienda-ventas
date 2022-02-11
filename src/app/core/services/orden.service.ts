import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {  DetalleOrden, Orden } from '../model/orden.model';

@Injectable({
  providedIn: 'root',
})
export class OrdenService {
  private apiUrl2 ='http://localhost:4000';

  constructor(private http: HttpClient){}

  guardarOden(orden:Orden):Observable<Orden> {
      return this.http.post<Orden>(`${this.apiUrl2}/orden`, orden);
  }

  guardarDetalleOrden(detalle:DetalleOrden):Observable<DetalleOrden>{
  return this.http.post<DetalleOrden>(`${this.apiUrl2}/detalle`, detalle);
  }

}
