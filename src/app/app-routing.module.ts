import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './shared/components/not-found.component';
import { CommunityComponent } from './community/components/community.component';
import { StoreComponent } from './store/components/store.component';
import { PhotoComponent } from './community/components/photo.component';
import { KnowhowComponent } from './community/components/knowhow.component';
import { CategoryComponent } from './store/components/category.component';
import { RankComponent } from './store/components/rank.component';
import { SigninComponent } from './auth/components/signin.component';
import { SignupComponent } from './auth/components/signup.component';

const routes: Routes = [
  // { path: '', redirectTo: 'community', pathMatch: 'full' },
  // { path: 'community', component: CommunityComponent },
  // { path: 'community/photo', component: PhotoComponent },
  // { path: 'community/knowhow', component: KnowhowComponent },
  // { path: 'store', component: StoreComponent },
  // { path: 'store/category', component: CategoryComponent },
  // { path: 'store/rank', component: RankComponent },
  // { path: 'signin', component: SigninComponent },
  // { path: 'signup', component: SignupComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
