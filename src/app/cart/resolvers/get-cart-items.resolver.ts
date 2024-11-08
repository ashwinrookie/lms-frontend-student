import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, ResolveFn, RouterStateSnapshot } from '@angular/router';
import { catchError } from 'rxjs';
import { GetCartItemsResponseDTO } from 'src/app/core/dto/response/get-cart-items.response.dto';
import { CartService } from '../services/cart.service';


export function getCartItemsResolver(): ResolveFn<GetCartItemsResponseDTO> {
	return (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
		const cartService = inject(CartService);

		return cartService.getCartItems().pipe(
			catchError((error) => {
				throw error;
			})
		);
	};
};
