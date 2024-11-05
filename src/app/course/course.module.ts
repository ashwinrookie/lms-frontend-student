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

@NgModule({
  declarations: [
    CourseComponent,
    ExploreCoursesComponent,
    CourseDetailsComponent,
    CourseVideoPlayerComponent,
  ],
  imports: [
    CommonModule,
    CourseRoutingModule,
    NgbProgressbarModule,
    HeaderComponent,
    NgbDropdownModule,
    PipeModule,
  ],
})
export class CourseModule {}
