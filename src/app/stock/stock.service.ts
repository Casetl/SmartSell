import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Inventory, Product, Sell } from './Product';


@Injectable({
  providedIn: 'root'
})
export class StockService {

  private productsUrl: string = environment.baseUrl + 'products';
  private inventoryUrl: string = environment.baseUrl + 'inventory';
  private sellUrl: string = environment.baseUrl + 'sell';

  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.productsUrl);
  }

  getInventory(): Observable<Inventory[]> {
    return this.http.get<Inventory[]>(this.inventoryUrl);
  }

  getSells(): Observable<Sell[]> {
    return this.http.get<Sell[]>(this.sellUrl);
  }
}
