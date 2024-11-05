import { Component } from '@angular/core';

@Component({
  selector: 'app-explore-courses',
  templateUrl: './explore-courses.component.html',
  styleUrls: ['./explore-courses.component.scss'],
})
export class ExploreCoursesComponent {
  private _courses: ExploreCoursesResponseDTO[];

  constructor(private _route: ActivatedRoute) {
    this._courses = this._route.snapshot.data[0];

    console.log('courses ::', this._courses);
  }
}
