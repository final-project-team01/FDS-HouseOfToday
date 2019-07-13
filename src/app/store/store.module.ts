import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoreRoutingModule } from './store-routing.module';
import { StoreComponent } from './components/store.component';
import { CategoryComponent } from './components/category.component';
import { RankComponent } from './components/rank.component';
import { SharedModule } from '../shared/shared.module';
import { StoreDetailComponent } from './components/store-detail.component';

@NgModule({
  declarations: [
    StoreComponent,
    CategoryComponent,
    RankComponent,
    StoreDetailComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    StoreRoutingModule
  ]
})
export class StoreModule { }
