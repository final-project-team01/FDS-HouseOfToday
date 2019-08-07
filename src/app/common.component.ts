import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-common',
  template: `
    <dl>
      <dt>이미지 줌인, 줌 아웃</dt>
      <dd>
        <a ImageZoom>
          <div>
            <img class="image-zoom" src="assets/image/cart-empty-placeholder.png">
          </div>
          <div>
            <h1>줌인 줌아웃</h1>
            <p>directive : ImageZoom / img class : image-zoom</p>
          </div>
        </a>
      </dd>
      <dd>
        <div [innerText]="zoom">
        </div>
      </dd>
    </dl>
    
    <dl>
      <dt>기본 버튼</dt>
      <dd>
        <a BlueButton style="width:100px; height:20px;">이거 a</a>
        <button BlueButton style="width:100px; height:20px;">이건 b</button>
      </dd>
      <dd>
        <div [innerText]="button">
        </div>
      </dd>
    </dl>
    
    <dl>
      <dt>체크박스</dt>
      <dd>
        <app-check-box [isChecked]="true" [caption]="true">얘는 이거 됨</app-check-box>
        <app-check-box [isChecked]="false">얘는 안됨</app-check-box>
      </dd>
      <dd>
        <div [innerText]="checkBox">
        </div>
      </dd>
    </dl>

        
    <dl>
      <dt>아바타</dt>
      <dd>
        <app-basic-uses-avatar></app-basic-uses-avatar>
        <app-basic-uses-avatar [size]="100" [pic]="'assets/image/cart-empty-placeholder.png'" ></app-basic-uses-avatar>
        <app-basic-uses-avatar [size]="48" [isBorder]="true"></app-basic-uses-avatar>
      </dd>
      <dd>
        <div [innerText]="basicUsesAvatar">
        </div>
      </dd>
    </dl>

    <dl>
      <dt>파란글씨</dt>
      <dd>
        <a BlueFont>a</a>
        <button BlueFont>b</button>
        <span BlueFont>s</span>
      </dd>
      <dd>
        <div [innerText]="blueFont">
        </div>
      </dd>
    </dl>

    <dl>
      <dt>흐려지기</dt>
      <dd>
        <a OpacityDot7Font>글자가</a>
        <button OpacityDot7Font>약간 흐려지는</button>
        <span OpacityDot7Font>OpacityDot7Font</span>
      </dd>
      <dd>
        <div [innerText]="OpacityDot7Font">
        </div>
      </dd>
    </dl>

    <dl>
      <dt>more button</dt>
      <dd>
        <div style="position:relative; height:50px;">
          <span class="more-right" MoreButton></span>          
        </div>
        <div style="position:relative; height:50px;">
          <span class="more-left" MoreButton></span>          
        </div>

        <div style="position:relative; height:100px; width:100px;" MoreBigButton>
          <span class="more-left" MoreButton></span>          
        </div>
      </dd>
      <dd>
        <div [innerText]="moreButton">
        </div>
      </dd>
    </dl>

    <dl>
      <dt>필터버튼 / 필터다운버튼</dt>
      <dd>
        <button FilterButton>필터버튼</button>
        <app-filter-drop-button>드랍버튼</app-filter-drop-button>
      </dd>
      <dd>
        <div [innerText]="filterButton">
        </div>
      </dd>
    </dl>

    <dl>
      <dt>필터옵션창</dt>
      <dd>       
        <app-filter-option>
        <ul>
          <li>1</li>
          <li>2</li>
        </ul>
        </app-filter-option>       
        
        <app-filter-option [width]="100">as</app-filter-option>        
      </dd>
      <dd>     
      {{filterOption}}   
      </dd>
    </dl>

  
  `,
  styles: [
    `
      dl{
        float: left;
        border:1px solid black;
      }
      dt{
        border:1px solid black;
        width:100vw;
        display: block;
      }
      dd{
        width:50vw;
        display: inline-block;
      }
      
    `
  ]
})
export class CommonComponent implements OnInit {
  zoom = `
  <a ImageZoom>
    <div>
      <img class="image-zoom" src="assets/image/cart-empty-placeholder.png">
    </div>
    <div>
      <h1>줌인 줌아웃</h1>
      <p>directive : ImageZoom / img class : image-zoom</p>
    </div>
  </a>`;

  button =
    `
  <a BlueButton style="width:100px; height:20px;">이건 a</a>
  <button BlueButton style="width:100px; height:20px;">이건 b</button>
  `;

  checkBox = `<app-check-box [isChecked]="true" [caption]="true">얘는 이거 됨</app-check-box>
  <app-check-box [isChecked]="false">얘는 안됨</app-check-box>`;

  basicUsesAvatar =
    `<app-basic-uses-avatar></app-basic-uses-avatar>
  <app-basic-uses-avatar [size]="100" [pic]="'assets/image/cart-empty-placeholder.png'" ></app-basic-uses-avatar>
  <app-basic-uses-avatar [size]="48" [isBorder]="true"></app-basic-uses-avatar>`;

  blueFont = `<a BlueFont>a</a>
  <button BlueFont>b</button>
  <span BlueFont>s</span>`;

  OpacityDot7Font = `<a OpacityDot7Font>글자가</a>
        <button OpacityDot7Font>약간 흐려지는</button>
        <span OpacityDot7Font>OpacityDot7Font</span>`;

  moreButton = `
  <div style="position:relative; height:50px;">
          <span class="more-right" MoreButton></span>          
        </div>


        <div style="position:relative; height:50px;">
          <span class="more-left" MoreButton></span>          
        </div>      

        <div style="position:relative; height:100px; width:100px;" MoreBigButton>
          <span class="more-left" MoreButton></span>          
        </div>
      `;

  filterButton = `<button FilterButton>필터버튼</button>
  <app-filter-drop-button>드랍버튼</app-filter-drop-button>`

  filterOption = `<app-filter-option>
  <ul>
    <li>1</li>
    <li>2</li>
  </ul>
  </app-filter-option>       
  
  <app-filter-option [width]="100">as</app-filter-option>`
  constructor() { }

  ngOnInit() {
  }

}
