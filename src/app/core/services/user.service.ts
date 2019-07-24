import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

import { CoreModule } from '../core.module';
import { CommonService } from './common.service';
import { AuthService } from './auth.service';
import { user_detail } from '../models/user.interface';

@Injectable({
  providedIn: CoreModule
})
export class UserService {

  constructor(
    private httpClient: HttpClient
    , private commonService: CommonService
    , private authService: AuthService
    , private http: HttpClient
  ) { }

  getUserDetail() {
    const headers = this.commonService.setAuthorization(this.commonService.Token);
    const path = "accounts/list/";
    const fullPath = this.commonService.getFullPath(path);
    return this.http.get<[user_detail]>(fullPath, { headers });

  }
}
