import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommunityRoutingModule } from './community-routing.module';
import { SharedModule } from '../shared/shared.module';

import { CommunityComponent } from './components/community.component';
import { PhotoComponent } from './components/photo.component';
import { CoreModule } from '../core/core.module';
import { ProjectsComponent } from './components/projects.component';
import { ProjectsDetailComponent } from './components/project-detail-components/projects-detail.component';
import { LyCarouselModule } from '@alyle/ui/carousel';
import { PhotoDetailComponent } from './components/photo-detail-components/photo-detail.component';
import { PhotoArticleComponent } from './components/photo-detail-components/photo-article.component';
import { PhotoUserComponent } from './components/photo-detail-components/photo-user.component';
import { ProjectListComponent } from './components/project/project-list.component';
import { CommentComponent } from './components/comment.component';

@NgModule({
  declarations: [
    CommunityComponent,
    PhotoComponent,
    ProjectsComponent,
    ProjectsDetailComponent,
    PhotoDetailComponent,
    PhotoArticleComponent,
    PhotoUserComponent,
    ProjectListComponent,
    CommentComponent,
  ],
  imports: [
    CommonModule
    , SharedModule
    , CoreModule
    , CommunityRoutingModule
    , LyCarouselModule
    , 
  ]
})
export class CommunityModule {}
