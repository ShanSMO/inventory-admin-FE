import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-category-slider',
  templateUrl: './category-slider.component.html',
  styleUrls: ['./category-slider.component.sass']
})
export class CategorySliderComponent implements OnInit {

  @Input() categoryList: any[] = [];

  constructor() { }

  ngOnInit() {
  }

}
