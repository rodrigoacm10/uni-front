import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

interface Item {
  id: number;
  title: string;
  description: string;
  category: string;
  image: string;
  price: number;
  rating: { rate: number; count: number };
  quantity?: number;
}

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  private readonly storageKey = 'meuArray';
  private itemCountSubject = new BehaviorSubject<number>(0);
  public itemCount$ = this.itemCountSubject.asObservable();

  constructor() {
    this.initializeArray();
  }

  private initializeArray(): void {
    const storedArray = this.getArray();
    this.updateItemCount(storedArray.length);
  }

  private updateItemCount(count: number): void {
    this.itemCountSubject.next(count);
  }

  getArray(): Item[] {
    const data = localStorage.getItem(this.storageKey);
    return data ? JSON.parse(data) : [];
  }

  addItem(newItem: Item): void {
    const array = this.getArray();
    const existingItemIndex = array.findIndex((item) => item.id === newItem.id);

    if (existingItemIndex !== -1) {
      (array[existingItemIndex].quantity as number) += 1;
      array[existingItemIndex].price += newItem.price;
    } else {
      array.push({ ...newItem, quantity: 1 });
    }

    this.saveArray(array);
  }

  removeItem(index: number): void {
    const array = this.getArray();
    if (index >= 0 && index < array.length) {
      array.splice(index, 1);
      this.saveArray(array);
    }
  }

  private saveArray(array: Item[]): void {
    localStorage.setItem(this.storageKey, JSON.stringify(array));
    this.updateItemCount(array.length);
  }

  getTotalPrice(): number {
    const array = this.getArray();
    return array.reduce((total, item) => {
      const itemTotal = item.price;
      return total + itemTotal;
    }, 0);
  }

  clearStorageAndReturnDeletedItems(): Item[] {
    const deletedItems = this.getArray();
    localStorage.removeItem(this.storageKey);
    this.updateItemCount(0);
    return deletedItems;
  }
}
