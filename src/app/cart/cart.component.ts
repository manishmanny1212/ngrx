import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { addToCart, removeFromCart } from '../card.action';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  newItem: string = '';
  cartItems: string[] = [];

  constructor(private store: Store<{ cart: string[] }>) {
    store.select('cart').subscribe(cart => this.cartItems = cart);
  }

  add(): void {
    if (this.newItem) {
      this.store.dispatch(addToCart({ item: this.newItem }));
      this.newItem = '';
    }
  }
  remove(item: string): void {
    this.store.dispatch(removeFromCart({ item }));
  }
}
