import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CourseRoutingModule } from './course-routing.module';
import { CourseComponent } from './course.component';
import { ExploreCoursesComponent } from './explore-courses/explore-courses.component';
import { CourseDetailsComponent } from './course-details/course-details.component';
import { CourseVideoPlayerComponent } from './course-video-player/course-video-player.component';
import { NgbProgressbarModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from '../shared/components/header/header.component';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { PipeModule } from '../core/pipes/pipe.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { MyLearningComponent } from './my-learning/my-learning.component';
import { VideoPlayerComponent } from '../shared/components/video-player/video-player.component';
import { FooterComponent } from '../shared/components/footer/footer.component';
@NgModule({
  declarations: [
    CourseComponent,
    ExploreCoursesComponent,
    CourseDetailsComponent,
    CourseVideoPlayerComponent,
    MyLearningComponent,
    VideoPlayerComponent,
  ],
  imports: [
    CommonModule,
    CourseRoutingModule,
    NgbProgressbarModule,
    HeaderComponent,
    NgbDropdownModule,
    PipeModule,
    ReactiveFormsModule,
    FormsModule,
    NgMultiSelectDropDownModule.forRoot(),
    FooterComponent,
  ],
})
export class CourseModule {}
