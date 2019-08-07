import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StoreComponent } from './components/store.component';
import { CategoryComponent } from './components/category.component';
import { RankComponent } from './components/rank.component';
import { StoreDetailComponent } from './components/store-detail-components/store-detail.component';

const routes: Routes = [

  { path: 'store', component: StoreComponent },
  { path: 'store/category', component: CategoryComponent },
  { path: 'store/rank', component: RankComponent },
  { path: 'store/:id', component: StoreDetailComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StoreRoutingModule { }
