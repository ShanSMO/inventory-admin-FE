import { Component, OnInit } from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-food-pos',
  templateUrl: './food-pos.component.html',
  styleUrls: ['./food-pos.component.sass']
})
export class FoodPosComponent implements OnInit {

  items: any[] = [
    {id: 1, itemName: 'Bun', imageUrl: './assets/images/pos_imgs/1.jpg', unitPrice: 35},
    {id: 1, itemName: 'Role', imageUrl: './assets/images/pos_imgs/2.jpg', unitPrice: 35},
    {id: 1, itemName: 'Pan cake', imageUrl: './assets/images/pos_imgs/3.jpg', unitPrice: 35},
    {id: 1, itemName: 'Pan cake', imageUrl: './assets/images/pos_imgs/4.jpg', unitPrice: 35},
    {id: 1, itemName: 'Pan cake', imageUrl: './assets/images/pos_imgs/5.jpg', unitPrice: 35},
    {id: 1, itemName: 'Pan cake', imageUrl: './assets/images/pos_imgs/6.jpg', unitPrice: 35},
    {id: 1, itemName: 'Pan cake', imageUrl: './assets/images/pos_imgs/7.jpg', unitPrice: 35},
    {id: 1, itemName: 'Pan cake', imageUrl: './assets/images/pos_imgs/8.jpg', unitPrice: 35},
    {id: 1, itemName: 'Pan cake', imageUrl: './assets/images/pos_imgs/9.jpg', unitPrice: 35},
    {id: 1, itemName: 'Pan cake', imageUrl: './assets/images/pos_imgs/10.jpg', unitPrice: 35},
  ];

  itemArray: FormArray;
  form: FormGroup = new FormGroup({
    totalPrice: new FormControl(100),
    discount: new FormControl(25),
    tax: new FormControl(10),
    items: new FormArray([])
  });

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.setForm();
  }

  setForm() {
    this.itemArray = this.form.get('items') as FormArray;
    for (let i = 0; i < 2; i++) {
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
