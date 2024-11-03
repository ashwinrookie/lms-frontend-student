import { createAction, props } from '@ngrx/store';
import { Student } from './student.state';

const getStudentProfile = createAction('[Student] Get Profile');
const getStudentProfileSuccess = createAction(
	'[Student] Get Profile Success',
	props<{ student: Student }>()
);
const getStudentProfileFailure = createAction(
	'[Student] Get Profile Failure',
	props<{ error: Error }>()
)

export {
	getStudentProfile,
	getStudentProfileSuccess,
	getStudentProfileFailure
};