import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormsModule } from '@angular/forms';
import { CartComponent } from './components/cart.component';
import { ItemCardComponent } from './components/item-cards.component';

import { CartRoutingModule } from './cart-routing.module';
import { CoreModule } from '../core/core.module';
import { SharedModule } from '../shared/shared.module';
import { CartItemFilterPipe } from './components/cart-item-filter.pipe';

@NgModule({
  declarations: [
    CartComponent
    , ItemCardComponent, CartItemFilterPipe
  ],
  imports: [
    CommonModule
    , CoreModule
    , SharedModule
    , ReactiveFormsModule
    , CartRoutingModule
  ]
})
export class CartModule { }
