import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
    <footer class="footer">
      <div class="footer-contents">
        <div class="footer_cs">
          <p>
            <b>고객센터></b>
            <br />
            <strong>1670-0876</strong>
            <br />
            <b>평일 10:00~17:00 (점심시간 12:00~13:00 / 주말&공휴일 제외) </b>
          </p>
          <div class="footer_link">
            <a class="apple_store"></a>
            <a class="google_play"></a>
            <a class="kakao_story"></a>
            <a class="facebook"></a>
            <a class="instagram"></a>
            <a class="naver"></a>
          </div>
        </div>
        <div class="footer_short_cut">
          <a class="#">브랜드 스토리</a>
          <a class="#">회사소개</a>
          <a class="#">채용정보</a>
          <a class="#">이용약관</a>
          <a class="#">개인정보취급방침</a>
          <a class="#">고객센터</a>
          <a class="#">고객의 소리</a>
          <a class="#">전문가 등록</a>
          <a class="#">사업자 구매회원</a>
          <a class="#">제휴/광고 문의</a>
          <a class="#">입점신청 문의</a>
        </div>
        <address class="footer_address">
          <a href="#">상호명: (주)버킷플레이스</a>
          <a href="#">이메일:contact@bucketplace.net</a>
          <span>대표이사: 이승재</span>
          <span>사업자등록번호: 119-86-91245</span>
          <span>통신판매업신고번호: 제2018-서울서초-0580호</span>
          <a>주소: 서울특별시 서초구 강남대로 373 홍우대로 14층 버킷플래이스</a>
        </address>
        <p class="footer_nice">
          <span
            >NICEPAY 안전거래 서비스 : 고객님의 안전거래를 위해 현금 결제 시,
            저희 사이트에서 가입한 구매안전 서비스를 이용할 수 있습니다.
          </span>
          <b>
            <a href="#">가입확인</a>
          </b>
        </p>
        <p class="footer_copyRight">
          <span>Copyright © 2014 by</span>
          <a href="#">Bucketplace Inc</a>
          <span>All Rights Reserved</span>
        </p>
      </div>
    </footer>
  `,
  styles: [
    `
      /* footer */
      footer {
        background-color: #f0f0f0;
        font-size: 10px;
        padding: 30px 0 50px;
        color: #757575;
        clear: both;
      }
      .footer-contents {
        margin-left: auto;
        margin-right: auto;
        padding: 30px 0 50px;
        width: 1136px;
      }
      .footer_cs {
        position: relative;
        font-size: 12px;
        margin-bottom: 30px;
      }
      .footer_cs > p > strong {
        font-weight: bold;
        display: inline-block;
        font-size: 28px;
        margin: 10px 0 5px;
        color: #424242;
      }
      .footer_link {
        display: inline-block;
        right: 0;
        top: 0;
        position: absolute;
      }
      .footer_link > a {
        margin: 0 5px;
      }
      .apple_store,
      .google_play,
      .kakao_story,
      .facebook,
      .instagram,
      .naver {
        display: inline-block;
        background-size: 400px;
        width: 34px;
        height: 30px;
      }
      .apple_store {
        background-image: url(assets/image/common-footer@2x.png);
      }
      .google_play {
        background-image: url(assets/image/common-footer@2x.png);
        background-position-x: -40px;
      }
      .kakao_story {
        background-image: url(assets/image/common-footer@2x.png);
        background-position-x: -76px;
      }
      .facebook {
        background-image: url(assets/image/common-footer@2x.png);
        background-position-x: -115px;
      }
      .instagram {
        background-image: url(assets/image/common-footer@2x.png);
        background-position-x: -160px;
      }
      .naver {
        background-image: url(assets/image/common-footer@2x.png);
        background-position-x: -200px;
      }
      .footer_short_cut {
        margin: 0 -5px 10px;
        line-height: 20px;
      }
      .footer_short_cut > a {
        margin: 0 5px;
        font-weight: bold;
      }
      .footer_address {
        line-height: 20px;
      }
      .footer_nice {
        line-height: 20px;
        margin-bottom: 10px;
      }
    `
  ]
})
export class FooterComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
