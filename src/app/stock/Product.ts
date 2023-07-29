export class Product {

  id: number;
  nombre: string;
  referencia: number
  categoria: string;
  precio: number ;
  peso: number;
  inventario: number;
  fecha: string;

  constructor(
    id: number,
    nombre: string,
    referencia: number,
    categoria: string,
    precio: number,
    peso: number,
    inventario: number,
    fecha: string

  )

  {
    this.id = id;
    this.nombre = nombre;
    this.referencia = referencia;
    this.categoria = categoria;
    this.precio = precio;
    this.peso = peso;
    this.inventario = inventario;
    this.fecha = fecha;
  }
}
