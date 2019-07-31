import { Injectable, OnInit } from '@angular/core';
import { CoreModule } from '../core.module';
import { StorageService } from './storage.service';
import { Router } from '@angular/router';

declare let Kakao: any;

@Injectable({
  providedIn: CoreModule
})
export class KakaoService {

  constructor(private storageService: StorageService
    , private router: Router
  ) {
    Kakao.init('b677f5095160228c024bdde3bdd1a5bd');
  }

  login(loginEvent) {
    const kakaoLogin = loginEvent;
    // 로그인 창을 띄웁니다.
    Kakao.Auth.loginForm({
      success: function (authObj) {
        // 로그인 성공시, API를 호출합니다.
        Kakao.API.request({
          url: '/v2/user/me',
          success: function (res) {
            this.userObj = res;
            kakaoLogin.emit(this.userObj);
          },
          fail: function (error) {
            alert(JSON.stringify(error));
          }
        });
      },
      fail: function (err) {
        alert(JSON.stringify(err));
      }
    });
  };

  logout(removeFunc) {
    Kakao.Auth.logout(
      (obj) => {
        console.log("logout", obj);
        if (obj) {
          removeFunc();
          this.router.navigate(['/']);
        }
      }
    );
  }
}