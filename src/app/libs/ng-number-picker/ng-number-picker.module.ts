import {NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgNumberPickerComponent } from './ng-number-picker/ng-number-picker.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { NgNumberPickerCircleComponent } from './ng-number-picker-circle/ng-number-picker-circle.component';



@NgModule({
  declarations: [NgNumberPickerComponent, NgNumberPickerCircleComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [NgNumberPickerComponent, NgNumberPickerCircleComponent],

})
export class NgNumberPickerModule { }
