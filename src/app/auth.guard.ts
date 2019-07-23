import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { StorageService } from './core/services/storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private router: Router
    , private storageService: StorageService
  ) { }
  canActivate() {
    if (this.storageService.getLocal("user")) {
      return true;
    }
    else {
      this.router.navigate(['signin']);
      return false;
    }
  }

}
