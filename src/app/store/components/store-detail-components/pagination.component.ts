import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { CommonService } from 'src/app/core/services/common.service';

@Component({
  selector: 'app-pagination',
  template: `
  <div class="pagination">
    <button class="pagination-btn left" (click)="goLeft()"></button>
    <div class="numbers-container" [style.width.px]="getWidth(pages)">
      <div class="btn-container" [style.left.px]="left">
        <button *ngFor="let page of pages; let i = index"
          class="pagination-page"
          [class.active]="activeId === i"
          (click)="changePage(i)">
          {{ i + 1 }}
        </button>
      </div>
    </div>
    <button class="pagination-btn right" (click)="goRight()"></button>
  </div>
  `,
  styles: [`
  .pagination{
    text-align: center;
    margin-top: 40px;
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
    box-sizing: border-box;
    vertical-align: middle;
    display: inline-block;
    width: 30px;
    height: 30px;
    background: none;
    border-style: none;
    cursor: pointer;
    margin: 5px;
    font-size: 15px;
    font-weight: 700;
    line-height: 1;
  }
  .pagination-page:hover{
    color: #35C5F0;
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
  .pagination-page.active{
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

  goLeft(){
    // 1 일때 스탑
    if (this.activeId === 0) return;
    // 3 아래로는 버튼색만 바뀌게
    else if (this.activeId <= 2) {
      this.activeId -= 1;
    // 3 이상은 왼쪽으로 이동 + 버튼색 바뀜
    } else if (this.activeId >= 3) {
      this.activeId -= 1;
      this.left += 40;
    }
    this.getChosenList(this.activeId);
    this.previousIndex = this.activeId;
  }

  goRight(){
    // 맨 마지막으로 가면 스탑
    if (this.activeId === this.pages.length - 1) return;
    // 3 아래로는 버튼색만 바뀌게
    else if (this.activeId <= 1) {
      this.activeId += 1;
    // 3 이상은 오른쪽으로 이동 + 버튼색 바뀜
    } else if (this.activeId >= 2) {
      this.activeId += 1;
      this.left -= 40;
    }
    this.getChosenList(this.activeId);
    this.previousIndex = this.activeId;
  }

  changePage(i: number){
    this.getChosenList(i);
    this.activeId = i;
    // 페이지 이동 간격 체크하는 변수
    const diff = i - this.previousIndex;
    // 클릭한 페이지가 4 이상일 때
    if (i >= 3) {
      // 1,2 에서 이동했을 때
      if (this.previousIndex <= 1 && diff >= 2) this.left -= 40 * (i - 2);
      // 그 외에는 페이지 이동간격만큼 움직이도록
      else if (diff > 0 || diff < 0) this.left -= 40 * diff;
    // 5 또는 4 에서 2,3로 바로 이동할 때
    } else if (i <= 2 && i > 0) {
      if (diff <= -2) this.left += 40 * i;
      else if (diff <= -1) this.left += 40 * (i - 1);
    }
    this.previousIndex = i;
  }

  getChosenList(i: number){
    this.chosenList = this.commonService.changePage(i, this.chosenList, this.originalList);
    this.change.emit(this.chosenList);
  }

}
