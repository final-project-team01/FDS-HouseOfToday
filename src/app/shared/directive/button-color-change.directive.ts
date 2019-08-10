import { Directive, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[ButtonColorChange]'
})
export class ButtonColorChangeDirective {

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  @HostListener("mouseover")mouseoverHandler() {
    this.renderer.setStyle(this.el.nativeElement, 'background-color', '#d8d8d8')
  }

  @HostListener("mouseleave")mouseleaveHandler() {
    this.renderer.setStyle(this.el.nativeElement, 'background-color', '#F5F5F5')
  }
}
