import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[Button]'
})
export class ButtonDirective {

  constructor(private el: ElementRef, private renderer: Renderer2) {
    renderer.setStyle(el.nativeElement, 'box-sizing', 'border-box');
    renderer.setStyle(el.nativeElement, 'display', 'inline-block');
    renderer.setStyle(el.nativeElement, 'border-width', '1px');
    renderer.setStyle(el.nativeElement, 'border-style', 'solid');
    renderer.setStyle(el.nativeElement, 'text-align', 'center');
    renderer.setStyle(el.nativeElement, 'border-radius', '4px');
    renderer.setStyle(el.nativeElement, 'font-weight', 'bold');
  }
}
