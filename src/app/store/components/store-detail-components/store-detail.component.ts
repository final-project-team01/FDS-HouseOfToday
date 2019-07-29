import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { StoreService } from 'src/app/core/services/store.service';
import { CommonService } from 'src/app/core/services/common.service';
import { UserService } from 'src/app/core/services/user.service';
import { CartService } from 'src/app/core/services/cart.service';

import { ChosenOption } from 'src/app/core/models/chosen-option.interface';
import { thumbnail_image, detail_image, product_option, review, qna }
  from 'src/app/core/models/store.interface';
import { cart_option } from 'src/app/core/models/cart.interface';
  
@Component({
  selector: 'app-store-detail',
  template: `
    <app-header></app-header>
    <div class="top-wrapper">
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
          (buyProducts)="buyProducts()"
          [productOption]="productOption"
          [chosenOptions]="chosenOptions" [scroll]="false"
          [totalPrice]="totalPrice"></app-product-option>
      </div>
    </div>
    <div class="bottom-wrapper" #nav (window:scroll)="stickyNav(nav)">
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
    margin-right: 385px;
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
    z-index: 99;
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
  h3{
    font-size: 18px;
    font-weight: 700;
    color: #000;
    margin: 25px 0px -85px 30px;
  }
  h3 > span{
    margin-left: 6px;
    font-size: 18px;
    font-weight: 700;
    color: #35c5f0;
  }
  .delivery{
    margin-bottom: 30px;
    font-weight: bold;
    font-size: 20px;
  }
  .sticky{
    position: fixed;
    top: 80px;
    bottom: auto;
  }
  .no-sticky{
    position: absolute;
    bottom: 570px;
    top: auto;
  }
  `]
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
        const originalPrice = this.productInfo.price / (100 - +this.productInfo.discount_rate) * 100;
        this.originalPrice = this.commonService.addComma(Math.floor(originalPrice / 10) * 10);
      });
  }

  addOption(option: product_option) {
    const id = option.id;
    const check = this.chosenOptions.filter(option => option.id === id).length ? true : false;
    if (this.chosenOptions.length !== 0 && check){
      alert('이미 선택한 옵션입니다');
      return;
    }
    const chosen = { id, name: option.name, price: option.price, amount: 1 };
    this.chosenOptions = [...this.chosenOptions, chosen];
    this.getTotalPrice();
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
        { ...option, amount: option.amount += 1 } : { ...option, amount: option.amount });
    this.getTotalPrice();
  }

  decrease(option: ChosenOption) {
    const id = option.id;
    if (option.amount <= 1) return;
    this.chosenOptions = this.chosenOptions.map(
      option => option.id === id ?
        { ...option, amount: option.amount -= 1 } : { ...option, amount: option.amount });
    this.getTotalPrice();
  }

  setAmount(data: any) {
    data.option.amount = +data.input.value;
  }

  getTotalPrice() {
    if (this.chosenOptions.length === 0) {
      this.totalPrice = '0';
      return;
    }
    const prices = this.chosenOptions.map(option => option.price * option.amount);
    const sum = prices.reduce(
      (previous, current) => { return previous + current });
    this.totalPrice = this.commonService.addComma(sum); 
  }

  moveScroll(i: number, nav, review, qna, delivery){
    if (i === 0) window.scroll({ top: nav.offsetTop, behavior: 'smooth' });
    else if (i === 2) window.scrollTo({ top: review.offsetTop + 700, left: 0, behavior: 'smooth' });
    else if (i === 3) window.scrollTo({ top: qna.offsetTop + 700, left: 0, behavior: 'smooth' });
    else if (i === 4) window.scroll({ top: delivery.offsetTop + 700, left: 0, behavior: 'smooth' });
  }
    
  intoCart(){
    const user = localStorage.getItem('user');
    // 옵션을 선택했는지, 로그인 되었는지 체크
    if (this.checkCondition('장바구니', user) === false) return;
    const product_option = this.chosenOptions[0].id;
    // 하나씩만 담는다
    this.sendCartToServer(user, product_option);
    this.chosenOptions = this.chosenOptions.filter(option => option.id !== product_option);
    this.showModal = true;
    this.getTotalPrice();
  }

  buyProducts(){
    const user = localStorage.getItem('user');
    if (this.checkCondition('구매하기', user) === false) return;
    const product_option = this.chosenOptions[0].id;
    // 일단 장바구니에 담은 후에
    this.sendCartToServer(user, product_option);
    // 장바구니에 담긴 물건을 바로 구매
    this.cartService.buyProducts(user);
    console.log('결제완료');
  }

  sendCartToServer(user: string, product_option: number){
    const payload: cart_option = { product_option };
    this.cartService.addCart(payload, user)
      .subscribe(res =>{
        console.log('success');
      },
      err => {
          console.log(err.message);
      });
    console.log('장바구니에 담았다');
    
  }

  closeModal(){
    this.showModal = false;
  }

  checkCondition(target: string, user: string){
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
