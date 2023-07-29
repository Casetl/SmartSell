import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductsComponent } from './stock/add-products/add-products.component';
import { ListProductsComponent } from './stock/list-products/list-products.component';
import { SellProductsComponent } from './stock/sell-products/sell-products.component';
import { GraphicsComponent } from './stock/graphics/graphics.component';


const routes: Routes = [

  {
    path: '',
    component: AddProductsComponent,
    pathMatch: 'full'
  },

  {
    path: 'addProducts',
    component: AddProductsComponent,
    pathMatch: 'full'
  },

  {
    path: 'listProducts',
    component: ListProductsComponent,
    pathMatch: 'full'
  },


  {
    path: 'sellProducts',
    component: SellProductsComponent,
    pathMatch: 'full'
  },


  {
    path: 'graphics',
    component: GraphicsComponent,
    pathMatch: 'full'
  },







];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
