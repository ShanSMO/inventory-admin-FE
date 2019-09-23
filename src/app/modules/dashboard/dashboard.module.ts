import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { InitialDashboardComponent } from './initial-dashboard/initial-dashboard.component';
import {NavigationModule} from '../navigation/navigation.module';
import { DashboardContainerComponent } from './dashboard-container/dashboard-container.component';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [
    DashboardComponent,
    InitialDashboardComponent,
    DashboardContainerComponent
  ],
  imports: [
    CommonModule,
    NavigationModule,
    RouterModule
  ]
})
export class DashboardModule { }
