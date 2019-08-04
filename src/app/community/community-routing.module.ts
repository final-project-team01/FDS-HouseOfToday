import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CommunityComponent } from './components/community.component';
import { PhotoComponent } from './components/photo.component';
import { PhotoDetailComponent } from './components/photo-detail-components/photo-detail.component';
import { ProjectsComponent } from './components/projects.component';
import { ProjectsDetailComponent } from './components/project-detail-components/projects-detail.component';
import { ProjectResolve } from './components/project/project-resolve';

const routes: Routes = [
  { path: 'community', component: CommunityComponent },
  { path: 'photo', component: PhotoComponent },
  { path: 'photo/:id', component: PhotoDetailComponent },
  {
    path: 'project', component: ProjectsComponent, resolve: {
      project: ProjectResolve,
    }
  },
  { path: 'project/:id', component: ProjectsDetailComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CommunityRoutingModule { }
