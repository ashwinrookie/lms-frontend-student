import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ExploreCoursesResponseDTO } from 'src/app/core/dto/response/explore-courses.response.dto';
import { CourseService } from '../services/course.service';

@Component({
  selector: 'app-my-learning',
  templateUrl: './my-learning.component.html',
  styleUrls: ['./my-learning.component.scss'],
})
export class MyLearningComponent implements OnInit {
  private _courses: ExploreCoursesResponseDTO[];
  constructor(
    private _route: ActivatedRoute,
    private _courseService: CourseService,
    private _router: Router
  ) {
    this._courses = this._route.snapshot.data[0];
  }
  get courses() {
    return this._courses;
  }
  ngOnInit(): void {}
}
