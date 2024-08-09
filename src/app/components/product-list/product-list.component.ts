import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
})
export class ProductListComponent {
  cartService = inject(CartService)
  products:any[] = [
    { name: 'shirt 1', price: 200, id: 1 },
    { name: 'shirt 2', price: 300, id: 2 },
    { name: 'pant 1', price: 500, id: 3 },
    { name: 'pant 2', price: 600, id: 4 },
    { name: 'pant 5', price: 800, id: 5 },
  ];

  addToCart(product:any){
      this.cartService.addToCart(product)
  }
}
