import { createReducer, on } from '@ngrx/store';
import {
	getStudentProfile,
	getStudentProfileFailure,
	getStudentProfileSuccess,
	removeStudentProfile,
	updateStudentProfile,
	updateStudentProfileFailure,
	updateStudentProfileSuccess
} from './student.actions';
import { initialStudentState } from './student.state';



const studentReducer = createReducer(
	initialStudentState,
	on(getStudentProfile, (state) => ({ ...state, loaded: false })),
	on(getStudentProfileSuccess, (state, { student }) => ({
		...state,
		student,
		loaded: true
	})),
	on(getStudentProfileFailure, (state, { error }) => ({
		...state,
		error,
		loaded: false
	})),
	on(updateStudentProfile, (state) => ({ ...state, loaded: false })),
	on(updateStudentProfileSuccess, (state, { student }) => ({
		...state,
		student,
		loaded: true,
		error: null
	})),
	on(updateStudentProfileFailure, (state, { error }) => ({
		...state,
		error,
		loaded: false
	})),
	on(removeStudentProfile, () => initialStudentState)
);

export {
	studentReducer
};