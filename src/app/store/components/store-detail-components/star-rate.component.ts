import { Component, OnInit, Input } from '@angular/core';
import { CommonService } from 'src/app/core/services/common.service';

@Component({
  selector: 'app-star-rate',
  template: `
  <div class="star-bg" [style.width.px]="width" 
    *ngFor="let star of commonService.range(5); let i = index">
    <div class="star-rate" [style.width.px]="fill(i)">
      <img src="../../../../assets/image/star.png"
        [style.width.px]="width">
    </div> 
  </div>

  `,
  styleUrls: ['star-rate.scss']
})
export class StarRateComponent implements OnInit {

  @Input() starAvg: number;
  @Input() width: number;

  constructor(private commonService: CommonService) { }

  ngOnInit() {
  }

  fill(i: number){
    if(this.starAvg >= i + 1) return this.width;
    else if(this.starAvg > i && this.starAvg < i + 1) {
      const point = +this.starAvg.toString().slice(2,4) * 0.01;
      return point * this.width;
    }
    else return 0;
  }

}
