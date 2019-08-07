import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-filter-option',
  template: `
    <div class="filter-option" [ngStyle]="{'width': getWidth()}">
        <ng-content></ng-content>      
    </div>
  `,
  styleUrls: ['./filter-option.scss']
})
export class FilterOptionComponent implements OnInit {
  @Input() width: number = 130;
  getWidth() {
    return this.width + 'px'
  }
  constructor() { }

  ngOnInit() {
  }

}
