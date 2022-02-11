export interface Detalle {
  id: string;
  name: string;
  cantidad: string;

}

export interface Orden {
  nombre: string;
  apellido: string;
  estado: string;
  ciudad: string;
  correo: string;

}
export interface DetalleOrden{
  detalle: Detalle[];

  ordenId:string;
 // id?:
}
