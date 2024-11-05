import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { AuthService } from 'src/app/core';
import {
  getStudentProfile,
  getStudentProfileSuccess,
  getStudentProfileFailure,
  removeStudentProfile,
} from './student.actions';

@Injectable()
export class StudentEffects {
  constructor(private _actions$: Actions, private _authService: AuthService) {}

  loadStudentProfile$ = createEffect(() =>
    this._actions$.pipe(
      ofType(getStudentProfile),
      mergeMap(() =>
        this._authService.getStudentProfile().pipe(
          map((student) => {
            return getStudentProfileSuccess({
              student: {
                email: student.email,
                firstName: student.firstName,
                id: student.id,
                lastName: student.lastName,
                profilePicture: student.profilePicture,
              },
            });
          }),
          catchError((error: Error) => {
            return of(getStudentProfileFailure({ error }));
          })
        )
      )
    )
  );

  removeStudentProfile$ = createEffect(
    () =>
      this._actions$.pipe(
        ofType(removeStudentProfile),
        map(() => {
          // Add any side effects or API calls here, if needed
          console.log('Student profile removed');
        })
      ),
    { dispatch: false } // No further action dispatched
  );
}
