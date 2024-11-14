import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, ResolveFn, RouterStateSnapshot } from '@angular/router';
import { GetLastViewedCourseResponseDTO } from 'src/app/core';
import { catchError, of } from 'rxjs';
import { CourseService } from '../services/course.service';


export function getLastViewedCourseResolver(): ResolveFn<GetLastViewedCourseResponseDTO | null> {
	return (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
		if (!localStorage.getItem("authToken")) return of(null);

		const courseService = inject(CourseService);

		return courseService.getLastViewedCourse().pipe(
			catchError((error) => {
				throw error;
			})
		);
	};
}