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
);

const updateStudentProfile = createAction(
	'[Student] Update Profile',
	props<{ student: Student }>()
);

const updateStudentProfileSuccess = createAction(
	'[Student] Update Profile Success',
	props<{ student: Student }>()
);

const updateStudentProfileFailure = createAction(
	'[Student] Update Profile Failure',
	props<{ error: Error }>()
);

const removeStudentProfile = createAction('[Student] Remove Profile');

export {
	getStudentProfile,
	getStudentProfileSuccess,
	getStudentProfileFailure,
	removeStudentProfile,
	updateStudentProfile,
	updateStudentProfileSuccess,
	updateStudentProfileFailure
};