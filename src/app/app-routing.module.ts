import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './modules/login/login/login.component';
import {OrganiationWizardContainerComponent} from './modules/organization-register/organiation-wizard-container/organiation-wizard-container.component';
import {SignUpComponent} from './modules/login/sign-up/sign-up.component';
import {LoginLayoutComponent} from './modules/login/login-layout/login-layout.component';
import {ForgotPasswordComponent} from './modules/login/forgot-password/forgot-password.component';
import {DashboardContainerComponent} from './modules/dashboard/dashboard-container/dashboard-container.component';
import {InitialDashboardComponent} from './modules/dashboard/initial-dashboard/initial-dashboard.component';
import {LineChartComponent} from './modules/charts/line-chart/line-chart.component';
import {SettingLayoutComponent} from "./modules/settings/setting-layout/setting-layout.component";
import {BillingComponent} from "./modules/settings/billing/billing.component";
import {MessageLayoutComponent} from "./modules/messages/message-layout/message-layout.component";
import {NotificationsComponent} from "./modules/messages/notifications/notifications.component";
import {EmailsComponent} from "./modules/messages/emails/emails.component";
import {MessagesComponent} from "./modules/messages/messages/messages.component";


const routes: Routes = [
  {path: 'org-create', component: OrganiationWizardContainerComponent},
  {path: '', component: DashboardContainerComponent, children: [
    {path: 'dashboard', component: InitialDashboardComponent},
    {path: 'chart', component: LineChartComponent},
    {path: 'settings', component: SettingLayoutComponent, children: [
      {path: 'billing-settings', component: BillingComponent},
    ]},
    {path: '', component: MessageLayoutComponent, children: [
      {path: 'notification', component: NotificationsComponent},
      {path: 'emails', component: EmailsComponent},
      {path: 'messages', component: MessagesComponent},
    ]},
    {path: 'sales', loadChildren: () => import('src/app/modules/pos/pos.module').then(m => m.PosModule)}
  ]},

  {path: '', component: LoginLayoutComponent, children: [
    {path: 'sign-up', component: SignUpComponent},
    {path: 'login', component: LoginComponent},
    {path: 'forgot-password', component: ForgotPasswordComponent},
  ]},


  {path: '**', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
