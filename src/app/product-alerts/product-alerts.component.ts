import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductAlertsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
