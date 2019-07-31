import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { kakao_info } from 'src/app/core/models/auth.interface';
import { AuthService } from 'src/app/core/services/auth.service';
declare let Kakao: any;

@Component({
  selector: 'app-social',
  template: `
    <img
      src="assets/image/kakaolink_btn/kakaolink_btn_small_ov.png"
      (click)="loginWithKakao()"
    />
  `,
  styles: []
})
export class KakaoComponent implements OnInit {
  @Output() kakaoLogin = new EventEmitter();

  userObj: kakao_info;
  loginWithKakao: Function;

  constructor(private authService: AuthService) {}

  ngOnInit() {
    Kakao.init('b677f5095160228c024bdde3bdd1a5bd');
    const kakaoLogin = this.kakaoLogin;
    this.loginWithKakao = () => {
      // 로그인 창을 띄웁니다.
      Kakao.Auth.login({
        success: function(authObj) {
          // 로그인 성공시, API를 호출합니다.
          Kakao.API.request({
            url: '/v2/user/me',
            success: function(res) {
              console.log('res', res);
              this.userObj = res;
              kakaoLogin.emit(this.userObj);
            },
            fail: function(error) {
              alert(JSON.stringify(error));
            }
          });
        },
        fail: function(err) {
          alert(JSON.stringify(err));
        }
      });
    };
  }
}
