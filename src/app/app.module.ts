import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { CommunityModule } from './community/community.module';
import { StoreModule } from './store/store.module';
import { AuthModule } from './auth/auth.module';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
    , SharedModule
    , CommunityModule
    , StoreModule
    , AuthModule
    , CoreModule
    , AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
