import { Component, OnInit } from '@angular/core';
import { CommunityService } from 'src/app/core/services/community.service';
import { CommonService } from 'src/app/core/services/common.service';

import { LyTheme2 } from '@alyle/ui';
import { today_deal, store_home } from 'src/app/core/models/store.interface';
import { StoreService } from 'src/app/core/services/store.service';

const styles = {
  carousel: {
    width: '255px',
    height: '510px',
    margin: 'auto',
  },
  carouselItem: {
    textAlign: 'center',
  }
};
@Component({
  selector: 'app-community',
  template: `
    <app-header></app-header>
    <main role="main" id="root">
      <section class="container home-header">
        <div class="row">
          <div class="col-12 col-md-9 home-head__story">
            <article class="story-header">
              <a class="story-header-link">
                <div class="story-header__image-wrap">
                  <div class="story-header__image"></div>
                </div>
                <div class="story-header__content-wrap">
                  <div class="story-header__content">
                    <div class="story-header__content__title">폴란드의 조용한 도시 글리비체에서 느리고 따스하게.<br>
                    </div>
                    <div class="story-header__content__profile">
                      <span class="story-header__content__profile__image"></span>  
                      <span class="story-header__content__profile__name"></span>
                    </div>
                  </div>
                  <div class="home-header__story__more">보러가기</div>
                </div>
              </a>
            </article>
          </div>
          <div class="col-12 col-md-3 home-header__banner-col">
            <div class="home-header__banner-wrap">
              <ly-carousel [withClass]="classes.carousel" class="home-header__banner-container">
                <ly-carousel-item
                  *ngFor="let item of items"
                  [withClass]="classes.carouselItem"
                  [srcImg]="item.img"
                  class="home-header__items">
                </ly-carousel-item>
              </ly-carousel>
            </div>
          </div>
        </div>
      </section>
      <nav class="container shortcut">
        <ul class="shortcut__list">
          <li class="shortcut__list__item" *ngFor="let navItem of navItems">
            <a class="shortcut__list__item__link">
              <div class="shortcut__list__item__link__image">
                <img class="shortcut__list__item__link__image__img" src="{{navItem.icon}}">
              </div>
              <div class="shortcut__list__item__link__title">{{navItem.title}}</div>
            </a>
          </li>
        </ul>
      </nav>
      <section class="container home-section home-stories">
        <header class="row home-section__header">
          <h2 class="col-12 home-section__header__content">오늘의 스토리</h2>
        </header>
        <ul class="row home-stories__content">
          <li class="col-6 col-md-3 home-stories__content__item" *ngFor="let storiesItem of storiesItems">
            <article class="story-entry story-story-item">
              <a class="story-entry-link">
                <div class="story-entry__image-wrap">
                  <img class="story-entry__image" src="{{storiesItem.img}}">
                </div>
                <div class="story-entry__content-wrap">
                  <div class="story-entry__content">
                    <div class="story-entry__content__category">{{storiesItem.category}}</div>
                    <div class="story-entry__content__title">{{storiesItem.title}}<br></div>
                    <div class="story-entry__content__profile">
                      <span class="story-entry__content__profile__image" style="background-image: url({{storiesItem.profileImg}})"></span>
                      <span class="story-entry__content__profile__name">{{storiesItem.profileName}}</span>
                    </div>
                  </div>
                </div>
              </a>
            </article>
          </li>
          <div class="menu-wrap">
            <div class="col-6 col-md-3 home-stories__content__menu-wrap">
              <div class="home-stories__content__menu">
                <a *ngFor="let storyMenu of storiesMenu"class="home-stories__content__menu__entry">
                  <div class="description">{{storyMenu.description}}</div>
                  <div class="title">
                    <span class="text">{{storyMenu.title}}</span>
                    <span class="caret icon-page-home__g-1"> > </span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </ul>
      </section>
      <section class="container home-section">
        <header class="row home-section__header">
          
        </header>
      </section>
    </main>
    <app-footer></app-footer>
  `,
  styles: [`
  main {
    display: flex;
    flex-direction: column;
    flex: 1 0 auto;
    min-height: 1px;
    box-sizing: border-box;
    position: relative;
    line-height: 1;
    letter-spacing: -0.4px;
  }

  .home-header {
    padding: 30px 0 0;
    align-items: stretch;
  }

  .container {
    margin-right: auto;
    margin-left: auto;
    width: 1136px;
    max-width: 100%;
    box-sizing: border-box;
    min-height: 1px;
  }

  .row {
    display: flex;
    flex-wrap: wrap;
    box-sizing: border-box;
    margin-right: -10px;
    margin-left: -10px;
  }

  .col-md-9 {
    padding-right: 10px;
    padding-left: 10px;
    position: relative;
    width: 100%;
    min-height: 1px;
    box-sizing: border-box;
    flex: 0 0 75%;
    max-width: 75%;
  }

  body {
    font-size: 15px;
  }
  .home-header__story .story-header {
    position: relative;
    overflow: hidden;
    border-radius: 6px;
  }

  .story-header-link {
    margin-bottom: 20px;
    cursor: pointer;
    touch-action: manipulation;
  }

  .story-header__image {
    background-image: url('https://image.ohou.se/image/central_crop/bucketplace-v2-development/uploads-projects-cover_images-156324653991488335.jpg/1280/768');
  }

  .home-header__story, .story-header__image {
    padding-bottom: 60%;
    background-color: whitesmoke;
    background-size: cover;
    background-position: center;
    transition: .2s transform;
    border-radius: 5px;
  }

  .home-header__story, .story-header__content-wrap {
    padding: 40px;
    flex-direction: row;
    justify-content: flex-end;
    align-items: flex-end;
  }

  .story-header__content-wrap {
    display: flex;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    z-index: 2;
  }

  .home-header__story, .story-header__content {
    flex: 1 1 0px;
    color: white;
    font-weight: bold;
  }

  .home-header__story, .story-header__content__title {
    max-height: 88px;
    font-size: 28px;
    margin: 8px 0 10px;
    line-height: 1.38;
    text-overflow: ellipsis;
    overflow: hidden;
    word-wrap: break-word;
  }

  .home-header__story, .story-header__content__profile {
    display: block;
    font-size: 13px;
    font-weight: normal;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }

  .home-header__story, .story-header__content__profile__image {
    width: 22px;
    height: 22px;
    vertical-align: -8px;
    display: inline-block;
    border-radius: 100%;
    margin-right: 2px;
    background-size: cover;
    background-position: center;
  }

  .home-header__story__more {
    width: 140px;
    padding: 18px 0 17px;
    font-size: 15px;
    margin: 0 0 0 20px;
    background-color: transparent;
    border: 1px solid white;
    border-radius: 4px;
    color: white;
    font-weight: bold;
    text-align: center;
    transition: .1s background-color, .1s border;
  }

  .home-header__banner-wrap {
    position: relative;
    border-radius: 6px;
    flex: 1 0 0px;
  }

  .home-header__banner-container {
    display: flex;
    align-items: stretch;
    display: block;
  }

  .home-header__banner {
    flex: 0 0 auto;
    width: 100%;
    font-size: 0;
  }

  .home-header__items {
    border-radius: 6px;
  }

  .shortcut__list {
    flex-wrap: nowrap;
    margin: 30px 0 20px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    box-sizing: border-box;
  }

  .shortcut__list__item {
    flex: 0 0 12.5%;
    display: inline-block;
  }

  .shortcut__list__item__link__image {
    width: 100%;
  }

  .shortcut__list__item__link__image__img {
    width: 100%;
  }

  nav {
    display: block;
  }

  a, button {
    cursor: pointer;
  }

  .shortcut__list__item__link__title {
    margin: 6px 0 7px;
    font-size: 15px;
    display: block;
    text-align: center;
    color: black;
    font-weight: 500;
  }

  .home-section {
    margin: 30px auto;
  }

  .home-section__header {
    margin-bottom: 20px;
  }

  .home-section__header__content {
    font-size: 20px;
    color: black;
    font-weight: bold;
  }

  .col-12 {
    padding-right: 10px;
    padding-left: 10px;
  }

  .col-md-3 {
  position: relative;
  width: 100%;
  min-height: 1px;
  box-sizing: border-box;
  flex: 0 0 25%;
  padding-right: 10px;
  padding-left: 10px;
  }

  .home-stories__content__menu-wrap {
    display: flex;
    flex-direction: column;
    align-items: stretch;
    width: 280px;
  }

  .home-stories__content__menu {
    margin: -0.5px 0;
    border-radius: 6px;
    overflow: hidden;
  }

  .home-stories__content__menu__entry {
    flex: 1 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0.5px 0;
    padding: 12.5px 10%;
    background-color: whitesmoke;
    transition: .1s background-color;
    height: 80px;
  }

  .home-stories__content__menu__entry>.description {
    font-size: 12px;
    margin-bottom: 10px;
    color: #757575;
  }

  .home-stories__content__menu__entry>.title {
    font-size: 15px;
    display: flex;
    font-weight: bold;
    color: #424242;
  }

  .home-stories__content__menu__entry>.title>.text {
    flex: 1 1 0px;
    min-width: 0;
  }

  .home-stories__content__menu__entry>.title>.caret {
    margin-left: 5px;
    vertical-align: 2px;
  }

  .row {
    display: flex;
    flex-wrap: wrap;
    box-sizing: border-box;
    margin-right: -10px;
    margin-left: -10px;
  }

  article {
    display: block;
  }

  .home-stories__content {
    align-items: stretch;
  
  }
  .story-story-item .story-entry-link {
    display: flex;
    flex-direction: column;
  }

  .story-story-item .story-entry__image-wrap {
    position: relative;
    overflow: hidden;
    border-radius: 6px;
  }

  .story-story-item .story-entry__image-wrap:before {
    content: '';
    display: block;
    padding-bottom: 66.666%;
  }

  .story-story-item .story-entry__image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    min-height: 100%;
    transition: .2s transform;
  }

  .story-story-item .story-entry__content__category {
    margin-bottom: 5px;
    font-size: 13px;
    line-height: 1.3;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .home-stories__content__menu-wrap {
    display: flex;
    flex-direction: column;
    align-items: stretch;
  }
  `]
})
export class CommunityComponent implements OnInit {
  menuWidth: string = '25%';
  productItems: today_deal[];
  fulltodaysDeals: any;
  todaysDeals: store_home[];
  setNumber: number;
  setNumberFamous: number;
  setMenuNum: number = 1;
  storyMenuOn: boolean = false;
  
