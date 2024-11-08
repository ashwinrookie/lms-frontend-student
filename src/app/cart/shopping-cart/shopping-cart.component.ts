import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GetCartItemsResponseDTO } from 'src/app/core/dto/response/get-cart-items.response.dto';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss'],
})
export class ShoppingCartComponent implements OnInit {
  private _cart: GetCartItemsResponseDTO;

  constructor(private _route: ActivatedRoute) {
    this._cart = this._route.snapshot.data[0];
    console.log('this._cart ::', this._cart);
  }

  ngOnInit() {
    console.log('route ::', this._route.snapshot.data[0]);
  }

  get cart() {
    console.log('Cart details ::', this._cart, this._cart.totalValue);
    return this._cart;
  }
}
