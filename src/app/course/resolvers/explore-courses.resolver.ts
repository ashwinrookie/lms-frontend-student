import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, ResolveFn, RouterStateSnapshot } from '@angular/router';
import { catchError } from 'rxjs/operators';
import { ExploreCoursesResponseDTO } from 'src/app/core';
import { CourseService } from '../services/course.service';

export function exploreCoursesResolver(): ResolveFn<ExploreCoursesResponseDTO> {
	return (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
		const courseService = inject(CourseService);

		return courseService.exploreCourses(null, []).pipe(
			catchError((error) => {
				throw error;
			})
		);
	};
}