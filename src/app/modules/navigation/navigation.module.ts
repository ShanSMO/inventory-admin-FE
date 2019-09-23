import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopNavigationComponent } from './top-navigation/top-navigation.component';
import { SideNavigationComponent } from './side-navigation/side-navigation.component';
import {RouterModule} from "@angular/router";



@NgModule({
  declarations: [
    TopNavigationComponent,
    SideNavigationComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    TopNavigationComponent,
    SideNavigationComponent
  ]
})
export class NavigationModule { }