  navItems = [
    {
      icon: 'https://bucketplace-v2-development.s3.amazonaws.com/uploads/shortcut/items/1556598477191_Q8SKO.jpg',
      title: '신혼가구'
    },
    {
      icon: 'https://bucketplace-v2-development.s3.amazonaws.com/uploads/shortcut/items/1555907816013_OQ8jl.jpg',
      title: '쇼핑하기'
    },
    {
      icon: 'https://bucketplace-v2-development.s3.amazonaws.com/uploads/shortcut/items/1555907852466_mP.jpg',
      title: '평수별집구경'
    },
    {
      icon: 'https://bucketplace-v2-development.s3.amazonaws.com/uploads/shortcut/items/1555908014594_C3dF5xe4KO.jpg',
      title: '공간별사진'
    },
    {
      icon: 'https://bucketplace-v2-development.s3.amazonaws.com/uploads/shortcut/items/1555908037356_fNQgpR.jpg',
      title: '시공업체찾기'
    },
    {
      icon: 'https://bucketplace-v2-development.s3.amazonaws.com/uploads/shortcut/items/1555907949104_BXSaOEYAR.jpg',
      title: '시공견적계산'
    },
    {
      icon: 'https://bucketplace-v2-development.s3.amazonaws.com/uploads/shortcut/items/1555986831526_XE4r8.jpg',
      title: '셀프가이드'
    },
    {
      icon: 'https://bucketplace-v2-development.s3.amazonaws.com/uploads/shortcut/items/1555986804524_SXB.jpg',
      title: '질문과답변'
    }
  ]

