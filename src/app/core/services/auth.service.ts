import { Injectable } from '@angular/core';
import { CoreModule } from '../core.module';
import { HttpClient } from '@angular/common/http';
import { token, non_field_errors, account } from '../models/auth.interface';
import { Observable } from 'rxjs';
import { CommonService } from './common.service';


@Injectable({
  providedIn: CoreModule
})
export class AuthService {

  req: token | non_field_errors;
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
}
