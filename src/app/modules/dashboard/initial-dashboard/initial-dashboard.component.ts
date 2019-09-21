import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

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
    {id: 3, name: 'Sena Super Center', domain: 'GROCERY'},
    {id: 3, name: 'Shanika Fresh Fruit', domain: 'GROCERY'},
  ];

  constructor(private router: Router) { }

  ngOnInit() {
  }

  addNewBusiness() {
    const object = {
      id: 1, name: 'Test', domain: 'PHARMACY'
    };

    this.registeredBusinessList.push(object);
    // this.router.navigateByUrl('/wizard');
  }

}
