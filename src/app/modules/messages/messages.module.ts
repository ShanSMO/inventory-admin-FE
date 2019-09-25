import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmailsComponent } from './emails/emails.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { MessagesComponent } from './messages/messages.component';
import { MessageLayoutComponent } from './message-layout/message-layout.component';
import {RouterModule} from "@angular/router";
import {NgNumberPickerModule} from "../../libs/ng-number-picker/ng-number-picker.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    EmailsComponent,
    NotificationsComponent,
    MessagesComponent,
    MessageLayoutComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class MessagesModule { }
