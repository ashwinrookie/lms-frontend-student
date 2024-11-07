import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AddCourseToCartResponseDTO } from 'src/app/core';
import { environment } from 'src/environments/environment';


@Injectable({
	providedIn: 'root'
})
export class CartService {
	private _cartApiUrl = `${environment.apiUrl}/main/cart`;

	constructor(private _httpClient: HttpClient) { }

	addCourseToCart(courseId: string) {
		return this._httpClient.post<AddCourseToCartResponseDTO>(
			`${this._cartApiUrl}/cart/add-course`,
			{
				courseId: courseId
			}
		);
	}

	clearCartItems() {
		return this._httpClient.post<null>(
			`${this._cartApiUrl}/cart/add-course`,
			{}
		);
	}
}
