import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LyAvatarModule } from '@alyle/ui/avatar';
import { LyIconModule } from '@alyle/ui/icon';
import { LyGridModule } from '@alyle/ui/grid';
import { LyButtonModule } from '@alyle/ui/button';
import { LyMenuModule } from '@alyle/ui/menu';

import { BasicUsesAvatarComponent } from './basic-uses-avatar/basic-uses-avatar-component';
import { AvatarWithButtonComponent } from './avatar-with-button/avatar-with-button.component';

@NgModule({
  imports: [
    CommonModule,
    LyAvatarModule,
    LyGridModule,
    LyIconModule,
    LyButtonModule,
    LyMenuModule,
  ],
  exports: [BasicUsesAvatarComponent
    , AvatarWithButtonComponent],
  declarations: [BasicUsesAvatarComponent
    , AvatarWithButtonComponent
  ]
})
export class AvatarModule { }