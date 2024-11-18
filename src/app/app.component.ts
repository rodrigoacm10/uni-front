import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LocalStorageService } from './services/local-storage.service';
import { HoverLiftDirective } from './directives/hover-lift.directive';
import { routeTransitionAnimations } from '../animations';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, HoverLiftDirective],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [routeTransitionAnimations],
})
export class AppComponent {
  title = 'uni-front';
  itemCount = 0;

  prepareRoute(outlet: RouterOutlet) {
    console.log('Animation Data:', outlet?.activatedRouteData?.['animation']);
    return outlet?.activatedRouteData?.['animation'] || null;
  }
  constructor(
    protected route: ActivatedRoute,
    private router: Router,
    private localStorageService: LocalStorageService
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
