import { Injectable } from '@angular/core';
import { CoreModule } from '../core.module';
import { HttpClient } from '@angular/common/http';
import { token, non_field_errors, account, token_social } from '../models/auth.interface';
import { Observable } from 'rxjs';
import { CommonService } from './common.service';


@Injectable({
  providedIn: CoreModule
})
export class AuthService {
  constructor(private httpClient: HttpClient
    , private commonService: CommonService
  ) { }

  getToken(email: string, password: string): Observable<token | non_field_errors> {
    // this.httpClient.post(BaseService.url)
    const path = "get_token/";
    const fullPath = this.commonService.getFullPath(path);

    return this.httpClient.post<token | non_field_errors>(fullPath, { email, password });
  }

  createAccounts(email: string, password: string, username: string) {
    const path = "/accounts/create/";
    const fullPath = this.commonService.getFullPath(path);

    return this.httpClient.post<account>(fullPath, { email, password, username });
  }

  getToken4social(socialInfo: token_social) {
    const path = "/get_token/social/";
    const fullPath = this.commonService.getFullPath(path);

    const type = socialInfo.type;
    const unique_user_id = socialInfo.unique_user_id;
    const username = socialInfo.username;
    const email = socialInfo.email;
    const social_profile = socialInfo.social_profile;

    return this.httpClient.post<token | non_field_errors>(fullPath, { type, unique_user_id, username, email, social_profile });
  }
}
