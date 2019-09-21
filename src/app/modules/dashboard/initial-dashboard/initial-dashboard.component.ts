import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-initial-dashboard',
  templateUrl: './initial-dashboard.component.html',
  styleUrls: ['./initial-dashboard.component.sass']
})
export class InitialDashboardComponent implements OnInit {

  registeredBusinessList: any[] = [
    {id: 1, name: 'HP Pharmacy', domain: 'PHARMACY'},
    {id: 2, name: 'E-Com', domain: 'COMMUNICATION'},
    {id: 3, name: 'CC-Tech', domain: 'COMPUTER'},
  ];

  constructor() { }

  ngOnInit() {
  }

}
