import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { VendorLoginComponent } from './vendor-login/vendor-login.component';
import { VendorRegisterComponent } from './vendor-register/vendor-register.component';
import { VendorLoadingComponent } from './vendor-loading/vendor-loading.component';


@NgModule({
  declarations: [
    VendorLoginComponent,
    VendorRegisterComponent,
    VendorLoadingComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule
  ]
})
export class AuthModule { }
