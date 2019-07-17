import { Directive, ElementRef, EventEmitter, Output, HostListener } from '@angular/core';

@Directive({
  selector: '[clickOutside]'
})
export class ClickOutsideDirective {

  constructor(private el: ElementRef) { }

  @Output() clickOutside = new EventEmitter<MouseEvent>();
  
  @HostListener('document:click', ['$event','$event.target']) 
    click(e: MouseEvent, target: HTMLElement) {
      if (!target) return;

      const clickedInside = this.el.nativeElement.contains(target);

      if (!clickedInside) this.clickOutside.emit(e);
    }
}
