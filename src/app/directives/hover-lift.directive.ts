import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHoverLift]',
  standalone: true, // Já está correto
})
export class HoverLiftDirective {
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('mouseenter') onMouseEnter() {
    this.renderer.setStyle(
      this.el.nativeElement,
      'transform',
      'translateY(-3px)'
    );
    this.renderer.setStyle(
      this.el.nativeElement,
      'transition',
      'transform 0.3s ease'
    );
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.renderer.setStyle(this.el.nativeElement, 'transform', 'translateY(0)');
  }
}
