import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CounterComponent implements OnInit {
  constructor() {}
  count = 0;

  ngOnInit(): void {}

  countUp() {
    this.count++;
  }

  countDown() {
    this.count--;
  }

  reset() {
    this.count = 0;
  }

  plus100() {
    this.count += 100;
  }
}
