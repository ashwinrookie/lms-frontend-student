import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ExploreCoursesResponseDTO } from 'src/app/core';
import { CourseService } from '../services/course.service';
import { FormControl, FormGroup } from '@angular/forms';
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

  constructor(
    private _route: ActivatedRoute,
    private _courseService: CourseService
  ) {
    this._courses = this._route.snapshot.data[0];
    this._categories = this._route.snapshot.data[1];

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

    console.log('courses ::', this._courses, this._categories);
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
}
