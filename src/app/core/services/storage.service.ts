import { Injectable } from '@angular/core';
import { CoreModule } from '../core.module';

@Injectable({
  providedIn: CoreModule
})
export class StorageService {

  constructor() { }

  setSession(key: string, value: string) {
    sessionStorage.setItem(key, value);
  }

  getSession(key: string) {
    return sessionStorage.getItem(key);
  }

  removeSession(key: string) {
    sessionStorage.removeItem(key);
  }

  setLocal(key: string, value: string) {
    localStorage.setItem(key, value);
  }

  getLocal(key: string) {
    return localStorage.getItem(key);
  }

  removeLocal(key: string) {
    localStorage.removeItem(key);
  }
}
