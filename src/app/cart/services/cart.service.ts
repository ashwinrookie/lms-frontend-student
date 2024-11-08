import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  AddCourseToCartResponseDTO,
  RemoveCourseFromCartResponseDTO,
} from 'src/app/core';
import { GetCartItemsResponseDTO } from 'src/app/core/dto/response/get-cart-items.response.dto';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private _cartApiUrl = `${environment.apiUrl}/main/cart`;

  constructor(private _httpClient: HttpClient) {}

  addCourseToCart(courseId: string) {
    return this._httpClient.post<AddCourseToCartResponseDTO>(
      `${this._cartApiUrl}/add-course`,
      {
        courseId: courseId,
      }
    );
  }

  getCartItems() {
    return this._httpClient.get<GetCartItemsResponseDTO>(`${this._cartApiUrl}`);
  }

  removeCourseFromCart(courseId: string) {
    return this._httpClient.post<RemoveCourseFromCartResponseDTO | null>(
      `${this._cartApiUrl}/remove-course`,
      {
        courseId: courseId,
      }
    );
  }
}
