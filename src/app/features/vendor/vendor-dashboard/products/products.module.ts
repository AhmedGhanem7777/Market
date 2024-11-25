import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { MyProductsComponent } from './my-products/my-products.component';
import { MyProductsDetailsComponent } from './my-products-details/my-products-details.component';


@NgModule({
  declarations: [
    MyProductsComponent,
    MyProductsDetailsComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule
  ]
})
export class ProductsModule { }
