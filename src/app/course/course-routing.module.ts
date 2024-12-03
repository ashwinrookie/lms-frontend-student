import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { getStudentProfileResolver } from '../core';
import { ExploreCoursesComponent } from './explore-courses/explore-courses.component';
import { CourseDetailsComponent } from './course-details/course-details.component';
import { CourseVideoPlayerComponent } from './course-video-player/course-video-player.component';
import { MyLearningComponent } from './my-learning/my-learning.component';
import { CourseComponent } from './course.component';
import { exploreCoursesResolver } from './resolvers/explore-courses.resolver';
import { exploreCourseInDetailResolver } from './resolvers/explore-course-in-detail.resolver';
import { getCourseCategoriesResolver } from './resolvers/get-course-categories.resolver';
import { getMyLearningsResolver } from './resolvers/get-my-learnings.resolver';
import { getLastViewedCourseResolver } from './resolvers/get-last-viewed-course.resolver';
import { viewMyCourseResolver } from './resolvers/view-my-course.resolver';

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
          getLastViewedCourseResolver(),
        ],
      },
      {
        path: 'course-details/:id',
        component: CourseDetailsComponent,
        resolve: [exploreCourseInDetailResolver(), getStudentProfileResolver()],
      },
      {
        path: 'course-video-player/:id',
        component: CourseVideoPlayerComponent,
		resolve: [viewMyCourseResolver()]
      },
      {
        path: 'my-learnings',
        component: MyLearningComponent,
        resolve: [getMyLearningsResolver()],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CourseRoutingModule {}
