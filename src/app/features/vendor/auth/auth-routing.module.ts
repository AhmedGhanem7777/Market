import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VendorLoginComponent } from './vendor-login/vendor-login.component';
import { VendorRegisterComponent } from './vendor-register/vendor-register.component';
import { NotFoundComponent } from '../../../shared/components/not-found/not-found.component';
import { VendorLoadingComponent } from './vendor-loading/vendor-loading.component';

const routes: Routes = [
  {path:'',redirectTo:'vendor-loading',pathMatch:'full'},
  {path:'vendor-loading',component:VendorLoadingComponent},
  {path:'vendor-login',component:VendorLoginComponent},
  {path:'vendor-register',component:VendorRegisterComponent},
  {path:'**',component:NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
