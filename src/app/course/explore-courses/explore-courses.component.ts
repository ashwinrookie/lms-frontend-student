import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ExploreCoursesResponseDTO } from 'src/app/core';

@Component({
  selector: 'app-explore-courses',
  templateUrl: './explore-courses.component.html',
  styleUrls: ['./explore-courses.component.scss'],
})
export class ExploreCoursesComponent {
  private _courses: ExploreCoursesResponseDTO[];
  private _categories: string[];

  constructor(private _route: ActivatedRoute) {
    this._courses = this._route.snapshot.data[0];
    this._categories = this._route.snapshot.data[1];

    console.log('courses ::', this._courses, this._categories);
  }

  get categories() {
    return this._categories;
  }

  get courses() {
    return this._courses;
  }

  formatCourseDuration(seconds: number): string {
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;

    if (hrs > 0) {
      return `${hrs} hrs ${mins} mins`;
    } else if (mins > 0) {
      return `${mins} mins ${secs} secs`;
    } else {
      return `${secs} secs`;
    }
  }
}
