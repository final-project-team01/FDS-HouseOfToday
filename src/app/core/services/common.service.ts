import { Injectable } from '@angular/core';
import { CoreModule } from '../core.module';
import { HttpHeaders } from '@angular/common/http';
import { user_detail } from '../models/user.interface';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';

@Injectable({
  providedIn: CoreModule
})
export class CommonService {
  private _token: string = null;
  private locate: number; //페이지 0커뮤니티, 1스토어
  private nav: number;//메뉴 변경여부
  private isNavFiexd = false;
  private userDetail: user_detail;
  private _isPopup: boolean = true;

  readonly url: string = environment.url
  constructor() { }

  setToken(newToken: string) {
    this._token = newToken;
  }

  get Token() {
    return this._token;
  }

  set isPopup(b: boolean) {
    this._isPopup = b;
  }

  get isPopup() {
    return this._isPopup;
  }

  isLogin() {
    return this._token ? true : false;
  }

  getFullPath(path: string) {
    if (path.startsWith('/'))
      path = path.substr(1);

    return this.url[this.url.length - 1] === '/' ? this.url + path : this.url + "/" + path;
  }

  setLocate(nav: number) {
    this.locate = nav;
  }
  getLocate() {
    return this.locate;
  }

  setNav(nav: number) {
    this.nav = nav;
  }
  getNav() {
    return this.nav;
  }

  resetNav() {
    this.nav = this.locate;
  }

  setIsNavFixed(isFixed: boolean) {
    this.isNavFiexd = isFixed;
  }
  getIsNavFixed() {
    return this.isNavFiexd;
  }
  setHeader(headers: HttpHeaders, key: string, value: string) {
    return headers.set(key, value);
  }
  setAuthorization(token: string) {
    if (!token.startsWith("token"))
      token = "token " + token;

    const headers = new HttpHeaders().set('Content-type', 'application/json')
      .set('Authorization', token);

    return headers;
  }

  setAuthorizationWithoutContenttype(token: string) {
    if (!token.startsWith("token"))
      token = "token " + token;

    const headers = new HttpHeaders().set('Authorization', token);

    return headers;
  }

  setUserDetail(userDetail: user_detail) {
    this.userDetail = userDetail
  }
  getUserDetail() {
    return this.userDetail;
  }

  getUserDetailProfile() {
    return this.getUserDetail() ? this.getUserDetail()['type'] === 'django'
      ? this.getUserDetail()['profile'] ? this.getUserDetail()['profile'] : 'assets/image/36.png'
      : this.getUserDetail()['social_profile']
      : 'assets/image/36.png';
  }

  addComma(num: number) {
    const regexp = /\B(?=(\d{3})+(?!\d))/g;
    return num.toString().replace(regexp, ',');
  }

  range(i: number){
    return Array(i);
  }
}
