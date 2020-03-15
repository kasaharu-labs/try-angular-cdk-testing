import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductAlertsComponent implements OnInit {
  constructor() {}
  @Input() product: any;
  @Output() notify = new EventEmitter();

  ngOnInit(): void {}
}
