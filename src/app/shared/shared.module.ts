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
import { AvatarModule } from './UI/avatar.module';
import { BasicUsesAvatarComponent } from './UI/basic-uses-avatar/basic-uses-avatar-component';
import { ProductListComponent } from './components/product-list.component';
import { NavFixedDirective } from './components/nav-fixed.directive';
import { SubNavFixedDirective } from './components/sub-nav-fixed.directive';
import { AvatarWithButtonComponent } from './UI/avatar-with-button/avatar-with-button.component';
import { ButtonDirective } from './directive/button.directive';

@NgModule({
  declarations: [
    NavigationComponent
    , NotFoundComponent
    , CommunityNavigationComponent
    , StoreNavigationComponent
    , HeaderComponent
    , FooterComponent
    , ProductListComponent
    , NavFixedDirective
    , SubNavFixedDirective
    , ButtonDirective
  ],
  imports: [
    CommonModule
    , CoreModule
    , AvatarModule
    , SharedRoutingModule
  ],
  exports: [
    NavigationComponent
    , CommunityNavigationComponent
    , StoreNavigationComponent
    , NotFoundComponent
    , HeaderComponent
    , FooterComponent
    , BasicUsesAvatarComponent
    , ProductListComponent
    , AvatarWithButtonComponent
    , ButtonDirective
  ]
})
export class SharedModule { }
