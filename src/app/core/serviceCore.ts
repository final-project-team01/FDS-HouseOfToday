import { StorageService } from './services/storage.service';

export class ServiceCore {
  private static _token: string = null;
  private static _id: string = "";

  public static readonly url: string = "http://52.78.112.247/";

  public static setToken(newToken: string) {
    this._token = newToken;
  }

  public static get Token() {
    return this._token;
  }

  public static get Id() {
    return this._id;
  }
  public static setId(userId: string) {
    this._id = userId;
  }

  public static isLogin() {
    return this._token ? true : false;
  }

  public static getFullPath(path: string) {
    return this.url[this.url.length - 1] === '/' ? this.url + path : this.url + "/" + path;
  }
}