import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from '../../../shared/components/not-found/not-found.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AccountStatementComponent } from './account-statement/account-statement.component';
import { CategoriesComponent } from './products/categories/categories.component';
import { AllProductsComponent } from './products/all-products/all-products.component';
import { AddProductComponent } from './products/add-product/add-product.component';
import { ManageProductComponent } from './products/manage-product/manage-product.component';
import { MySettingComponent } from './settings/my-setting/my-setting.component';
import { MyProfileComponent } from './settings/my-profile/my-profile.component';
import { VendorOrdersComponent } from './orders/vendor-orders/vendor-orders.component';


const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  {
    path: 'dashboard', component: DashboardComponent, children: [
      { path: '', redirectTo: 'all-products', pathMatch: 'full' },
      { path: 'categories', component: CategoriesComponent },
      { path: 'all-products', component: AllProductsComponent },
      { path: 'add-product', component: AddProductComponent },
      { path: 'manage-product', component: ManageProductComponent },
      { path: 'vendor-orders', component: VendorOrdersComponent },
      { path: 'account-statement', component: AccountStatementComponent },
      { path: 'my-setting', component: MySettingComponent },
      { path: 'my-profile', component: MyProfileComponent },
      { path: '**', component: NotFoundComponent }
    ]
  },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VendorDashboardRoutingModule { }
