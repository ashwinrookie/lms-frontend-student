import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { filter, take } from 'rxjs/operators';
import {
  AppState,
  getStudentProfile,
  removeStudentProfile,
  selectStudentProfileLoaded,
} from 'src/app/states';

@Injectable({
  providedIn: 'root',
})
export class AppInitializerService {
  constructor(private _store: Store<AppState>) {}

  initializeApp(): Promise<any> {
    if (localStorage.getItem('authToken')) {
      return new Promise((resolve, reject) => {
        this._store.dispatch(removeStudentProfile());

        this._store.dispatch(getStudentProfile());

        this._store
          .pipe(
            select(selectStudentProfileLoaded),
            filter((loaded) => loaded),
            take(1)
          )
          .subscribe({
            next: () => resolve(true),
            error: (err) => reject(err),
          });
      });
    } else {
      return Promise.resolve(true);
    }
  }
}
