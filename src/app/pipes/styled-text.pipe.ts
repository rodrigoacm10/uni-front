// src/app/pipes/styled-text.pipe.ts

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'styledText',
  standalone: true, // permite que o pipe seja usado diretamente em componentes standalone
})
export class StyledTextPipe implements PipeTransform {
  transform(value: string): string {
    if (!value) return '';

    // Retorna o valor formatado como HTML com estilo
    return `<span class="text-[18px] font-medium ">${value}</span>`;
  }
}
