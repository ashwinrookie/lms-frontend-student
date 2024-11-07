import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {

	constructor(private _route: ActivatedRoute) {}

	ngOnInit() {
		console.log("route ::", this._route.snapshot.data);
	}
}
