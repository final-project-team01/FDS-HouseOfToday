import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/core/user.service';

@Component({
  selector: 'app-users',
  template: `
  <div class="container">
  <div class="row">
    <div class="col-12 profile">
      <div class="profile_data">
        <div class="profile_share">share_btn</div>
        <div class="profile_pic">profile-photo</div>
        <div class="profile_info">
          <div class="profile_name"><strong>#NAME</strong></div>
          <div class="profile_follow_state">
            <div><a href="#"></a>팔로워0</div>
            <div><a href="#"></a>팔로잉0</div>
          </div>
          <div class="short-cut">
            <div><a href="#">스크랩북</a></div>
            <div><a href="#">좋아요</a></div>
            <div><a href="#">설명</a></div>
          </div>
          <div class="addFriend_btn">
            <button><a href="#">친구초대 +5000P</a></button>
          </div>
        </div>
      </div>
    </div>

    <div class="col-12 profileContent">
      <div class="contents">
        <section class="post post_photo">
          <h5 class="post_title">사진 0</h5>
          <a href="#" class="upload_photo">첫 번째 사진을 올려보세요</a>
        </section>
        <section class="post post_project">
          <h5 class="post_title">집들이 0</h5>
          <a href="#" class="upload_project">첫 번째 집들이를 올려보세요</a>
        </section>
      </div>
    </div>
  </div>
</div>
<footer class="footer">
  <div class="footer_cs">
    <p>
      <b>고객센터></b>
      <br />
      <strong>1670-0876</strong>
      <br />
      <b>평일 10:00~17:00 (점심시간 12:00~13:00 / 주말&공휴일 제외) </b>
    </p>
    <div class="footer_link">icons</div>
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
      >NICEPAY 안전거래 서비스 : 고객님의 안전거래를 위해 현금 결제 시, 저희
      사이트에서 가입한 구매안전 서비스를 이용할 수 있습니다.
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
    <app-footer></app-footer>
  `,
  styles: []
})
export class UsersComponent implements OnInit {

  constructor(private userService: UserService) { }

  ngOnInit() {
  }

}
