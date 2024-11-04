import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { take } from 'rxjs';
import {
	AppState,
	getStudentProfile,
	selectStudentProfileLoaded,
} from 'src/app/states';

@Injectable({
	providedIn: 'root'
})
export class AppInitializerService {

	constructor(private _store: Store<AppState>) { }

	initializeApp(): Promise<any> {
		if (localStorage.getItem("authToken")) {
			return new Promise((resolve, reject) => {
				this._store.pipe(
					select(selectStudentProfileLoaded),
					take(1)
				).subscribe(loaded => {
					if (!loaded)
						this._store.dispatch(getStudentProfile());

					this._store.pipe(
						select(selectStudentProfileLoaded),
						take(1)
					).subscribe(loaded => {
						if (loaded) {
							resolve(true);
						} else {
							reject('Student profile not loaded');
						}
					});
				});
			});
		} else {
			return Promise.resolve();
		}
	}
}