import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UsersComponent } from './components/users.component';
import { OrderListComponent } from './components/order-list.component';
import { CoreModule } from '../core/core.module';
import { SharedModule } from '../shared/shared.module';
import { UserNavComponent } from './components/user-nav.component';

@NgModule({
  declarations: [UsersComponent, OrderListComponent, UserNavComponent],
  imports: [
    CommonModule
    , CoreModule
    , SharedModule
    , UserRoutingModule
  ]
})
export class UserModule { }
