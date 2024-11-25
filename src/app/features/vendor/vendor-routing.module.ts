import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from '../../shared/components/not-found/not-found.component';

const routes: Routes = [
  {path:'',redirectTo:'auth',pathMatch:'full'},
  {path:'auth',loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)},
  {path:'vendor-dashboard',loadChildren: () => import('./vendor-dashboard/vendor-dashboard.module').then(m => m.VendorDashboardModule)},
  {path:'**',component:NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VendorRoutingModule { }
