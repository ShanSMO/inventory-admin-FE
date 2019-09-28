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

  categories: any[] = [
    {id: 1, categoryName: 'coffee'},
    {id: 1, categoryName: 'Tea'},
    {id: 1, categoryName: 'Short Eats'},
    {id: 1, categoryName: 'Burger'},
    {id: 1, categoryName: 'Submarine'},
    {id: 1, categoryName: 'Chicken Bucket'},
  ];

  itemArray: FormArray;
  form: FormGroup = new FormGroup({
    totalPrice: new FormControl(0),
    discount: new FormControl(0),
    tax: new FormControl(0),
    items: new FormArray([])
  });

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.setForm();
  }

  setForm() {
    this.itemArray = this.form.get('items') as FormArray;
    for (let i = 0; i < 1; i++) {
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
