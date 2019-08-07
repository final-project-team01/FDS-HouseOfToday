import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

import { CoreModule } from '../core.module';
import { CommonService } from './common.service';
import { AuthService } from './auth.service';
import { user_detail, user_order, account_update, account_update_payload } from '../models/user.interface';

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

  getUser() {
    const headers = this.commonService.setAuthorization(this.commonService.Token);
    const path = "accounts/list/";
    const fullPath = this.commonService.getFullPath(path);
    return this.http.get<[user_detail]>(fullPath, { headers });

  }

  getProductOrder() {
    const headers = this.commonService.setAuthorization(this.commonService.Token);
    const path = "products/order/";
    const fullPath = this.commonService.getFullPath(path);
    return this.http.get<user_order[]>(fullPath, { headers });
  }

  patchAccountsUpdate(payload: account_update_payload) {
    const headers = this.commonService.setAuthorization(this.commonService.Token);
    const path = `accounts/update/${this.commonService.getUserDetail()['id']}/`;

    const fullPath = this.commonService.getFullPath(path);
    const options = { headers }
    this.http.patch<account_update[]>(fullPath, payload, options).subscribe(
      res => {
        this.getUser().subscribe((user) => {
          console.log('user', user);
          this.commonService.setUserDetail(user[0]);
        });
      },
      error => { }
    );
  }
}
