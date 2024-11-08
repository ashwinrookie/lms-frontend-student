import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExploreCoursesComponent } from './explore-courses/explore-courses.component';
import { CourseDetailsComponent } from './course-details/course-details.component';
import { CourseVideoPlayerComponent } from './course-video-player/course-video-player.component';
import { CourseComponent } from './course.component';
import { exploreCoursesResolver } from './resolvers/explore-courses.resolver';
import { exploreCourseInDetailResolver } from './resolvers/explore-course-in-detail.resolver';
import { getCourseCategoriesResolver } from './resolvers/get-course-categories.resolver';
import { getStudentProfileResolver } from '../core';

const routes: Routes = [
  {
    path: '',
    component: CourseComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        component: ExploreCoursesComponent,
        resolve: [
          exploreCoursesResolver(),
          getCourseCategoriesResolver(),
          getStudentProfileResolver(),
        ],
      },
      {
        path: 'course-details/:id',
        component: CourseDetailsComponent,
        resolve: [exploreCourseInDetailResolver(), getStudentProfileResolver()],
      },
      { path: 'course-video-player', component: CourseVideoPlayerComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CourseRoutingModule {}
