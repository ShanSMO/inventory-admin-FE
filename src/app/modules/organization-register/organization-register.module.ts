import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrganizationRegisterComponent } from './organization-register/organization-register.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';



@NgModule({
  declarations: [
    OrganizationRegisterComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    ReactiveFormsModule,
    CommonModule
  ]
})
export class OrganizationRegisterModule { }
