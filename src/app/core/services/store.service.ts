import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

import { CoreModule } from '../core.module';
import { ServiceCore } from '../serviceCore';
import { store_list } from '../models/store.interface';

@Injectable({
  providedIn: CoreModule
})
export class StoreService {

  constructor(private httpClient: HttpClient) { }

  getCategoryList() {
    const path = "products/category/list/"
    const fullPath = ServiceCore.getFullPath(path);

    return this.httpClient.get<store_list[]>(fullPath);
  }
} 