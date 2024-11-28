import { createFeatureSelector, createSelector } from '@ngrx/store';
import { StudentState } from './student.state';



const selectStudentState = createFeatureSelector<StudentState>('student');

const selectStudentProfile = createSelector(
	selectStudentState,
	(state: StudentState) => state.student
);

const selectStudentProfileLoaded = createSelector(
	selectStudentState,
	(state: StudentState) => state.loaded
);

const selectStudentProfileError = createSelector(
	selectStudentState,
	(state: StudentState) => state.error
);

const selectUpdateError = createSelector(
	selectStudentState,
	(state: StudentState) => state.error
);


export {
	selectStudentState,
	selectStudentProfile,
	selectStudentProfileLoaded,
	selectStudentProfileError,
	selectUpdateError
};