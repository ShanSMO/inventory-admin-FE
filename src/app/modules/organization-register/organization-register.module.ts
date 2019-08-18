import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrganizationRegisterComponent } from './organization-register/organization-register.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import { OrganiationWizardContainerComponent } from './organiation-wizard-container/organiation-wizard-container.component';
import { OrganiationWizardSubscriptionPlanComponent } from './organiation-wizard-subscription-plan/organiation-wizard-subscription-plan.component';



@NgModule({
  declarations: [
    OrganizationRegisterComponent,
    OrganiationWizardContainerComponent,
    OrganiationWizardSubscriptionPlanComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    ReactiveFormsModule,
    CommonModule
  ]
})
export class OrganizationRegisterModule { }
