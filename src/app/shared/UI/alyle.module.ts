import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LyAvatarModule } from '@alyle/ui/avatar';
import { LyIconModule } from '@alyle/ui/icon';
import { LyGridModule } from '@alyle/ui/grid';
import { LyButtonModule } from '@alyle/ui/button';
import { LyMenuModule } from '@alyle/ui/menu';
import { LyRadioModule } from '@alyle/ui/radio';

import { BasicUsesAvatarComponent } from './basic-uses-avatar/basic-uses-avatar-component';
import { AvatarWithButtonComponent } from './avatar-with-button/avatar-with-button.component';
import { BasicRadioComponent } from './basic-radio/basic-radio.component';

@NgModule({
  imports: [
    CommonModule,
    LyAvatarModule,
    LyGridModule,
    LyIconModule,
    LyButtonModule,
    LyMenuModule,
    LyRadioModule
  ],
  exports: [
    BasicUsesAvatarComponent,
    AvatarWithButtonComponent,
    BasicRadioComponent
  ],
  declarations: [
    BasicUsesAvatarComponent,
    AvatarWithButtonComponent,
    BasicRadioComponent
  ]
})
export class AlyleModule {}
