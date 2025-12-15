import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CartService } from '../cart.service';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-store',
  standalone: true,
  imports: [CommonModule, RouterModule], // ✅ RouterModule added
  templateUrl: './store.component.html',
  styleUrl: './store.component.css'
})
export class StoreComponent {

  products: Product[] = [];

  constructor(
    public cartService: CartService,
    private productService: ProductService
  ) {
    this.products = this.productService.getAll();
  }

  // ✅ THIS WAS MISSING
  add(product: Product) {
    this.cartService.addToCart(product);
  }
}
