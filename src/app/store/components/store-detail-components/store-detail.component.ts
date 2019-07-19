import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StoreService } from 'src/app/core/services/store.service';
import { StateService } from 'src/app/core/services/state.service';
import { UserService } from 'src/app/core/services/user.service';
import { ChosenOption } from 'src/app/core/models/chosen-option.interface';

@Component({
  selector: 'app-store-detail',
  template: `
    <app-header></app-header>
    <div class="top-wrapper">
      <div class="pic-container">
        <app-product-pic></app-product-pic>
      </div>
      <div class="info-container">
        <app-product-info></app-product-info>
        <app-product-option (addOption)="addOption($event)"
          (deleteOption)="deleteOption($event)"
          [chosenOptions]="chosenOptions"></app-product-option>
      </div>
    </div>
    <div class="bottom-wrapper" #nav (window:scroll)="stickyNav(nav)">
      <app-product-detail></app-product-detail>
      <div class="nav-container"
        [class.sticky]="sticky">
        <app-product-nav></app-product-nav>
        <div class="product-option">
          <h2>옵션 선택</h2>
          <app-product-option (addOption)="addOption($event)"
            (deleteOption)="deleteOption($event)"
            [chosenOptions]="chosenOptions"></app-product-option>
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
    top: -30px;
  }
  .product-option{
    position: absolute;
    top: 100px;
    right: 40px;
    width: 30%;
  }
  .product-option > h2{
    margin-bottom: 20px;
    font-size: 20px;
    font-weight: bold;
  }
  .sticky{
    position: fixed;
    top: 0;
    bottom: auto;
  }
  `]
})
export class StoreDetailComponent implements OnInit {

  id: number;
  sticky = false;
  chosenOptions: ChosenOption[] = [];

  constructor(private route: ActivatedRoute
    , private storeService: StoreService
    , private userService: UserService
    , private stateService: StateService) { }

  ngOnInit() {
    this.stateService.setIsStore(true);
    console.log("detail");
    this.route.paramMap
      .subscribe(params => this.id = +params.get('id'));
  }
  
  addOption(option){
    const chosen = { id: this.generateId(), name: this.getName(option['name']), price: option['price'] };
    this.chosenOptions = [ ...this.chosenOptions, chosen ];
  }

  deleteOption(id: number){
    this.chosenOptions = this.chosenOptions.filter(option => option.id !== id);
  }

  generateId(){
    return this.chosenOptions.length 
      ? Math.max(...this.chosenOptions.map(option => option.id)) + 1 : 1;
  }

  getName(name: string){
    const i = name.indexOf('(');
    return name.slice(0, i);
  }

  addComma(num: number){
    const regexp = /\B(?=(\d{3})+(?!\d))/g;
    return num.toString().replace(regexp, ',');
  }

  stickyNav(nav){
    console.log(nav.offsetTop);
    
    if(nav.offsetTop < window.pageYOffset) this.sticky = true;
    else this.sticky = false;
  }
}
