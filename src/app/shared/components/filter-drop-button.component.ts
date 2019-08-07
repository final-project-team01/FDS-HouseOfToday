import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filter-drop-button',
  template: `
    <button FilterButton>
      <ng-content></ng-content>
      <svg class="icon" width="12" height="12" viewBox="0 0 12 12" fill="currentColor" preserveAspectRatio="xMidYMid meet"><path d="M6.069 6.72l4.123-3.783 1.216 1.326-5.32 4.881L.603 4.273l1.196-1.346z"></path></svg>
    </button>
  `,
  styles: []
})
export class FilterDropButtonComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
