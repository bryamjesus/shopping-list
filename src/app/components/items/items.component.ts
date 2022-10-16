import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/models/item';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css'],
})
export class ItemsComponent implements OnInit {
  items: Item[] = [];

  constructor() {}

  ngOnInit(): void {
    this.items = [
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
  }

  deleteItem(item: Item) {
    this.items = this.items.filter((x) => x.id !== item.id);
  }
}
