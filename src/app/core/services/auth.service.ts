import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import {
  SignupStudentRequestDTO,
  SignupStudentResponseDTO,
  SigninStudentRequestDTO,
  SigninStudentResponseDTO,
  ForgotPasswordRequestDTO,
  ResetPasswordRequestDTO,
  GoogleSignInRequestDTO,
  GoogleSignInResponseDTO,
} from '../dto';

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
}
