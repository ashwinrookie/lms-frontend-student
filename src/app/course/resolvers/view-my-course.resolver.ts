import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, ResolveFn, RouterStateSnapshot } from '@angular/router';
import { catchError } from 'rxjs';
import { ViewMyCourseResponseDTO } from 'src/app/core';
import { CourseService } from '../services/course.service';


export function viewMyCourseResolver(): ResolveFn<ViewMyCourseResponseDTO> {
	return (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
		const courseService = inject(CourseService);

		return courseService.viewMyCourse(route.params["id"]).pipe(
			catchError((error) => {
				throw error;
			})
		);
	};
}