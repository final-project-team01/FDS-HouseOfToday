import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

import { CoreModule } from '../core.module';
import { StateService } from './state.service';

@Injectable({
  providedIn: CoreModule
})
export class StoreService {
  
  constructor(
    private httpClient: HttpClient
    , private stateService: StateService
  ) { }

  getCategoryList() {
    const path = `products/category/list/`;
    const fullPath = this.stateService.getFullPath(path);
    return this.httpClient.get(fullPath);
  }

  getProductInfo(id: number){
    const path = `products/product/${id}/`;
    const fullPath = this.stateService.getFullPath(path);
    return this.httpClient.get(fullPath);
  }

  getProductList() {
    const path = `products/product/list/`;
    const fullPath = this.stateService.getFullPath(path);
    return this.httpClient.get<store_list>(fullPath);
  }
} 