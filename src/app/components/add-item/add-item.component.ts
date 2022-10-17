import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Item } from 'src/app/models/item';
import { ItemService } from 'src/app/services/item.service';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css'],
})
export class AddItemComponent implements OnInit {
  id: number = 0;
  title: string = '';
  price: number = 0;
  quiantity: number = 0;

  constructor(private itemServices: ItemService, private router: Router) {}

  ngOnInit(): void {}

  onSubmit() {
    const item = new Item();
    item.id = this.id;
    item.title = this.title;
    item.price = this.price;
    item.quiantity = this.quiantity;
    item.completed = false;

    // this.itemServices.addItem(item);
    this.itemServices.addItem(item).subscribe((i) => {
      this.router.navigate(['/']);
    });
  }
}
