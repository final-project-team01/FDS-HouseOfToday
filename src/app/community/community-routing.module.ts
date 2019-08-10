import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CommunityComponent } from './components/community.component';
import { PhotoComponent } from './components/photo.component';
import { PhotoDetailComponent } from './components/photo-detail-components/photo-detail.component';
import { ProjectsComponent } from './components/projects.component';
import { ProjectsDetailComponent } from './components/project-detail-components/projects-detail.component';

const routes: Routes = [
  { path: '', redirectTo: 'community', pathMatch: 'full' },
  { path: 'community', component: CommunityComponent },
  { path: 'photo', component: PhotoComponent },
  { path: 'photo/:id', component: PhotoDetailComponent },
  { path: 'project', component: ProjectsComponent },
  { path: 'project/:id', component: ProjectsDetailComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CommunityRoutingModule { }
