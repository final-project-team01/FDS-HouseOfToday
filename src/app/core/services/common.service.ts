import { Injectable } from '@angular/core';
import { CoreModule } from '../core.module';
import { HttpHeaders } from '@angular/common/http';
import { user_detail } from '../models/user.interface';

@Injectable({
  providedIn: CoreModule
})
export class CommonService {
  private _token: string = null;
  private _id: string = "";
  private locate: number; //페이지 0커뮤니티, 1스토어
  private nav: number;//메뉴 변경여부
  private isNavFiexd = false;
  private userDetail: user_detail;

  public readonly url: string = "http://52.78.112.247/";
  constructor() { }

  public setToken(newToken: string) {
    this._token = newToken;
  }

  public get Token() {
    return this._token;
  }

  public get Id() {
    return this._id;
  }
  public setId(userId: string) {
    this._id = userId;
  }

  public isLogin() {
    return this._token ? true : false;
  }

  public getFullPath(path: string) {
    return this.url[this.url.length - 1] === '/' ? this.url + path : this.url + "/" + path;
  }

  public setLocate(nav: number) {
    this.locate = nav;
  }
  public getLocate() {
    return this.locate;
  }

  public setNav(nav: number) {
    this.nav = nav;
  }
  public getNav() {
    return this.nav;
  }

  public resetNav() {
    this.nav = this.locate;
  }

  public setIsNavFixed(isFixed: boolean) {
    this.isNavFiexd = isFixed;
  }
  public getIsNavFixed() {
    return this.isNavFiexd;
  }
  public setHeader(headers: HttpHeaders, key: string, value: string) {
    return headers.set(key, value);
  }
  public setAuthorization(token: string) {
    if (!token.startsWith("token"))
      token = "token " + token;

    const headers = new HttpHeaders().set('Content-type', 'application/json')
      .set('Authorization', token);

    return headers;
  }
  public setUserDetail(userDetail: user_detail) {
    this.userDetail = userDetail
  }
  public getUserDetail() {
    return this.userDetail;
  }

  public addComma(num: number) {
    const regexp = /\B(?=(\d{3})+(?!\d))/g;
    return num.toString().replace(regexp, ',');
  }

  public changePage(i: number, chosenList, originalList){
    const start = i * 3;
    const end = start + 3;
    chosenList 
      = originalList.filter((review, index) => index >= start && index < end);
    return chosenList;
  }
}
