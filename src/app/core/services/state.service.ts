import { Injectable } from '@angular/core';
import { CoreModule } from '../core.module';

@Injectable({
  providedIn: CoreModule
})
export class StateService {
  private _token: string = null;
  private _id: string = "";
  private locate: number; //페이지 0커뮤니티, 1스토어
  private nav: number;//메뉴 변경여부

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
    console.log("isLogin", this._token);
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
}
