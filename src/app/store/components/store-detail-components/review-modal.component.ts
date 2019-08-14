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
      <section class="product-info">
        <figure>
          <img src="{{ productImg }}">
          <figcaption>
          <span>{{ productBrand }}</span><br>
          <span class="product-name">{{ productName }}</span>
          </figcaption>
        </figure>
      </section>
      <section class="select-star">
        <h2>별점을 눌러 만족도를 알려주세요.</h2>
        <span class="satisfied">만족도</span>
        <span class="icon-etc star"
          (mouseover)="checkStar(i)"
          (mouseout)="checkClicked()"
          (click)="setStar(i)"
          [class.blue]="i <= comparePoint"
          *ngFor="let star of range(5); let i = index"></span>
        <span class="star-message">{{ starMessage(comparePoint) }}</span>
      </section>
      <section class="select-picture">
        <h2>사진을 등록해주세요.<span>(선택)</span></h2>
        <span class="red-bubble">250P 증정!</span>
        <p class="sub-message">오늘의집에 올렸던 사진에서 고르거나 새로 업로드 해주세요.</p>
        <strong class="sub-message">상품과 관련 없거나 부적합한 사진을 등록하는 경우, 사전경고 없이 포인트 회수와 함께 사진이 삭제될 수 있습니다.</strong>
        <button class="upload cursor">새로운 사진 업로드</button>
      </section>
      <section class="write-review">
        <h2>리뷰를 작성해주세요.</h2>
        <p class="sub-message">이 제품을 사용하면서 느꼈던 장점과 단점을 솔직하게 알려주세요.</p>
        <textarea placeholder="이 제품을 사용하면서 느꼈던 장점과 단점을 솔직하게 알려주세요."></textarea>
        <small>*해당 상품과 무관한 내용이나 동일 문자의 반복 등 부적합한 내용은 삭제될 수 있습니다.</small>
      </section>
      <section class="confirmation">
        <h2>직접 제품을 사용하고 작성하는 리뷰인가요?</h2>
        <input type="checkbox" id="agreement">
        <label for="agreement" (click)="confirmation()">
          <span class="icon-etc checkbox"
            [class.confirm]="confirmationChecked"></span>
          네. 직접 제품을 사용 후 작성한 리뷰이며, 
          <span class="more_info cursor" (click)="showMoreInfo()">오늘의집 리뷰 정책</span>에 동의합니다.
        </label>
      </section>
      <div class="actions">
        <div>
          <p>* 포토리뷰에 250P 드립니다.</p>
          <p>* 비구매리뷰의 경우, 작성해주신 리뷰를 심사한 후 리뷰 등록 및 포인트 지급이 됩니다.</p>
        </div>
        <button aria-label="close" class="close cursor" (click)="close()">
        취소하기
        </button> 
        <button aria-label="submit" class="submit cursor" BlueButton>
        등록하기
        </button>
      </div>
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
  confirmationChecked = false;

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

  confirmation() {
    this.confirmationChecked = this.confirmationChecked ? false : true;
  }

  showMoreInfo(){
    console.log('ddd');
  }
}
