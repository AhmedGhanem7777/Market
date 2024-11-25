import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { NotFoundComponent } from '../../../../shared/components/not-found/not-found.component';

const routes: Routes = [
  { path: '', redirectTo:'my-orders',pathMatch:'full' },
  { path: 'my-orders', component:MyOrdersComponent },
  { path: '**', component:NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrdersRoutingModule { }
