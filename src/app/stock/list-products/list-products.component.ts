import { Component, OnInit } from '@angular/core';
import { Product } from '../Product';
import { StockService } from '../stock.service';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})
export class ListProductsComponent implements OnInit {

  title = 'List Products';
  data!: Array<Product>
  products: Array<Product> = [];

  constructor(
    private stockService: StockService

  ) {}

  ngOnInit() {
    console.log("Aqui Comienza")
    this.getProducts()

  }

  getProducts(): void {
    this.stockService.getProducts().subscribe((products) => {
      this.products = products;
    });
  }

}
