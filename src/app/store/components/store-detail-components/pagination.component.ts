import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { CommonService } from 'src/app/core/services/common.service';

@Component({
  selector: 'app-pagination',
  template: `
  <div class="pagination">
    <button class="pagination-btn left"></button>
    <div class="numbers-container" [style.width.px]="getWidth(pages)">
      <div class="btn-container" [style.left.px]="left">
        <button *ngFor="let page of pages; let i = index"
          class="pagination-page"
          [class.active]="activeId === i"
          (click)="changePage(i, chosenList, originalList)">
          {{ i + 1 }}
        </button>
      </div>
    </div>
    <button class="pagination-btn right"></button>
  </div>
  `,
  styles: [`
  .pagination{
    text-align: center;
    margin: 40px 0;
  }
  .numbers-container{
    display: inline-block;
    white-space: nowrap;
    overflow-x: hidden;
    width: 0;
    vertical-align: middle;
    position: relative;
    height: 40px;
  }
  .btn-container{
    position: absolute;
    top: 0;
    left: 0;
  }
  .pagination-page, .pagination-btn{
    vertical-align: middle;
    display: inline-block;
    width: 30px;
    height: 30px;
    background: none;
    border-style: none;
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
  .active{
    background-color: #35C5F0;
    color: white;
    cursor: default;
    border-radius: 4px;
  }
  `]
})
export class PaginationComponent implements OnInit {

  @Input() originalList: any;
  @Input() chosenList: any;
  @Input() pages: any;
  @Output() change = new EventEmitter;

  activeId = 0;
  previousIndex = 0;
  left = 0;

  constructor(private commonService: CommonService) { }

  ngOnInit() {
  }

  getWidth(pages: any){
    if (pages.length >= 5) return 200;
    else return pages.length * 40;
  }

  changePage(i: number, chosenList, originalList){
    chosenList = this.commonService.changePage(i, chosenList, originalList);
    this.change.emit(chosenList);
    this.activeId = i;
    const diff = i - this.previousIndex;
    if (i >= 3) {
      if (diff >= 3) this.left -= 40 * (diff - 2);
      else if(this.previousIndex === 1 && diff >= 2) 
        this.left -= 40 * (diff - 1)
      else if (diff > 0 || diff < 0) this.left -= 40 * diff;
    }
    else if(i <= 2){
      if (i === 2 && diff <= -1) this.left -= 40 * diff;
      else if (i === 1 && diff <= -2) this.left -= 40 * (diff + 1);
    }
    this.previousIndex = i;
  }

}
