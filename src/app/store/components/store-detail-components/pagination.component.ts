import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { review } from 'src/app/core/models/store.interface';
import { CommonService } from 'src/app/core/services/common.service';

@Component({
  selector: 'app-pagination',
  template: `
  <ul class="pagination">
    <li><button class="pagination-btn left"></button></li>
    <li *ngFor="let page of pages; let i = index">
      <button class="pagination-page"
        (click)="changePage(i, chosenList, originalList)">
        {{ i + 1 }}</button>
    </li>
    <li><button class="pagination-btn right"></button></li>
  </ul>
  `,
  styles: [`
  .pagination{
    text-align: center;
    margin: 40px 0;
  }
  .pagination > li{
    display: inline-block;
  }
  .pagination-page, .pagination-btn{
    vertical-align: middle;
    display: inline-block;
    width: 30px;
    height: 30px;
    background: none;
    border: none;
    cursor: pointer;
    margin: 5px;
  }
  .pagination-btn, .filter-icon{
    background-image: url('../../../../assets/image/icon-pointer.png');
  }
  .left{
    background-position: -75px -118px;
  }
  .right{
    background-position: -130px -118px;
  }
  `]
})
export class PaginationComponent implements OnInit {

  @Input() originalList: review[];
  @Input() chosenList: review[];
  @Input() pages: any;
  @Output() change = new EventEmitter;

  constructor(private commonService: CommonService) { }

  ngOnInit() {
  }

  changePage(i, chosenList, originalList){
    chosenList = this.commonService.changePage(i, chosenList, originalList);
    this.change.emit(chosenList);
  }

}
