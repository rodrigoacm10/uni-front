import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';
import { Observable } from 'rxjs';

@Directive({
  selector: '[appFilterItem]', // Confirme que este é o seletor correto
  standalone: true,
})
export class FilterItemDirective implements OnInit {
  @Input() appFilterItem: string = ''; // Ajuste o nome do Input para appFilterItem
  @Input() curFilter$!: Observable<string>;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit(): void {
    this.curFilter$.subscribe((curFilter) => {
      this.updateStyles(curFilter);
    });
  }

  private updateStyles(curFilter: string): void {
    if (this.appFilterItem === curFilter) {
      this.renderer.addClass(this.el.nativeElement, 'font-bold');
      this.renderer.setStyle(this.el.nativeElement, 'color', '#41414D');
    } else {
      this.renderer.removeClass(this.el.nativeElement, 'font-bold');
      this.renderer.setStyle(this.el.nativeElement, 'color', '#737380');
    }
  }
}
