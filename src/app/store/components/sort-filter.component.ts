import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { LyTheme2 } from '@alyle/ui';

@Component({
  selector: 'app-sort-filter',
  template: `
  <div class="sticky-container">
    <div class="sticky-content-wrap">
      <div class="category-filter">
        <p class="category-filter-summary">전체</p>
        <div class="category-filter-summary-right">
          <div class="categry-filter-summary-right-item">
            <ly-field class="filteredList" (click)="resetEvent.emit()">
              <ly-label>필터</ly-label>
              <ly-select class="filteredListDetail" placeholder="Placeholder">
                <ly-option class="detail" value="1" (click)="highPricefilterEvent.emit()">높은가격 순</ly-option>
                <ly-option class="detail" value="2" (click)="lowPricefilterEvent.emit()">낮은가격 순</ly-option>
                <ly-option class="detail" value="3" (click)="highReviewfilterEvent.emit()">리뷰많은 수</ly-option>
              </ly-select>
            </ly-field>
          </div>
        </div>
      </div>
    </div>
  </div>
  `,
  styles: [`
  .sticky-container {
    position: sticky;
    z-index: 100;
    transition: top .1s;
    margin-bottom: 5px;
    width: 100%;
  }

  .sticky-content-wrap {
    position: relative;
    background-color: #FAFAFA;
  }

  .commerce-category-innernav-list {
    margin-right: 10px;
    color: #000;
    font-size: 15px;
    display: inline-block;
    margin-right: 2px;
    color: #424242;
    font-size: 11px;
    line-height: 1.2;
  }

  .category-filter {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 6px; 
  }

  .category-filter-summary {
    flex: 0 0 auto;
    font-size: 13px;
    color: #757575;
  }

  .filteredList {
    margin-bottom: 10px;
    width: 60px;
    font-size: 10px;
  }

  .product-list {
    width: 900px;
  }

  .filteredList {
    width: 70px;
    font-size: 10px;
    float: right;
    margin-top: -5px;
  }

  .detail {
    font-size: 10px;
  }
  `]
})
export class SortFilterComponent implements OnInit {
  @Output() highPricefilterEvent = new EventEmitter();
  @Output() lowPricefilterEvent = new EventEmitter();
  @Output() highReviewfilterEvent = new EventEmitter();
  @Output() resetEvent = new EventEmitter();

  constructor(private theme: LyTheme2) { }

  ngOnInit() {
  }

}
