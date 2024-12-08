import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {
  ExploreCoursesResponseDTO,
  GetLastViewedCourseResponseDTO,
} from 'src/app/core';
import { CourseService } from '../services/course.service';
import { IDropdownSettings } from 'ng-multiselect-dropdown';

@Component({
  selector: 'app-explore-courses',
  templateUrl: './explore-courses.component.html',
  styleUrls: ['./explore-courses.component.scss'],
})
export class ExploreCoursesComponent {
  searchString = '';
  dropdownList = [];
  selectedItems: string[] = [];
  dropdownSettings: IDropdownSettings = {};
  private _courses: ExploreCoursesResponseDTO[];
  private _categories: string[];
  private _lastViewedCourse: GetLastViewedCourseResponseDTO | null;

  constructor(
    private _route: ActivatedRoute,
    private _courseService: CourseService,
    private _router: Router
  ) {
    this._courses = this._route.snapshot.data[0];
    this._categories = this._route.snapshot.data[1];
    this._lastViewedCourse = this._route.snapshot.data[2];

    this.selectedItems = [];

    this.dropdownSettings = {
      singleSelection: false,
      idField: 'item_id',
      textField: 'item_text',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: false,
      enableCheckAll: false,
    };

    console.log(
      'courses :: categories :: lastViewedCourse ::',
      this._lastViewedCourse
    );
  }

  onItemSelect(item: any) {
    console.log(item);
  }
  onSelectAll(items: any) {
    console.log(items);
  }

  get categories() {
    return this._categories;
  }

  get courses() {
    return this._courses;
  }

  get selectedCategories() {
    return this.selectedItems;
  }
  get lastViewedCourse() {
    return this._lastViewedCourse;
  }

  exploreCourses(searchString: string, categories: string[]) {
    console.log('searchString ::', searchString, 'categories ::', categories);

    this._courseService.exploreCourses(searchString, categories).subscribe({
      next: (updatedCourses) => {
        console.log('courses ::', updatedCourses);
        this._courses = updatedCourses;
      },
      error: (error) => {
        console.log('Error in exploring courses ::', error);
      },
    });
  }

  addCourseToCart(event: Event, courseId: string) {
    event.stopPropagation();
    console.log('clicker');

    this._courseService.addCourseToCart(courseId).subscribe({
      next: (res) => {
        console.log('RES', res);
        this._router.navigate(['./cart/shopping-cart'], {
          relativeTo: this._route,
        });
      },
      error: (error: Error) => {
        console.log(error);
      },
    });
  }
}
