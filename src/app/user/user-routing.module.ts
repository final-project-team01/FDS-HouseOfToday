import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './components/users.component';
import { OrderListComponent } from './components/order-list.component';
import { UserModifyComponent } from './components/user-modify.component';
import { AuthGuard } from '../auth.guard';

const routes: Routes = [
  { path: 'users/:id', component: UsersComponent, canActivate: [AuthGuard] },
  { path: 'orderList/:id', component: OrderListComponent, canActivate: [AuthGuard] },
  { path: 'users/:id/edit', component: UserModifyComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
