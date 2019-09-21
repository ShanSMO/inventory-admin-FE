import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopNavigationComponent } from './top-navigation/top-navigation.component';
import { SideNavigationComponent } from './side-navigation/side-navigation.component';



@NgModule({
  declarations: [
    TopNavigationComponent,
    SideNavigationComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TopNavigationComponent,
    SideNavigationComponent
  ]
})
export class NavigationModule { }
