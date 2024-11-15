import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { DataApiService } from '../../services/data-api.service';
import { FilterComponent } from '../filter/filter.component';
import { FiltersService } from '../../services/filters.service';
import { BehaviorSubject, combineLatest } from 'rxjs';
import { CurrencyBRLPipe } from '../../pipes/currency-format.pipe';
import { StyledTextPipe } from '../../pipes/styled-text.pipe';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    RouterOutlet,
    CommonModule,
    FilterComponent,
    CurrencyBRLPipe,
    StyledTextPipe,
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  title = 'uni-front';
  data: any[] = [];
  filteredData: any[] = [];
  filterBy = new BehaviorSubject<string>('all');

  constructor(
    private service: DataApiService,
    private filter: FiltersService,
    private router: Router
  ) {}

  ngOnInit(): void {
    // Combina os dados do serviço, o valor do filtro e o termo de busca
    combineLatest([
      this.service.getDataApi(),
      this.filter.getCurCat(),
      this.filter.getSearchTerm(),
    ]).subscribe({
      next: ([data, category, searchTerm]) => {
        this.data = data;
        this.applyFilter(category, searchTerm);
      },
      error: (err) => console.log(err),
    });
  }

  applyFilter(category: string, searchTerm: string): void {
    let filtered = this.data;

    if (category !== 'all') {
      filtered = filtered.filter((obj) => obj.category === category);
    }

    if (searchTerm) {
      filtered = filtered.filter((obj) =>
        obj.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    this.filteredData = filtered;
  }

  goToProduct(id: number): void {
    this.router.navigate(['/produto', id]);
  }
}
