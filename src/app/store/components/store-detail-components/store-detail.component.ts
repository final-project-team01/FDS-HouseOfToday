import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StoreService } from 'src/app/core/services/store.service';
import { CommonService } from 'src/app/core/services/common.service';
import { UserService } from 'src/app/core/services/user.service';
import { ChosenOption } from 'src/app/core/models/chosen-option.interface';
import { thumbnail_image, detail_image, product_option, review, qna }
  from 'src/app/core/models/store.interface';

@Component({
  selector: 'app-store-detail',
  template: `
    <app-header [thisNav]="commonService.getNav()"></app-header>
    <div class="top-wrapper">
      <div class="pic-container">
        <app-product-pic 
          [productImages]="productImages"
          [activeId]="activeId"></app-product-pic>
      </div>
      <div class="info-container">
        <app-product-info [productInfo]="productInfo"></app-product-info>
        <app-product-option 
          (addOption)="addOption($event)"
          (deleteOption)="deleteOption($event)"
          (increase)="increase($event)"
          (decrease)="decrease($event)"
          (set)="setAmount($event)"
          [productOption]="productOption"
          [chosenOptions]="chosenOptions" [scroll]="false"></app-product-option>
      </div>
    </div>
    <div class="bottom-wrapper" #nav (window:scroll)="stickyNav(nav)">
      <div class="detail-container">
        <app-product-detail [productDetailImages]="productDetailImages"></app-product-detail>
        <app-product-etc [productInfo]="productInfo"></app-product-etc>
        <app-product-review 
          [originalList]="productReviews"
          [chosenList]="chosenReviews"
          [pages]="reviewPages"
          [starAvg]="starAvg"
        ></app-product-review>
        <app-product-qna
        [originalList]="productQnas"
        [chosenList]="chosenQnas"
        [pages]="qnaPages"></app-product-qna>
      </div>
      <div class="nav-container"
        [class.sticky]="sticky">
        <app-product-nav 
          [reviewAmount]="reviewAmount"
          [qnaAmount]="qnaAmount"></app-product-nav>
        <div class="product-option">
          <h2>옵션 선택</h2>
          <app-product-option 
            (addOption)="addOption($event)"
            (deleteOption)="deleteOption($event)"
            (increase)="increase($event)"
            (decrease)="decrease($event)"
            (set)="setAmount($event)"
            [productOption]="productOption"
            [chosenOptions]="chosenOptions" [scroll]="true"></app-product-option>
        </div>
      </div>
    </div>
    <app-footer></app-footer>
  `,
  styles: [`
  .top-wrapper, .bottom-wrapper{
    display: flex;
    margin: 120px auto 0 auto;
    box-sizing: border-box;
    width: 1136px;
    height: auto;
    min-height: 1px;
    position: relative;
  }
  .detail-container{
    border-right: 1px solid #ededed;
  }
  .pic-container{
    display: inline-block;
    margin-right: auto;
  }
  .info-container{
    width: 450px;
    display: inline-block;
  }
  .nav-container{
    clear: both;
    position: absolute;
    top: -50px;
  }
  .product-option{
    position: absolute;
    background-color: #FAFAFA;
    right: 0;
    width: 30%;
    padding: 35px 22px;
  }
  .product-option > h2{
    margin-bottom: 20px;
    font-size: 20px;
    font-weight: bold;
  }
  .sticky{
    position: fixed;
    top: 80px;
    bottom: auto;
  }
  `]
})
export class StoreDetailComponent implements OnInit {

  id: number;
  activeId: number;
  sticky = false;
  productInfo: any;
  productImages: thumbnail_image[];
  productDetailImages: detail_image[];
  productOption: product_option[];
  productReviews: review[];
  reviewAmount: number;
  starAvg: number;
  reviewPages = [];
  qnaPages = [];
  productQnas: qna[];
  chosenReviews: review[];
  chosenQnas: qna[];
  qnaAmount: number;
  chosenOptions: ChosenOption[] = [];

  constructor(private route: ActivatedRoute
    , private storeService: StoreService
    , private userService: UserService
    , private commonService: CommonService) { }

  ngOnInit() {
    this.commonService.setLocate(1);
    this.commonService.setNav(1);
    console.log("detail");
    this.route.paramMap
      .subscribe(params => this.id = +params.get('id'));
    this.storeService.getProductInfo(this.id)
      .subscribe(data => {
        this.productInfo = data;
        this.productImages = data['thumnail_images'];
        this.productDetailImages = data['detail_images'];
        this.productOption = data['product_option'];
        this.productReviews = data['review'];
        this.productQnas = data['pdqna'];
        this.chosenReviews = this.productReviews.filter((review, index) => index >= 0 && index < 3);
        this.chosenQnas = this.productQnas.filter((review, index) => index >= 0 && index < 3);
        this.qnaAmount = this.productQnas.length;
        this.reviewAmount = this.productInfo['review_count'];
        this.starAvg = +this.productInfo['star_avg'];
        const rp = Math.ceil(this.reviewAmount / 3);
        const qp = Math.ceil(this.qnaAmount / 3);
        this.reviewPages = Array(rp);
        this.qnaPages = Array(qp);
        this.activeId = this.productImages[0].id;
      });
  }

  addOption(option: product_option) {
    const chosen = {
      id: this.generateId(), name: this.getName(option['name']), price: option['price'], amount: 1
    };
    this.chosenOptions = [...this.chosenOptions, chosen];
  }

  deleteOption(id: number) {
    this.chosenOptions = this.chosenOptions.filter(option => option.id !== id);
  }

  generateId() {
    return this.chosenOptions.length
      ? Math.max(...this.chosenOptions.map(option => option.id)) + 1 : 1;
  }

  getName(name: string) {
    const i = name.indexOf('(');
    return name.slice(0, i);
  }

  addComma(num: number) {
    const regexp = /\B(?=(\d{3})+(?!\d))/g;
    return num.toString().replace(regexp, ',');
  }

  stickyNav(nav: HTMLDivElement) {
    if (nav.offsetTop - 80 <= window.pageYOffset) this.sticky = true;
    else this.sticky = false;
  }

  increase(option: ChosenOption) {
    const id = option.id;
    this.chosenOptions = this.chosenOptions.map(
      option => option.id === id ?
        { ...option, amount: option.amount += 1 } : { ...option, amount: option.amount });
  }
  decrease(option: ChosenOption) {
    const id = option.id;
    if (option.amount <= 1) return;
    this.chosenOptions = this.chosenOptions.map(
      option => option.id === id ?
        { ...option, amount: option.amount -= 1 } : { ...option, amount: option.amount });
  }

  setAmount(data: any) {
    data.option.amount = +data.input.value;
  }
}
