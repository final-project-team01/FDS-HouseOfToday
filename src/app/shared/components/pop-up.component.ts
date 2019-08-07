import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/core/services/common.service';

@Component({
  selector: 'app-pop-up',
  template: `
    <div class="pop-up">
      <div class="pop-up-message">
        <span class="message-container">
        <pre>
        본 사이트는 Fastcampus FDS, WPS, IOS 스쿨에서 프로젝트를 위해 만든 사이트 입니다.
        실제 <a href="https://ohou.se/">오늘의 집</a>사이트의 주소는 <a href="https://ohou.se/">ohou.se</a>이며, 본 사이트의 주소는 ohouse.co.kr입니다.
        </pre></span>
      </div>
      <button class="pop-up-close" type="button" (click)="close()">
        <svg width="24" height="24" viewBox="0 0 24 24" class="icon"><path fill="#FFF" fill-opacity=".7" fill-rule="evenodd" d="M12 11.3l8.1-8.1.7.7-8 8.1 8 8.1-.7.7-8.1-8-8.1 8-.7-.7 8-8.1-8-8.1.7-.7 8.1 8z"></path></svg>
      </button>
    </div>
  `,
  styles: [
    `
    .pop-up{
      flex: 0 0 auto;
      position: relative;
      line-height: 1.3;
      z-index: 1000;
      overflow: hidden;
    }
    .pop-up-message{
      background-color: #35c5f0;
      position: relative;
      display: block;
      height: 80px;
    }
    .message-container{
      color: white;
      font-size: 24px;
      position: absolute;
      top: 0;
      left: 50%;
      height: 100%;
      transform: translate(-50%, 0);
    }
    .message-container  a{
      font-weight: bold;
      font-size: 32px;
      margin: 20px;
    }
    .pop-up-close{
      position: absolute;
      top: 50%;
      right: 23px;
      margin-top: -17px;
      padding: 5px;
      font-size: 0;
      border: none;
      background: none;
      cursor: pointer;
    }
    `
  ]
})
export class PopUpComponent implements OnInit {

  constructor(public commonService: CommonService) { }

  ngOnInit() {
  }
  close() {
    this.commonService.isPopup = false;
  }

}
