import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ExploreCourseInDetailResponseDTO } from 'src/app/core';
import { CourseService } from '../services/course.service';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.scss'],
})
export class CourseDetailsComponent {
  private _course: ExploreCourseInDetailResponseDTO;

  constructor(
    private _route: ActivatedRoute,
    private _courseService: CourseService,
    private _router: Router
  ) {
    this._course = this._route.snapshot.data[0];
    console.log('this._course ::', this._course);
  }

  get course() {
    return this._course;
  }
  addCourseToCart(courseId: string) {
    console.log('clicker');

    this._courseService.addCourseToCart(courseId).subscribe({
      next: (res) => {
        console.log('RES', res);
        this._router.navigate(['../../cart/shopping-cart'], {
          relativeTo: this._route,
        });
      },
      error: (error: Error) => {
        console.log(error);
      },
    });
  }
}
