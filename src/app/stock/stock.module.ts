import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppHeaderModule } from '../app-header/app-header.module';
import { AddProductsComponent } from './add-products/add-products.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListProductsComponent } from './list-products/list-products.component';
import { SellProductsComponent } from './sell-products/sell-products.component';
import { GraphicsComponent } from './graphics/graphics.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Graph1Component } from './graph1/graph1.component';
import { Graph2Component } from './graph2/graph2.component';


@NgModule({
  imports: [
    CommonModule,
    AppHeaderModule,
    ReactiveFormsModule,
    NgxChartsModule,
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule

  ],
  declarations: [AddProductsComponent, ListProductsComponent, SellProductsComponent, GraphicsComponent, Graph1Component, Graph2Component]
})
export class StockModule { }
