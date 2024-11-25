import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';

const routes: Routes = [
  {path:'',loadChildren:()=>import('./features/public/public.module').then((m)=>m.PublicModule)},
  {path:'client',loadChildren:()=>import('./features/client/client.module').then((m)=>m.ClientModule)},
  {path:'vendor',loadChildren:()=>import('./features/vendor/vendor.module').then((m)=>m.VendorModule)},
  {path:'**',component:NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
