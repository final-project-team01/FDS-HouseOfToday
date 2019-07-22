import { Directive, ElementRef, Renderer2, HostListener } from '@angular/core';
import { StateService } from 'src/app/core/services/state.service';

@Directive({
  selector: '[SubNavFixed]'
})
export class SubNavFixedDirective {

  constructor(public el: ElementRef, public renderer: Renderer2, private stateService: StateService) { }
  @HostListener("window:scroll") scrollHandler() {
    if (window.pageYOffset > 0)
      this.toggleSubNavFixed(true);
    else this.toggleSubNavFixed(false);
  }


  @HostListener("mouseout", ["$event"]) mouseout(event) {
    if (!this.stateService.getIsNavFixed() && event.clientY > 130)
      this.stateService.resetNav();

    else if (this.stateService.getIsNavFixed() && (event.clientY > 130 || event.clientY < 81))
      this.stateService.setNav(-1);
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

    this.stateService.setNav(
      fixed ? -1 : this.stateService.getLocate()
    )

  }
}
