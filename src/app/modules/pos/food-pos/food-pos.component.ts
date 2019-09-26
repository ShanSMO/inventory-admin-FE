import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit() {
  }

}
