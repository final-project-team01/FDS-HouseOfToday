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
import { CheckBoxComponent } from './components/check-box/check-box.component';
import { BlueFontDirective } from './directive/blue-font.directive';
import { OpacityDot7FontDirective } from './directive/opacity-dot7-font.directive';
import { ButtonColorChangeDirective } from './directive/button-color-change.directive';
import { ButtonTurnBlueDirective } from './directive/button-turn-blue.directive';
import { MoreButtonDirective } from './directive/more-button.directive';
import { MoreBigButtonDirective } from './directive/more-big-button.directive';
import { PageFilterPipe } from './page-filter.pipe';
import { FilterButtonDirective } from './directive/filter-button.directive';
import { FilterDropButtonComponent } from './components/filter-drop-button.component';
import { FilterOptionComponent } from './components/filter-option/filter-option.component';
import { HoverBlueBackgroundDirective } from './directive/hover-blue-background.directive';
import { PopUpComponent } from './components/pop-up.component';
import { RankCrownComponent } from './components/rank-crown.component';

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
    ImageZoomDirective,
    CheckBoxComponent,
    BlueFontDirective,
    OpacityDot7FontDirective,
    ButtonColorChangeDirective,
    ButtonTurnBlueDirective,
    MoreButtonDirective,
    MoreBigButtonDirective,
    PageFilterPipe,
    FilterButtonDirective,
    FilterDropButtonComponent,
    FilterOptionComponent,
    HoverBlueBackgroundDirective,
    PopUpComponent,
    RankCrownComponent,
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
    ImageZoomDirective,
    CheckBoxComponent,
    BlueFontDirective,
    OpacityDot7FontDirective,
    ButtonColorChangeDirective,
    ButtonTurnBlueDirective,
    MoreButtonDirective,
    MoreBigButtonDirective,
    PageFilterPipe,
    FilterButtonDirective,
    FilterDropButtonComponent,
    FilterOptionComponent,
    HoverBlueBackgroundDirective
  ]
})
export class SharedModule { }
