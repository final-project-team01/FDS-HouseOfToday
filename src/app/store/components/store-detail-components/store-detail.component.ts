import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StoreService } from 'src/app/core/services/store.service';
import { StateService } from 'src/app/core/services/state.service';
import { UserService } from 'src/app/core/services/user.service';
import { ChosenOption } from 'src/app/core/models/option.interface';

@Component({
  selector: 'app-store-detail',
  template: `
    <app-header></app-header>
    <div class="wrapper">
      <div class="pic-container">
        <app-product-pic></app-product-pic>
      </div>
      <div class="info-container">
        <app-product-info></app-product-info>
        <app-product-option (addOption)="addOption($event)"
          (deleteOption)="deleteOption($event)"
          [chosenOptions]="chosenOptions"></app-product-option>
      </div>
      <div class="nav-container">
        <app-product-nav></app-product-nav>
        <app-product-detail></app-product-detail>
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
  .wrapper{
    margin: 120px auto 0 auto;
    box-sizing: border-box;
    width: 1136px;
    height: auto;
    min-height: 1px;
  }
  .pic-container{
    display: inline-block;
  }
  .info-container{
    width: 450px;
    float: right;
    padding-bottom: 80px;
  }
  .nav-container{
    clear: both;
    position: relative;
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
  `]
})
export class StoreDetailComponent implements OnInit {

  id: number;
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
}
