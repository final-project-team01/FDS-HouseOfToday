import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommunityRoutingModule } from './community-routing.module';
import { SharedModule } from '../shared/shared.module';

import { CommunityComponent } from './components/community.component';
import { PhotoComponent } from './components/photo.component'; 
  import { CoreModule } from '../core/core.module';
  
@NgModule({
declarations: [
  CommunityComponent
  , PhotoComponent
  ],
imports: [
    CommonModule
    , SharedModule
    , CoreModule
    , CommunityRoutingModule
  ]
})
export class CommunityModule { }
