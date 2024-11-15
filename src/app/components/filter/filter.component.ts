import { Component } from '@angular/core';
import { FiltersService } from '../../services/filters.service';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { FilterItemDirective } from '../../directives/filter-item.directive';

@Component({
  selector: 'app-filter',
  standalone: true,
  imports: [CommonModule, FilterItemDirective],
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css'],
})
export class FilterComponent {
  categorys = [{ name: '', value: '' }];
  curFilter$: Observable<string>;

  constructor(private filter: FiltersService) {
    this.categorys = this.filter.getCategories();
    this.curFilter$ = this.filter.getCurCat();
  }

  changeCurCat(val: string) {
    this.filter.setCurCat(val);
  }

  onSearch(event: Event) {
    const searchTerm = (event.target as HTMLInputElement).value;
    this.filter.setSearchTerm(searchTerm);
  }
}
