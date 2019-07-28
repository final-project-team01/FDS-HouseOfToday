import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { CommunityModule } from './community/community.module';
import { StoreModule } from './store/store.module';
import { AuthModule } from './auth/auth.module';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LyThemeModule, LY_THEME } from '@alyle/ui';
import { MinimaLight } from '@alyle/ui/themes/minima';
import { UserModule } from './user/user.module';
import { CartModule } from './cart/cart.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    SharedModule,
    CommunityModule,
    StoreModule,
    AuthModule,
    CoreModule,
    UserModule,
    CartModule,
    BrowserAnimationsModule,
    LyThemeModule.setTheme('minima-light'),
    AppRoutingModule
  ],
  providers: [{ provide: LY_THEME, useClass: MinimaLight, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
