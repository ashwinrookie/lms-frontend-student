import { AfterViewInit, Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/core';
@Component({
  selector: 'app-google-signin',
  templateUrl: './google-signin.component.html',
  styleUrls: ['./google-signin.component.scss'],
})
export class GoogleSigninComponent implements AfterViewInit {
  googleClientId: string =
    '64064225630-87jioglg0r5mievqsoppf6m2qa1lnatc.apps.googleusercontent.com';
  redirectUri: string = 'http://localhost:4200/auth/login'; // Your redirect URI

  constructor(
    private route: ActivatedRoute,
    private _router: Router,
    private _authService: AuthService
  ) {}

  ngAfterViewInit(): void {
    this.route.queryParams.subscribe((params) => {
      const authorizationCode = params['code'];
      if (authorizationCode) {
        console.log('Authorization Code:', authorizationCode);
        this.sendAuthCode(authorizationCode, this.redirectUri);
      }
    });
  }

  signInWithGoogle(): void {
    const oauthUrl =
      `https://accounts.google.com/o/oauth2/v2/auth?` +
      `client_id=${this.googleClientId}` +
      `&redirect_uri=${this.redirectUri}` +
      `&response_type=code` +
      `&scope=openid%20profile%20email` +
      `&access_type=offline`;

    // Redirect to Google OAuth 2.0 endpoint
    window.location.href = oauthUrl;
  }

  sendAuthCode(authCode: String, redirect_uri: String) {
    const formData = {
      authCode: authCode,
      redirectUri: redirect_uri,
    };
    this._authService.googleSignin(formData).subscribe({
      next: (googleSigninResponse) => {
        console.log(googleSigninResponse);

        localStorage.setItem('authToken', googleSigninResponse.accessToken);
        localStorage.setItem('refreshToken', googleSigninResponse.refreshToken);

        this._router.navigate(['/']);
      },
      error: (error: Error) => {
        console.log(error);
      },
    });
  }
}
