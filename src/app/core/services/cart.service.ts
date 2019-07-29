import { Injectable } from '@angular/core';
import { CoreModule } from '../core.module';
import { CommonService } from './common.service';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { cart_option, cart_list } from '../models/cart.interface';

@Injectable({
  providedIn: CoreModule
})
export class CartService {
  // commonService: any;
  // httpClient: any;

  constructor(private commonService: CommonService
    , private httpClient: HttpClient) { }

  addCart(payload: cart_option, userToken: string) {
    const path = 'products/cart/';
    const fullPath = this.commonService.getFullPath(path);
    let headers = this.commonService.setAuthorization(userToken);

    let options = { headers: headers };
    return this.httpClient.post(fullPath, payload, options);
  }

  buyProducts(userToken: string) {
    const path = 'products/payment/';
    const fullPath = this.commonService.getFullPath(path);
    let headers = this.commonService.setAuthorization(userToken);
    let options = { headers: headers };
    return this.httpClient.post(fullPath, null, options);
  }

  getCartList() {
    const headers = this.commonService.setAuthorization(this.commonService.Token);
    const path = "products/cart/list/";
    const fullPath = this.commonService.getFullPath(path);
    return this.httpClient.get<[cart_list]>(fullPath, { headers });

  }

}
