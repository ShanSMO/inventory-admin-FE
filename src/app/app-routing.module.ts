import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './modules/login/login/login.component';
import {OrganizationRegisterComponent} from './modules/organization-register/organization-register/organization-register.component';
import {OrganiationWizardContainerComponent} from "./modules/organization-register/organiation-wizard-container/organiation-wizard-container.component";


const routes: Routes = [
  {path: 'org-create', component: OrganiationWizardContainerComponent},
  {path: '**', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
