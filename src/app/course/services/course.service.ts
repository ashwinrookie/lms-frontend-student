import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CartService } from 'src/app/cart/services/cart.service';
import {
	ExploreCourseInDetailResponseDTO,
	ExploreCoursesResponseDTO,
	GetMyLearningsResponseDTO,
	GetLastViewedCourseResponseDTO,
	ViewMyCourseResponseDTO,
} from 'src/app/core';
import { environment } from 'src/environments/environment';


@Injectable({
	providedIn: 'root',
})
export class CourseService {
	private _courseApiUrl = `${environment.apiUrl}/main/course`;

	constructor(
		private _httpClient: HttpClient,
		private _cartService: CartService
	) { }

	exploreCourses(
		searchString: string | null,
		categories: string[]
	): Observable<ExploreCoursesResponseDTO[]> {
		let params = new HttpParams();

		if (searchString) {
			params = params.set('searchString', searchString);
		}

		if (categories.length > 0) {
			categories.forEach((category) => {
				params = params.append('categories', category);
			});
		}

		return this._httpClient.get<ExploreCoursesResponseDTO[]>(
			`${this._courseApiUrl}/explore`,
			{ params }
		);
	}

	exploreCourseInDetail(
		courseId: string
	): Observable<ExploreCourseInDetailResponseDTO> {
		return this._httpClient.get<ExploreCoursesResponseDTO>(
			`${this._courseApiUrl}/explore/${courseId}`
		);
	}

	getCourseCategories(): Observable<string[]> {
		return this._httpClient.get<string[]>(`${this._courseApiUrl}/category`);
	}

	addCourseToCart(courseId: string) {
		return this._cartService.addCourseToCart(courseId);
	}

	getMyLearnings(): Observable<GetMyLearningsResponseDTO[]> {
		return this._httpClient.get<GetMyLearningsResponseDTO[]>(
			`${this._courseApiUrl}/my-learnings`
		);
	}

	getLastViewedCourse(): Observable<GetLastViewedCourseResponseDTO | null> {
		return this._httpClient.get<GetLastViewedCourseResponseDTO | null>(
			`${this._courseApiUrl}/last-viewed-course`
		);
	}

	viewMyCourse(courseId: string): Observable<ViewMyCourseResponseDTO> {
		let params = new HttpParams();
		params = params.set("courseId", courseId);

		return this._httpClient.get<ViewMyCourseResponseDTO>(
			`${this._courseApiUrl}/my-course`,
			{ params }
		);
	}
}
