import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { selectStudentProfile, Student } from 'src/app/states';
import { StudentProfileComponent } from '../modals/student-profile/student-profile.component';
import { EditStudentProfileComponent } from '../modals/edit-student-profile/edit-student-profile.component';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss'],
	standalone: true,
	imports: [RouterModule, CommonModule],
})
export class HeaderComponent implements OnInit {
	private _student: Student;

	constructor(
		private _modalService: NgbModal,
		private _route: ActivatedRoute,
		private _store: Store
	) {
		this._student = this._route.snapshot.data[0];
	}

	ngOnInit(): void {
		console.log('student ::', this.student);

		this._store.select(selectStudentProfile).subscribe((student) => {
			if (student) {
				this._student = student;
			}
		});
	}

	get student() {
		return this._student;
	}

	openModal() {
		const modalRef = this._modalService.open(StudentProfileComponent);
		modalRef.componentInstance.student = this._student;
	}

	openEditProfile() {
		const modalRef = this._modalService.open(EditStudentProfileComponent);
		modalRef.componentInstance.student = this._student;
	}
}
