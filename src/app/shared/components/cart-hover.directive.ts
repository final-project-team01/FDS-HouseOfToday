import { Directive, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[CartHover]'
})
export class CartHoverDirective {

  constructor(public el: ElementRef, public renderer: Renderer2) { }

  @HostListener("mouseover") mouseover() {
    this.renderer.setStyle(
      this.el.nativeElement.querySelector('.cart-btn-icon'),
      "background-position", "top -112px left -147px"
    );

  }
  @HostListener("mouseout") mouseout() {
    this.renderer.setStyle(
      this.el.nativeElement.querySelector('.cart-btn-icon'),
      "background-position", "top -112px left -91px"
    );
  }

}
