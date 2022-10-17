import { Injectable } from '@angular/core';
import { Item } from '../models/item';

@Injectable({
  providedIn: 'root',
})
export class ItemService {
  constructor() {}

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

  getItems() {
    return this.items
  }
  addItem(item: Item) {
    this.items.unshift(item);
  }
}
