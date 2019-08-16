import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[WhiteButton]'
})
export class WhiteButtonDirective {

  constructor(private el: ElementRef, private renderer: Renderer2) { 
    renderer.setStyle(el.nativeElement, 'border-radius', '5px');
    renderer.setStyle(el.nativeElement, 'background-color', 'white');
    renderer.setStyle(el.nativeElement, 'border-radius', '5px');
    renderer.setStyle(el.nativeElement, 'border-width', '1px');
    renderer.setStyle(el.nativeElement, 'border-style', 'solid');
    renderer.setStyle(el.nativeElement, 'border-color', '#35C5F0');
    renderer.setStyle(el.nativeElement, 'color', '#35C5F0');
    renderer.setStyle(el.nativeElement, 'cursor', 'pointer');

   }

}
