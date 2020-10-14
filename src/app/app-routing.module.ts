import { componentFactoryName } from '@angular/compiler';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccessGuard } from './AccessGuard/access.guard';
import { AuthTest1Component } from './modules/auth-test1/auth-test1.component';
import { LandingComponent } from './modules/landing/landing.component';
import { LoginComponent } from './modules/login/login.component';



const routes: Routes = [
  {path:"", component:LandingComponent},
  {path:"Auth", component:AuthTest1Component, data:{requiresLogin:true}, canActivate:[AccessGuard]},
  {path:"Login", component:LoginComponent, data:{requiresLogout:true}, canActivate:[AccessGuard]},
  {path:"Login/:tab", component:LoginComponent, data:{requiresLogout:true}, canActivate:[AccessGuard]},
  {path:"Login/:tab/:regtype", component:LoginComponent, data:{requiresLogout:true}, canActivate:[AccessGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
