import { inject } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  ResolveFn,
  RouterStateSnapshot,
} from '@angular/router';
import { Store, select } from '@ngrx/store';
import {
  catchError,
  filter,
  first,
  switchMap,
  throwError,
  map,
  of,
} from 'rxjs';
import {
  getStudentProfile,
  removeStudentProfile,
  selectStudentProfile,
  selectStudentProfileLoaded,
  Student,
} from 'src/app/states';
import { LoadingService } from '../services/loading.service';

export function getStudentProfileResolver(): ResolveFn<Student | null> {
  return (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
    if (!localStorage.getItem('authToken')) return of(null);

    const store = inject(Store);
    const loadingService = inject(LoadingService);
    loadingService.show();
    store.dispatch(removeStudentProfile());
    store.dispatch(getStudentProfile());

    return store.pipe(
      select(selectStudentProfileLoaded),
      filter((loaded) => loaded),
      first(),
      switchMap(() =>
        store.pipe(
          select(selectStudentProfile),
          map((profile) => {
            if (!profile) {
              throw new Error('Student profile not found');
            }
            return profile;
          }),
          catchError((error) => throwError(() => error))
        )
      ),
      // Stop the loading indicator whether successful or error
      catchError((error) => {
        loadingService.hide();
        return throwError(() => error);
      }),
      map((result) => {
        loadingService.hide();
        return result;
      })
    );
  };
}
