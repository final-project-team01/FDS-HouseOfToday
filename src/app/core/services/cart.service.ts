import { Injectable } from '@angular/core';
import { CoreModule } from '../core.module';
import { CommonService } from './common.service';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { cart_option, cart_list, cart_price } from '../models/cart.interface';

@Injectable({
  providedIn: CoreModule
})
export class CartService {
  // commonService: any;
  // httpClient: any;

  private _cartItem: cart_list[];
  private _cartPrice: cart_price = { total: 0, deliver_fee: 0, orderCount: 0 };
  private _cartItemGroup = {};

  public isEmpty = true;


  get cartPrice() {
    return this._cartPrice;
  }

  get cartItemGroup() {
    return this._cartItemGroup;
  }

  get cartItem() {
    return this._cartItem ? this._cartItem : []
  }

  constructor(private commonService: CommonService
    , private httpClient: HttpClient) { }

  addCart(payload: cart_option, userToken: string) {
    const path = 'products/cart/';
    const fullPath = this.commonService.getFullPath(path);
    let headers = this.commonService.setAuthorization(userToken);
    let options = { headers };
    return this.httpClient.post(fullPath, payload, options);
  }

  buyDirect(payload: cart_option, userToken: string) {
    const path = 'products/payment/direct/';
    const fullPath = this.commonService.getFullPath(path);
    let headers = this.commonService.setAuthorization(userToken);
    let options = { headers };
    return this.httpClient.post(fullPath, payload, options);
  }

  buyProducts(userToken: string) {
    const path = 'products/payment/';
    const fullPath = this.commonService.getFullPath(path);
    let headers = this.commonService.setAuthorization(userToken);
    let options = { headers };
    return this.httpClient.post(fullPath, null, options);
  }

  getCartList() {
    const headers = this.commonService.setAuthorization(this.commonService.Token);
    const path = "products/cart/";
    const fullPath = this.commonService.getFullPath(path);
    return this.httpClient.get<[cart_list]>(fullPath, { headers });
  }

  itemFilter() {
    if (this.cartItem.length ? false : true) return;

    this.isEmpty = false;

    this._cartPrice.deliver_fee = 0;
    this._cartPrice.total = this._cartItem.map(item => item.total_price).reduce((prev, next) => prev + next);

    this._cartPrice.orderCount = this._cartItem.length;

    this._cartItemGroup["brands"] = this._cartItem.map(item => item.brand_name);
    this._cartItemGroup["brands"].forEach(
      brand => {
        this._cartItemGroup[brand] = this._cartItem.filter(item => item.brand_name === brand);
      }
    );
  }


  setCartItems(cartItem: cart_list[]) {
    this._cartItem = cartItem;
    this.itemFilter();
  }

  toggleChecked(id: number) {
    this.setCartItems(
      this._cartItem.map(
        item => { return item.id !== id ? item : { ...item, "isChecked": !item.isChecked } }
      )
    );
    this.itemFilter();
  }
}
