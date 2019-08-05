import { Directive, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[BlueFont]'
})
export class BlueFontDirective {

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  @HostListener("mouseover") mouseoverHandler() {
    this.renderer.setStyle(this.el.nativeElement, 'color', '#35C5F0');
  }
  @HostListener("mouseout") mouseoutHandler() {
    this.renderer.setStyle(this.el.nativeElement, 'color', '');
  }
}
