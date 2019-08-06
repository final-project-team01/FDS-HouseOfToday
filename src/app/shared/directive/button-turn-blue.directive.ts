import { Directive, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[ButtonTurnBlue]'
})
export class ButtonTurnBlueDirective {

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  @HostListener("mouseover") mouseoverHandler() {
    this.renderer.setStyle(this.el.nativeElement.querySelector('.button-turn-blue'),'background-color', '#35C5F0');
    this.renderer.setStyle(this.el.nativeElement.querySelector('.button-turn-blue'),'border', '#35C5F0');
  }

  @HostListener("mouseleave") mouseleaveHandler() {
    this.renderer.setStyle(this.el.nativeElement.querySelector('.button-turn-blue'), 'background-color', 'transparent');
    this.renderer.setStyle(this.el.nativeElement.querySelector('.button-turn-blue'), 'border', '1px solid white');
  }
}
