import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-item-list-component',
  templateUrl: './item-list-component.component.html',
  styleUrls: ['./item-list-component.component.scss']
})
export class ItemListComponentComponent implements OnInit {
  items: string[] = ['Item 1', 'Item 2'];

  constructor() {}

  ngOnInit() {}

  addItem() {
    setTimeout(() => {
      this.items.push(`Item ${this.items.length + 1}`);
      // This mutation will not trigger change detection
    }, 1000);
  }
}
