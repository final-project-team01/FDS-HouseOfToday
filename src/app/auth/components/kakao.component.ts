import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { kakao_info } from 'src/app/core/models/auth.interface';
import { AuthService } from 'src/app/core/services/auth.service';
import { KakaoService } from 'src/app/core/services/kakao.service';

@Component({
  selector: 'app-social',
  template: `
    <img
      src="assets/image/kakaolink_btn/kakaolink_btn_small_ov.png"
      (click)="kakaoService.login(kakaoLogin)"
    />
  `,
  styles: []
})
export class KakaoComponent implements OnInit {
  @Output() kakaoLogin = new EventEmitter();

  userObj: kakao_info;

  constructor(
    private authService: AuthService,
    public kakaoService: KakaoService
  ) { }

  ngOnInit() { }
}
