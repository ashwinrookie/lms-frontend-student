import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GetCartItemsResponseDTO } from 'src/app/core/dto/response/get-cart-items.response.dto';
import { CartService } from '../services/cart.service';
import { loadStripe, Stripe } from '@stripe/stripe-js';
@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss'],
})
export class ShoppingCartComponent implements OnInit {
  private _cart: any | null;
  private stripePromise = loadStripe(
    'pk_test_51LmW5bLT9AmL82bcPXVcFYl7rwsfIPjbPcpP84kvdMdewABu3gLwxpZbebGpAjds3wXVKALx82qNynyFEssuUtmT00PQY41vio'
  );

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

  checkoutCart(successUrl: string, cancelUrl: string): Promise<string | null> {
    return new Promise((resolve, reject) => {
      this._cartService.checkoutCart(successUrl, cancelUrl).subscribe({
        next: (checkoutResponse) => {
          console.log('checkoutResponse::', checkoutResponse);
          resolve(checkoutResponse?.sessionId || null); // Return sessionId
        },
        error: (error: Error) => {
          console.log(error);
          reject(error);
        },
      });
    });
  }

  async checkout() {
    const stripe = await this.stripePromise;

    // Get the sessionId as a Promise result
    const sessionId = await this.checkoutCart(
      'http://localhost:4200',
      'http://localhost:4200/cart/shopping-cart'
    );

    if (stripe && sessionId) {
      // Redirects to the Stripe Checkout page
      stripe.redirectToCheckout({ sessionId });
    }
  }
}
