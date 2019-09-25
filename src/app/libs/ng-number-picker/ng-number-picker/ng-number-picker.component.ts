import {Component, forwardRef, Input, OnInit} from '@angular/core';
import {ControlValueAccessor, FormGroup, NG_VALUE_ACCESSOR} from '@angular/forms';

@Component({
  selector: 'app-ng-number-picker',
  templateUrl: './ng-number-picker.component.html',
  styleUrls: ['./ng-number-picker.component.sass'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => NgNumberPickerComponent),
    multi: true
  }]
})
export class NgNumberPickerComponent implements OnInit,  ControlValueAccessor {

  @Input() numberForm: FormGroup ;
  value = 0;

  constructor() {}

  ngOnInit() {}

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
