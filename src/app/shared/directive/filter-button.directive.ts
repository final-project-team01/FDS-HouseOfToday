import { Directive, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[FilterButton]'
})
export class FilterButtonDirective {

  constructor(private el: ElementRef, private renderer: Renderer2) {
    renderer.setStyle(el.nativeElement, 'font-size', '15px');
    renderer.setStyle(el.nativeElement, 'line-height', '19px');
    renderer.setStyle(el.nativeElement, 'font-weight', 'bold');
    renderer.setStyle(el.nativeElement, 'padding', '7px 8px 6px');
    renderer.setStyle(el.nativeElement, 'text-align', 'center');
    renderer.setStyle(el.nativeElement, 'border-style', 'none');
    renderer.setStyle(el.nativeElement, 'border-radius', '4px');
    renderer.setStyle(el.nativeElement, 'background-color', '#f5f5f5');
    renderer.setStyle(el.nativeElement, 'border-color', '#f5f5f5');
    renderer.setStyle(el.nativeElement, 'color', '#757575');
  }

  @HostListener("mouseover") mouseoverHandler() {
    this.renderer.setStyle(this.el.nativeElement, 'background-color', '#f0f0f0');
    this.renderer.setStyle(this.el.nativeElement, 'border-color', '#f0f0f0');
  }
  @HostListener("mouseout") mouseoutHandler() {
    this.renderer.setStyle(this.el.nativeElement, 'background-color', '#f5f5f5');
    this.renderer.setStyle(this.el.nativeElement, 'border-color', '#f5f5f5');
  }


}
