import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { VerifyLoginComponent } from './verify-login/verify-login.component';



@NgModule({
  declarations: [LoginComponent, ForgotPasswordComponent, ResetPasswordComponent, VerifyLoginComponent],
  imports: [
    CommonModule
  ]
})
export class LoginModule { }
