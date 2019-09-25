import { Component, OnInit } from '@angular/core';
import * as Stomp from 'stompjs';
import * as SockJS from 'sockjs-client';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.sass']
})
export class NotificationsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    const webSocketEndPoint = 'http://localhost:8070/ws';
    const topic = '/topic/chat';

    const ws = new SockJS(webSocketEndPoint);
    const stompClient = Stomp.over(ws);
    stompClient.connect({}, () => {
      stompClient.subscribe(topic, (res) => {
        console.log(res);
      });
    });
  }

}
