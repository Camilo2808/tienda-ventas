

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ciudad } from '../model/ciudad.model';

@Injectable({
  providedIn: 'root',
})
export class CiudadService {
private apiUrl2 ='http://localhost:4000';


  constructor( private http: HttpClient) {}

  getCiudades(): Observable<Ciudad[]>{
    return this.http.get<Ciudad[]>(`${this.apiUrl2}/ciudad`)
  }
}