  storiesItems = [
    {
      img: 'https://image.ohou.se/image/central_crop/bucketplace-v2-development/uploads-advices-cover_images-156375537476564618.JPG/640/426',
      category: '3화',
      title: '삼성 비스포크, 우리 집 키친테리어를 부탁해',
      profileImg: 'https://image.ohou.se/image/central_crop/bucketplace-v2-development/uploads-users-profile_images-1512439280629_knGlCsma.jpg/72/72',
      profileName: '오늘의집'
    },
    {
      img: 'https://image.ohou.se/image/central_crop/bucketplace-v2-development/uploads-advices-cover_images-156375537476564618.JPG/640/426',
      category: '3화',
      title: '삼성 비스포크, 우리 집 키친테리어를 부탁해',
      profileImg: 'https://image.ohou.se/image/central_crop/bucketplace-v2-development/uploads-users-profile_images-1512439280629_knGlCsma.jpg/72/72',
      profileName: '오늘의집'
    },
    {
      img: 'https://image.ohou.se/image/central_crop/bucketplace-v2-development/uploads-advices-cover_images-156375537476564618.JPG/640/426',
      category: '3화',
      title: '삼성 비스포크, 우리 집 키친테리어를 부탁해',
      profileImg: 'https://image.ohou.se/image/central_crop/bucketplace-v2-development/uploads-users-profile_images-1512439280629_knGlCsma.jpg/72/72',
      profileName: '오늘의집'
    },
  ];

  storiesMenu = [
    {
      description: '예쁜 집 구경하기',
      title: '집들이'
    },
    {
      description: '전문가 시공사례',
      title: '전문가 집들이'
    },
    {
      description: '인테리어 꿀팁 총 집합',
      title: '노하우'
    },
  ]

  readonly classes = this.theme.addStyleSheet(styles);
  items = [
    {
      img: 'https://image.ohou.se/image/resize/bucketplace-v2-development/uploads-contests-pc_banner-1559270614884_s1xhFP3cDl.jpg/850/none'
    },
    {
      img: 'https://image.ohou.se/image/resize/bucketplace-v2-development/uploads-contests-pc_banner-156411918513506052.png/850/none'
    },
    {
      img: 'https://image.ohou.se/image/resize/bucketplace-v2-development/uploads-contests-pc_banner-156223397761149170.png/850/none'
    }
  ];

  constructor(private communityService: CommunityService
    , private commonService: CommonService, private theme: LyTheme2, private storeService: StoreService
  ) {  }

  ngOnInit() {
    this.commonService.setLocate(0);
    this.commonService.setNav(0);
    this.storeService.getProductList()
    .subscribe((data) => {
      this.productItems = data as today_deal[];
      this.setNumber = 3;
      this.storyMenuOn = true;
    });
  }

}
