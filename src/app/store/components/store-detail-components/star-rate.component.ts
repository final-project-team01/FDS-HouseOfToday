import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-star-rate',
  template: `
  <div class="star-bg" [style.width.px]="width">
    <div class="star-rate" [style.width.px]="starAvg * (width / 5)">
      <img src="../../../../assets/image/star-rate.png" 
        [style.width.px]="width">
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
