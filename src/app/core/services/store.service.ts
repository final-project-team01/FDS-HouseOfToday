import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { CoreModule } from '../core.module';
import { CommonService } from './common.service'

@Injectable({
  providedIn: CoreModule
})
export class StoreService {

  constructor(
    private httpClient: HttpClient
    , private commonService: CommonService
  ) { }

  getCategoryList() {
    const path = `products/category/list/`;
    const fullPath = this.commonService.getFullPath(path);
    return this.httpClient.get(fullPath);
  }

  getProductInfo(id: number) {
    const path = `products/product/${id}/`;
    const fullPath = this.commonService.getFullPath(path);
    return this.httpClient.get(fullPath);
  }

  getProductList() {
    const path = `products/product/list/`;
    const fullPath = this.commonService.getFullPath(path);
    return this.httpClient.get(fullPath);
  }

  getTodaysDeal() {
    const path = `products/storehome/`;
    const fullPath = this.commonService.getFullPath(path);
    return this.httpClient.get(fullPath);
  }
} 