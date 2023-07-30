import { Component, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { StockService } from '../stock.service';
import { Format } from '../Product';


@Component({
  selector: 'app-graph1',
  templateUrl: './graph1.component.html',
  styleUrls: ['./graph1.component.css']
})
export class Graph1Component implements OnInit {

  view: [number, number] = [1000, 300]

  // options
  gradient: boolean = true;
  showLegend: boolean = true;
  showLabels: boolean = true;
  isDoughnut: boolean = false;

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };


  constructor(
    private stockService: StockService,
  ) {

  }

  inventory: Array<Format> = [];


  ngOnInit() {
    this.getInventory()
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


  getInventory(): void {
    this.stockService.getInventory().subscribe((products) => {
      products.map(elem => this.inventory.push({name: elem.nombre, value: elem.inventario}));


    });
  }


}
