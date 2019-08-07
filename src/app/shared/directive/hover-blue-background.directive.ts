import { Directive, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[HoverBlueBackground]'
})
export class HoverBlueBackgroundDirective {

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  @HostListener("mouseover") mouseoverHandler() {
    this.renderer.setStyle(this.el.nativeElement, 'background-color', '#effbff');
  }

  @HostListener("mouseleave") mouseleaveHandler() {
    this.renderer.setStyle(this.el.nativeElement, 'background-color', '#FFFFFF');
  }
}
