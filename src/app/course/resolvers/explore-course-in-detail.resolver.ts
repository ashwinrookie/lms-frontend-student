import { inject } from '@angular/core';
import { catchError } from 'rxjs';
import { ActivatedRouteSnapshot, ResolveFn, RouterStateSnapshot } from '@angular/router';
import { ExploreCourseInDetailResponseDTO } from 'src/app/core';
import { CourseService } from '../services/course.service';


export function exploreCourseInDetailResolver(): ResolveFn<ExploreCourseInDetailResponseDTO> {
	return (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
		const courseService = inject(CourseService);

		return courseService.exploreCourseInDetail(route.params["id"]).pipe(
			catchError((error) => {
				throw error;
			})
		);
	};
}