import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-not-found',
  template: `
    <header>
      <span _ngcontent-xfp-c4="" aria-label="오늘의집" class="logo"></span>
    </header>
    <main>
      <h1>404</h1>
      <p class="not-found-message">요청하신 페이지를 찾을 수 없습니다!</p>
      <p>방문하시려는 페이지의 주소가 잘못 입력되었거나, 삭제되어 사용하실 수 없습니다. <br>
      입력하신 주소가 정확한지 다시 한번 확인해 주세요.</p>
      <button BlueButton class="cursor">보고할래요</button>
    </main>
  `,
  styles: [`
  header{
    text-align: center;
    padding: 15px 0;
    border-bottom: 1px solid #ededed;
  }
  .logo{
    background-repeat: no-repeat;
    background-size: 345px;
    display: inline-block;
    width: 74px;
    height: 30px;
    background-position: top -270px left -83px;
    background-image: url('/assets/image/icon-etc.png');
  }
  main{
    text-align: center;
    padding: 50px;
  }
  h1{
    font-size: 100px;
    font-weight: bold;
    color: #35c5f0;
  }
  .not-found-message{
    font-size: 24px;
    margin-bottom: 30px;
  }
  button{
    padding: 10px 30px;
    font-size: 20px;
    font-weight: 300;
    margin: 40px;
    box-shadow: 0 5px 5px 0 rgba(0, 0, 0, 0.2);
  }
  button:hover{
    box-shadow: 0 0 0 0;
    margin-top: 45px;
  }
  `]
})
export class NotFoundComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
