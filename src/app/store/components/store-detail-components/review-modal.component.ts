import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { StoreService } from 'src/app/core/services/store.service';
import { product_info, review } from 'src/app/core/models/store.interface';
import { CommonService } from 'src/app/core/services/common.service';

@Component({
  selector: 'app-review-modal',
  template: `
  <div class="review-modal-bg" (click)="modalClose($event, textarea, checkbox)"
    [class.show]="showModal">
    <div class="review-modal">
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
          <div class="star-container">
          <span class="satisfied">만족도</span>
          <span class="icon-etc star"
            (mouseover)="checkStar(i)"
            (mouseout)="checkClicked()"
            (click)="setStar(i)"
            [class.blue]="i <= comparePoint"
            *ngFor="let star of commonService.range(5); let i = index"></span>
          <span class="star-message">{{ starMessage(comparePoint) }}</span>
        </div>
      </section>
      <section class="select-picture">
        <h2>사진을 등록해주세요.<span>(선택)</span></h2>
        <span class="red-bubble">250P 증정!</span>
        <p class="sub-message">오늘의집에 올렸던 사진에서 고르거나 새로 업로드 해주세요.</p>
        <strong class="sub-message">상품과 관련 없거나 부적합한 사진을 등록하는 경우, 사전경고 없이 포인트 회수와 함께 사진이 삭제될 수 있습니다.</strong>
        <div class="img-container" *ngIf="image !== null">
          <img src="{{ getImage() }}">
          <div class="img-cover cursor" (click)="deleteImg()">
            <span class="icon-pointer delete-img"></span>
            사진 삭제하기
          </div>
        </div>
        <div class="upload cursor"> 
          <label for="ex_file" class="cursor">새로운 사진 업로드</label> 
          <input type="file" id="ex_file"  accept="image/*" 
            (change)="uploadImg(imgFile)" #imgFile> 
        </div>
      </section>
      <section class="write-review">
        <h2>리뷰를 작성해주세요.</h2>
        <p class="sub-message">이 제품을 사용하면서 느꼈던 장점과 단점을 솔직하게 알려주세요.</p>
        <span class="count">{{ count }}자 | 최소 20자</span>
        <textarea placeholder="이 제품을 사용하면서 느꼈던 장점과 단점을 솔직하게 알려주세요." #textarea
          (input)="countChr(textarea)"></textarea>
        <small>*해당 상품과 무관한 내용이나 동일 문자의 반복 등 부적합한 내용은 삭제될 수 있습니다.</small>
      </section>
      <section class="confirmation">
        <h2>직접 제품을 사용하고 작성하는 리뷰인가요?</h2>
        <input type="checkbox" id="agreement" class="agreement">
        <label for="agreement" (click)="confirmation()">
          <span class="icon-etc checkbox" #checkbox
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
        <button class="close cursor">
        취소하기
        </button> 
        <button aria-label="submit" class="submit" BlueButton
          (click)="submitCheck(checkbox, textarea)">
        등록하기
        </button>
      </div>
      <div class="more-info-modal" [class.show]="moreInfo">
        <p>
          오늘의집은 비교적 정보를 얻기 힘든 가구와 인테리어 제품의 정보 공유를 위해 
          직접 사용한 유저들의 생생하고 진실한 리뷰 문화를 만들어 가고자 합니다.<br>
          따라서 오늘의집의 유저라면 오늘의집에서 직접 구매하지 않은 제품도 사용 경험을 공유하고 
          포인트를 적립 받으실 수 있습니다. 단, 다음과 같은 리뷰의 경우 블라인드 및 통보 없이 
          삭제될 수 있으며, 공정위의 <추천·보증 등에 관한 표시·광고 심사지침(이하 지침)> 및 
          오늘의집 서비스 이용 약관 제 14조에 따라 처벌받을 수 있습니다.
        </p>
        <br>
        <ol>
          <li>리뷰를 작성하는 조건으로 금전적 또는 물질적 대가를 받은 경우</li>
          <li>리뷰의 대상 업체 또는 경쟁업체의 관계자이거나 해당 업체와 개인적/사업적으로 관련 있는 경우</li>
          <li>해당 상품에 대한 허위의 내용을 작성한 경우</li>
          <li>욕설, 비난 등 업체나 타인에게 불쾌한 내용을 작성한 경우</li>
        </ol>
        <span class="icon-pointer close-more-info cursor" (click)="showMoreInfo()"></span>
      </div>
    </div>
  </div>
  <div class="message" [style.opacity]="messageOpacity"
    [style.backgroundColor]="bgColor"
    [style.borderColor]="bdColor">
    <span>{{ message }}</span>
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
    this.productId = productInfo['id'];
    this.productReview = productInfo['review'];
  };
  @Output() closeModal = new EventEmitter;
  @Output() sendNewReview = new EventEmitter;

  productImg: string;
  productBrand: string;
  productName: string;
  productId: number;
  productReview: review[];
  comparePoint = -1;
  checkedPoint = -1;
  starChecked = false;
  confirmationChecked = false;
  moreInfo = false;
  count = 0;
  file: File = null;
  image = null;
  messageOpacity: number;
  message: string;
  bgColor = '';
  bdColor = '';

  constructor(private storeService: StoreService
            , private commonService: CommonService) { }

  ngOnInit() {
  }

  close(textarea: HTMLTextAreaElement, checkbox: HTMLInputElement){
    this.comparePoint = -1;
    this.checkedPoint = -1;
    textarea.value = '';
    checkbox.classList.remove('confirm');
    this.closeModal.emit();
  }

  checkStar(i: number) {
    this.comparePoint = i;
  }

  checkClicked() {
    if (this.starChecked === true) this.comparePoint = this.checkedPoint;
    else this.comparePoint = -1;
  }

  setStar(i: number) {
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

  modalClose(e, textarea: HTMLTextAreaElement, checkbox: HTMLInputElement) {
    if (e.target.classList.contains('review-modal-bg')
      || e.target.classList.contains('close')) {
      const check = confirm('작성 중인 내용이 사라집니다.');
      if (check) {
        this.close(textarea, checkbox);
      }
      else return;
    }
  }

  showMoreInfo() {
    this.moreInfo = this.moreInfo ? false : true;
  }

  countChr(textarea: HTMLTextAreaElement) {
    this.count = textarea.value.length;
  }

  submitCheck(checkbox: HTMLInputElement, textarea: HTMLTextAreaElement) {
    if (this.checkedPoint === -1) {
      this.message = '별점을 눌러 만족도를 알려주세요.';
      this.showMessage();
    }
    else if (this.count < 20) {
      this.message = '리뷰를 20자 이상 작성해 주세요.';
      this.showMessage();
    }
    else if (!checkbox.classList.contains('confirm')) {
      this.message = '오늘의집 리뷰정책에 동의해주세요.';
      this.showMessage();
    }
    else {
      const formData = new FormData();
      formData.append('product', this.productId.toString());
      formData.append('star_score', (this.checkedPoint + 1).toString());
      if(this.image !== null) formData.append('image', this.file, this.file.name);
      formData.append('comment', textarea.value);
      this.storeService.createReview(formData)
        .subscribe(res => {
          this.storeService.getProductInfo(this.productId)
            .subscribe(res => {
              this.productReview = res['review'];
              this.sendNewReview.emit(this.productReview);
            });
          this.bgColor = 'rgba(17, 146, 1, 0.6)';
          this.bdColor = 'rgb(34, 146, 0)';
          this.message = '리뷰가 등록되었습니다.';
          this.showMessage();
          this.close(textarea, checkbox);
        },
        err => {
          console.log(err);
        }
        );
    }
    this.bgColor = '';
    this.bdColor = '';
  }

  showMessage() {
    this.messageOpacity = 1;
    setTimeout(() => { this.messageOpacity = 0; }, 1000);
  }

  uploadImg(imgFile) {
    const files = imgFile.files;
    if (files && files.length > 0){
      const file = files[0];
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = (e) => {
        this.file = file;
        this.image = reader.result;
      };
    }
  }

  getImage() {
    return this.image;
  }

  deleteImg() {
    this.image = null;
  }
}
