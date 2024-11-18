import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from '../../services/local-storage.service';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { CurrencyBRLPipe } from '../../pipes/currency-format.pipe';
import { HoverGapDirective } from '../../directives/hover-gap.directive';
import { StyledTextPipe } from '../../pipes/styled-text.pipe';
import { HoverLiftDirective } from '../../directives/hover-lift.directive';

@Component({
  selector: 'app-car',
  standalone: true,
  imports: [
    CommonModule,
    CurrencyPipe,
    CurrencyBRLPipe,
    HoverGapDirective,
    StyledTextPipe,
    HoverLiftDirective, // Agora deve funcionar corretamente
  ],
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css'],
  providers: [CurrencyPipe],
})
export class CarComponent {
  constructor(
    private router: Router,
    private localStorageService: LocalStorageService,
    private currencyPipe: CurrencyPipe
  ) {}

  goToHome() {
    this.router.navigate(['/']);
  }

  getItems() {
    return this.localStorageService.getArray();
  }

  deleteItem(index: number) {
    this.localStorageService.removeItem(index);
  }

  getTotalPrice() {
    return this.localStorageService.getTotalPrice();
  }

  getFinalTotalPrice(): string {
    const totalArr = this.getItems().length;
    const totalPrice = this.getTotalPrice();
    const finalPrice = totalPrice >= 900 ? totalPrice : totalPrice + 90;
    return (
      this.currencyPipe
        .transform(totalArr > 0 ? finalPrice : 0, 'BRL')
        ?.replaceAll('.', ',?')
        .replaceAll(',', '.')
        .replace('.?', ',') || ''
    );
  }

  concludedBuy() {
    return this.localStorageService.clearStorageAndReturnDeletedItems();
  }
}
