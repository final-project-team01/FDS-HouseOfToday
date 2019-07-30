import { Directive, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[CartHover]'
})
export class CartHoverDirective {

  constructor(public el: ElementRef, public renderer: Renderer2) { }

  @HostListener("mouseover") mouseover() {
    this.renderer.setStyle(
      this.el.nativeElement,
      "background-position", "top -121px left -156px"
    );
  }
  @HostListener("mouseout") mouseout() {
    this.renderer.setStyle(
      this.el.nativeElement,
      "background-position", "top -121px left -100px"
    );
  }

}
