import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from '../../shared/components/not-found/not-found.component';

const routes: Routes = [
  {path:'' , redirectTo:'Auth' , pathMatch:'full'},
  {path:'Auth',loadChildren:()=>import('./auth/auth.module').then((m)=>m.AuthModule)},
  {path:'**' , component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule { }
