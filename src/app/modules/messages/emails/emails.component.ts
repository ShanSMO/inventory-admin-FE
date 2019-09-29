import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-emails',
  templateUrl: './emails.component.html',
  styleUrls: ['./emails.component.sass']
})
export class EmailsComponent implements OnInit {

  threadQ: any[] = [
    {id: 1, recipient: 'df', recImg: '', emailSubject: 'Pending subscription payment', dateTime: '1m ago',  viewStatus: ''},
    {id: 1, recipient: 'df', recImg: '', emailSubject: 'New features', dateTime: '3h ago',  viewStatus: ''},
    {id: 1, recipient: 'dfdfdf', recImg: '', emailSubject: 'Congrtulations, You have won ', dateTime: '1 day ago',  viewStatus: ''},
    {id: 1, recipient: 'fgfgfg', recImg: '', emailSubject: 'Verify your email address', dateTime: '12:25:00 AM 12/12/2019',  viewStatus: ''},
  ];

  constructor() { }

  ngOnInit() {
  }

}
