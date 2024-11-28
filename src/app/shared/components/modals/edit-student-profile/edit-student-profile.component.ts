import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Store } from '@ngrx/store';
import { selectStudentProfileError, Student, updateStudentProfile } from 'src/app/states';


@Component({
	selector: 'app-edit-student-profile',
	templateUrl: './edit-student-profile.component.html',
	styleUrls: ['./edit-student-profile.component.scss'],
})
export class EditStudentProfileComponent implements AfterViewInit, OnInit {
	@Input() student: Student | null = null;
	errorMessage: string | null = null;
	editStudentForm: FormGroup;

	constructor(
		private _activeModal: NgbActiveModal,
		private _store: Store
	) {
		this.editStudentForm = new FormGroup({
			firstName: new FormControl(null),
			lastName: new FormControl(null),
			email: new FormControl(null),
			profilePicture: new FormControl(null)
		});
	}

	ngOnInit(): void {
		this._store.select(selectStudentProfileError).subscribe((error) => {
			if(!error) this.errorMessage = null;
			else this.errorMessage = error.message;
		});
	}

	ngAfterViewInit(): void {
		if (this.student) {
			this.editStudentForm = new FormGroup({
				firstName: new FormControl(this.student.firstName, [
					Validators.required,
				]),
				lastName: new FormControl(this.student.lastName, [Validators.required]),
				email: new FormControl(this.student.email, [Validators.required]),
				profilePicture: new FormControl(this.student.profilePicture)
			});
		}
	}

	onSubmit() {
		if (this.editStudentForm.invalid) return;

		const formData = this.editStudentForm.value;
		console.log('formdata', formData);

		this._store.dispatch(updateStudentProfile({ student: formData }));
	}

	closeModal() {
		this._activeModal.close();
	}

	get profilePicture() {
		return this.editStudentForm.get("profilePicture");
	}
}
