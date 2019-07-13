import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { NavigationComponent } from './components/navigation.component';
import { NotFoundComponent } from './components/not-found.component';
import { CommunityNavigationComponent } from './components/community-navigation.component';
import { StoreNavigationComponent } from './components/store-navigation.component';

@NgModule({
  declarations: [
    NavigationComponent
    , NotFoundComponent
    , CommunityNavigationComponent
    , StoreNavigationComponent
  ],
  imports: [
    CommonModule
    , SharedRoutingModule
  ],
  exports: [
    NavigationComponent
    , CommunityNavigationComponent
    , StoreNavigationComponent
    , NotFoundComponent
  ]
})
export class SharedModule { }
