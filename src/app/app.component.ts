// src/app/app.component.ts

import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LocalStorageService } from './services/local-storage.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule], // Remova LocalStorageService daqui
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'uni-front';
  itemCount = 0;

  constructor(
    private router: Router,
    private localStorageService: LocalStorageService // O serviço é injetado pelo construtor
  ) {
    this.localStorageService.itemCount$.subscribe((count) => {
      this.itemCount = count;
    });
  }

  goToCart() {
    this.router.navigate(['/carrinho']);
  }

  goToHome() {
    this.router.navigate(['/']);
  }
}
