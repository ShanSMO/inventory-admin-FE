import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-side-navigation',
  templateUrl: './side-navigation.component.html',
  styleUrls: ['./side-navigation.component.sass']
})
export class SideNavigationComponent implements OnInit {

  activeMenu: any = 'm1';

  constructor() {
  }

  ngOnInit() {

  }

}
