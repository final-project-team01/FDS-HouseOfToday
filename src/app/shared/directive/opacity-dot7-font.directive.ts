import { Directive, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[OpacityDot7Font]'
})
export class OpacityDot7FontDirective {

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  @HostListener("mouseover") mouseoverHandler() {
    this.renderer.setStyle(this.el.nativeElement, 'opacity', '0.7');
  }
  @HostListener("mouseout") mouseoutHandler() {
    this.renderer.setStyle(this.el.nativeElement, 'opacity', '1');
  }
}
