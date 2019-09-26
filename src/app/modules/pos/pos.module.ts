import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SalesComponent } from './sales/sales.component';
import {Router, RouterModule, Routes} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgNumberPickerModule} from '../../libs/ng-number-picker/ng-number-picker.module';
import { FoodPosComponent } from './food-pos/food-pos.component';
import { PosLayoutComponent } from './pos-layout/pos-layout.component';

const routes: Routes = [
  {path: '', component: PosLayoutComponent, children: [
    {path: 'sales', component: SalesComponent},
    {path: 'food', component: FoodPosComponent}
  ]}
];

@NgModule({
  declarations: [SalesComponent, FoodPosComponent, PosLayoutComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    FormsModule,
    NgNumberPickerModule,
  ]
})
export class PosModule { }
