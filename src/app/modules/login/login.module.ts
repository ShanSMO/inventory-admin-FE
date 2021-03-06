import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { VerifyLoginComponent } from './verify-login/verify-login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import {RouterModule} from "@angular/router";
import { LoginLayoutComponent } from './login-layout/login-layout.component';

@NgModule({
  declarations: [
    LoginComponent,
    ForgotPasswordComponent,
    ResetPasswordComponent,
    VerifyLoginComponent,
    SignUpComponent,
    LoginLayoutComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class LoginModule { }
