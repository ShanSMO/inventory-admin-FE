import {forwardRef, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgNumberPickerComponent } from './ng-number-picker/ng-number-picker.component';
import {FormsModule, NG_VALUE_ACCESSOR, ReactiveFormsModule} from "@angular/forms";



@NgModule({
  declarations: [NgNumberPickerComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [NgNumberPickerComponent],

})
export class NgNumberPickerModule { }
