import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-check-box',
  template: `
  <div class="round-checkbox-input">
    <label class="label">
      <input type="checkbox" class="round-checkbox-input-check" autocomplete="off" [checked]="isChecked" (change)="changeChecked($event.target.checked)">
        <span class="round-checkbox-input-icon">
          <svg class="check" width="24" height="24" viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet">
            <path fill="#FFF" d="M9.9 14.6l7-7.3 1.5 1.4-8.4 8.7-5-4.6 1.4-1.5z"></path>
          </svg>
        </span>
      <span *ngIf="caption" class="caption"><ng-content></ng-content></span>
    </label>
  </div>
  `,
  styleUrls: [`./check-box.scss`]
})
export class CheckBoxComponent implements OnInit {
  @Input() isChecked: boolean = true;
  @Input() caption: boolean = false;
  @Output() checkedEvent = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  changeChecked(isChecked: boolean) {
    this.checkedEvent.emit(isChecked);
  }

}
