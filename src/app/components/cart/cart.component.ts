import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ProductListComponent } from '../product-list/product-list.component';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule,ProductListComponent],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  cartService = inject(CartService)
  
  deleteFromCart(item:any){
    this.cartService.delete(item)
  }
}
