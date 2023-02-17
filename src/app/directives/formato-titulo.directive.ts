import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appFormatoTitulo]'
})
export class FormatoTituloDirective {

  constructor(
    private renderer: Renderer2,
    private elementRef: ElementRef
  ) {
    this.renderer.setStyle(this.elementRef.nativeElement, 'font-size', '25px');
  }

}
