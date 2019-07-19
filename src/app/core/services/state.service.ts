import { Injectable } from '@angular/core';
import { CoreModule } from '../core.module';

@Injectable({
  providedIn: CoreModule
})
export class StateService {
  private _token: string = null;
  private _id: string = "";
  private isStore = false;

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

  public setIsStore(isStore: boolean) {
    this.isStore = isStore;
  }

  public getIsStore() {
    return this.isStore;
  }




}
