import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ExploreCoursesResponseDTO } from 'src/app/core';
import { environment } from 'src/environments/environment';


@Injectable({
	providedIn: 'root'
})
export class CourseService {
	private _courseApiUrl = `${environment.apiUrl}/main/course`;

	constructor(private _httpClient: HttpClient) { }

	exploreCourses(): Observable<ExploreCoursesResponseDTO> {
		return this._httpClient.get<ExploreCoursesResponseDTO>(
			`${this._courseApiUrl}/explore`
		);
	}
}
