import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataApiService {
  private apiUrl = 'https://fakestoreapi.com/products';

  constructor(private client: HttpClient) {}

  getDataApi(): Observable<any> {
    return this.client.get(this.apiUrl);
  }

  getDataApiOne(id: number): Observable<any> {
    console.log(id);
    return this.client.get(`${this.apiUrl}/${id}`);
  }
}
