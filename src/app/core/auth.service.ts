import { Injectable } from '@angular/core';
import { CoreModule } from './core.module';
import { HttpClient } from '@angular/common/http';
import { ServiceCore } from './serviceCore';


@Injectable({
  providedIn: CoreModule
})
export class AuthService {

  constructor(private httpClient: HttpClient) { }

  getToken(username: string, password: string) {
    // this.httpClient.post(BaseService.url)
    const path = "api/get_token/";
    const fullPath = ServiceCore.getFullPath(path);

    this.httpClient.post(fullPath, { username, password }).subscribe(req => console.log(req));

  }
}
