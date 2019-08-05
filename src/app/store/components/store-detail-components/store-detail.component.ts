import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { StoreService } from 'src/app/core/services/store.service';
import { CommonService } from 'src/app/core/services/common.service';
import { UserService } from 'src/app/core/services/user.service';
import { CartService } from 'src/app/core/services/cart.service';

import { ChosenOption } from 'src/app/core/models/chosen-option.interface';
import { thumbnail_image, detail_image, product_option, review, qna }
  from 'src/app/core/models/store.interface';
import { cart_option, buy_option } from 'src/app/core/models/cart.interface';

@Component({
  selector: 'app-store-detail',
  template: `
    <app-header></app-header>
    <div class="wrapper">
      <div class="pic-container">
        <app-product-pic
          [productImages]="productImages"
          [activeId]="activeId"></app-product-pic>
      </div>
      <div class="info-container">
        <app-product-info 
          [productInfo]="productInfo"
          [originalPrice]="originalPrice"></app-product-info>
        <app-product-option 
          (addOption)="addOption($event)"
          (deleteOption)="deleteOption($event)"
          (increase)="increase($event)"
          (decrease)="decrease($event)"
          (set)="setAmount($event)"
          (intoCart)="intoCart()"
          (buyDirect)="buyDirect()"
          [productOption]="productOption"
          [chosenOptions]="chosenOptions" [scroll]="false"
          [totalPrice]="totalPrice"></app-product-option>
      </div>
    </div>
    <div class="wrapper" #nav (window:scroll)="stickyNav(nav)">
      <div class="nav-container"
        [class.sticky]="sticky"
        [class.no-sticky]="noSticky">
        <app-product-nav 
          [reviewAmount]="reviewAmount"
          [qnaAmount]="qnaAmount"
          (move)="moveScroll($event, nav, review, qna, delivery)">
        </app-product-nav>
        <div class="product-option">
          <h2>옵션 선택</h2>
          <app-product-option 
            (addOption)="addOption($event)"
            (deleteOption)="deleteOption($event)"
            (increase)="increase($event)"
            (decrease)="decrease($event)"
            (set)="setAmount($event)"
            (intoCart)="intoCart()"
            (buyDirect)="buyDirect()"
            [productOption]="productOption"
            [chosenOptions]="chosenOptions" [scroll]="true"
            [totalPrice]="totalPrice"></app-product-option>
        </div>
      </div>
      <div class="detail-container">
        <app-product-detail [productDetailImages]="productDetailImages"
        ></app-product-detail>
        <app-product-etc [productInfo]="productInfo"></app-product-etc>
        <h3 #review>리뷰 
          <span>
          {{ reviewAmount }}
          </span>
        </h3>
        <app-product-review
          [originalList]="productReviews"
          [chosenList]="chosenReviews"
          [pages]="reviewPages"
          [starAvg]="starAvg">
        </app-product-review>
        <h3 #qna>문의 <span class="qna-amount">{{ qnaAmount }}</span></h3>
        <app-product-qna
          [originalList]="productQnas"
          [chosenList]="chosenQnas"
          [pages]="qnaPages">
        </app-product-qna>
        <h3 class="delivery" #delivery>배송 관련 안내</h3>
        <app-product-delivery
        [productInfo]="productInfo"></app-product-delivery>
      </div>
    </div>
    <app-cart-modal
      (closeModal)="closeModal()"
      [showModal]="showModal"></app-cart-modal>
    <app-footer></app-footer>
  `,
  styleUrls: ['./store-detail.scss']
})
export class StoreDetailComponent implements OnInit {

  id: number;
  activeId: number;
  sticky = false;
  noSticky = false;
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
  totalPrice = '0';
  originalPrice: string;
  showModal = false;

  constructor(private route: ActivatedRoute
    , private storeService: StoreService
    , private userService: UserService
    , private commonService: CommonService
    , private cartService: CartService
    , private router: Router) { }

