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
	updateStudentProfile,
	updateStudentProfileSuccess,
	updateStudentProfileFailure,
} from './student.actions';
import { EditStudentProfileRequestDTO } from 'src/app/core/dto/request/edit-student-profile.request.dto';
import { Student } from './student.state';

@Injectable()
export class StudentEffects {
	constructor(private _actions$: Actions, private _authService: AuthService) { }

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

	updateStudentProfile$ = createEffect(() =>
		this._actions$.pipe(
			ofType(updateStudentProfile),
			mergeMap(({ student }) => {
				const editStudentRequestDTO: EditStudentProfileRequestDTO = {
					firstName: student.firstName,
					lastName: student.lastName,
					email: student.email,
					profilePicture: student.profilePicture
				};

				return this._authService.editStudentProfile(editStudentRequestDTO).pipe(
					map((updatedStudent) => {
						const student: Student = {
							email: updatedStudent.email,
							firstName: updatedStudent.firstName,
							lastName: updatedStudent.lastName,
							id: updatedStudent.id,
							profilePicture: updatedStudent.profilePicture
						};

						return updateStudentProfileSuccess({ student })
					}
					),
					catchError((error: Error) =>
						of(updateStudentProfileFailure({ error }))
					)
				)
			}
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
