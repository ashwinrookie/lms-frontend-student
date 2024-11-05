import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, ResolveFn, RouterStateSnapshot } from '@angular/router';
import { CourseService } from '../services/course.service';
import { catchError } from 'rxjs';


export function getCourseCategoriesResolver(): ResolveFn<string[]> {
	return (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
		const courseService = inject(CourseService);

		return courseService.getCourseCategories().pipe(
			catchError((error) => {
				throw error;
			})
		);
	};
}