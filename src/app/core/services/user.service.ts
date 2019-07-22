import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

import { CoreModule } from '../core.module';
import { StateService } from './state.service';
import { AuthService } from './auth.service';
import { user_detail } from '../models/user.interface';

@Injectable({
  providedIn: CoreModule
})
export class UserService {

  constructor(
    private httpClient: HttpClient
    , private stateService: StateService
    , private authService: AuthService
    , private http: HttpClient
  ) { }

  getUserDetail() {
    const headers = this.stateService.setAuthorization(this.stateService.Token);
    const path = "accounts/list/";
    const fullPath = this.stateService.getFullPath(path);
    return this.http.get<[user_detail]>(fullPath, { headers });

  }
}
