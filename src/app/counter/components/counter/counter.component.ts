import { Component } from '@angular/core';


@Component({
  selector: 'app-counter',
  template: `
  <h3>Counter: {{ counter }}</h3>

  <button class="btn btn-primary mx-2" (click)="increaseBy(1)">+1</button>
  <button class="btn btn-primary" (click)="resetCounter()">Reset</button>
  <button class="btn btn-primary mx-2" (click)="increaseBy(-1)">-1</button>
  `,
})
export class CounterComponent {
  public counter: number = 10;

  increaseBy(value: number): void {
    this.counter += value;
  }

  resetCounter(): void {
    this.counter = 10;
  }
}
