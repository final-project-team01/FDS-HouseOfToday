import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoreRoutingModule } from './store-routing.module';
import { StoreComponent } from './components/store.component';
import { CategoryComponent } from './components/category.component';
import { RankComponent } from './components/rank.component';
import { SharedModule } from '../shared/shared.module';
import { StoreDetailComponent } from './components/store-detail-components/store-detail.component';
import { CoreModule } from '../core/core.module';
import { ProductInfoComponent } from './components/store-detail-components/product-info.component';
import { ProductPicComponent } from './components/store-detail-components/product-pic.component';
import { ProductNavComponent } from './components/store-detail-components/product-nav.component';

@NgModule({
  declarations: [
    StoreComponent
    , CategoryComponent
    , RankComponent
    , StoreDetailComponent, ProductInfoComponent, ProductPicComponent, ProductNavComponent
  ],
  imports: [
    CommonModule
    , CoreModule
    , SharedModule
    , StoreRoutingModule
  ]
})
export class StoreModule { }
