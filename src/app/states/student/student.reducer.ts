import { createReducer, on } from '@ngrx/store';
import {
	getStudentProfile,
	getStudentProfileFailure,
	getStudentProfileSuccess
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
	}))
);

export {
	studentReducer
};