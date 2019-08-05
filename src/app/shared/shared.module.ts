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
import { AlyleModule } from './UI/alyle.module';
import { BasicUsesAvatarComponent } from './UI/basic-uses-avatar/basic-uses-avatar-component';
import { ProductListComponent } from './components/product-list.component';
import { NavFixedDirective } from './components/nav-fixed.directive';
import { SubNavFixedDirective } from './components/sub-nav-fixed.directive';
import { AvatarWithButtonComponent } from './UI/avatar-with-button/avatar-with-button.component';
import { BasicRadioComponent } from './UI/basic-radio/basic-radio.component';
import { BlueButtonDirective } from './directive/blue-button.directive';
import { CommunityListComponent } from './components/community-list.component';
import { CartHoverDirective } from './components/cart-hover.directive';
import { PaginationComponent } from './components/pagination.component';
import { ImageZoomDirective } from './directive/image-zoom.directive';

@NgModule({
  declarations: [
    NavigationComponent,
    NotFoundComponent,
    CommunityNavigationComponent,
    StoreNavigationComponent,
    HeaderComponent,
    FooterComponent,
    ProductListComponent,
    NavFixedDirective,
    SubNavFixedDirective,
    BlueButtonDirective,
    CommunityListComponent,
    CartHoverDirective,
    PaginationComponent,
    ImageZoomDirective
  ],
  imports: [CommonModule, CoreModule, AlyleModule, SharedRoutingModule],
  exports: [
    NavigationComponent,
    CommunityNavigationComponent,
    StoreNavigationComponent,
    NotFoundComponent,
    HeaderComponent,
    FooterComponent,
    BasicUsesAvatarComponent,
    ProductListComponent,
    AvatarWithButtonComponent,
    BlueButtonDirective,
    BasicRadioComponent,
    CommunityListComponent,
    PaginationComponent,
    ImageZoomDirective
  ]
})
export class SharedModule { }
