import { Directive, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[FilterButtonActive]'
})
export class FilterButtonActiveDirective {

  constructor(private el:ElementRef, private renderer: Renderer2) { }

  @HostListener('mouseover') mouseoverHandler() {
    this.renderer.setStyle(this.el.nativeElement.querySelector('.filter-show'), 'display', 'inline-block');
  }

  @HostListener('mouseleave') mouseleaveHandler() {
    this.renderer.setStyle(this.el.nativeElement.querySelector('.filter-show'), 'display', 'none');
  }
}
