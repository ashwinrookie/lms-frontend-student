import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from 'src/environments/environment';
import {
	GetStudentProfileResponseDTO,
	SignupStudentRequestDTO,
	SignupStudentResponseDTO
} from '../dto';

@Injectable({
	providedIn: 'root'
})
export class AuthService {
	private _authApiUrl = `${environment.apiUrl}/auth`;

	constructor(private _httpClient: HttpClient) { }

	signupStudent(
		signupStudentRequestDTO: SignupStudentRequestDTO
	): Observable<SignupStudentResponseDTO> {

		return this._httpClient
			.post<SignupStudentResponseDTO>(
				`${this._authApiUrl}/student/register`,
				signupStudentRequestDTO
			);
	}

	getStudentProfile(): Observable<GetStudentProfileResponseDTO> {
		return this._httpClient.get<GetStudentProfileResponseDTO>(`${this._authApiUrl}/student`);
	}
}
