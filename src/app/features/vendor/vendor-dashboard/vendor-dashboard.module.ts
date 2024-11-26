import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VendorDashboardRoutingModule } from './vendor-dashboard-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { OrdersComponent } from './orders/orders.component';
import { SidebarComponent } from './sidebar/sidebar.component';

import { AccountStatementComponent } from './account-statement/account-statement.component';
import { AddProductComponent } from './products/add-product/add-product.component';
import { AllProductsComponent } from './products/all-products/all-products.component';
import { CategoriesComponent } from './products/categories/categories.component';
import { ManageProductComponent } from './products/manage-product/manage-product.component';
import { MySettingComponent } from './settings/my-setting/my-setting.component';
import { MyProfileComponent } from './settings/my-profile/my-profile.component';


@NgModule({
  declarations: [
  
    DashboardComponent,
    OrdersComponent,
    SidebarComponent,
    AccountStatementComponent,
    AddProductComponent,
    AllProductsComponent,
    CategoriesComponent,
    ManageProductComponent,
    MySettingComponent,
    MyProfileComponent
  ],
  imports: [
    CommonModule,
    VendorDashboardRoutingModule
  ]
})
export class VendorDashboardModule { }
