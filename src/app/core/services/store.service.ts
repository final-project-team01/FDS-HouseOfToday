import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

import { CoreModule } from '../core.module';

@Injectable({
  providedIn: CoreModule
})
export class StoreService {

  constructor(private httpClient: HttpClient) { }
}
