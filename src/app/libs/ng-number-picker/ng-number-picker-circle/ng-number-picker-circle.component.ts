import {Component, forwardRef, Input, OnInit} from '@angular/core';
import {ControlValueAccessor, FormGroup, NG_VALUE_ACCESSOR} from "@angular/forms";
import {NgNumberPickerComponent} from "../ng-number-picker/ng-number-picker.component";

@Component({
  selector: 'app-ng-number-picker-circle',
  templateUrl: './ng-number-picker-circle.component.html',
  styleUrls: ['./ng-number-picker-circle.component.sass'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => NgNumberPickerComponent),
    multi: true
  }]
})
export class NgNumberPickerCircleComponent implements OnInit,  ControlValueAccessor {

  @Input() numberForm: FormGroup ;
  @Input() value: any = 0;

  constructor() { }

  ngOnInit() {

  }

  remove() {
    this.value = this.numberForm.get('quantity').value;
    this.value <= 0 ? this.value = 0 : this.value -= 1;
    this.numberForm.get('quantity').setValue(this.value);
  }

  add() {

    this.value += 1;
    this.numberForm.get('quantity').setValue(this.value);
  }

  writeValue() {

  }

  registerOnChange() {

  }

  registerOnTouched() {

  }

}
