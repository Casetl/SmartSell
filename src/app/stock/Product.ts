export class Product {

  id: number;
  nombre: string;
  referencia: number
  categoria: string;
  precio: number ;
  peso: number;
  inventario: number;
  fecha_creacion: string;

  constructor(
    id: number,
    nombre: string,
    referencia: number,
    categoria: string,
    precio: number,
    peso: number,
    inventario: number,
    fecha_creacion: string

  )

  {
    this.id = id;
    this.nombre = nombre;
    this.referencia = referencia;
    this.categoria = categoria;
    this.precio = precio;
    this.peso = peso;
    this.inventario = inventario;
    this.fecha_creacion = fecha_creacion;
  }
}




export class Inventory {


  nombre: string;
  inventario: number;


  constructor(

    nombre: string,
    inventario: number,

  )

  {

    this.nombre = nombre;
    this.inventario = inventario;

  }
}

export class Format {


  name: string;
  value: number;


  constructor(

    name: string,
    value: number,

  )

  {

    this.name = name;
    this.value = value;

  }
}

export class Sell {


  nombre: string;
  cantidad_ventas: number;


  constructor(

    nombre: string,
    cantidad_ventas: number,

  )

  {

    this.nombre = nombre;
    this.cantidad_ventas = cantidad_ventas;

  }
}

