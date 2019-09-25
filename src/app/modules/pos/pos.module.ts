import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SalesComponent } from './sales/sales.component';
import {Router, RouterModule, Routes} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgNumberPickerModule} from '../../libs/ng-number-picker/ng-number-picker.module';

const routes: Routes = [
  {path: '', component: SalesComponent}
];

@NgModule({
  declarations: [SalesComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    FormsModule,
    NgNumberPickerModule,
  ]
})
export class PosModule { }
