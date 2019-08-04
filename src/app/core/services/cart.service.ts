import { Injectable } from '@angular/core';
import { CoreModule } from '../core.module';
import { CommonService } from './common.service';
import { HttpHeaders, HttpClient } from '@angular/common/http';

import { cart_option, cart_list, buy_option } from '../models/cart.interface';

@Injectable({
  providedIn: CoreModule
})
export class CartService {
  // commonService: any;
  // httpClient: any;

  private _cartItem: cart_list[];

  get cartItem() {
    return this._cartItem ? this._cartItem : []
  }

  get iSEmpty() {
    return this._cartItem && this._cartItem.length ? false : true;
  }

  get isTotalChecked() {
    return this._cartItem.filter(item => item.isChecked === false).length ? false : true;
  }

  getCartItemsCount() {
    return this._cartItem ? this._cartItem.length : 0;
  }

  constructor(private commonService: CommonService
    , private httpClient: HttpClient) { }

  addCart(payload: cart_option, userToken: string) {
    const path = 'products/orderitem/';
    const fullPath = this.commonService.getFullPath(path);
    let headers = this.commonService.setAuthorization(userToken);
    let options = { headers };
    return this.httpClient.post(fullPath, payload, options);
  }

  buyDirect(payload: buy_option, userToken: string) {
    const path = 'products/order_direct/create/';
    const fullPath = this.commonService.getFullPath(path);
    let headers = this.commonService.setAuthorization(userToken);
    let options = { headers };
    return this.httpClient.post(fullPath, payload, options);
  }

  // buyProducts(userToken: string) {
  //   const path = 'products/payment/';
  //   const fullPath = this.commonService.getFullPath(path);
  //   let headers = this.commonService.setAuthorization(userToken);
  //   let options = { headers };
  //   return this.httpClient.post(fullPath, null, options);
  // }

  getCartList() {
    const headers = this.commonService.setAuthorization(this.commonService.Token);
    const path = "products/cart/";
    const fullPath = this.commonService.getFullPath(path);
    return this.httpClient.get<[cart_list]>(fullPath, { headers });
  }

  setCartItems(cartItem: cart_list[]) {
    this._cartItem = cartItem;
  }

  toggleChecked(id: number) {
    this.setCartItems(
      this._cartItem.map(
        item => { return item.id !== id ? item : { ...item, "isChecked": !item.isChecked } }
      )
    );
  }
  reset() {
    this._cartItem = [];
  }

  getTotalPrice() {
    const items = this._cartItem.filter(
      item => { return item.isChecked }
    ).map(item => item.total_price);
    return items.length > 0 ? items.reduce((p, n) => p + n) : 0;
  }
  getDeliverFee() {
    const items = this._cartItem.filter(
      item => { return item.isChecked }
    ).map(item => { return item.deliver_fee === '무료배송' ? 0 : item.deliver_fee }
    );

    return items.length > 0 ? items.reduce((p, n) => p + n) : 0;
  }
  getTotalCount() {
    return this._cartItem.filter(
      item => { return item.isChecked }
    ).length;
  }
  getItemGroup() {
    return this._cartItem.map(item => item.brand_name);
  }
}
