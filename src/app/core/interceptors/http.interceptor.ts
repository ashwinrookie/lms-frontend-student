import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
  HttpResponse,
  HttpClient,
  HttpContextToken,
} from '@angular/common/http';
import { Store } from '@ngrx/store';
import {
  catchError,
  map,
  Observable,
  switchMap,
  throwError,
  finalize,
} from 'rxjs';
import { environment } from 'src/environments/environment';
import { getErrorMessage } from '../helpers';
import { ErrorCodes } from '../errors';
import { removeStudentProfile } from 'src/app/states';
import { LoadingService } from '../services/loading.service';
import { SKIP_LOADING } from '../services';

export const SKIP_AUTH = new HttpContextToken<boolean>(() => false);

@Injectable()
export class HttpInterceptorService implements HttpInterceptor {
  constructor(
    private _http: HttpClient,

    private _router: Router,
    private _store: Store,
    private _loadingService: LoadingService
  ) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    const token = localStorage.getItem('authToken');
    const skipAuth = request.context.get(SKIP_AUTH);

    let clonedRequest = request.clone({ withCredentials: true });

    // Add authorization header if not skipping auth
    if (token && !skipAuth) {
      clonedRequest = clonedRequest.clone({
        setHeaders: {
          authorization: `Bearer ${token}`,
        },
        withCredentials: true,
      });
    }

    const skipLoading = request.context.get(SKIP_LOADING);

    if (!skipLoading) {
      this._loadingService.show();
    } else {
      console.log('Skipped Loading');
    }

    return next.handle(clonedRequest).pipe(
      map((event: HttpEvent<any>) => {
        if (event instanceof HttpResponse)
          return event.clone({ body: event.body ? event.body.data : null });

        return event;
      }),
      catchError((error: HttpErrorResponse) => {
        console.log('error in http interceptor ::', error);
        let errorMessage: string = 'Something went wrong, please try again';

        if (
          error &&
          error.error &&
          Array.isArray(error.error.errors) &&
          error.error.errors.length > 0
        ) {
          const firstError = error.error.errors[0];
          if (firstError) {
            const errorCode = firstError.code;
            errorMessage = getErrorMessage(errorCode);

            if (errorCode === ErrorCodes.unauthorized)
              return this._handleUnauthorizedError(request, next, error);
          }
        }

        return throwError(() => new Error(errorMessage));
      }),
      finalize(() => {
        this._loadingService.hide(); // Stop loading indicator
      })
    );
  }

  private _handleUnauthorizedError(
    request: HttpRequest<unknown>,
    next: HttpHandler,
    error: HttpErrorResponse
  ): Observable<HttpEvent<unknown>> {
    const refreshToken = localStorage.getItem('refreshToken');

    if (!refreshToken)
      return throwError(() => new Error('Refresh token is missing'));

    return this._http
      .post(`${environment.apiUrl}/auth/token/refresh`, { refreshToken })
      .pipe(
        switchMap((response: any) => {
          const newAccessToken = response.accessToken;
          const newRefreshToken = response.refreshToken;

          localStorage.setItem('authToken', newAccessToken);
          localStorage.setItem('refreshToken', newRefreshToken);

          const clonedRequest = request.clone({
            setHeaders: {
              Authorization: `Bearer ${newAccessToken}`,
            },
            withCredentials: true,
          });

          return next.handle(clonedRequest);
        }),
        catchError((refreshError: HttpErrorResponse) => {
          console.log('refreshError ::', refreshError);
          let refreshErrorMessage = 'Session timeout. Please log in again.';

          localStorage.removeItem('authToken');
          localStorage.removeItem('refreshToken');

          this._store.dispatch(removeStudentProfile());

          this._router.navigate(['/']);

          return throwError(() => new Error(refreshErrorMessage));
        })
      );
  }
}
