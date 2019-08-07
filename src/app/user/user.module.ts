import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UsersComponent } from './components/users.component';
import { OrderListComponent } from './components/order-list.component';
import { CoreModule } from '../core/core.module';
import { SharedModule } from '../shared/shared.module';
import { UserNavComponent } from './components/user-nav.component';
import { UserModifyComponent } from './components/user-modify.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    UsersComponent,
    OrderListComponent,
    UserNavComponent,
    UserModifyComponent
  ],
  imports: [CommonModule, CoreModule, SharedModule, ReactiveFormsModule, UserRoutingModule]
})
export class UserModule { }
