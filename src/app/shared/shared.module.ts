import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';

import { NavigationComponent } from './components/navigation.component';
import { NotFoundComponent } from './components/not-found.component';
import { CommunityNavigationComponent } from './components/community-navigation.component';
import { StoreNavigationComponent } from './components/store-navigation.component';
import { HeaderComponent } from './components/header.component';
import { FooterComponent } from './components/footer.component';
import { CoreModule } from '../core/core.module';
import { BasicUsesAvatarModule } from './UI/basic-uses-avatar/basic-uses-avatar.module';
import { BasicUsesAvatarComponent } from './UI/basic-uses-avatar/basic-uses-avatar-component';

@NgModule({
  declarations: [
    NavigationComponent
    , NotFoundComponent
    , CommunityNavigationComponent
    , StoreNavigationComponent
    , HeaderComponent
    , FooterComponent
  ],
  imports: [
    CommonModule
    , CoreModule
    , SharedRoutingModule
    , BasicUsesAvatarModule
  ],
  exports: [
    NavigationComponent
    , CommunityNavigationComponent
    , StoreNavigationComponent
    , NotFoundComponent
    , HeaderComponent
    , FooterComponent
    , BasicUsesAvatarComponent
  ]
})
export class SharedModule { }