  ngOnInit() {
    window.scroll({ top: 0 });
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
        this.chosenReviews = this.productReviews.filter((review, index) => index >= 0 && index < 5);
        this.chosenQnas = this.productQnas.filter((review, index) => index >= 0 && index < 5);
        this.qnaAmount = this.productQnas.length;
        this.reviewAmount = this.productInfo['review_count'];
        this.starAvg = +this.productInfo['star_avg'];
        const rp = Math.ceil(this.reviewAmount / 5);
        const qp = Math.ceil(this.qnaAmount / 5);
        this.reviewPages = Array(rp);
        this.qnaPages = Array(qp);
        this.activeId = this.productImages[0].id;
        const originalPrice = this.productInfo.price / (100 - +this.productInfo.discount_rate) * 100;
        this.originalPrice = this.commonService.addComma(Math.floor(originalPrice / 10) * 10);
      });
  }

  addOption(option: product_option) {
    const productId = option.product;
    const optionId = option.id;
    const check = this.chosenOptions.filter(option => option.optionId === optionId).length ? true : false;
    if (this.chosenOptions.length !== 0 && check) {
      alert('이미 선택한 옵션입니다');
      return;
    }
    const chosen = { id: this.generateId(), productId, optionId, name: option.name, price: option.price, quantity: 1 };
    this.chosenOptions = [...this.chosenOptions, chosen];
    this.getTotalPrice();
    console.log(this.chosenOptions);
    
  }

  deleteOption(id: number) {
    this.chosenOptions = this.chosenOptions.filter(option => option.id !== id);
    this.getTotalPrice();
  }

  generateId() {
    return this.chosenOptions.length
      ? Math.max(...this.chosenOptions.map(option => option.id)) + 1 : 1;
  }

  stickyNav(nav: HTMLDivElement) {
    const navBottom = nav.offsetHeight + nav.offsetTop - 380;
    if (nav.offsetTop - 80 <= window.pageYOffset) {
      if (navBottom < window.pageYOffset + 350) {
        this.sticky = false;
        this.noSticky = true;
      } else {
        this.noSticky = false;
        this.sticky = true;
      }
    }
    else this.sticky = false;
  }

  increase(option: ChosenOption) {
    const id = option.id;
    this.chosenOptions = this.chosenOptions.map(
      option => option.id === id ?
        { ...option, quantity: option.quantity += 1 } : { ...option, quantity: option.quantity });
    this.getTotalPrice();
  }

  decrease(option: ChosenOption) {
    const id = option.id;
    if (option.quantity <= 1) return;
    this.chosenOptions = this.chosenOptions.map(
      option => option.id === id ?
        { ...option, quantity: option.quantity -= 1 } : { ...option, quantity: option.quantity });
    this.getTotalPrice();
  }

  setAmount(data: any) {
    data.option.quantity = +data.input.value;
  }

  getTotalPrice() {
    if (this.chosenOptions.length === 0) {
      this.totalPrice = '0';
      return;
    }
    const prices = this.chosenOptions.map(option => option.price * option.quantity);
    const sum = prices.reduce(
      (previous, current) => { return previous + current });
    this.totalPrice = this.commonService.addComma(sum);
  }

  moveScroll(i: number, nav, review, qna, delivery) {
    if (i === 0) window.scroll({ top: nav.offsetTop, behavior: 'smooth' });
    else if (i === 2) window.scrollTo({ top: review.offsetTop + 700, left: 0, behavior: 'smooth' });
    else if (i === 3) window.scrollTo({ top: qna.offsetTop + 700, left: 0, behavior: 'smooth' });
    else if (i === 4) window.scroll({ top: delivery.offsetTop + 700, left: 0, behavior: 'smooth' });
  }

  intoCart() {
    const user = localStorage.getItem('user');
    // 옵션을 선택했는지, 로그인 되었는지 체크
    if (this.checkCondition('장바구니', user) === false) return;
    this.chosenOptions.forEach(option => {
      const payload: cart_option = { 
        product: option.productId,
        product_option: option.optionId,
        quantity: option.quantity  
      };
      this.cartService.addCart(payload, user)
      .subscribe(res => {
        console.log('success');
      },
        err => {
          console.log(err.message);
      });
    });
    this.chosenOptions = [];
    this.showModal = true;
    this.getTotalPrice();
  }

  buyDirect() {
    const user = localStorage.getItem('user');
    if (this.checkCondition('구매하기', user) === false) return;
    const pd_id = this.chosenOptions[0].productId.toString();
    const po_list = this.chosenOptions.map(option => option.optionId).join();
    const qty_list = this.chosenOptions.map(option => option.quantity).join();
    const payload: buy_option = { pd_id, po_list, qty_list }; 
    console.log(payload);
    
    this.cartService.buyDirect(payload, user)
      .subscribe(res => {
        console.log('success');
      },
        err => {
          console.log(err.message);
        });
  }

  closeModal() {
    this.showModal = false;
  }

  checkCondition(target: string, user: string) {
    if (this.chosenOptions.length === 0) {
      alert(`옵션 선택 후에 ${target} 버튼을 클릭해주세요.`);
      return false;
    }
    if (user === null) {
      alert('로그인이 필요한 서비스입니다.');
      this.router.navigate(['/signin']);
      return false;
    }
  }

}
