import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { getStudentProfileResolver } from '../core';
import { ExploreCoursesComponent } from './explore-courses/explore-courses.component';
import { CourseDetailsComponent } from './course-details/course-details.component';
import { CourseVideoPlayerComponent } from './course-video-player/course-video-player.component';
import { CourseComponent } from './course.component';
import { exploreCoursesResolver } from './resolvers/explore-courses.resolver';

const routes: Routes = [
  {
    path: '',
    component: CourseComponent,
    children: [
      {
        path: 'explore-courses',
        component: ExploreCoursesComponent,
        resolve: [exploreCoursesResolver()],
      },
      { path: 'course-details', component: CourseDetailsComponent },
      { path: 'course-video-player', component: CourseVideoPlayerComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CourseRoutingModule {}
