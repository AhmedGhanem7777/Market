import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VendorDashboardRoutingModule } from './vendor-dashboard-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SidebarComponent } from './sidebar/sidebar.component';

import { AccountStatementComponent } from './account-statement/account-statement.component';
import { AddProductComponent } from './products/add-product/add-product.component';
import { AllProductsComponent } from './products/all-products/all-products.component';
import { CategoriesComponent } from './products/categories/categories.component';
import { ManageProductComponent } from './products/manage-product/manage-product.component';
import { MySettingComponent } from './settings/my-setting/my-setting.component';
import { MyProfileComponent } from './settings/my-profile/my-profile.component';
import { ProductHeaderComponent } from './products/product-header/product-header.component';
import { ProductFiltersComponent } from './products/product-filters/product-filters.component';
import { ProductListComponent } from './products/product-list/product-list.component';
import { FormsModule } from '@angular/forms';
import { VendorOrdersComponent } from './orders/vendor-orders/vendor-orders.component';

@NgModule({
  declarations: [
  
    DashboardComponent,
    SidebarComponent,
    AccountStatementComponent,
    AddProductComponent,
    AllProductsComponent,
    CategoriesComponent,
    ManageProductComponent,
    MySettingComponent,
    MyProfileComponent,
    ProductHeaderComponent,
    ProductFiltersComponent,
    ProductListComponent,
    VendorOrdersComponent,
  ],
  imports: [
    CommonModule,
    VendorDashboardRoutingModule,
    FormsModule
  ]
})
export class VendorDashboardModule { }
