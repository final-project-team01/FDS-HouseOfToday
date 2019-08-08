import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-star-rate',
  template: `
  <div class="star-bg" [style.width.px]="width*1.1">
    <div class="star-rate" [style.width.px]="starAvg * (width*1.1 / 5)">
      <img src="../../../../assets/image/star-rate.png" 
        [style.width.px]="width*1.1">
    </div> 
  </div>

  `,
  styleUrls: ['star-rate.scss']
})
export class StarRateComponent implements OnInit {

  @Input() starAvg: number;
  @Input() width: number;

  constructor() { }

  ngOnInit() {
  }

}
