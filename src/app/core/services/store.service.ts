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

  getCategoryDetailList(id: number) {
    const path = `products/category/${id}/`;
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

  getRankingList() {
    const path = `products/ranking/`;
    const fullPath = this.commonService.getFullPath(path);
    return this.httpClient.get(fullPath);
  }

  checkHelpful(id: number) {
    const path = 'products/product/helpful/';
    const fullPath = this.commonService.getFullPath(path);
    const rv_id = id.toString();
    const user = localStorage.getItem('user');
    let headers = this.commonService.setAuthorization(user);
    let options = { headers };
    let payload = { rv_id };
    return this.httpClient.post(fullPath, payload, options);
  }

  getBrandItems(name: string) {
    const path = `products/product/brand/?query=${name}`
    const fullPath = this.commonService.getFullPath(path);
    return this.httpClient.get(fullPath);
  }

  createReview(formData) {
    const path = '/products/product/review/';
    const fullPath = this.commonService.getFullPath(path);
    const headers = this.commonService.setAuthorizationWithoutContenttype(this.commonService.Token);
    let options = { headers };
    return this.httpClient.post(fullPath, formData, options);
  }

}