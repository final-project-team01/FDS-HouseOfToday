import { Injectable } from '@angular/core';
import { CoreModule } from '../core.module';
import { HttpClient } from '@angular/common/http';
import { token, non_field_errors } from '../models/auth.interface';
import { Observable } from 'rxjs/internal/Observable';
import { StateService } from './state.service';


@Injectable({
  providedIn: CoreModule
})
export class AuthService {

  req: token | non_field_errors;
  constructor(private httpClient: HttpClient
    , private stateService: StateService
  ) { }

  getToken(username: string, password: string): Observable<token | non_field_errors> {
    // this.httpClient.post(BaseService.url)
    const path = "api/get_token/";
    const fullPath = this.stateService.getFullPath(path);

    return this.httpClient.post<token | non_field_errors>(fullPath, { username, password });
  }
}
