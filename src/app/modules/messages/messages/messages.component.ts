import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.sass']
})
export class MessagesComponent implements OnInit {

  constructor() { }

  onlineChatters: any [] = [
    {},
    {},
    {},
    {},
    {}
  ];


  messageThread: any[] = [
    {id: 1, message: 'Hi,', type: 'L' , dateTime: ''},
    {id: 1, message: 'Hi there, So how are you.I am fine.So why did you send me a message ?.', type: 'R' , dateTime: ''},
    {id: 1, message: 'I am fine and well.I am going to start a new compnay.I need a logo from you.How much for the logo.? I need a 3D logo.', type: 'L' , dateTime: ''},
    {id: 1, message: 'Ah. 10 $ for a 3D logo with Unlimited revisions.', type: 'R' , dateTime: ''},
    {id: 1, message: 'Ok, Then can you create a offer for it ?', type: 'L' , dateTime: ''},
    {id: 1, message: 'When you can Start ?', type: 'L' , dateTime: ''},
    {id: 1, message: 'ASAP', type: 'R' , dateTime: ''}
  ];

  chatMessage: any = null;



  tenderItems: any[] = [
    {supplierProductName: 'product a'},
    {supplierProductName: 'product b'},
    {supplierProductName: 'product c'},
    {supplierProductName: 'product d'},
    {supplierProductName: 'product e'},
    {supplierProductName: 'product f'},
    {supplierProductName: 'product g'},
    {supplierProductName: 'product h'},
    {supplierProductName: 'product i'}
  ];







  selectedTenderItem: any = null;



  ngOnInit() {
  }

  expandOrCollapse() {

  }


  expandOrCollapseContacts() {

  }
  sendMessage() {

    const messageBody = {id: 1, message: this.chatMessage, type: 'R' , dateTime: ''};
    this.messageThread.push(messageBody);
    this.chatMessage = null;
    // const element = document.getElementById('chat-cont-div');
    // element.scrollTop = element.scrollHeight - 50;


    const objDiv = document.getElementById('chat-cont-div');
    objDiv.scrollTop = objDiv.scrollHeight + 100;
  }
  selectEvaluationItem(tenderItem) {
    if (tenderItem === 'GENERAL') {
      this.selectedTenderItem = 'GENERAL';
    } else {
      this.selectedTenderItem = tenderItem.tenderItemId;
    }
  }

  currentPosition: any = 0;
  scrollItems(direction) {

    console.log($('#items-block').get(0).scrollWidth);

    switch (direction) {
      case 'L' : {
        if (this.currentPosition > 0) {
          this.currentPosition = this.currentPosition - 100;
        }

        $('#items-block').scrollLeft(this.currentPosition);
      }          break;
      case 'R' : {
        this.currentPosition = this.currentPosition + 100;
        $('#items-block').scrollLeft(this.currentPosition);
      }          break;
      default: {}  break;
    }
  }
}
