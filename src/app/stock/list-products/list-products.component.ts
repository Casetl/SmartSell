import { Component, OnInit } from '@angular/core';
import { Product } from '../Product';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})
export class ListProductsComponent implements OnInit {

  title = 'List Products';
  data!: Array<Product>

  constructor() {

    this.data = [
      {id:  1,  nombre: 'Galletas',  referencia: 45 ,  categoria: 'Dulces', precio: 45,  peso: 45, inventario:78, fecha: "12/05/2023" },
      {id:  2,  nombre: 'Dulces',  referencia: 74 ,  categoria: 'Dulces', precio: 38,  peso: 41, inventario:50, fecha: "14/05/2023" },
      ]
  ;
}

  ngOnInit() {

  }

}
