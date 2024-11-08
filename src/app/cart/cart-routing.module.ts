import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { getCartItemsResolver } from './resolvers/get-cart-items.resolver';


const routes: Routes = [
	{
		path: '',
		component: CartComponent,
		children: [
			{
				path: 'shopping-cart',
				component: ShoppingCartComponent,
				resolve: [getCartItemsResolver()]
			},
		],
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class CartRoutingModule { }
