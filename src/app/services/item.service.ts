import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Item } from '../models/item';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ItemService {
  url: string = 'http://localhost:3000/items';
  httpOptions = {
    headers: {
      'Content-type': 'application/json',
    },
  };

  constructor(private http: HttpClient) {}

  items: Item[] = [
    {
      id: 0,
      title: 'mandzan',
      price: 10.5,
      quiantity: 4,
      completed: false,
    },
    {
      id: 1,
      title: 'pan',
      price: 1.5,
      quiantity: 8,
      completed: true,
    },
    {
      id: 2,
      title: 'chamarra',
      price: 120,
      quiantity: 1,
      completed: false,
    },
  ];

  getItems(): Observable<Item[]> {
    // return this.items
    return this.http.get<Item[]>(this.url);
  }

  addItem(item: Item): Observable<Item> {
    return this.http.post<Item>(this.url, item, this.httpOptions);
  }

  toggleItem(item: Item): Observable<Item> {
    return this.http.put<Item>(this.url + item.id, item, this.httpOptions);
  }

  delete(item: Item): Observable<Item> {
    return this.http.delete<Item>(this.url + item.id);
  }
}
