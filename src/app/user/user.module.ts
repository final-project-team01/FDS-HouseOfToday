import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UsersComponent } from './components/users.component';
import { OrderListComponent } from './components/order-list.component';
import { CoreModule } from '../core/core.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [UsersComponent, OrderListComponent],
  imports: [
    CommonModule
    , CoreModule
    , SharedModule
    , UserRoutingModule
  ]
})
export class UserModule { }
