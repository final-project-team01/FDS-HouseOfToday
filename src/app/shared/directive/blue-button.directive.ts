import { Directive, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[BlueButton]'
})
export class BlueButtonDirective {

  constructor(private el: ElementRef, private renderer: Renderer2) {
    renderer.setStyle(el.nativeElement, 'box-sizing', 'border-box');
    renderer.setStyle(el.nativeElement, 'display', 'inline-block');
    renderer.setStyle(el.nativeElement, 'border-width', '1px');
    renderer.setStyle(el.nativeElement, 'border-style', 'solid');
    renderer.setStyle(el.nativeElement, 'text-align', 'center');
    renderer.setStyle(el.nativeElement, 'border-radius', '4px');
    renderer.setStyle(el.nativeElement, 'font-weight', 'bold');
    renderer.setStyle(el.nativeElement, 'background-color', '#35C5F0');
    renderer.setStyle(el.nativeElement, 'border-color', '#35C5F0');
    renderer.setStyle(el.nativeElement, 'color', 'white');
  }
  @HostListener("mouseover") mouseoverHandler() {
    this.renderer.setStyle(this.el.nativeElement, 'background-color', '#11b9eb');
  }
  @HostListener("mouseout") mouseoutHandler() {
    this.renderer.setStyle(this.el.nativeElement, 'background-color', '#35C5F0');
  }

}
