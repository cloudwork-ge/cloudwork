import { componentFactoryName } from '@angular/compiler';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccessGuard } from './AccessGuard/access.guard';
import { AddProjectComponent } from './modules/add-project/add-project.component';
import { AuthTest1Component } from './modules/auth-test1/auth-test1.component';
import { LandingComponent } from './modules/landing/landing.component';
import { LoginComponent } from './modules/login/login.component';
import { ProfileComponent } from './modules/profile/profile.component';
import { ProfileModule } from './modules/profile/profile.module';
import { ProjectDetailsComponent } from './modules/project-details/project-details.component';
import { ProjectsComponent } from './modules/projects/projects.component';
import { TermsConditionComponent } from './modules/terms-condition/terms-condition.component';



const routes: Routes = [
  {path:"", component:LandingComponent, canActivate:[AccessGuard]},
  // {path:"Auth", component:AuthTest1Component, data:{requiresLogin:true}, canActivate:[AccessGuard]},
  {path:"Profile", component:ProfileComponent, data:{requiresLogin:true}, canActivate:[AccessGuard]},
  {path:"AddProject", component:AddProjectComponent, data:{requiresLogin:true}, canActivate:[AccessGuard]},
  {path:"Projects", component:ProjectsComponent},
  {path:"ProjectDetails/:id", component:ProjectDetailsComponent},
  {path:"TermsCondition/:id", component:TermsConditionComponent},
  {path:"Login", component:LoginComponent, data:{requiresLogout:true}, canActivate:[AccessGuard]},
  {path:"Login/:tab", component:LoginComponent, data:{requiresLogout:true}, canActivate:[AccessGuard]},
  {path:"Login/:tab/:regtype", component:LoginComponent, data:{requiresLogout:true}, canActivate:[AccessGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
