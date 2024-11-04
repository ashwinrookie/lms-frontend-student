import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, ResolveFn, RouterStateSnapshot } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { catchError, filter, first, of, switchMap, tap, map } from 'rxjs';
import { getStudentProfile, selectStudentProfile, selectStudentProfileLoaded, Student } from 'src/app/states';


export function getStudentProfileResolver(): ResolveFn<Student | null> {
	return (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
		const store = inject(Store);

		return store.pipe(
			select(selectStudentProfileLoaded),
			tap(loaded => {
				if (!loaded) {
					store.dispatch(getStudentProfile());
				}
			}),
			filter(loaded => loaded),
			first(),
			switchMap(() => {
				return store.pipe(
					select(selectStudentProfile),
					map(profile => {
						return profile;
					}),
					first(),
					catchError(() => of(null))
				);
			})
		);
	};
}