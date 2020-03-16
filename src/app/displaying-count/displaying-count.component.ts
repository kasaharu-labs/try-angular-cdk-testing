import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-displaying-count',
  templateUrl: './displaying-count.component.html',
  styleUrls: ['./displaying-count.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DisplayingCountComponent implements OnInit {
  constructor() {}

  @Input() count!: number;

  ngOnInit(): void {}
}
