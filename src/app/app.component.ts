import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ChangeDetection15Project';
  items = [
    { name: 'Item 1', count: 0 },
    { name: 'Item 2', count: 0 }
  ];

  incrementCount(item: any) {
    // item.count += 1;
    // Direct mutation will not trigger change detection

    const index = this.items.indexOf(item);
    this.items[index] = { ...item, count: item.count + 1 };
  }
}
