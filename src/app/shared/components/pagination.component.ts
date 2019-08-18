import { Component, OnInit, Input, EventEmitter, Output, OnChanges, SimpleChanges } from '@angular/core';
import { CommonService } from 'src/app/core/services/common.service';
import { ActivationEnd } from '@angular/router';

@Component({
  selector: 'app-pagination',
  template: `
  <div class="pagination" *ngIf="_originalList">
    <button class="btn arrow left" (click)="goLeft()"></button>
    <div class="page-container" [style.width.px]="getWidth(pages)">
      <div class="num-container" [style.left.px]="left">
        <button *ngFor="let page of pages; let i = index"
          class="btn num"
          [class.active]="activeId === i"
          (click)="changePage(i)">
          {{ i + 1 }}
        </button>
      </div>
    </div>
    <button class="btn arrow right" (click)="goRight()"></button>
  </div>
  `,
  styleUrls: ['./pagination.scss']
})
export class PaginationComponent implements OnInit, OnChanges {

  @Input() 
  set originalList(originalList){
    if(!originalList) return;
    this._originalList = originalList;
    const p = Math.ceil(this._originalList.length / 5)
    this.pages = Array(p);
  };
  @Input() activeId: number;
  @Output() change = new EventEmitter;

  previousIndex = 0;
  left = 0;
  pages = [];
  _originalList = [];

  constructor(private commonService: CommonService) { }

  ngOnInit() {
    
  }

  ngOnChanges(changes: SimpleChanges) {
    if (this.activeId === 0) this.left = 0;
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
    this.changeIndex(this.activeId);
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
    this.changeIndex(this.activeId);
    this.previousIndex = this.activeId;
  }

  changePage(i: number){
    this.changeIndex(i);
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

  changeIndex(i: number){
    this.change.emit(i);
  }

}
