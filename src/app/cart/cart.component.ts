import { Component } from '@angular/core';
import { CartService } from '../cart.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  constructor(public cartService: CartService) {}

  get total() {
  return this.cartService.getTotal().toFixed(2);
}

}
