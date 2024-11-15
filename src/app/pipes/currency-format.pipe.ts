import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currencyBRL',
  standalone: true
})
export class CurrencyBRLPipe implements PipeTransform {
  transform(value: number | string): string {
    // Converte o valor para número e fixa em 2 casas decimais
    const numberValue = typeof value === 'string' ? parseFloat(value) : value;
    const formattedValue = numberValue.toFixed(2).replace('.', ',');

    return `R$ ${formattedValue}`;
  }
}
