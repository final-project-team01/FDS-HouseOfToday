import { Component, OnInit, Input, Output, EventEmitter, ReflectiveInjector } from '@angular/core';
import { StoreService } from 'src/app/core/services/store.service';
import { product_info } from 'src/app/core/models/store.interface';

@Component({
  selector: 'app-review-modal',
  template: `
  <div class="review-modal-container" 
    [class.show]="showModal">
    <div class="review-modal"
      [class.showModal]="showModal">
      <h1>리뷰쓰기</h1>
      <p class="review-point">포토리뷰 250P | 일반리뷰 0P</p>
      <div class="product-info">
        <figure>
          <img src="{{ productImg }}">
          <figcaption>
          <span>{{ productBrand }}</span><br>
          <span class="product-name">{{ productName }}</span>
          </figcaption>
        </figure>
      </div>
      <div class="select-star">
        <h2>별점을 눌러 만족도를 알려주세요.</h2>
        <span class="satisfied">만족도</span>
        <span class="icon-etc star"
          (mouseover)="checkStar(i)"
          (mouseout)="checkClicked()"
          (click)="setStar(i)"
          [class.blue]="i <= comparePoint"
          *ngFor="let star of range(5); let i = index"></span>
        <span class="star-message">{{ starMessage(comparePoint) }}</span>
      </div>
      <div class="select-picture">
        <h2>사진을 등록해주세요.<span>(선택)</span></h2>
        <span class="red-bubble">250P 증정!</span>
        <p>오늘의집에 올렸던 사진에서 고르거나 새로 업로드 해주세요.</p>
        <strong>상품과 관련 없거나 부적합한 사진을 등록하는 경우, 사전경고 없이 포인트 회수와 함께 사진이 삭제될 수 있습니다.</strong>
      </div>
      <button aria-label="close" class="close cursor" BlueButton (click)="close()">
        닫기
      </button>
    </div>
  </div>
  `,
  styleUrls: ['./review-modal.scss']
})
export class ReviewModalComponent implements OnInit {

  @Input() showModal: boolean;
  @Input() 
  set productInfo(productInfo: product_info){
    if (!productInfo) return;
    this.productImg = productInfo['thumnail_images'][0]['image'];
    this.productBrand = productInfo['brand_name'];
    this.productName = productInfo['name'];    
  };
  @Output() closeModal = new EventEmitter;

  productImg: string;
  productBrand: string;
  productName: string;
  comparePoint = -1;
  checkedPoint: number;
  starChecked = false;

  constructor(private storeSerivce: StoreService) { }

  ngOnInit() {
  }

  close(){
    this.closeModal.emit();
  }

  range(i: number) {
    return Array(i);
  }

  checkStar(i: number) {
    this.comparePoint = i;
  }

  checkClicked() {
    if (this.starChecked === true) this.comparePoint = this.checkedPoint;
    else this.comparePoint = -1;
  }

  setStar(i: number ){
    this.starChecked = true;
    this.checkedPoint = i;
    this.comparePoint = i;
  }

  starMessage(i: number) {
    switch(i) {
      case 0:
        return '별로예요.';
      case 1:
        return '생각했던 것보다 별로예요.';
      case 2:
        return '괜찮네요!';
      case 3:
        return '좋아요! 마음에 듭니다.';
      case 4: 
        return '맘에 쏙 들어요! 적극 추천~';
      default:
        return '';
    }
  }
}
