import { Directive, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[MoreButton]'
})
export class MoreButtonDirective {

  constructor(private el: ElementRef, private renderer: Renderer2) {
    renderer.setStyle(el.nativeElement, 'width', '40px');
    renderer.setStyle(el.nativeElement, 'height', '40px');
    renderer.setStyle(el.nativeElement, 'border-radius', '100%');
    renderer.setStyle(el.nativeElement, 'box-shadow', '0 2px 4px 0 rgba(0,0,0,0.2)');
    renderer.setStyle(el.nativeElement, 'transition', '.1s opacity');
    renderer.setStyle(el.nativeElement, 'cursor', 'pointer');
    renderer.setStyle(el.nativeElement, 'position', 'absolute');
    renderer.setStyle(el.nativeElement, 'top', '0');
    renderer.setStyle(el.nativeElement, 'left', '0');
    renderer.setStyle(el.nativeElement, 'cursor', 'pointer');

    if (el.nativeElement.classList.contains('more-right')) {
      renderer.setStyle(el.nativeElement, 'background-position', 'left -40px top 0px');
      renderer.setStyle(el.nativeElement, 'background-image', 'url("/assets/image/page-home.png")');
    }
    else if (el.nativeElement.classList.contains('more-left')) {
      renderer.setStyle(el.nativeElement, 'background-position', 'left 0px top 0px');
      renderer.setStyle(el.nativeElement, 'background-image', 'url("/assets/image/page-home.png")');
    }
  }

  @HostListener("mouseover") mouseoverHandler() {
    if (this.el.nativeElement.classList.contains('more-right')) {
      this.renderer.setStyle(this.el.nativeElement, 'background-position', 'left -120px top 0px');
      this.renderer.setStyle(this.el.nativeElement, 'background-image', 'url("/assets/image/page-home.png")');
    }
    else if (this.el.nativeElement.classList.contains('more-left')) {
      this.renderer.setStyle(this.el.nativeElement, 'background-position', 'left -80px top 0px');
      this.renderer.setStyle(this.el.nativeElement, 'background-image', 'url("/assets/image/page-home.png")');

    }
  }
  @HostListener("mouseout") mouseoutHandler() {
    if (this.el.nativeElement.classList.contains('more-right')) {
      this.renderer.setStyle(this.el.nativeElement, 'background-position', 'left -40px top 0px');
      this.renderer.setStyle(this.el.nativeElement, 'background-image', 'url("/assets/image/page-home.png")');
    }
    else if (this.el.nativeElement.classList.contains('more-left')) {
      this.renderer.setStyle(this.el.nativeElement, 'background-position', 'left 0px top 0px');
      this.renderer.setStyle(this.el.nativeElement, 'background-image', 'url("/assets/image/page-home.png")');
    }
  }

}
