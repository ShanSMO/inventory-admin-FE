import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './modules/login/login/login.component';
import {OrganiationWizardContainerComponent} from './modules/organization-register/organiation-wizard-container/organiation-wizard-container.component';
import {SignUpComponent} from './modules/login/sign-up/sign-up.component';
import {LoginLayoutComponent} from './modules/login/login-layout/login-layout.component';
import {ForgotPasswordComponent} from './modules/login/forgot-password/forgot-password.component';
import {DashboardContainerComponent} from './modules/dashboard/dashboard-container/dashboard-container.component';


const routes: Routes = [
  {path: 'org-create', component: OrganiationWizardContainerComponent},
  {path: 'dashboard', component: DashboardContainerComponent},

  {path: '', component: LoginLayoutComponent, children: [
    {path: 'sign-up', component: SignUpComponent},
    {path: 'login', component: LoginComponent},
    {path: 'forgot-password', component: ForgotPasswordComponent},
  ]},
  {path: '**', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
