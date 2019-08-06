import { Injectable } from '@angular/core';
import { CoreModule } from '../core.module';
import { HttpHeaders } from '@angular/common/http';
import { user_detail } from '../models/user.interface';

@Injectable({
  providedIn: CoreModule
})
export class CommonService {
  private _token: string = null;
  private locate: number; //페이지 0커뮤니티, 1스토어
  private nav: number;//메뉴 변경여부
  private isNavFiexd = false;
  private userDetail: user_detail;

  readonly url: string = "http://52.78.112.247/";
  constructor() { }

  setToken(newToken: string) {
    this._token = newToken;
  }

  get Token() {
    return this._token;
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
  setUserDetail(userDetail: user_detail) {
    this.userDetail = userDetail
  }
  getUserDetail() {
    return this.userDetail;
  }

  addComma(num: number) {
    const regexp = /\B(?=(\d{3})+(?!\d))/g;
    return num.toString().replace(regexp, ',');
  }

  // changePage(i: number, chosenList, originalList) {
  //   const start = i * 5;
  //   const end = start + 5;
  //   chosenList
  //     = originalList.filter((review, index) => index >= start && index < end);
  //   return chosenList;
  // }
}
