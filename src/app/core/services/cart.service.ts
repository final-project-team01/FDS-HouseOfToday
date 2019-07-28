import { Injectable } from '@angular/core';
import { CoreModule } from '../core.module';
import { CommonService } from './common.service';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { cart_option } from '../models/cart.interface';

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
    let headers = new HttpHeaders({
      'Content-Type':'application/json',
      'Authorization': `Token ${userToken}`
    });
    let options = { headers: headers };
    return this.httpClient.post(fullPath, payload, options);
  }

  buyProducts(userToken: string) {
    const path = 'products/payment/';
    const fullPath = this.commonService.getFullPath(path);
    let headers = new HttpHeaders({
      'Content-Type':'application/json',
      'Authorization': `Token ${userToken}`
    });
    let options = { headers: headers };
    return this.httpClient.post(fullPath, null, options);
  }

}
