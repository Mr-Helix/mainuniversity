import { Injectable } from '@angular/core';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart: Product[] = [];

  getCart() {
    return this.cart;
  }

  addToCart(product: Product) {
    const item = this.cart.find(p => p.id === product.id);

    if (item) {
      item.quantity!++;
    } else {
      this.cart.push({ ...product, quantity: 1 });
    }
  }

  removeFromCart(id: number) {
    this.cart = this.cart.filter(p => p.id !== id);
  }

  increaseQty(id: number) {
    const item = this.cart.find(p => p.id === id);
    if (item) item.quantity!++;
  }

  decreaseQty(id: number) {
    const item = this.cart.find(p => p.id === id);
    if (item && item.quantity! > 1) {
      item.quantity!--;
    }
  }

  getTotal() {
    return this.cart.reduce(
      (sum, item) => sum + item.price * item.quantity!, 0
    );
  }
}
