import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CommunityComponent } from './components/community.component';
import { PhotoComponent } from './components/photo.component';


const routes: Routes = [
  { path: 'community', component: CommunityComponent },
  { path: 'community/photo', component: PhotoComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CommunityRoutingModule { }
