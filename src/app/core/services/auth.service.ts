import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { HttpContext, HttpContextToken } from '@angular/common/http';
import {
  GetStudentProfileResponseDTO,
  SignupStudentRequestDTO,
  SignupStudentResponseDTO,
  SigninStudentRequestDTO,
  SigninStudentResponseDTO,
  ForgotPasswordRequestDTO,
  ResetPasswordRequestDTO,
  GoogleSignInRequestDTO,
  GoogleSignInResponseDTO,
} from '../dto';
import { EditStudentProfileRequestDTO } from '../dto/request/edit-student-profile.request.dto';
import { EditStudentProfileResponseDTO } from '../dto/response/edit-student-profile.response.dto';

// Define a custom context token
export const SKIP_LOADING = new HttpContextToken<boolean>(() => false);

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private _authApiUrl = `${environment.apiUrl}/auth`;

  constructor(private _httpClient: HttpClient) {}

  signupStudent(
    signupStudentRequestDTO: SignupStudentRequestDTO
  ): Observable<SignupStudentResponseDTO> {
    return this._httpClient.post<SignupStudentResponseDTO>(
      `${this._authApiUrl}/student/register`,
      signupStudentRequestDTO
    );
  }

  getStudentProfile(): Observable<GetStudentProfileResponseDTO> {
    return this._httpClient.get<GetStudentProfileResponseDTO>(
      `${this._authApiUrl}/student`,
      {
        context: new HttpContext().set(SKIP_LOADING, true), // Pass the context
      }
    );
  }

  editStudentProfile(
    editStudentRequestDTO: EditStudentProfileRequestDTO
  ): Observable<EditStudentProfileResponseDTO> {
    return this._httpClient.put<EditStudentProfileResponseDTO>(
      `${this._authApiUrl}/student`,
      editStudentRequestDTO
    );
  }

  signinStudent(
    signinStudentRequestDTO: SigninStudentRequestDTO
  ): Observable<SigninStudentResponseDTO> {
    return this._httpClient.post<SignupStudentResponseDTO>(
      `${this._authApiUrl}/student/sign-in`,
      signinStudentRequestDTO
    );
  }

  forgotPassword(
    forgotPasswordRequestDTO: ForgotPasswordRequestDTO
  ): Observable<null> {
    return this._httpClient.post<null>(
      `${this._authApiUrl}/student/forgot-password`,
      forgotPasswordRequestDTO
    );
  }

  resetPassword(
    resetPasswordRequestDTO: ResetPasswordRequestDTO
  ): Observable<null> {
    return this._httpClient.post<null>(
      `${this._authApiUrl}/student/reset-password`,
      resetPasswordRequestDTO
    );
  }

  googleSignin(
    googleSigninRequestDTO: GoogleSignInRequestDTO
  ): Observable<GoogleSignInResponseDTO> {
    return this._httpClient.post<GoogleSignInResponseDTO>(
      `${this._authApiUrl}/student/sign-in/gmail`,
      googleSigninRequestDTO
    );
  }

  getStudentProfilePictureLink(mimeType: string): Observable<string> {
    return this._httpClient.post<string>(
      `${this._authApiUrl}/student/upload-student-profile-picture`,
      {
        mimeType,
      }
    );
  }

  uploadStudentProfilePicture(url: string, data: FormData): Observable<void> {
    return this._httpClient.post<void>(url, data);
  }
}
