import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './components/users.component';
import { OrderListComponent } from './components/order-list.component';

const routes: Routes = [
  { path: 'users/:id', component: UsersComponent },
  { path: 'orderList/:id', component: OrderListComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
