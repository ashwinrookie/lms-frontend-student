import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import {
	HttpRequest,
	HttpHandler,
	HttpEvent,
	HttpInterceptor,
	HttpErrorResponse,
	HttpResponse,
	HttpClient
} from '@angular/common/http';
import { catchError, map, Observable, switchMap, throwError } from 'rxjs';
import { getErrorMessage } from '../helpers';
import { ErrorCodes } from '../errors';


@Injectable()
export class HttpInterceptorService implements HttpInterceptor {

	constructor(
		private _http: HttpClient,
		private _router: Router
	) { }

	intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
		const token = localStorage.getItem('authToken');
		let clonedRequest = request;

		if (token)
			clonedRequest = request.clone({
				setHeaders: {
					authorization: `Bearer ${token}`
				},
				withCredentials: true
			});

		return next.handle(clonedRequest).pipe(
			map((event: HttpEvent<any>) => {
				if (event instanceof HttpResponse)
					return event.clone({ body: event.body.data });

				return event;
			}),
			catchError((error: HttpErrorResponse) => {
				let errorMessage: string = "Something went wrong, please try again";

				if (error.error && Array.isArray(error.error.errors) && error.error.errors.length > 0) {
					const firstError = error.error.errors[0];
					if (firstError) {
						const errorCode = firstError.code;
						errorMessage = getErrorMessage(errorCode);

						if (errorCode === ErrorCodes.unauthorized)
							return this._handleUnauthorizedError(request, next, error);

					}
				}

				return throwError(() => new Error(errorMessage));
			})
		);
	}

	private _handleUnauthorizedError(request: HttpRequest<unknown>, next: HttpHandler, error: HttpErrorResponse): Observable<HttpEvent<unknown>> {
		const refreshToken = localStorage.getItem('refreshToken');

		if (!refreshToken)
			return throwError(() => new Error("Refresh token is missing"));


		return this._http.post(`${environment.apiUrl}/auth/token/refresh`, { refreshToken }).pipe(
			switchMap((response: any) => {
				const newAccessToken = response.accessToken;
				const newRefreshToken = response.refreshToken;

				localStorage.setItem('authToken', newAccessToken);
				localStorage.setItem('refreshToken', newRefreshToken);

				const clonedRequest = request.clone({
					setHeaders: {
						Authorization: `Bearer ${newAccessToken}`
					}
				});

				return next.handle(clonedRequest);
			}),
			catchError((refreshError: HttpErrorResponse) => {
				let refreshErrorMessage = "Session timeout. Please log in again.";

				localStorage.removeItem("authToken");
				localStorage.removeItem("refreshToken");

				this._router.navigate(["/"]);

				return throwError(() => new Error(refreshErrorMessage));
			})
		);
	}
}