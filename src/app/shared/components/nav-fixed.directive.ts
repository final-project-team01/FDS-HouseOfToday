import { Directive, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[NavFixed]'
})
export class NavFixedDirective {

  constructor(public el: ElementRef, public renderer: Renderer2) { }

  @HostListener("window:scroll") scrollHandler() {
    if (window.pageYOffset > 0)
      this.toggleNavFixed(true);
    else this.toggleNavFixed(false);

  }

  toggleNavFixed(fixed: boolean) {
    this.renderer.setStyle(
      this.el.nativeElement,
      "position", fixed ? "fixed" : "relative"
    );
  }
}
