import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmailsComponent } from './emails/emails.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { MessagesComponent } from './messages/messages.component';
import { MessageLayoutComponent } from './message-layout/message-layout.component';



@NgModule({
  declarations: [EmailsComponent, NotificationsComponent, MessagesComponent, MessageLayoutComponent],
  imports: [
    CommonModule
  ]
})
export class MessagesModule { }
