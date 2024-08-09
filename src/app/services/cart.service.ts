import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private items: any[] = [];
  constructor() {}

  addToCart(product: any) {
    this.items.push({ ...product, quantity: 1 });
  }

  getItems() {
    return this.items;
  }

  delete(item: any) {
    this.items = this.items.filter((i) => i.id != item.id);
  }

  incrementQuantity(id: number) {
    let item = this.items.find((i) => i.id === id);
    if (item) {
      item.quantity++;
    }
  }

  decrementQuantity(id: number) {
    let item = this.items.find((i) => i.id === id);
    if (item) {
      item.quantity--;
    }
  }

  getTotal(){
    return this.items.reduce((acc,item)=>{
      return acc + item.price * item.quantity;
    },0)
  }
}
