import { Component, OnInit } from '@angular/core';
import { StockService } from '../stock.service';
import { Format } from '../Product';

@Component({
  selector: 'app-graph2',
  templateUrl: './graph2.component.html',
  styleUrls: ['./graph2.component.css']
})
export class Graph2Component implements OnInit {

  view: [number, number] = [1000, 300]

  // options
  gradient: boolean = true;
  showLegend: boolean = true;
  showLabels: boolean = true;
  isDoughnut: boolean = false;

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  inventory: Array<Format> = [];
  
  constructor( private stockService: StockService,) {

  }

  ngOnInit() {
    this.getSells()
  }

  onResize(event: any) {
    this.view = [event.target.innerWidth / 1.35, 300];
  }

  onSelect(data:any): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  onActivate(data: any): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data: any): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }


  getSells(): void {
    this.stockService.getSells().subscribe((products) => {
      products.map(elem => this.inventory.push({name: elem.nombre, value: elem.cantidad_ventas}));
    });
  }
}
