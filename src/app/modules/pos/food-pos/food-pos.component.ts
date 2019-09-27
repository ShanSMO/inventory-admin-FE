import { Component, OnInit } from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-food-pos',
  templateUrl: './food-pos.component.html',
  styleUrls: ['./food-pos.component.sass']
})
export class FoodPosComponent implements OnInit {

  items: any[] = [
    {id: 1, itemName: 'Bun', imageUrl: null, unitPrice: 35},
    {id: 1, itemName: 'Role', imageUrl: null, unitPrice: 35},
    {id: 1, itemName: 'Pan cake', imageUrl: null, unitPrice: 35},
    {id: 1, itemName: 'Pan cake', imageUrl: null, unitPrice: 35},
    {id: 1, itemName: 'Pan cake', imageUrl: null, unitPrice: 35},
    {id: 1, itemName: 'Pan cake', imageUrl: null, unitPrice: 35},
    {id: 1, itemName: 'Pan cake', imageUrl: null, unitPrice: 35},
    {id: 1, itemName: 'Pan cake', imageUrl: null, unitPrice: 35},
    {id: 1, itemName: 'Pan cake', imageUrl: null, unitPrice: 35},
    {id: 1, itemName: 'Pan cake', imageUrl: null, unitPrice: 35},
    {id: 1, itemName: 'Fish bun', imageUrl: null, unitPrice: 35},
    {id: 1, itemName: 'Patis', imageUrl: null, unitPrice: 35}
  ];

  itemArray: FormArray;
  form: FormGroup = new FormGroup({
    totalPrice: new FormControl(100),
    discount: new FormControl(25),
    tax: new FormControl(0),
    items: new FormArray([])
  });

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.setForm();
  }

  setForm() {
    this.itemArray = this.form.get('items') as FormArray;
    for (let i = 0; i < 5; i++) {
      this.itemArray.push(this.addFormGroup());
    }
  }

  addFormGroup(): FormGroup {
    return this.fb.group({
      itemName: new FormControl('Fish Bun'),
      unitPrice: new FormControl(35),
      quantity: new FormControl(1),
      subTotal: new FormControl(300)
    });
  }

}
