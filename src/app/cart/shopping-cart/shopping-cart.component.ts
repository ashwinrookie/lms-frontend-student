import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GetCartItemsResponseDTO } from 'src/app/core/dto/response/get-cart-items.response.dto';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss'],
})
export class ShoppingCartComponent implements OnInit {
  private _cart: any | null;

  constructor(
    private _route: ActivatedRoute,
    private _cartService: CartService
  ) {
    this._cart = this._route.snapshot.data[0];
    console.log('this._cart ::', this._cart);
  }

  ngOnInit() {
    console.log('route ::', this._route.snapshot.data[0]);
  }

  get cart() {
    // console.log('Cart details ::', this._cart, this._cart.totalValue);
    return this._cart;
  }

  removeCourseFromCart(courseId: string) {
    this._cartService.removeCourseFromCart(courseId).subscribe({
      next: (removeCourseResponse) => {
        console.log('removeCourseResponse', removeCourseResponse);
        this._cart = removeCourseResponse;
      },
      error: (error: Error) => {
        console.log(error);
      },
    });
  }

  clearCart() {
    this._cartService.clearCartItems().subscribe({
      next: (clearCartResponse) => {
        this._cart = clearCartResponse;
      },
      error: (error: Error) => {},
    });
  }
}
