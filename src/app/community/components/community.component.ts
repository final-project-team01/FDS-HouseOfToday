import { Component, OnInit } from '@angular/core';
import { CommunityService } from 'src/app/core/services/community.service';
import { CommonService } from 'src/app/core/services/common.service';

import { LyTheme2 } from '@alyle/ui';
import { today_deal, store_home } from 'src/app/core/models/store.interface';
import { StoreService } from 'src/app/core/services/store.service';
import { Community, todayStory, todayPicture, todayDeal, best100 } from 'src/app/core/models/community.interface';

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
            <article class="story-header" *ngFor="let mainImage of mainEntry">
              <a class="story-header-link">
                <div class="story-header__image-wrap">
                  <div class="story-header__image" [ngStyle]="{ 'background-image': 'url(' + mainImage.cover_image + ')' }"></div>
                </div>
                <div class="story-header__content-wrap">
                  <div class="story-header__content">
                    <div class="story-header__content__title">{{mainImage.title}}<br>
                    </div>
                    <div class="story-header__content__profile">
                      <img class="story-header__content__profile__image" src="{{mainImage.author_profile}}"> 
                      <span class="story-header__content__profile__name">{{mainImage.author}}</span>
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
          <li *ngFor="let storyToday of storiesToday" class="col-6 col-md-3 home-stories__content__item">
            <article class="story-entry story-story-item">
              <a class="story-entry-link">
                <div class="story-entry__image-wrap">
                  <img class="story-entry__image" src="{{storyToday.cover_image}}">
                </div>
                <div class="story-entry__content-wrap">
                  <div class="story-entry__content">
                    <div class="story-entry__content__title">{{storyToday.title}}<br></div>
                    <div class="story-entry__content__profile">
                      <img class="story-entry__content__profile__image" src="{{storyToday.author_profile}}">
                      <span class="story-entry__content__profile__name">{{storyToday.author}}</span>
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
          <h2 class="col home-section__header__content">오늘의딜</h2>
          <a class="home-section__header__more home-hide-sm">더보기</a>
        </header>
        <app-product-list
        [productItems]="todaysDeals"
        [menuWidth]="menuWidth"
        [setNumber]="setNumber"
        [hours]="hours"
        [minutes]="minutes"
        [seconds]="seconds"
        [activeTimer]="activeTimer"></app-product-list>
      </section>
      <section class="container home-section home-cards">
        <header class="row home-section__header">
          <h2 class="col home-section__header__content">오늘의 인기 사진</h2>
          <a class="home-section__header__more home-hide-sm">더보기</a>
        </header>
        <ul class="row home-cards__content">
          <li *ngFor="let storyFame of storiesFame; let i = index" class="col-6 col-md-3 home-cards__content__item">
            <article class="story-entry story-card-item">
              <a class="story-entry-link">
                <div class="story-entry__image-wrap">
                  <img class="story-entry__image" src="{{storyFame.image}}">
                </div>
                <div class="story-entry__content-wrap">
                  <div class="story-entry__content">
                    <div class="story-entry__content__profile">
                      <img class="story-entry__content__profile__image" src="{{storyFame.author_profile_image}}">
                      <span class="story-entry__content__profile__name">{{storyFame.author}}</span>
                    </div>
                  </div>
                  <div *ngIf="i < 3" class="home-rank-icon">
                    <span class="pc icon-page-home__a-2">{{i + 1}}</span>
                  </div>
                </div>
              </a>
            </article>
          </li>
        </ul>
      </section>
      <a routerLink="/store/rank" class="container home-banner home-banner--pc">
        <div class="pc-banner"></div>
      </a>
      <section class="container home-section home-exhibitions">
        <header class="row home-section__header">
          <h2 class="col home-section__header__content">베스트 100</h2>
          <a class="home-section__header__more home-hide-sm">더보기</a>
        </header>
        <div class="production-rank-feed">
          <ul class="production-rank-feed__category">
            <li *ngFor="let rankFeed of rankFeeds; let i = index" class="production-rank-feed__category__item" role="button" (click)="changeCategory(rankFeed.id)" [class.active]="clicked === rankFeed.id">{{rankFeed.categoryName}}</li>
          </ul>
          <div class="row production-rank-feed__group">
            <div class="col production-rank-feed__list-wrap">
              <ul class="row production-rank-feed__list">
                <div class="col-4 production-rank-feed__item" *ngFor="let best3 of best100; let i = index">
                  <div class="product-simplified home-production-item">
                    <a class="product-item">
                      <div class="img-wrap square">
                        <img class="lazyload" src="{{best3.thumnail_images[0].image}}">
                      </div>
                      <div class="info">
                        <p class="product-name text-caption-1 line-height-normal">{{best3.name}}</p>
                        <p class="price text-caption-3">
                          <span class="discount-ratio text-blue text-body-1 bold">{{best3.discount_rate}}%</span>
                          <strong class="selling-price text-body-1 text-black">{{commonService.addComma(best3.price)}}</strong>
                        </p>
                      </div>
                      <div *ngIf="i < 3" class="home-rank-icon">
                        <span class="pc icon-page-home__a-2">{{i + 1}}</span>
                      </div>
                    </a>
                  </div>
                </div>
              </ul>
            </div>
            <div class="col-12 col-md-3 home-rank__more-wrap">
              <div class="home-rank__more-container">
                <a class="home-rank__more" (mouseover)="selectedActive()" (mouseleave)="unselectActive()" routerLink="/store/rank">
                  <div class="home-rank__more__text">베스트 100 보기
                    <div class="home-rank__more__text__icon">
                      <span class="unselected icon-page-home__b-1"></span>
                      <span class="selected icon-page-home__b-1" [class.active]="activeSelect"></span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
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

  .col-4 {
    position: relative;
    width: 100%;
    min-height: 1px;
    box-sizing: border-box;
    flex: 0 0 33.3333333333%;
    max-width: 33.3333333333%;
    padding-right: 10px;
    padding-left: 10px;
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

  .col {
    padding-right: 10px;
    padding-left: 10px;
    flex-basis: 0;
    flex-grow: 1;
    max-width: 100%;
    position: relative;
    width: 100%;
    min-height: 1px;
    box-sizing: border-box;
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

  .story-story-item .story-entry__content__title {
    max-height: 38.5px;
    font-size: 15px;
    font-weight: bold;
    line-height: 1.3;
    text-overflow: ellipsis;
    overflow: hidden;
    word-wrap: break-word;
  }

  .story-story-item .story-entry__content__profile {
    display: block;
    font-size: 13px;
  }

  .story-entry__content__profile {
    margin-left: 10px;
  }

  .story-entry__content__profile__name {
    margin-left: 5px;
  }

  .story-story-item .story-entry__content__profile__image {
    width: 22px;
    height: 22px;
    vertical-align: -8px;
    display: inline-block;
    background-size: cover;
    background-position: center;
    border-radius: 100%;
    margin-right: 2px;
  }

  .home-stories__content__menu-wrap {
    display: flex;
    flex-direction: column;
    align-items: stretch;
  }

  .home-section__header {
    margin-bottom: 20px;
    align-items: center;
    position: relative;
  }

  .home-section__header__content {
    font-size: 20px;
    font-weight: bold;
    color: black;
    width: 1100px;
  }

  .home-section__header__more.home-hide-sm {
    color: #35C5F0;
    font-weight: bold;
    display: block;
    font-size: 15px;
  }

  .story-card-item .story-entry__image-wrap {
    position: relative;
    overflow: hidden;
  }

  .story-card-item .story-entry__image-wrap:before {
    content: '';
    display: block;
    padding-bottom: 100%;
  }

  .story-card-item .story-entry__image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    min-height: 100%;
    transition: .2s transform;
    background-color: whitesmoke;
  }

  .story-card-item .story-entry__content {
    padding: 15px;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    color: white;
    box-sizing: border-box;
  }

  .story-card-item .story-entry__content__profile {
    font-size: 13px;
    font-weight: bold;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }

  .story-card-item .story-entry__content__profile__image {
    width: 22px;
    height: 22px;
    vertical-align: -7px;
    display: inline-block;
    border-radius: 100%;
    margin-right: 2px;
    background-size: cover;
    background-position: center;
    border: 1px solid rgba(255,255,255,0.5);
    box-sizing: border-box;
  }

  .home-rank-icon {
    position: absolute;
    left: 20px;
    top: 0;
    font-weight: bold;
    color: white;
  }

  .home-rank-icon>.pc {
    display: block;
    padding-top: 8px;
    font-size: 15px;
    text-align: center;
    box-sizing: border-box;
  }

  .icon-page-home__a-2 {
    width: 30px;
    height: 36px;
    background-image: url('../../../assets/image/icon-etc.png');
    background-position: left 260px top 470px;
    background-size: 600px auto;
  }

  .home-cards__content__item {
    margin-bottom: 20px;
  }

  .production-rank-feed {
    overflow: hidden;
  }

  .home-rank .production-rank-feed__category {
    margin-top: 10px;
  }

  .home-banner--pc {
    display: block;
  }
  .home-banner>.pc-banner {
    display: block;
    width: 100%;
    height: 80px;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
  }

  .pc-banner {
    background-image: url('https://image.ohou.se/image/resize/bucketplace-v2-development/uploads-banners-home-1555313538361_OT.jpg/2361/none');
  }

  .production-rank-feed__category {
    margin: 10px -20px;
    position: relative;
    font-size: 0;
    overflow-x: auto;
    white-space: nowrap;
  }

  .production-rank-feed__category__item.active {
    color: #35C5F0;
  }

  .production-rank-feed__category__item {
    padding: 10px 15px;
    font-size: 15px;
    display: inline-block;
    margin: 0 5px;
    font-weight: bold;
    cursor: pointer;
  }

  .home-production-item.product-simplified {
    position: relative;
  }

  .product-simplified {
    display: block;
  }

  .img-wrap.square {
    position: relative;
    overflow: hidden;
    border-radius: 6px;
  }

  .img-wrap.square>img {
    position: absolute;
    width: 100%;
    height: 100%;
  }

  .home-section img {
    background-color: whitesmoke;
  }

  .product-simplified img {
    top: 0;
    left: 0;
    transition: .2s transform;
  }

  .image-wrap.square:after, .img-wrap.square:after {
    content: "";
    padding-top: 100%;
    display: block;
  }

  .home-production-item.product-simplified .info {
    height: 93px;
  }

  .product-simplified .info {
    box-sizing: border-box;
    padding: 15px 0;
    background-color: white;
  }

  .home-production-item.product-simplified .info .product-name {
    max-height: 36px;
  }

  .home-production-item.product-simplified .info .product-name {
    text-overflow: ellipsis;
    overflow: hidden;
    word-wrap: break-word;
  }

  .product-simplified .info>p:not(:last-child) {
    margin-bottom: 10px;
  }

  .line-height-normal {
    line-height: 1.38;
  }

  .home-production-item.product-simplified .info {
    height: 93px;
  }

  .product-simplified .info {
    box-sizing: border-box;
    padding: 15px 0;
    background-color: white;
  }

  .home-production-item.product-simplified .info .product-name {
    max-height: 36px;
    text-overflow: ellipsis;
    overflow: hidden;
    word-wrap: break-word;
  }

  .product-simplified .info>.price {
    vertical-align: baseline;
  }

  .text-caption-1 {
    font-size: 13px;
    color: #424242;
  }

  .text-caption-3 {
    font-size: 11px;
  }

  .product-simplified .info>.price>.discount-ratio {
    margin-right: 2px;
  }

  .product-simplified .info>.price>* {
    vertical-align: inherit;
  }

  .bold {
    font-weight: bold;
  }

  .text-blue {
    color: #35C5F0;
  }

  .text-body-1 {
    font-size: 15px;
  }

  .home-rank__more-wrap {
    display: block;
  }

  .home-rank__more-container {
    overflow: hidden;
    border-radius: 4px;
    position: relative;
    width: 100%;
  }

  .home-rank__more-container:before {
    content: '';
    display: block;
    padding-bottom: 100%;
  }

  .home-rank__more {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: whitesmoke;
  }

  .home-rank__more__text {
    font-size: 20px;
    line-height: 1.35;
    text-align: center;
    color: #424242;
    font-weight: bold;
  }

  .home-rank__more__text__icon {
    margin: 15px auto 0;
    width: 40px;
    height: 40px;
    font-size: 0;
    border-radius: 100%;
    box-shadow: 0 2px 4px 0 rgba(0,0,0,0.2);
  }

  .home-rank__more__text__icon>.selected, .home-rank__more__text__icon>.unselected {
    display: block;
    position: absolute;
    transition: .1s opacity;
  }

  .home-rank__more__text__icon>.unselected {
    width: 40px;
    height: 40px;
    background-position: right 601px top 362px;
    background-image: url('../../../assets/image/icon-pointer.png');
    background-size: 600px auto;
    transform: scale(1.3);
  }

  .home-rank__more__text__icon>.selected {
    opacity: 0;
    width: 40px;
    height: 40px;
    background-position: right 532px top 264px;
    background-image: url('../../../assets/image/icon-pointer.png');
    background-size: 600px auto;
    transform: scale(1.3);
  }

  .home-rank__more__text__icon>.selected.active {
    opacity: 1;
  }

  .production-rank-feed__category__item.active {
    color: #35C5F0;
  }
  `]
})
export class CommunityComponent implements OnInit {
  menuWidth: string = '25%';
  community: Community;
  mainEntry: any;
  storiesToday: todayStory[];
  storiesFame: todayPicture[];
  productItems: today_deal[];
  fulltodaysDeals: any;
  todaysDeals: todayDeal[];
  bestContainer: best100;
  best100: best100;

  setNumber: number;
  setNumberFamous: number;
  setMenuNum: number = 1;
  storyMenuOn: boolean = false;
  style: object;
  
  today: Date;
  tomorrow: Date;
  gap: number;
  hours: number = 0;
  minutes: number = 0;
  seconds: number = 0;
  activeTimer: boolean = false;
  activeSelect: boolean;
  clicked: string = 'total';
  index: number = 0;
  
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

  rankFeeds = [
    {
      categoryName: '전체',
      id: 'total'
    },
    {
      categoryName: '가구',
      id: 'furniture'
    },
    {
      categoryName: '패브릭',
      id: 'fabric'
    },
    {
      categoryName: '홈데코/조명',
      id: 'light_homedeco'
    },
    {
      categoryName: '가전',
      id: 'home_appliances'
    },
    {
      categoryName: '수납/생활',
      id: 'daily_supplies'
    },
    {
      categoryName: '주방',
      id: 'kitchenware'
    },
    {
      categoryName: '반려동물',
      id: 'companion_animal'
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
        this.setNumber = 4;
        this.storyMenuOn = true;
    });

    this.communityService.getCommunityHome()
      .subscribe((data) => {
        this.community = data as Community;
        this.mainEntry = this.community.today_entry;
        this.storiesToday = this.community.today_story;
        this.todaysDeals = this.community.todaydeal;
        this.storiesFame = this.community.today_picture;
        this.bestContainer = this.community.best100_category_list;
        this.best100 = this.bestContainer.total;
      });

    this.dealTimer();
  }

  dealTimer() {
    setInterval(() => {
      this.today = new Date();
      this.tomorrow = new Date();

      this.tomorrow.setDate(this.today.getDate() + 1);
      this.tomorrow.setHours(0, 0, 0, 0);

      this.gap = this.tomorrow.getTime() - this.today.getTime();

      this.hours = Math.floor(
        (this.gap % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      this.minutes = Math.floor((this.gap % (1000 * 60 * 60)) / (1000 * 60));
      this.seconds = Math.floor((this.gap % (1000 * 60)) / 1000);
    }, 1000);
    this.activeTimer = true;
  }
  
  changeCategory(categoryid: string) {
    this.best100 = this.community.best100_category_list[categoryid];

    this.clicked = categoryid;
  }

  selectedActive() {
    this.activeSelect = true;
  }

  unselectActive() {
    this.activeSelect = false;
  }
}
