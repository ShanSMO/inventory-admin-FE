import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {DashboardModule} from './modules/dashboard/dashboard.module';
import {LoginModule} from './modules/login/login.module';
import {OrganizationRegisterModule} from './modules/organization-register/organization-register.module';
import {ChartsModule} from './modules/charts/charts.module';
import {MessagesModule} from './modules/messages/messages.module';
import {SettingsModule} from './modules/settings/settings.module';
import {PosModule} from './modules/pos/pos.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    DashboardModule,
    LoginModule,
    OrganizationRegisterModule,
    AppRoutingModule,
    ChartsModule,
    MessagesModule,
    SettingsModule,
    PosModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
