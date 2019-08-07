import { Directive, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[MoreBigButton]'
})
export class MoreBigButtonDirective {

  constructor(private el: ElementRef, private renderer: Renderer2) {
    renderer.setStyle(el.nativeElement, 'cursor', 'pointer');
    renderer.setStyle(el.nativeElement, 'background-color', 'whitesmoke');
  }

  @HostListener("mouseover") mouseoverHandler() {
    const $right = this.el.nativeElement.querySelector('.more-right');
    const $left = this.el.nativeElement.querySelector('.more-left');
    if ($right) {
      this.renderer.setStyle($right, 'background-position', 'left -120px top 0px');
      this.renderer.setStyle($right, 'background-image', 'url("/assets/image/page-home.png")');
    }
    if ($left) {
      this.renderer.setStyle($left, 'background-position', 'left -80px top 0px');
      this.renderer.setStyle($left, 'background-image', 'url("/assets/image/page-home.png")');
    }
  }
  @HostListener("mouseout") mouseoutHandler() {
    const $right = this.el.nativeElement.querySelector('.more-right');
    const $left = this.el.nativeElement.querySelector('.more-left');
    if ($right) {
      this.renderer.setStyle($right, 'background-position', 'left -40px top 0px');
      this.renderer.setStyle($right, 'background-image', 'url("/assets/image/page-home.png")');
    }
    if ($left) {

      this.renderer.setStyle($left, 'background-position', 'left 0px top 0px');
      this.renderer.setStyle($left, 'background-image', 'url("/assets/image/page-home.png")');
    }
  }
}
