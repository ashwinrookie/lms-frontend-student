import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExploreCoursesComponent } from './explore-courses.component';

describe('ExploreCoursesComponent', () => {
  let component: ExploreCoursesComponent;
  let fixture: ComponentFixture<ExploreCoursesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExploreCoursesComponent]
    });
    fixture = TestBed.createComponent(ExploreCoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
