import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';

import { CartService } from '../cart.service';
import { ICourse } from '../ICourse';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  items: ICourse[] = [];
  checkoutForm = this.fb.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    email: ['', Validators.required],
    phone: ['', Validators.required],
    confirm: [false, Validators.requiredTrue],
  });
  discount = 0;
  productsPrice = 0;
  totalPrice = 0;
  view = 'page1';

  constructor(
    public cartService: CartService,
    private fb: FormBuilder,
    public title: Title
  ) {}

  clearCart() {
    window.alert('Your cart has been cleared');
    this.items = this.cartService.clearCart();
  }

  onSubmit() {
    console.warn('Your order has been submitted', this.checkoutForm.value);
    this.items = this.cartService.clearCart();
    this.checkoutForm.reset();
  }

  ngOnInit(): void {
    this.items = this.cartService.getItems();
    this.calculateProductsPrice();
    this.calculateDiscount();
    this.calculateTotalPrice();
    if (this.cartService.customer) {
      this.view = 'page2';
    }
    this.title.setTitle('Cart (' + this.cartService.items.length + ' items)');
  }

  calculateProductsPrice() {
    this.productsPrice = 0;
    this.items.forEach((item) => {
      this.productsPrice = this.productsPrice + item.price;
    });
  }

  calculateDiscount() {
    if (this.productsPrice > 2000) {
      this.discount = (this.productsPrice / 100) * 15;
    } else {
      this.discount = 0;
    }
  }

  calculateTotalPrice() {
    this.totalPrice = this.productsPrice - this.discount;
    this.totalPrice = this.totalPrice + this.totalPrice * 0.1;
  }

  continue() {
    this.cartService.customer = {
      firstName: this.checkoutForm.value.firstName as string,
      lastName: this.checkoutForm.value.lastName as string,
      email: this.checkoutForm.value.email as string,
      phone: this.checkoutForm.value.phone as string,
    };
    this.view = 'page3';
  }

  purchase() {
    this.view = 'page2';
  }

  remove(i: number) {
    this.cartService.removeFromCart(i);
    this.calculateProductsPrice();
    this.calculateDiscount();
    this.calculateTotalPrice();
  }
}
