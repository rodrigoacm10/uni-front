import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

interface Category {
  name: string;
  value: string;
}

@Injectable({
  providedIn: 'root',
})
export class FiltersService {
  private categories: Category[] = [
    { name: 'TODOS', value: 'all' },
    { name: 'MASCULINO', value: "men's clothing" },
    { name: 'FEMININO', value: "women's clothing" },
    { name: 'JÓIAS', value: 'jewelery' },
    { name: 'ELETRÔNICOS', value: 'electronics' },
  ];

  private curCat = new BehaviorSubject<string>('all');
  private searchTerm = new BehaviorSubject<string>('');

  constructor() {}

  getCurCat(): Observable<string> {
    return this.curCat.asObservable();
  }

  setCurCat(value: string): void {
    this.curCat.next(value);
  }

  getCategories(): Category[] {
    return this.categories;
  }

  getSearchTerm(): Observable<string> {
    return this.searchTerm.asObservable();
  }

  setSearchTerm(term: string): void {
    this.searchTerm.next(term);
  }
}
