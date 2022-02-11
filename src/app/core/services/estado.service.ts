

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Estado } from '../model/estado.model';

@Injectable({
  providedIn: 'root',
})
export class EstadoService {
private apiUrl2 ='http://localhost:4000';


  constructor( private http: HttpClient) {}

  getEstados(): Observable<Estado[]>{
    return this.http.get<Estado[]>(`${this.apiUrl2}/state`)
  }
}


