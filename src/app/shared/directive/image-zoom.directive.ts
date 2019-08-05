import { Directive, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[ImageZoom]'
})
export class ImageZoomDirective {

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  @HostListener("mouseover") mouseoverHandler() {
    this.renderer.setStyle(this.el.nativeElement.querySelector('.image-zoom'), 'transform', 'scale(1.05) translate(0%, 0%)');
    this.renderer.setStyle(this.el.nativeElement.querySelector('.image-zoom'), 'transition', 'transform 0.3s ease');

  }
  @HostListener("mouseout") mouseoutHandler() {
    this.renderer.setStyle(this.el.nativeElement.querySelector('.image-zoom'), 'transform', 'scale(1) translate(0%, 0%)');
    this.renderer.setStyle(this.el.nativeElement.querySelector('.image-zoom'), 'transition', 'transform 0.3s ease');
  }

}
