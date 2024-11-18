import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataApiService } from '../../services/data-api.service';
import { LocalStorageService } from '../../services/local-storage.service';
import { CommonModule } from '@angular/common';
import { HoverGapDirective } from '../../directives/hover-gap.directive';
import { HoverLiftDirective } from '../../directives/hover-lift.directive';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule, HoverGapDirective, HoverLiftDirective],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css',
})
export class ProductComponent implements OnInit {
  id = 0;
  data = {
    category: '',
    description: '',
    id: 0,
    image: '',
    price: 0,
    rating: {
      rate: 0,
      count: 0,
    },
    title: '',
  };

  constructor(
    private route: ActivatedRoute,
    private service: DataApiService,
    private router: Router,
    private localStorageService: LocalStorageService
  ) {}

  ngOnInit() {
    this.id = Number(this.route.snapshot.paramMap.get('id')); // Captura o ID da URL

    this.service.getDataApiOne(this.id).subscribe({
      next: (data) => {
        console.log(data);
        this.data = data;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  goToHome() {
    this.router.navigate(['/']);
  }

  addItemCar() {
    this.localStorageService.addItem(this.data);
    console.log(this.data);
    // this.router.navigate(['/carrinho']);
  }

  addItem() {
    // const newItem = { id: Date.now(), name: 'Item ' + Date.now() };
    // this.localStorageService.addItem(newItem);
  }

  removeItem(index: number) {
    this.localStorageService.removeItem(index);
  }
}
