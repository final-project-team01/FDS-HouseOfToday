import { Directive, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[SubNavFixed]'
})
export class SubNavFixedDirective {

  constructor(public el: ElementRef, public renderer: Renderer2) { }
  @HostListener("window:scroll") scrollHandler() {
    if (window.pageYOffset > 0)
      this.toggleSubNavFixed(true);
    else this.toggleSubNavFixed(false);
  }

  toggleSubNavFixed(fixed: boolean) {
    this.renderer.setStyle(
      this.el.nativeElement,
      "position", fixed ? "fixed" : "relative"
    );
    this.renderer.setStyle(
      this.el.nativeElement,
      "top", fixed ? "81px" : "0"
    );
  }
}
