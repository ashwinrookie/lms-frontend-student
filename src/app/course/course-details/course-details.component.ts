import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ExploreCourseInDetailResponseDTO } from 'src/app/core';


@Component({
	selector: 'app-course-details',
	templateUrl: './course-details.component.html',
	styleUrls: ['./course-details.component.scss']
})
export class CourseDetailsComponent {
	private _course: ExploreCourseInDetailResponseDTO;

	constructor(private _route: ActivatedRoute) {
		this._course = this._route.snapshot.data[0];
		console.log("this._course ::", this._course);
	}

	get course() {
		return this._course;
	}
}
