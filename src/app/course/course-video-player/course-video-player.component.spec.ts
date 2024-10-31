import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseVideoPlayerComponent } from './course-video-player.component';

describe('CourseVideoPlayerComponent', () => {
  let component: CourseVideoPlayerComponent;
  let fixture: ComponentFixture<CourseVideoPlayerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CourseVideoPlayerComponent]
    });
    fixture = TestBed.createComponent(CourseVideoPlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
