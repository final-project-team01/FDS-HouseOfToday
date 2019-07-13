import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

import { CoreModule } from './core.module';

@Injectable({
  providedIn: CoreModule
})
export class UserService {

  constructor(private httpClient: HttpClient) { }
}
