import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CartComponent implements OnInit {
  items: any;
  checkoutForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private cartService: CartService) {
    this.checkoutForm = this.formBuilder.group({ name: '', address: '' });
  }

  ngOnInit(): void {
    this.items = this.cartService.getItems();
  }

  onSubmit(customerData: any) {
    // Process checkout data here
    this.items = this.cartService.clearCart();
    this.checkoutForm.reset();

    console.warn('Your order has been submitted', customerData);
  }
}
