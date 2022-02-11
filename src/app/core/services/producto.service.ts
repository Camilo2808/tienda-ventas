import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Producto } from '../model/producto.model';

@Injectable({
  providedIn: 'root',
})
export class ProductoService {

  apiUrl: ' http://localhost:4000 ';

  constructor(private http: HttpClient) {}

  getAllProductos() {
    return this.http.get<Producto[]>( `${environment.aipUrl}/productos` );
  }


  getProductos(id: string) {
    // return this.productos.find( item => id === item.id);
    return this.http.get<Producto>( `${environment.aipUrl}/productos/${id}` );
  }

  crearProducto(producto:Producto){
  return this.http.post( `${environment.aipUrl}/productos`,producto);

  }
  editarProducto(id:string, changes: Partial<Producto> ){
return this.http.put( `${environment.aipUrl}/productos/${id}`, changes );
  }

  borrarProducto(id:string){
return this.http.delete( `${environment.aipUrl}/productos/${id}` );
  }
}
