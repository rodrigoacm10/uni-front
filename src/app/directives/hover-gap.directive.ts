// src/app/directives/hover-gap.directive.ts

import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  standalone: true,
  selector: '[appHoverGap]',
})
export class HoverGapDirective {
  private readonly initialGapClass = 'gap-1'; // Classe inicial do Tailwind para gap pequeno
  private readonly maxGapClass = 'gap-3'; // Classe do Tailwind para gap maior
  private readonly transitionClasses = ['transition-all', 'duration-500']; // Classes para animação suave

  constructor(private el: ElementRef, private renderer: Renderer2) {
    this.setInitialClasses();
  }

  // Define as classes iniciais ao carregar a diretiva
  private setInitialClasses(): void {
    this.renderer.addClass(this.el.nativeElement, this.initialGapClass);
    this.transitionClasses.forEach((className) =>
      this.renderer.addClass(this.el.nativeElement, className)
    );
  }

  // Aplica o gap maior ao passar o mouse
  @HostListener('mouseenter') onMouseEnter() {
    this.renderer.removeClass(this.el.nativeElement, this.initialGapClass);
    this.renderer.addClass(this.el.nativeElement, this.maxGapClass);
  }

  // Retorna ao gap menor ao sair do hover
  @HostListener('mouseleave') onMouseLeave() {
    this.renderer.removeClass(this.el.nativeElement, this.maxGapClass);
    this.renderer.addClass(this.el.nativeElement, this.initialGapClass);
  }
}
