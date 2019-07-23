import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormsModule } from '@angular/forms';
import { StoreRoutingModule } from './store-routing.module';
import { SharedModule } from '../shared/shared.module';
import { CoreModule } from '../core/core.module';

import { StoreComponent } from './components/store.component';
import { CategoryComponent } from './components/category.component';
import { RankComponent } from './components/rank.component';
import { StoreDetailComponent } from './components/store-detail-components/store-detail.component';
import { ProductInfoComponent } from './components/store-detail-components/product-info.component';
import { ProductPicComponent } from './components/store-detail-components/product-pic.component';
import { ProductNavComponent } from './components/store-detail-components/product-nav.component';
import { ProductOptionComponent } from './components/store-detail-components/product-option.component';
import { ProductDetailComponent } from './components/store-detail-components/product-detail.component';


import { LyCarouselModule } from '@alyle/ui/carousel';
import { LyFieldModule } from '@alyle/ui/field';
import { LySelectModule } from '@alyle/ui/select';
import { LyTypographyModule } from '@alyle/ui/typography';
import { ClickOutsideDirective } from './components/store-detail-components/click-outside.directive';
import { ProductReviewComponent } from './components/store-detail-components/product-review.component';
import { ProductQnaComponent } from './components/store-detail-components/product-qna.component';
import { ProductEtcComponent } from './components/store-detail-components/product-etc.component';
import { PaginationComponent } from './components/store-detail-components/pagination.component';
import { ProductDeliveryComponent } from './components/store-detail-components/product-delivery.component';

@NgModule({
  declarations: [
    StoreComponent
    , CategoryComponent
    , RankComponent
    , StoreDetailComponent
    , ProductInfoComponent
    , ProductPicComponent
    , ProductNavComponent
    , ProductOptionComponent
    , ProductDetailComponent
    , ClickOutsideDirective
    , StoreDetailComponent, ProductReviewComponent, ProductQnaComponent, ProductEtcComponent, PaginationComponent, ProductDeliveryComponent
  ],
  imports: [
    CommonModule
    , CoreModule
    , SharedModule
    , StoreRoutingModule
    , ReactiveFormsModule
    , LyCarouselModule
    , LyFieldModule
    , LySelectModule
    , LyTypographyModule
  ],
  exports: [
    StoreComponent
  ]
})
export class StoreModule { }
