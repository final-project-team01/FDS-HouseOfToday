import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartComponent } from './components/cart.component';
import { CheckBoxComponent } from './components/check-box.component';
import { ItemCardComponent } from './components/item-cards.component';

import { CartRoutingModule } from './cart-routing.module';
import { CoreModule } from '../core/core.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    CartComponent
    , CheckBoxComponent
    , ItemCardComponent
  ],
  imports: [
    CommonModule
    , CartRoutingModule
    , CoreModule
    , SharedModule
  ]
})
export class CartModule { }
