import { Component, OnInit } from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.sass']
})
export class SalesComponent implements OnInit {

  itemArray: FormArray;
  cartItemsForm: FormGroup = new FormGroup({
    items: new FormArray([])
  });

  constructor(private fb: FormBuilder) {

  }

  ngOnInit() {
    this.itemArray = this.cartItemsForm.get('items') as FormArray;
    for (let i = 0; i < 5; i++) {
      this.itemArray.push(this.createSampleForm());
    }
  }

  createSampleForm(): FormGroup {
    return this.fb.group({
      quantity: new FormControl(100)
    });
  }

  test() {
    console.log(this.cartItemsForm.value);
  }


}
