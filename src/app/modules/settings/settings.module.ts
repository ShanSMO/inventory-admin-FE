import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BillingComponent } from './billing/billing.component';
import { SettingLayoutComponent } from './setting-layout/setting-layout.component';



@NgModule({
  declarations: [BillingComponent, SettingLayoutComponent],
  imports: [
    CommonModule
  ]
})
export class SettingsModule { }
