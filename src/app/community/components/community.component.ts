import { Component, OnInit } from '@angular/core';
import { CommunityService } from 'src/app/core/services/community.service';
import { CommonService } from 'src/app/core/services/common.service';

@Component({
  selector: 'app-community',
  template: `
    <app-header></app-header>
    <main role="main" id="root">
      <section class="container home-header">
        <div class="row">
          <div class="col-12 col-md-9 home-head__story">
            <article class="story-entry">
              <a class="story-entry-link">
                <div class="story-entry__image-wrap">
                  <div class="story-entry__image"></div>
                </div>
                <div class="story-entry__content-wrap">
                  <div class="story-entry__content">
                    <div class="story-entry__content__title">폴란드의 조용한 도시 글리비체에서 느리고 따스하게.<br>
                    </div>
                    <div class="story-entry__content__profile">
                      <span class="story-entry__content__profile__image"></span>  
                      <span class="story-entry__content__profile__name"></span>
                    </div>
                  </div>
                  <div class="home-header__story__more">보러가기</div>
                </div>
              </a>
            </article>
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
  .home-header__story .story-entry {
    position: relative;
    overflow: hidden;
    border-radius: 6px;
  }

  .story-entry-link {
    margin-bottom: 20px;
    cursor: pointer;
    touch-action: manipulation;
  }

  .story-entry__image {
    background-image: url('https://image.ohou.se/image/central_crop/bucketplace-v2-development/uploads-projects-cover_images-156324653991488335.jpg/1280/768');
  }

  .home-header__story, .story-entry__image {
    padding-bottom: 60%;
    background-color: whitesmoke;
    background-size: cover;
    background-position: center;
    transition: .2s transform;
    border-radius: 5px;
  }

  .home-header__story, .story-entry__content-wrap {
    padding: 40px;
    flex-direction: row;
    justify-content: flex-end;
    align-items: flex-end;
  }

  .story-entry__content-wrap {
    display: flex;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    z-index: 2;
  }

  .home-header__story, .story-entry__content {
    flex: 1 1 0px;
    color: white;
    font-weight: bold;
  }

  .home-header__story, .story-entry__content__title {
    max-height: 88px;
    font-size: 28px;
    margin: 8px 0 10px;
    line-height: 1.38;
    text-overflow: ellipsis;
    overflow: hidden;
    word-wrap: break-word;
  }

  .home-header__story, .story-entry__content__profile {
    display: block;
    font-size: 13px;
    font-weight: normal;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }

  .home-header__story, .story-entry__content__profile__image {
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
  `]
})
export class CommunityComponent implements OnInit {

  constructor(private communityService: CommunityService
    , private commonService: CommonService
  ) { }

  ngOnInit() {
    this.commonService.setLocate(0);
    this.commonService.setNav(0);
  }

}
