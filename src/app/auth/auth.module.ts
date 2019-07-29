import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { AuthRoutingModule } from './auth-routing.module';

import { CoreModule } from '../core/core.module';
import { SharedModule } from '../shared/shared.module';

import { SigninComponent } from './components/signin.component';
import { SignupComponent } from './components/signup.component';
import { SocialComponent } from './components/social.component';

@NgModule({
  declarations: [
    SigninComponent
    , SignupComponent
    , SocialComponent
  ],
  imports: [
    CommonModule
    , CoreModule
    , SharedModule
    , ReactiveFormsModule
    , AuthRoutingModule
  ],
  exports: [
    SigninComponent
    , SignupComponent
  ]
})
export class AuthModule { }
