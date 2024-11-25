import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyProductsComponent } from './my-products/my-products.component';
import { MyProductsDetailsComponent } from './my-products-details/my-products-details.component';
import { NotFoundComponent } from '../../../../shared/components/not-found/not-found.component';

const routes: Routes = [
  {path:'',redirectTo:'my-products',pathMatch:'full'},
  {path:'my-products',component:MyProductsComponent},
  {path:'my-products-details',component:MyProductsDetailsComponent},
  {path:'**',component:NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
