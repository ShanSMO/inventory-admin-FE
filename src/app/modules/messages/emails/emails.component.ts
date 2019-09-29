import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-emails',
  templateUrl: './emails.component.html',
  styleUrls: ['./emails.component.sass']
})
export class EmailsComponent implements OnInit {

  threadQ: any[] = [
    {id: 1, recipient: 'df', recImg: '', emailSubject: 'Pending subscription payment', body: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown ' , dateTime: '1m ago',  viewStatus: false},
    {id: 1, recipient: 'df', recImg: '', emailSubject: 'New features', dateTime: '3h ago', body: 'Lorem Ipsum is simply dummy text of the' ,  viewStatus: false},
    {id: 1, recipient: 'dfdfdf', recImg: '', emailSubject: 'Congrtulations, You have won ', dateTime: 'Yesterday', body: 'Lorem Ipsum is simply dummy text of the' ,  viewStatus: false},
    {id: 1, recipient: 'fgfgfg', recImg: '', emailSubject: 'Verify your email address', dateTime: '12:25:00 AM 12/12/2019', body: 'Lorem Ipsum is simply dummy text of the' ,  viewStatus: true},
  ];

  selectedEmail: any = {
    from: 'Cambio Careers <careers@cambio.lk>',
    to: 'Shanaka Madushanka <madushanka991@gmail.com>',
    subject: 'Application for position of Software Engineer',
    body: ''
  };

  constructor() { }

  ngOnInit() {
  }

}
