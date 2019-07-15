import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';

import { SigninComponent } from './components/signin.component';
import { SignupComponent } from './components/signup.component';
import { CoreModule } from '../core/core.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    SigninComponent
    , SignupComponent
  ],
  imports: [
    CommonModule
    , CoreModule
    , SharedModule
    , AuthRoutingModule
  ],
  exports: [
    SigninComponent
    , SignupComponent
  ]
})
export class AuthModule { }
