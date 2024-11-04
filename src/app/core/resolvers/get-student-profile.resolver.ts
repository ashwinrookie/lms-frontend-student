import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, ResolveFn, RouterStateSnapshot } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { catchError, filter, first, of, switchMap, map } from 'rxjs';
import { getStudentProfile, removeStudentProfile, selectStudentProfile, selectStudentProfileLoaded, Student } from 'src/app/states';


export function getStudentProfileResolver(): ResolveFn<Student | null> {
	return (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
		const store = inject(Store);

		store.dispatch(removeStudentProfile());

		store.dispatch(getStudentProfile());

		return store.pipe(
			select(selectStudentProfileLoaded),
			filter(loaded => loaded),
			first(),
			switchMap(() =>
				store.pipe(
					select(selectStudentProfile),
					map(profile => {
						return profile;
					}),
					catchError(() => of(null))
				)
			)
		);
	};
}