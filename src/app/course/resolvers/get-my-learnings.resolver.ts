import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, ResolveFn, RouterStateSnapshot } from '@angular/router';
import { CourseService } from '../services/course.service';
import { catchError } from 'rxjs';
import { GetMyLearningsResponseDTO } from 'src/app/core';


export function getMyLearningsResolver(): ResolveFn<GetMyLearningsResponseDTO[]> {
	return (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
		const courseService = inject(CourseService);

		return courseService.getMyLearnings().pipe(
			catchError((error) => {
				throw error;
			})
		);
	};
}