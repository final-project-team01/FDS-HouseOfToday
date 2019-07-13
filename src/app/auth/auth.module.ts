import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';

import { SigninComponent } from './components/signin.component';
import { SignupComponent } from './components/signup.component';

@NgModule({
  declarations: [
    SigninComponent
    , SignupComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule
  ],
  exports: [
    SigninComponent
    , SignupComponent
  ]
})
export class AuthModule { }
