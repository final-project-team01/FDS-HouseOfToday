import { Directive, ElementRef, Renderer2, HostListener } from '@angular/core';
import { CommonService } from 'src/app/core/services/common.service';

@Directive({
  selector: '[SubNavFixed]'
})
export class SubNavFixedDirective {

  constructor(public el: ElementRef, public renderer: Renderer2, private commonService: CommonService) { }
  @HostListener("window:scroll") scrollHandler() {
    if (window.pageYOffset > 0)
      this.toggleSubNavFixed(true);
    else this.toggleSubNavFixed(false);
  }


  @HostListener("mouseout", ["$event"]) mouseout(event) {
    if (!this.commonService.getIsNavFixed() && event.clientY > this.el.nativeElement.offsetTop + this.el.nativeElement.offsetHeight)
      this.commonService.resetNav();

    else if (this.commonService.getIsNavFixed() && (event.clientY > this.el.nativeElement.offsetTop + this.el.nativeElement.offsetHeight || event.clientY < this.el.nativeElement.offsetTop))
      this.commonService.setNav(-1);
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

    this.commonService.setNav(
      fixed ? -1 : this.commonService.getLocate()
    )

  }
}
